/**
 * Main Application Coordinator (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.2)
 * - ગુજરાતી UI લેબલ્સ, ડ્રોપડાઉન, અને નોટિફિકેશન્સ
 * - સંપૂર્ણ સ્વતંત્ર અને યુનિવર્સલ બૂટલોડર (Rock-solid bootloader)
 */

function initApp() {
  try {
    const converter = new UnitConverterEngine(PHYSICS_DATA);
    const visualizer = new PhysicsVisualizer('physicsCanvas');
    const quiz = new QuizEngine(PHYSICS_DATA, converter);
    const proximityMatcher = new ProximityMatcherEngine(PHYSICS_DATA);
    const prefixEngine = new PrefixChangerEngine(PHYSICS_DATA);
    const magicTriangles = new MagicTrianglesEngine(PHYSICS_DATA);
    const tempEngine = new TemperatureMatrixEngine(PHYSICS_DATA);
    const fluidSims = new FluidMechanicsSimulators(PHYSICS_DATA);

    const state = {
      activeTab: 'converter',
      activeSimTab: 'reynolds',
      selectedSubjectId: 'applied_physics',
      selectedChapterId: 'ap_unit1',
      selectedQuantityId: 'force',
      conversionDirection: 'mks',
      inputValue: 1,
      soundEnabled: true,
      hapticsEnabled: true,
      theme: 'dark'
    };

    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
      return audioCtx;
    }

    function playSound(type) {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;

        if (type === 'click') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(850, now + 0.05);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'swap') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
        } else if (type === 'correct' || type === 'fanfare') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          osc.frequency.setValueAtTime(783.99, now + 0.16);
          osc.frequency.setValueAtTime(1046.50, now + 0.24);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
          osc.start(now);
          osc.stop(now + 0.45);
        } else if (type === 'wrong') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.linearRampToValueAtTime(140, now + 0.2);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        }
      } catch (e) {
        console.warn('Audio error', e);
      }
    }

    function triggerHaptic(duration = 20) {
      if (state.hapticsEnabled && navigator.vibrate) {
        try {
          navigator.vibrate(duration);
        } catch (e) {}
      }
    }

    function renderMathString(latex) {
      if (!latex) return '';
      if (window.katex) {
        try {
          return window.katex.renderToString(latex, { displayMode: true, throwOnError: false });
        } catch (e) {}
      }
      return `<div class="math-fallback">${latex
        .replace(/\\mathbf\{([^}]+)\}/g, '<strong>$1</strong>')
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\left\[/g, '[')
        .replace(/\\right\]/g, ']')
        .replace(/\\left\(/g, '(')
        .replace(/\\right\)/g, ')')
        .replace(/\\times/g, '×')
        .replace(/\\approx/g, '≈')
        .replace(/\\cdot/g, '·')
        .replace(/\\rho/g, 'ρ')
        .replace(/\\omega/g, 'ω')
        .replace(/\\theta/g, 'θ')
        .replace(/\\sigma/g, 'σ')
        .replace(/\\epsilon/g, 'ϵ')
        .replace(/\\lambda/g, 'λ')
        .replace(/\\eta/g, 'η')
        .replace(/\\alpha/g, 'α')
        .replace(/\\kappa/g, 'κ')
        .replace(/\\phi/g, 'ϕ')
        .replace(/\\mu/g, 'μ')
        .replace(/\\Delta/g, 'Δ')
        .replace(/\\pi/g, 'π')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
        .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
        .replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>')
        .replace(/\\\\/g, '<br>')
        .replace(/\\begin\{aligned\}/g, '')
        .replace(/\\end\{aligned\}/g, '')
        .replace(/&/g, ' ')}</div>`;
    }

    function renderInlineMathOrText(str) {
      if (!str) return '';
      if (str.startsWith('\\') || (str.includes('=') && str.includes('\\'))) {
        if (window.katex) {
          try {
            return window.katex.renderToString(str, { displayMode: false, throwOnError: false });
          } catch (e) {}
        }
      }
      return str;
    }

    // 1) SUBJECT & CHAPTER SELECTION
    const subjectBtnApplied = document.getElementById('subjectBtnApplied');
    const subjectBtnModern = document.getElementById('subjectBtnModern');
    const chaptersContainer = document.getElementById('chaptersContainer');
    const quantitySelect = document.getElementById('quantitySelect');
    const inputValEl = document.getElementById('inputValue');
    const resultValEl = document.getElementById('resultValue');
    const swapBtn = document.getElementById('swapUnitsBtn');
    const fromUnitLabel = document.getElementById('fromUnitLabel');
    const toUnitLabel = document.getElementById('toUnitLabel');
    const fromSysBadge = document.getElementById('fromSysBadge');
    const toSysBadge = document.getElementById('toSysBadge');
    const standardDefCard = document.getElementById('standardDefCard');
    const benchmarkCardContainer = document.getElementById('benchmarkCardContainer');
    const stepsContainer = document.getElementById('stepsContainer');
    const copyResultBtn = document.getElementById('copyResultBtn');
    const shareBtn = document.getElementById('shareBtn');
    const copyToast = document.getElementById('copyToast');

    function selectSubject(subjectId) {
      try {
        state.selectedSubjectId = subjectId;
        const currentSubj = PHYSICS_DATA.subjects.find(s => s.id === subjectId);
        state.selectedChapterId = currentSubj?.chapters[0]?.id || 'ap_unit1';

        if (subjectId === 'applied_physics') {
          subjectBtnApplied?.classList.add('active');
          subjectBtnModern?.classList.remove('active');
        } else {
          subjectBtnModern?.classList.add('active');
          subjectBtnApplied?.classList.remove('active');
        }

        renderChapterList();
        populateQuantities();
        updateConversion();
        quiz.setSubject(subjectId);
        renderCheatSheetMatrix();
      } catch (e) {
        console.warn('selectSubject error', e);
      }
    }

    subjectBtnApplied?.addEventListener('click', () => {
      selectSubject('applied_physics');
      playSound('click');
      triggerHaptic(20);
    });

    subjectBtnModern?.addEventListener('click', () => {
      selectSubject('modern_physics');
      playSound('click');
      triggerHaptic(20);
    });

    function renderChapterList() {
      if (!chaptersContainer) return;
      chaptersContainer.innerHTML = '';

      const currentSubj = PHYSICS_DATA.subjects.find(s => s.id === state.selectedSubjectId);
      if (!currentSubj) return;

      currentSubj.chapters.forEach(ch => {
        const box = document.createElement('button');
        box.className = `chapter-box-card ${state.selectedChapterId === ch.id ? 'active' : ''}`;
        box.style.setProperty('--card-color', ch.color);
        box.style.setProperty('--card-bg-light', ch.bgLight || 'rgba(2, 132, 199, 0.15)');

        box.innerHTML = `
          <div class="chapter-box-icon" style="color: ${ch.color};">
            ${ch.svgIcon || '<i class="fa fa-atom"></i>'}
          </div>
          <div class="chapter-box-info">
            <span class="chapter-box-unit" style="background: ${ch.color};">${ch.unitNo}</span>
            <h4 class="chapter-box-name">${ch.name}</h4>
          </div>
        `;

        box.addEventListener('click', () => {
          state.selectedChapterId = ch.id;
          renderChapterList();
          populateQuantities();
          updateConversion();
          playSound('click');
          triggerHaptic(15);
        });

        chaptersContainer.appendChild(box);
      });
    }

    function populateQuantities() {
      if (!quantitySelect) return;
      quantitySelect.innerHTML = '';

      let list = PHYSICS_DATA.quantities.filter(q =>
        q.subjectIds.includes(state.selectedSubjectId) &&
        q.chapterIds.includes(state.selectedChapterId)
      );

      if (list.length === 0) {
        list = PHYSICS_DATA.quantities.filter(q => q.subjectIds.includes(state.selectedSubjectId));
      }

      list.forEach(q => {
        const opt = document.createElement('option');
        opt.value = q.id;
        opt.textContent = `${q.name} (${q.symbol})`;
        if (q.id === state.selectedQuantityId) opt.selected = true;
        quantitySelect.appendChild(opt);
      });

      if (!list.some(q => q.id === state.selectedQuantityId)) {
        state.selectedQuantityId = list[0]?.id || 'force';
        quantitySelect.value = state.selectedQuantityId;
      }
    }

    function renderStandardDefinitionCard(quantity) {
      if (!standardDefCard || !quantity) return;

      const exponentEquiv = converter.getExponentEquivalence(quantity);

      let unitsRowHtml = '';
      if (quantity.isUnitless) {
        unitsRowHtml = `
          <span class="unit-pill factor-pill" style="background:rgba(245,158,11,0.15); color:#fbbf24; border:1px solid rgba(245,158,11,0.4);">
            <i class="fa fa-circle-info"></i> <strong>પરિમાણ રહિત ભૌતિક રાશિ (Dimensionless)</strong> [M⁰ L⁰ T⁰]
          </span>
          <span class="unit-pill mks-pill"><i class="fa fa-scale-balanced"></i> શુદ્ધ ગુણોત્તર (૧ : ૧)</span>
        `;
      } else if (quantity.isSpecialUnit) {
        unitsRowHtml = `
          <span class="unit-pill mks-pill"><i class="fa fa-cube"></i> SI એકમ: <strong>1 ${quantity.mks.symbol}</strong> (${quantity.mks.name})</span>
          <span class="unit-pill cgs-pill"><i class="fa fa-compass-drafting"></i> વ્યાવહારિક એકમ: <strong>57.296°</strong> (Degree)</span>
          <span class="unit-pill factor-pill"><i class="fa fa-scale-balanced"></i> રૂપાંતરણ: <strong>1 rad = 180°/π ≈ 57.296°</strong></span>
        `;
      } else {
        unitsRowHtml = `
          <span class="unit-pill mks-pill"><i class="fa fa-cube"></i> MKS (SI): <strong>1 ${quantity.mks.symbol}</strong> (${quantity.mks.name})</span>
          <span class="unit-pill cgs-pill"><i class="fa fa-gem"></i> CGS: <strong>${converter.formatRatioExponent(quantity.mksToCgsRatio)} ${quantity.cgs.symbol}</strong> (${quantity.cgs.name})</span>
          <span class="unit-pill factor-pill"><i class="fa fa-scale-balanced"></i> સમકક્ષતા: <strong>${exponentEquiv}</strong></span>
        `;
      }

      standardDefCard.innerHTML = `
        <div class="def-card-inner">
          <div class="def-header-clean">
            <div class="def-icon-box-clean">
              <i class="fa ${quantity.icon || 'fa-atom'}"></i>
            </div>
            <div>
              <h3 class="def-qty-title">${quantity.name} <span class="def-symbol-badge">(${quantity.symbol})</span></h3>
            </div>
          </div>

          <p class="def-text-body">${quantity.standardDefinition}</p>

          <div class="def-formula-strip">
            <span class="formula-label">સૂત્ર (Formula):</span>
            <span class="formula-math">${renderMathString(quantity.formula)}</span>
          </div>

          <div class="def-units-row-clean">
            ${unitsRowHtml}
          </div>
        </div>
      `;
    }

    function updateProximityMatcher(quantity, val, fromUnit) {
      if (!benchmarkCardContainer) return;
      const match = proximityMatcher.findClosestBenchmark(quantity, val, fromUnit);
      proximityMatcher.renderBenchmarkCard(match, benchmarkCardContainer, quantity, val, (selectedBenchmark) => {
        if (selectedBenchmark && inputValEl) {
          inputValEl.value = selectedBenchmark.val;
          updateConversion();
          playSound('click');
          triggerHaptic(20);
          showToast(`સંદર્ભ લોડ થયો: ${selectedBenchmark.label}`);
        }
      });
    }

    function renderDerivationSteps(derivation) {
      if (!stepsContainer) return;
      stepsContainer.innerHTML = '';

      derivation.steps.forEach((step, idx) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.innerHTML = `
          <div class="step-header">
            <span class="step-num">${idx + 1}</span>
            <h4 class="step-title">${step.title}</h4>
          </div>
          <p class="step-desc">${step.desc}</p>
          <div class="step-math-box katex-math">${renderMathString(step.math)}</div>
          <div class="step-notes">${step.notes}</div>
        `;
        stepsContainer.appendChild(card);
      });
    }

    function updateConversion() {
      try {
        const qId = state.selectedQuantityId;
        const q = converter.getQuantityById(qId);
        const inVal = parseFloat(inputValEl?.value || '1') || 0;
        state.inputValue = inVal;

        const conv = converter.convert(qId, inVal, state.conversionDirection);

        const isMksToCgs = state.conversionDirection === 'mks';
        if (fromUnitLabel) fromUnitLabel.textContent = isMksToCgs ? `${q.mks.name} (${q.mks.symbol})` : `${q.cgs.name} (${q.cgs.symbol})`;
        if (toUnitLabel) toUnitLabel.textContent = isMksToCgs ? `${q.cgs.name} (${q.cgs.symbol})` : `${q.mks.name} (${q.mks.symbol})`;

        if (fromSysBadge) {
          fromSysBadge.textContent = isMksToCgs ? 'MKS (SI)' : 'CGS';
          fromSysBadge.className = `sys-badge ${isMksToCgs ? 'badge-mks' : 'badge-cgs'}`;
        }

        if (toSysBadge) {
          toSysBadge.textContent = isMksToCgs ? 'CGS' : 'MKS (SI)';
          toSysBadge.className = `sys-badge ${isMksToCgs ? 'badge-cgs' : 'badge-mks'}`;
        }

        if (resultValEl) resultValEl.innerHTML = conv.formattedResult;

        renderStandardDefinitionCard(q);
        updateProximityMatcher(q, inVal, state.conversionDirection);

        const derivation = converter.generateDerivationSteps(qId, inVal, state.conversionDirection);
        renderDerivationSteps(derivation);
      } catch (e) {
        console.warn('updateConversion error', e);
      }
    }

    quantitySelect?.addEventListener('change', (e) => {
      state.selectedQuantityId = e.target.value;
      const q = converter.getQuantityById(state.selectedQuantityId);
      if (q && inputValEl) inputValEl.value = q.defaultVal;
      updateConversion();
      playSound('click');
      triggerHaptic(15);
    });

    inputValEl?.addEventListener('input', updateConversion);

    swapBtn?.addEventListener('click', () => {
      state.conversionDirection = state.conversionDirection === 'mks' ? 'cgs' : 'mks';
      swapBtn.classList.add('rotate-anim');
      setTimeout(() => swapBtn.classList.remove('rotate-anim'), 350);

      updateConversion();
      playSound('swap');
      triggerHaptic(25);
    });

    copyResultBtn?.addEventListener('click', () => {
      const q = converter.getQuantityById(state.selectedQuantityId);
      const conv = converter.convert(state.selectedQuantityId, inputValEl?.value || '1', state.conversionDirection);
      const copyText = `${conv.inputVal} ${conv.fromUnitSymbol} = ${converter.formatPlainScientific(conv.resultVal)} ${conv.toUnitSymbol} (${q.name})`;
      navigator.clipboard.writeText(copyText).then(() => {
        showToast('કોપી થઈ ગયું: ' + copyText);
        playSound('click');
        triggerHaptic(20);
      });
    });

    shareBtn?.addEventListener('click', () => {
      const q = converter.getQuantityById(state.selectedQuantityId);
      const conv = converter.convert(state.selectedQuantityId, inputValEl?.value || '1', state.conversionDirection);
      const shareData = {
        title: `${q.name} MKS ↔ CGS એકમ રૂપાંતરણ`,
        text: `${conv.inputVal} ${conv.fromUnitSymbol} = ${converter.formatPlainScientific(conv.resultVal)} ${conv.toUnitSymbol} (${q.name} - GTU Diploma Physics)`
      };
      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(shareData.text);
        showToast('શેર કરવા માટે પરિણામ કોપી થયું!');
      }
      playSound('click');
    });

    function showToast(msg) {
      if (!copyToast) return;
      copyToast.textContent = msg;
      copyToast.classList.add('show');
      setTimeout(() => copyToast.classList.remove('show'), 2500);
    }

    // 2) SI PREFIX CONVERTER
    const prefixInputVal = document.getElementById('prefixInputVal');
    const prefixSlider = document.getElementById('prefixSlider');
    const prefixBaseUnitSelect = document.getElementById('prefixBaseUnit');
    const prefixFromSelect = document.getElementById('prefixFrom');
    const prefixToSelect = document.getElementById('prefixTo');
    const prefixResultDisplay = document.getElementById('prefixResultDisplay');
    const prefixExplanationCard = document.getElementById('prefixExplanationCard');

    function initPrefixChanger() {
      try {
        if (!prefixFromSelect || !prefixToSelect || !prefixBaseUnitSelect) return;

        prefixBaseUnitSelect.innerHTML = '';
        prefixEngine.prefixUnits.forEach(u => {
          const opt = document.createElement('option');
          opt.value = u.id;
          opt.textContent = `${u.name} [${u.symbol}]`;
          if (u.id === 'gram') opt.selected = true;
          prefixBaseUnitSelect.appendChild(opt);
        });

        const populatePrefixOpts = (selectEl, defaultSym) => {
          selectEl.innerHTML = '';
          prefixEngine.prefixes.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.symbol;
            opt.textContent = `${p.name} (${p.symbol || 'base'}) [10^${p.power}]`;
            if (p.symbol === defaultSym) opt.selected = true;
            selectEl.appendChild(opt);
          });
        };

        populatePrefixOpts(prefixFromSelect, 'n');
        populatePrefixOpts(prefixToSelect, 'M');

        updatePrefixChanger();
      } catch (e) {
        console.warn('initPrefixChanger error', e);
      }
    }

    function updatePrefixChanger() {
      try {
        if (!prefixFromSelect || !prefixToSelect) return;
        const fromSym = prefixFromSelect.value;
        const toSym = prefixToSelect.value;
        const baseUId = prefixBaseUnitSelect?.value || 'gram';
        const val = parseFloat(prefixInputVal?.value || '19') || 0;

        const res = prefixEngine.convert(fromSym, toSym, baseUId, val);

        if (prefixResultDisplay) {
          prefixResultDisplay.innerHTML = `
            <div class="prefix-equation-main">
              ${res.numVal} ${res.fromUnitSymbol} = <strong class="text-glow-green">${res.factorEquationPlain}</strong>
            </div>
            <div class="prefix-factor-subrow">
              ગુણાકાર અવયવ: <strong>10<sup>${res.deltaPower}</sup></strong> (${res.deltaPower >= 0 ? '10^' + res.deltaPower + ' વડે ગુણો' : '10^' + Math.abs(res.deltaPower) + ' વડે ભાગો'})
            </div>
          `;
        }

        if (prefixExplanationCard) {
          prefixExplanationCard.innerHTML = `
            <div class="teacher-method-box">
              <div class="teacher-badge-row">
                <span class="teacher-pill"><i class="fa fa-graduation-cap"></i> શિક્ષકની B ⟷ s પદ્ધતિ</span>
                <span class="rule-badge ${res.isBigToSmall ? 'rule-multiply' : 'rule-divide'}">${res.ruleHeader}</span>
              </div>

              <p class="teacher-desc" style="font-size:1.05rem; font-weight:700; color:var(--text-primary); margin:0.6rem 0;">${res.ruleDesc}</p>

              <div class="teacher-steps-grid">
                <div class="t-step-item">
                  <span class="t-step-label">પ્રારંભિક પૂર્વાક્ષર</span>
                  <div class="t-step-val text-cyan">${res.fromP.name} (${res.fromP.symbol || 'base'}) = 10<sup>${res.p1}</sup></div>
                </div>
                <div class="t-step-item">
                  <span class="t-step-label">લક્ષ્ય પૂર્વાક્ષર</span>
                  <div class="t-step-val text-amber">${res.toP.name} (${res.toP.symbol || 'base'}) = 10<sup>${res.p2}</sup></div>
                </div>
                <div class="t-step-item">
                  <span class="t-step-label">ઘાતાંકીય તફાવત</span>
                  <div class="t-step-val text-purple">10<sup>${res.deltaPower}</sup></div>
                </div>
                <div class="t-step-item highlight-step">
                  <span class="t-step-label">અંતિમ સમીકરણ</span>
                  <div class="t-step-val text-green">${res.numVal} ${res.fromUnitSymbol} = ${res.factorEquationPlain}</div>
                </div>
              </div>
            </div>
          `;
        }
      } catch (e) {
        console.warn('updatePrefixChanger error', e);
      }
    }

    [prefixFromSelect, prefixToSelect, prefixBaseUnitSelect].forEach(el => el?.addEventListener('change', () => {
      updatePrefixChanger();
      playSound('click');
    }));

    prefixInputVal?.addEventListener('input', () => {
      if (prefixSlider) prefixSlider.value = Math.min(100, Math.max(1, parseFloat(prefixInputVal.value) || 1));
      updatePrefixChanger();
    });

    prefixSlider?.addEventListener('input', () => {
      if (prefixInputVal) prefixInputVal.value = prefixSlider.value;
      updatePrefixChanger();
    });

    // 3) SIMULATION LAB
    const simNavButtons = document.querySelectorAll('.sim-nav-btn');
    const simViews = document.querySelectorAll('.sim-view');

    function switchSimTab(simId) {
      state.activeSimTab = simId;
      simNavButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.simTarget === simId));
      simViews.forEach(v => v.classList.toggle('active', v.id === `simView-${simId}`));

      if (simId === 'reynolds') updateReynoldsSim();
      if (simId === 'stokes') updateStokesSim();
      if (simId === 'capillary') updateCapillarySim();
      if (simId === 'contactAngle') updateContactAngleSim();
    }

    simNavButtons.forEach(btn => btn.addEventListener('click', () => {
      switchSimTab(btn.dataset.simTarget);
      playSound('click');
      triggerHaptic(15);
    }));

    // Reynolds
    const reynoldsCaseSelect = document.getElementById('reynoldsCaseSelect');
    const reynoldsVelInput = document.getElementById('reynoldsVel');
    const reynoldsDiamInput = document.getElementById('reynoldsDiam');
    const reynoldsDensityInput = document.getElementById('reynoldsDensity');
    const reynoldsViscInput = document.getElementById('reynoldsVisc');
    const reynoldsCanvas = document.getElementById('reynoldsCanvas');
    const reynoldsRegimeBadge = document.getElementById('reynoldsRegimeBadge');
    const reynoldsValDisplay = document.getElementById('reynoldsValDisplay');
    const reynoldsVcDisplay = document.getElementById('reynoldsVcDisplay');
    const reynoldsFormulaMath = document.getElementById('reynoldsFormulaMath');
    const reynoldsModeParticles = document.getElementById('reynoldsModeParticles');
    const reynoldsModeWaves = document.getElementById('reynoldsModeWaves');

    function initReynoldsCases() {
      try {
        if (!reynoldsCaseSelect) return;
        reynoldsCaseSelect.innerHTML = '';
        PHYSICS_DATA.reynoldsCases.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = c.name;
          if (c.id === 'tap_water') opt.selected = true;
          reynoldsCaseSelect.appendChild(opt);
        });

        reynoldsCaseSelect.addEventListener('change', () => {
          const selCase = PHYSICS_DATA.reynoldsCases.find(c => c.id === reynoldsCaseSelect.value);
          if (selCase && selCase.id !== 'custom') {
            if (reynoldsVelInput) reynoldsVelInput.value = selCase.v;
            if (reynoldsDiamInput) reynoldsDiamInput.value = selCase.D;
            if (reynoldsDensityInput) reynoldsDensityInput.value = selCase.rho;
            if (reynoldsViscInput) reynoldsViscInput.value = selCase.eta;
            updateReynoldsSim();
            playSound('click');
          }
        });
      } catch (e) {
        console.warn('initReynoldsCases error', e);
      }
    }

    function updateReynoldsSim() {
      try {
        const v = Math.max(0, parseFloat(reynoldsVelInput?.value || '1.5'));
        const D = Math.max(0.001, parseFloat(reynoldsDiamInput?.value || '0.05'));
        const rho = Math.max(1, parseFloat(reynoldsDensityInput?.value || '1000'));
        const eta = Math.max(0.00001, parseFloat(reynoldsViscInput?.value || '0.001'));

        const res = fluidSims.calculateReynolds(v, D, rho, eta);

        if (reynoldsFormulaMath) {
          reynoldsFormulaMath.innerHTML = renderMathString('Re = \\frac{\\rho \\cdot v \\cdot D}{\\eta}');
        }

        if (reynoldsValDisplay) reynoldsValDisplay.textContent = `Re = ${res.re.toLocaleString()}`;
        if (reynoldsVcDisplay) reynoldsVcDisplay.innerHTML = `ક્રાંતિ વેગ: <strong>v_c = ${res.vc} m/s</strong>`;
        if (reynoldsRegimeBadge) {
          reynoldsRegimeBadge.textContent = res.regimeBadge;
          reynoldsRegimeBadge.style.color = res.color;
          reynoldsRegimeBadge.style.borderColor = res.color;
        }
      } catch (e) {
        console.warn('updateReynoldsSim error', e);
      }
    }

    [reynoldsVelInput, reynoldsDiamInput, reynoldsDensityInput, reynoldsViscInput].forEach(el => el?.addEventListener('input', () => {
      if (reynoldsCaseSelect) reynoldsCaseSelect.value = 'custom';
      updateReynoldsSim();
    }));

    reynoldsModeParticles?.addEventListener('click', () => {
      fluidSims.setReynoldsMode('particles');
      reynoldsModeParticles.classList.add('active');
      reynoldsModeWaves.classList.remove('active');
      playSound('click');
    });

    reynoldsModeWaves?.addEventListener('click', () => {
      fluidSims.setReynoldsMode('waves');
      reynoldsModeWaves.classList.add('active');
      reynoldsModeParticles.classList.remove('active');
      playSound('click');
    });

    // Stokes
    const stokesSpherePresetSelect = document.getElementById('stokesSpherePreset');
    const stokesFluidPresetSelect = document.getElementById('stokesFluidPreset');
    const stokesPlanetPresetSelect = document.getElementById('stokesPlanetPreset');

    const stokesRadiusInput = document.getElementById('stokesRadius');
    const stokesRadiusSlider = document.getElementById('stokesRadiusSlider');
    const stokesSphereDensity = document.getElementById('stokesSphereDensity');
    const stokesSphereDensitySlider = document.getElementById('stokesSphereDensitySlider');
    const stokesFluidDensity = document.getElementById('stokesFluidDensity');
    const stokesFluidDensitySlider = document.getElementById('stokesFluidDensitySlider');
    const stokesViscInput = document.getElementById('stokesVisc');
    const stokesViscSlider = document.getElementById('stokesViscSlider');
    const stokesGInput = document.getElementById('stokesG');
    const stokesGSlider = document.getElementById('stokesGSlider');

    const stokesCanvas = document.getElementById('stokesCanvas');
    const stokesFormulaMath = document.getElementById('stokesFormulaMath');
    const stokesVtDisplay = document.getElementById('stokesVtDisplay');
    const stokesForcesDisplay = document.getElementById('stokesForcesDisplay');
    const stokesDragBreakdown = document.getElementById('stokesDragBreakdown');

    function initStokesPresets() {
      try {
        if (stokesSpherePresetSelect) {
          stokesSpherePresetSelect.innerHTML = '';
          PHYSICS_DATA.sphereMaterialPresets.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.textContent = m.name;
            if (m.id === 'steel') opt.selected = true;
            stokesSpherePresetSelect.appendChild(opt);
          });

          stokesSpherePresetSelect.addEventListener('change', () => {
            const sel = PHYSICS_DATA.sphereMaterialPresets.find(m => m.id === stokesSpherePresetSelect.value);
            if (sel && sel.id !== 'custom') {
              if (stokesSphereDensity) stokesSphereDensity.value = sel.density;
              if (stokesSphereDensitySlider) stokesSphereDensitySlider.value = Math.min(22000, sel.density);
              updateStokesSim();
              playSound('click');
            }
          });
        }

        if (stokesFluidPresetSelect) {
          stokesFluidPresetSelect.innerHTML = '';
          PHYSICS_DATA.stokesFluidPresets.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.name;
            if (f.id === 'glycerin') opt.selected = true;
            stokesFluidPresetSelect.appendChild(opt);
          });

          stokesFluidPresetSelect.addEventListener('change', () => {
            const sel = PHYSICS_DATA.stokesFluidPresets.find(f => f.id === stokesFluidPresetSelect.value);
            if (sel && sel.id !== 'custom') {
              if (stokesFluidDensity) stokesFluidDensity.value = sel.density;
              if (stokesFluidDensitySlider) stokesFluidDensitySlider.value = sel.density;
              if (stokesViscInput) stokesViscInput.value = sel.visc;
              if (stokesViscSlider) stokesViscSlider.value = Math.min(10, sel.visc);
              updateStokesSim();
              playSound('click');
            }
          });
        }

        if (stokesPlanetPresetSelect) {
          stokesPlanetPresetSelect.innerHTML = '';
          PHYSICS_DATA.planetGravityPresets.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.name} (g = ${p.g} m/s²)`;
            if (p.id === 'earth') opt.selected = true;
            stokesPlanetPresetSelect.appendChild(opt);
          });

          stokesPlanetPresetSelect.addEventListener('change', () => {
            const sel = PHYSICS_DATA.planetGravityPresets.find(p => p.id === stokesPlanetPresetSelect.value);
            if (sel && sel.id !== 'custom') {
              if (stokesGInput) stokesGInput.value = sel.g;
              if (stokesGSlider) stokesGSlider.value = Math.min(30, sel.g);
              updateStokesSim();
              playSound('click');
            }
          });
        }
      } catch (e) {
        console.warn('initStokesPresets error', e);
      }
    }

    function updateStokesSim() {
      try {
        const r = Math.max(0.0001, parseFloat(stokesRadiusInput?.value || '0.005'));
        const rhoS = Math.max(1, parseFloat(stokesSphereDensity?.value || '7850'));
        const rhoF = Math.max(1, parseFloat(stokesFluidDensity?.value || '1260'));
        const eta = Math.max(0.00001, parseFloat(stokesViscInput?.value || '1.412'));
        const g = Math.max(0.1, parseFloat(stokesGInput?.value || '9.80665'));

        const res = fluidSims.calculateStokes(r, rhoS, rhoF, eta, g);

        if (stokesFormulaMath) {
          stokesFormulaMath.innerHTML = renderMathString('v_t = \\frac{2}{9}\\frac{r^2(\\rho_s - \\rho_0)g}{\\eta} \\quad \\Longleftrightarrow \\quad F_d = 6\\pi\\eta r v');
        }

        if (stokesVtDisplay) {
          stokesVtDisplay.innerHTML = `
            <div style="font-size:1.25rem; font-weight:900; color:${res.isRising ? 'var(--neon-amber)' : 'var(--neon-green)'}; font-family:var(--font-mono);">
              ${res.motionBadge}: vt = ${res.formattedVt} m/s
            </div>
          `;
        }

        if (stokesForcesDisplay) {
          stokesForcesDisplay.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem; font-size:0.85rem; font-family:var(--font-mono); text-align:center;">
              <div style="background:var(--bg-tertiary); padding:0.5rem; border-radius:var(--radius-md); border-left:3px solid var(--neon-green);">
                <strong class="text-green">ગુરુત્વાકર્ષણ Fg (m·g)</strong><br>${(res.fg * 1000).toFixed(2)} mN
              </div>
              <div style="background:var(--bg-tertiary); padding:0.5rem; border-radius:var(--radius-md); border-left:3px solid var(--neon-cyan);">
                <strong class="text-cyan">ઉત્પ્લાવક બળ Fb (ρ₀·V·g)</strong><br>${(res.fb * 1000).toFixed(2)} mN
              </div>
              <div style="background:var(--bg-tertiary); padding:0.5rem; border-radius:var(--radius-md); border-left:3px solid var(--neon-amber);">
                <strong class="text-amber">શ્યાનતા ડ્રેગ Fd (6πηrv)</strong><br>${(res.fdTerminal * 1000).toFixed(2)} mN
              </div>
            </div>
          `;
        }

        if (stokesDragBreakdown) {
          const calculatedFd = 6 * Math.PI * eta * r * Math.abs(res.vt);
          stokesDragBreakdown.innerHTML = `
            <div style="background:rgba(30, 41, 59, 0.8); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:0.6rem 0.85rem; font-size:0.8rem; font-family:var(--font-mono); color:var(--text-secondary);">
              <strong class="text-amber">⚡ સ્ટોક્સ ડ્રેગ બળની ગાણિતિક ગણતરી:</strong><br>
              F_d = 6π · η · r · v_t = 6π × (${eta} Pa·s) × (${r} m) × (${Math.abs(res.vt).toFixed(4)} m/s) = <strong class="text-amber">${(calculatedFd * 1000).toFixed(2)} mN</strong>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
                <em>નોંધ: શ્યાનતા વધતા અંતિમ વેગ v_t ઘટે છે, જેથી સંતુલન સમયે ΣF = 0 (Fd = |Fg - Fb| = ${(res.fdTerminal * 1000).toFixed(2)} mN).</em>
              </div>
            </div>
          `;
        }
      } catch (e) {
        console.warn('updateStokesSim error', e);
      }
    }

    const bindPair = (inputEl, sliderEl, customSelect, customVal) => {
      inputEl?.addEventListener('input', () => {
        if (sliderEl) sliderEl.value = inputEl.value;
        if (customSelect) customSelect.value = customVal;
        updateStokesSim();
      });
      sliderEl?.addEventListener('input', () => {
        if (inputEl) inputEl.value = sliderEl.value;
        if (customSelect) customSelect.value = customVal;
        updateStokesSim();
      });
    };

    bindPair(stokesRadiusInput, stokesRadiusSlider, null, null);
    bindPair(stokesSphereDensity, stokesSphereDensitySlider, stokesSpherePresetSelect, 'custom');
    bindPair(stokesFluidDensity, stokesFluidDensitySlider, stokesFluidPresetSelect, 'custom');
    bindPair(stokesViscInput, stokesViscSlider, stokesFluidPresetSelect, 'custom');
    bindPair(stokesGInput, stokesGSlider, stokesPlanetPresetSelect, 'custom');

    // Capillary
    const capillaryLiquidSelect = document.getElementById('capillaryLiquidSelect');
    const capillaryDiamCmInput = document.getElementById('capillaryDiamCm');
    const capillaryCanvas = document.getElementById('capillaryCanvas');
    const capillaryFormulaMath = document.getElementById('capillaryFormulaMath');
    const capillaryResultDisplay = document.getElementById('capillaryResultDisplay');

    function initCapillarySim() {
      try {
        if (!capillaryLiquidSelect) return;
        capillaryLiquidSelect.innerHTML = '';
        fluidSims.presets.forEach(l => {
          const opt = document.createElement('option');
          opt.value = l.id;
          opt.textContent = `${l.name} (${l.desc})`;
          if (l.id === 'water') opt.selected = true;
          capillaryLiquidSelect.appendChild(opt);
        });
        updateCapillarySim();
      } catch (e) {
        console.warn('initCapillarySim error', e);
      }
    }

    function updateCapillarySim() {
      try {
        const liquidId = capillaryLiquidSelect?.value || 'water';
        const diamCm = Math.max(0.01, parseFloat(capillaryDiamCmInput?.value || '0.1'));
        const res = fluidSims.calculateCapillary(liquidId, diamCm);

        if (capillaryFormulaMath) {
          capillaryFormulaMath.innerHTML = renderMathString('h = \\frac{2 T \\cos\\theta}{\\rho \\cdot g \\cdot r}');
        }

        if (capillaryResultDisplay) {
          capillaryResultDisplay.innerHTML = `
            <div style="font-size:1.25rem; font-weight:800; color:${res.isDepression ? 'var(--neon-rose)' : 'var(--neon-cyan)'}; font-family:var(--font-mono); margin-bottom:0.25rem;">
              ${res.behaviorTitle} (${res.meniscusType})
            </div>
            <div style="font-size:0.85rem; color:var(--text-secondary);">
              વ્યાસ: <strong>${res.diameterCm} cm</strong> | T = ${res.liquid.st} N/m | સંપર્ક કોણ θ = ${res.liquid.angle}° (cosθ = ${res.cosTheta})
            </div>
          `;
        }
      } catch (e) {
        console.warn('updateCapillarySim error', e);
      }
    }

    capillaryLiquidSelect?.addEventListener('change', updateCapillarySim);
    capillaryDiamCmInput?.addEventListener('input', updateCapillarySim);

    // Contact Angle
    const contactAngleSlider = document.getElementById('contactAngleSlider');
    const contactAngleVal = document.getElementById('contactAngleVal');
    const contactAngleCanvas = document.getElementById('contactAngleCanvas');
    const contactAngleFormulaMath = document.getElementById('contactAngleFormulaMath');
    const contactAngleDesc = document.getElementById('contactAngleDesc');

    function updateContactAngleSim() {
      try {
        const angle = parseFloat(contactAngleSlider?.value || '35');
        if (contactAngleVal) contactAngleVal.textContent = `${angle}°`;
        const res = fluidSims.calculateContactAngle(angle);

        if (contactAngleFormulaMath) {
          contactAngleFormulaMath.innerHTML = renderMathString('\\cos\\theta = \\frac{\\gamma_{SG} - \\gamma_{SL}}{\\gamma_{LG}}');
        }

        if (contactAngleDesc) {
          contactAngleDesc.innerHTML = `
            <div style="font-weight:800; font-size:1.05rem; color:${res.color}; margin-bottom:0.35rem;">
              ${res.classification}
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">
              ${res.description}
            </p>
          `;
        }
      } catch (e) {
        console.warn('updateContactAngleSim error', e);
      }
    }

    contactAngleSlider?.addEventListener('input', updateContactAngleSim);

    function animateFluidCanvases() {
      try {
        if (state.activeTab === 'fluids') {
          if (state.activeSimTab === 'reynolds' && reynoldsCanvas) {
            const v = Math.max(0, parseFloat(reynoldsVelInput?.value || '1.5'));
            const D = Math.max(0.001, parseFloat(reynoldsDiamInput?.value || '0.05'));
            const rho = Math.max(1, parseFloat(reynoldsDensityInput?.value || '1000'));
            const eta = Math.max(0.00001, parseFloat(reynoldsViscInput?.value || '0.001'));
            const reData = fluidSims.calculateReynolds(v, D, rho, eta);
            fluidSims.renderReynoldsCanvas(reynoldsCanvas, reData);
          } else if (state.activeSimTab === 'stokes' && stokesCanvas) {
            const r = parseFloat(stokesRadiusInput?.value || '0.005');
            const rhoS = parseFloat(stokesSphereDensity?.value || '7850');
            const rhoF = parseFloat(stokesFluidDensity?.value || '1260');
            const eta = parseFloat(stokesViscInput?.value || '1.412');
            const g = parseFloat(stokesGInput?.value || '9.80665');
            const stokesData = fluidSims.calculateStokes(r, rhoS, rhoF, eta, g);
            fluidSims.renderStokesCanvas(stokesCanvas, stokesData);
          } else if (state.activeSimTab === 'capillary' && capillaryCanvas) {
            const liquidId = capillaryLiquidSelect?.value || 'water';
            const diamCm = Math.max(0.01, parseFloat(capillaryDiamCmInput?.value || '0.1'));
            const capData = fluidSims.calculateCapillary(liquidId, diamCm);
            fluidSims.renderCapillaryCanvas(capillaryCanvas, capData);
          } else if (state.activeSimTab === 'contactAngle' && contactAngleCanvas) {
            const angle = parseFloat(contactAngleSlider?.value || '35');
            const contactData = fluidSims.calculateContactAngle(angle);
            fluidSims.renderContactAngleCanvas(contactAngleCanvas, contactData);
          }
        }
      } catch (e) {
        console.warn('animateFluidCanvases error', e);
      }
      requestAnimationFrame(animateFluidCanvases);
    }
    animateFluidCanvases();

    // 4) FORMULA MAGIC TRIANGLES
    const triangleSelect = document.getElementById('triangleSelect');
    const triangleCanvas = document.getElementById('triangleCanvas');
    const triSubjectSelect = document.getElementById('triSubjectSelect');
    const triInputA = document.getElementById('triInputA');
    const triInputB = document.getElementById('triInputB');
    const triLabelA = document.getElementById('triLabelA');
    const triLabelB = document.getElementById('triLabelB');
    const triResultOutput = document.getElementById('triResultOutput');
    const triFormulaDerivation = document.getElementById('triFormulaDerivation');

    let currentMagicVar = 'top';

    function initMagicTrianglesUI() {
      try {
        if (triangleSelect) {
          triangleSelect.innerHTML = '';
          magicTriangles.triangles.forEach((t, idx) => {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = `${idx + 1}) ${t.title}`;
            triangleSelect.appendChild(opt);
          });
        }

        if (triSubjectSelect) {
          triSubjectSelect.innerHTML = `
            <option value="top">ઉપરના ચલને સૂત્રનો કર્તા બનાવો (નીચેના બંનેનો ગુણાકાર)</option>
            <option value="bottomLeft">ડાબી બાજુના ચલને સૂત્રનો કર્તા બનાવો (ઉપર / જમણી બાજુ)</option>
            <option value="bottomRight">જમણી બાજુના ચલને સૂત્રનો કર્તા બનાવો (ઉપર / ડાબી બાજુ)</option>
          `;
        }
        updateMagicTriangleUI();
      } catch (e) {
        console.warn('initMagicTrianglesUI error', e);
      }
    }

    function updateMagicTriangleUI() {
      try {
        const tId = triangleSelect?.value || 'triangle_linear_velocity';
        const t = magicTriangles.triangles.find(tri => tri.id === tId) || magicTriangles.triangles[0];

        currentMagicVar = triSubjectSelect?.value || currentMagicVar;

        let labelTextA = '', labelTextB = '';
        if (currentMagicVar === 'top') {
          labelTextA = `${t.bottomLeft.label} દાખલ કરો (${t.bottomLeft.unit}):`;
          labelTextB = `${t.bottomRight.label} દાખલ કરો (${t.bottomRight.unit}):`;
        } else if (currentMagicVar === 'bottomLeft') {
          labelTextA = `${t.top.label} દાખલ કરો (${t.top.unit}):`;
          labelTextB = `${t.bottomRight.label} દાખલ કરો (${t.bottomRight.unit}):`;
        } else if (currentMagicVar === 'bottomRight') {
          labelTextA = `${t.top.label} દાખલ કરો (${t.top.unit}):`;
          labelTextB = `${t.bottomLeft.label} દાખલ કરો (${t.bottomLeft.unit}):`;
        }

        if (triLabelA) triLabelA.textContent = labelTextA;
        if (triLabelB) triLabelB.textContent = labelTextB;

        const valA = parseFloat(triInputA?.value || '10') || 0;
        const valB = parseFloat(triInputB?.value || '2') || 0;

        const res = magicTriangles.calculate(tId, currentMagicVar, valA, valB);

        if (triResultOutput) {
          triResultOutput.innerHTML = `
            <div class="tri-result-box">
              <div style="font-size:0.8rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">સૂત્રનો કર્તા: ${res.targetLabel}</div>
              <div class="tri-res-val">${renderMathString(res.formulaMath)} = <strong>${res.formattedResult} ${res.targetUnit}</strong></div>
            </div>
          `;
        }

        if (triFormulaDerivation) {
          triFormulaDerivation.innerHTML = `
            <div class="tri-explanation">
              <i class="fa fa-circle-info text-accent"></i>
              <span>${res.explanation}</span>
            </div>
          `;
        }

        drawMagicTriangleCanvas(t);
      } catch (e) {
        console.warn('updateMagicTriangleUI error', e);
      }
    }

    function drawMagicTriangleCanvas(t) {
      if (!triangleCanvas) return;
      try {
        const ctx = triangleCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const w = 340;
        const h = 270;

        triangleCanvas.width = w * dpr;
        triangleCanvas.height = h * dpr;
        triangleCanvas.style.width = `${w}px`;
        triangleCanvas.style.height = `${h}px`;

        ctx.resetTransform?.();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, w, h);

        const topX = w / 2, topY = 30;
        const leftX = 35, leftY = h - 30;
        const rightX = w - 35, rightY = h - 30;

        ctx.beginPath();
        ctx.moveTo(topX, topY);
        ctx.lineTo(leftX, leftY);
        ctx.lineTo(rightX, rightY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#38bdf8';
        ctx.stroke();
        ctx.shadowBlur = 0;

        const midY = (topY + leftY) * 0.58;
        const midLeftX = topX - (topX - leftX) * 0.58;
        const midRightX = topX + (rightX - topX) * 0.58;

        ctx.beginPath();
        ctx.moveTo(midLeftX, midY);
        ctx.lineTo(midRightX, midY);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#fbbf24';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(topX, midY);
        ctx.lineTo(topX, leftY);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#fbbf24';
        ctx.stroke();

        ctx.textAlign = 'center';

        ctx.font = 'bold 30px "JetBrains Mono", Lora, Georgia, serif';
        ctx.fillStyle = currentMagicVar === 'top' ? '#00ff88' : '#ffffff';
        ctx.fillText(t.top.symbol, topX, midY - 30);
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(t.top.unit, topX, midY - 12);

        ctx.font = 'bold 30px "JetBrains Mono", Lora, Georgia, serif';
        ctx.fillStyle = currentMagicVar === 'bottomLeft' ? '#00ff88' : '#ffffff';
        ctx.fillText(t.bottomLeft.symbol, (leftX + topX) / 2 + 10, leftY - 35);
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(t.bottomLeft.unit, (leftX + topX) / 2 + 10, leftY - 18);

        ctx.font = 'bold 30px "JetBrains Mono", Lora, Georgia, serif';
        ctx.fillStyle = currentMagicVar === 'bottomRight' ? '#00ff88' : '#ffffff';
        ctx.fillText(t.bottomRight.symbol, (rightX + topX) / 2 - 10, rightY - 35);
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(t.bottomRight.unit, (rightX + topX) / 2 - 10, rightY - 18);

        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText('÷', topX, midY - 5);
        ctx.fillText('×', topX, leftY - 30);
      } catch (e) {
        console.warn('drawMagicTriangleCanvas error', e);
      }
    }

    triangleCanvas?.addEventListener('click', (e) => {
      const rect = triangleCanvas.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const clickX = e.clientX - rect.left;

      if (clickY < 135) {
        currentMagicVar = 'top';
      } else if (clickX < 170) {
        currentMagicVar = 'bottomLeft';
      } else {
        currentMagicVar = 'bottomRight';
      }

      if (triSubjectSelect) triSubjectSelect.value = currentMagicVar;
      updateMagicTriangleUI();
      playSound('click');
      triggerHaptic(15);
    });

    triSubjectSelect?.addEventListener('change', () => {
      currentMagicVar = triSubjectSelect.value;
      updateMagicTriangleUI();
      playSound('click');
    });

    triangleSelect?.addEventListener('change', () => {
      currentMagicVar = 'top';
      if (triSubjectSelect) triSubjectSelect.value = 'top';
      const tId = triangleSelect.value;
      const t = magicTriangles.triangles.find(tri => tri.id === tId);
      if (t && triInputA && triInputB) {
        triInputA.value = t.bottomLeft.default;
        triInputB.value = t.bottomRight.default;
      }
      updateMagicTriangleUI();
      playSound('click');
    });

    [triInputA, triInputB].forEach(inp => inp?.addEventListener('input', updateMagicTriangleUI));

    // 5) TEMPERATURE MATRIX
    const tempPairInput = document.getElementById('tempPairInput');
    const tempPairFrom = document.getElementById('tempPairFrom');
    const tempPairTo = document.getElementById('tempPairTo');
    const tempPairEquation = document.getElementById('tempPairResult');
    const tempPairSteps = document.getElementById('tempPairSteps');
    const tempTableBody = document.getElementById('tempTableBody');

    function updatePairwiseTemperature() {
      try {
        const val = parseFloat(tempPairInput?.value || '100');
        const fromS = tempPairFrom?.value || 'C';
        const toS = tempPairTo?.value || 'F';

        const res = tempEngine.convertPairwise(val, fromS, toS);

        const fromUnitLabel = fromS === 'C' ? '°C' : fromS === 'F' ? '°F' : 'K';
        const toUnitLabel = toS === 'C' ? '°C' : toS === 'F' ? '°F' : 'K';

        if (tempPairEquation) {
          tempPairEquation.innerHTML = `
            <div class="temp-equation-text" style="font-size:1.25rem; font-weight:800; font-family:var(--font-mono);">
              ${val} ${fromUnitLabel} = <strong class="text-glow-amber">${res.result} ${toUnitLabel}</strong>
            </div>
          `;
        }

        if (tempPairSteps) {
          tempPairSteps.innerHTML = '';
          res.steps.forEach((step, idx) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'temp-step-item';
            stepDiv.style.cssText = 'background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:0.75rem; margin-bottom:0.5rem;';
            stepDiv.innerHTML = `
              <div class="step-num-badge" style="font-size:0.75rem; font-weight:800; color:var(--neon-cyan); text-transform:uppercase;">પગલું ${idx + 1}: ${step.title}</div>
              <p style="font-size:0.85rem; color:var(--text-secondary); margin:0.35rem 0;">${step.desc}</p>
              <div class="step-math-box">${renderMathString(step.math)}</div>
            `;
            tempPairSteps.appendChild(stepDiv);
          });
        }
      } catch (e) {
        console.warn('updatePairwiseTemperature error', e);
      }
    }

    [tempPairInput, tempPairFrom, tempPairTo].forEach(el => el?.addEventListener('input', () => {
      updatePairwiseTemperature();
      playSound('click');
    }));

    function renderThermalBenchmarkTable() {
      try {
        if (!tempTableBody) return;
        tempTableBody.innerHTML = '';
        tempEngine.benchmarks.forEach(bm => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>${bm.name}</strong><br><small class="text-muted">${bm.category}</small></td>
            <td><code>${bm.c} °C</code></td>
            <td><code>${bm.f} °F</code></td>
            <td><code>${bm.k} K</code></td>
            <td>
              <button class="action-sm-btn test-temp-btn" data-c="${bm.c}">
                <i class="fa fa-calculator"></i> ગણો
              </button>
            </td>
          `;
          tempTableBody.appendChild(tr);
        });

        tempTableBody.querySelectorAll('.test-temp-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (tempPairFrom) tempPairFrom.value = 'C';
            if (tempPairTo) tempPairTo.value = 'F';
            if (tempPairInput) tempPairInput.value = btn.dataset.c;
            updatePairwiseTemperature();
            playSound('click');
            triggerHaptic(15);
          });
        });
      } catch (e) {
        console.warn('renderThermalBenchmarkTable error', e);
      }
    }

    // 6) COUNTER-BALANCE GAME
    const gameQtySelect = document.getElementById('gameQtySelect');
    const gameBaseUnitSelect = document.getElementById('gameBaseUnitSelect');
    const gameLeftPrefixSelect = document.getElementById('gameLeftPrefixSelect');
    const gameRightPrefixSelect = document.getElementById('gameRightPrefixSelect');

    const gameLeftValInput = document.getElementById('gameLeftValInput');
    const gameRightValInput = document.getElementById('gameRightValInput');
    const gameLeftUnitBadge = document.getElementById('gameLeftUnitBadge');
    const gameRightUnitBadge = document.getElementById('gameRightUnitBadge');
    const gameLeftTotalDisplay = document.getElementById('gameLeftTotalDisplay');
    const gameRightTotalDisplay = document.getElementById('gameRightTotalDisplay');
    const gameBalanceStatus = document.getElementById('gameBalanceStatus');
    const gameAutoBalanceBtn = document.getElementById('gameAutoBalanceBtn');

    function initRedesignedCounterBalanceGame() {
      try {
        if (!gameQtySelect) return;
        gameQtySelect.innerHTML = '';

        PHYSICS_DATA.quantities.forEach(item => {
          const opt = document.createElement('option');
          opt.value = item.id;
          opt.textContent = `${item.name} (${item.symbol})`;
          if (item.id === 'force') opt.selected = true;
          gameQtySelect.appendChild(opt);
        });

        const populatePrefixes = (selEl, defaultSym) => {
          selEl.innerHTML = '';
          PHYSICS_DATA.prefixes.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.factor;
            opt.dataset.sym = p.symbol;
            opt.textContent = `${p.name} (${p.symbol || 'base'}) [10^${p.power}]`;
            if (p.symbol === defaultSym) opt.selected = true;
            selEl.appendChild(opt);
          });
        };

        if (gameLeftPrefixSelect) populatePrefixes(gameLeftPrefixSelect, 'M');
        if (gameRightPrefixSelect) populatePrefixes(gameRightPrefixSelect, 'p');

        updateGameBaseUnitsDropdown();
      } catch (e) {
        console.warn('initRedesignedCounterBalanceGame error', e);
      }
    }

    function updateGameBaseUnitsDropdown() {
      try {
        const qId = gameQtySelect?.value || 'force';
        const q = converter.getQuantityById(qId);
        if (!gameBaseUnitSelect || !q) return;

        if (q.isUnitless) {
          gameBaseUnitSelect.innerHTML = `
            <option value="[ratio 1]" data-type="mks">પરિમાણ રહિત શુદ્ધ ગુણોત્તર [૧:૧]</option>
          `;
        } else {
          gameBaseUnitSelect.innerHTML = `
            <option value="${q.mks.symbol}" data-type="mks">MKS (SI): ${q.mks.name} [${q.mks.symbol}]</option>
            <option value="${q.cgs.symbol}" data-type="cgs">CGS: ${q.cgs.name} [${q.cgs.symbol}]</option>
          `;
        }

        updateRedesignedGame();
      } catch (e) {
        console.warn('updateGameBaseUnitsDropdown error', e);
      }
    }

    function updateRedesignedGame() {
      try {
        const qId = gameQtySelect?.value || 'force';
        const q = converter.getQuantityById(qId);
        const selUnitOpt = gameBaseUnitSelect?.selectedOptions[0];
        const baseUnitSymbol = selUnitOpt?.value || q.mks.symbol;

        const leftPrefixOpt = gameLeftPrefixSelect?.selectedOptions[0];
        const rightPrefixOpt = gameRightPrefixSelect?.selectedOptions[0];

        const leftPrefixSym = leftPrefixOpt?.dataset.sym || '';
        const rightPrefixSym = rightPrefixOpt?.dataset.sym || '';

        const leftPrefixFactor = parseFloat(gameLeftPrefixSelect?.value || '1');
        const rightPrefixFactor = parseFloat(gameRightPrefixSelect?.value || '1');

        const leftV = parseFloat(gameLeftValInput?.value || '1');
        const rightV = parseFloat(gameRightValInput?.value || '0');

        const leftUnitStr = `${leftPrefixSym}${baseUnitSymbol}`;
        const rightUnitStr = `${rightPrefixSym}${baseUnitSymbol}`;

        if (gameLeftUnitBadge) gameLeftUnitBadge.textContent = leftUnitStr;
        if (gameRightUnitBadge) gameRightUnitBadge.textContent = rightUnitStr;

        const formatMag = (v) => {
          if (v === 0) return '0';
          const abs = Math.abs(v);
          if (abs >= 1e6 || (abs < 1e-3 && abs > 0)) return v.toExponential(2);
          return Number(v.toPrecision(4)).toString();
        };

        const leftTotal = leftV * leftPrefixFactor;
        const rightTotal = rightV * rightPrefixFactor;

        if (gameLeftTotalDisplay) {
          gameLeftTotalDisplay.textContent = `${formatMag(leftV)} ${leftUnitStr} = ${formatMag(leftTotal)} ${baseUnitSymbol}`;
        }
        if (gameRightTotalDisplay) {
          gameRightTotalDisplay.textContent = `${formatMag(rightV)} ${rightUnitStr} = ${formatMag(rightTotal)} ${baseUnitSymbol}`;
        }

        const justBalanced = visualizer.updateGameStateWithUnits(
          q.name, leftV, leftPrefixSym, leftPrefixFactor, rightV, rightPrefixSym, rightPrefixFactor, baseUnitSymbol
        );

        if (gameBalanceStatus) {
          if (visualizer.state.isBalanced) {
            gameBalanceStatus.innerHTML = `
              <div class="balance-success" style="color:var(--neon-green); font-weight:800;">
                <i class="fa fa-circle-check"></i> ⚖️ ૧૦૦% સંપૂર્ણ સંતુલન પ્રાપ્ત થયું! (Exact Equilibrium Match)
              </div>
            `;
            if (justBalanced) {
              playSound('fanfare');
              triggerHaptic(50);
            }
          } else {
            const diff = rightTotal - leftTotal;
            gameBalanceStatus.innerHTML = `
              <div class="balance-pending" style="color:var(--text-muted); font-size:0.85rem;">
                <i class="fa fa-scale-unbalanced"></i> ${diff > 0 ? 'જમણું પલ્લું ભારે છે! (જમણી બાજુનું મૂલ્ય ઘટાડો)' : 'ડાબું પલ્લું ભારે છે! (જમણી બાજુનું મૂલ્ય વધારો)'}
              </div>
            `;
          }
        }
      } catch (e) {
        console.warn('updateRedesignedGame error', e);
      }
    }

    gameQtySelect?.addEventListener('change', () => {
      updateGameBaseUnitsDropdown();
      playSound('click');
    });

    [gameBaseUnitSelect, gameLeftPrefixSelect, gameRightPrefixSelect, gameLeftValInput, gameRightValInput].forEach(el =>
      el?.addEventListener('input', updateRedesignedGame)
    );

    gameAutoBalanceBtn?.addEventListener('click', () => {
      const leftPrefixFactor = parseFloat(gameLeftPrefixSelect?.value || '1');
      const rightPrefixFactor = parseFloat(gameRightPrefixSelect?.value || '1');
      const leftV = parseFloat(gameLeftValInput?.value || '1');

      const targetRight = (leftV * leftPrefixFactor) / rightPrefixFactor;
      if (gameRightValInput) gameRightValInput.value = targetRight;

      updateRedesignedGame();
      playSound('click');
      triggerHaptic(20);
    });

    // 7) PRACTICE QUIZ
    const quizQuestionEl = document.getElementById('quizQuestion');
    const quizEquationBox = document.getElementById('quizEquationBox');
    const quizOptionsContainer = document.getElementById('quizOptionsContainer');
    const quizFeedbackEl = document.getElementById('quizFeedback');
    const quizNextBtn = document.getElementById('quizNextBtn');
    const quizHintBtn = document.getElementById('quizHintBtn');
    const quizHintBox = document.getElementById('quizHintBox');
    const quizScoreEl = document.getElementById('quizScore');
    const quizStreakEl = document.getElementById('quizStreak');
    const quizBestStreakEl = document.getElementById('quizBestStreak');
    const quizDiffPills = document.querySelectorAll('.quiz-diff-pill');

    function loadNewQuizQuestion() {
      try {
        const q = quiz.getNextQuestion();
        if (!q || !quizQuestionEl) return;

        quizQuestionEl.textContent = q.question;

        if (quizEquationBox) {
          if (q.equation) {
            quizEquationBox.innerHTML = renderMathString(q.equation);
            quizEquationBox.classList.remove('hidden');
          } else {
            quizEquationBox.classList.add('hidden');
          }
        }

        if (quizOptionsContainer) {
          quizOptionsContainer.innerHTML = '';
          q.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            const letter = String.fromCharCode(65 + idx);

            btn.innerHTML = `
              <span class="opt-letter" style="font-weight:900; color:var(--neon-cyan); min-width:20px;">${letter}.</span>
              <span class="opt-text">${renderInlineMathOrText(optText)}</span>
            `;

            btn.addEventListener('click', () => handleQuizOptionSelect(idx, btn));
            quizOptionsContainer.appendChild(btn);
          });
        }

        if (quizFeedbackEl) {
          quizFeedbackEl.className = 'quiz-feedback hidden';
          quizFeedbackEl.innerHTML = '';
        }

        if (quizHintBox) quizHintBox.classList.add('hidden');
        quizNextBtn?.classList.add('hidden');
      } catch (e) {
        console.warn('loadNewQuizQuestion error', e);
      }
    }

    function handleQuizOptionSelect(selectedIdx, clickedBtn) {
      const res = quiz.submitAnswer(selectedIdx);
      if (!res) return;

      const allButtons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
      allButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === res.correctOptionIdx) {
          btn.classList.add('correct-answer');
        } else if (idx === selectedIdx && !res.isCorrect) {
          btn.classList.add('wrong-answer');
        }
      });

      quizFeedbackEl.className = `quiz-feedback ${res.isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
      quizFeedbackEl.style.cssText = res.isCorrect ? 'background:rgba(0,255,136,0.15); border:1px solid var(--neon-green); color:var(--text-primary);' : 'background:rgba(255,0,85,0.15); border:1px solid var(--neon-rose); color:var(--text-primary);';
      quizFeedbackEl.innerHTML = res.isCorrect
        ? `<i class="fa fa-check-circle text-green"></i> <strong>સાચો ઉત્તર! +૧૦ પોઇન્ટ્સ</strong><br>${res.explanation}`
        : `<i class="fa fa-times-circle text-rose"></i> <strong>ખોટો ઉત્તર!</strong><br>${res.explanation}`;

      quizNextBtn?.classList.remove('hidden');

      if (res.isCorrect) {
        playSound('correct');
        triggerHaptic(40);
      } else {
        playSound('wrong');
        triggerHaptic(60);
      }

      updateQuizStatsDisplay();
    }

    function updateQuizStatsDisplay() {
      const stats = quiz.getStats();
      if (quizScoreEl) quizScoreEl.textContent = stats.score;
      if (quizStreakEl) quizStreakEl.textContent = `🔥 ${stats.streak}`;
      if (quizBestStreakEl) quizBestStreakEl.textContent = `🏆 ${stats.bestStreak}`;
    }

    quizNextBtn?.addEventListener('click', () => {
      loadNewQuizQuestion();
      playSound('click');
      triggerHaptic(15);
    });

    quizHintBtn?.addEventListener('click', () => {
      if (!quiz.currentQuestion) return;
      quizHintBox.innerHTML = `<i class="fa fa-lightbulb text-amber"></i> <strong>સંકેત (Hint):</strong> ${quiz.currentQuestion.hint}`;
      quizHintBox.classList.toggle('hidden');
      playSound('click');
    });

    quizDiffPills.forEach(pill => {
      pill.addEventListener('click', () => {
        quizDiffPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        quiz.setDifficulty(pill.dataset.diff);
        loadNewQuizQuestion();
        playSound('click');
        triggerHaptic(15);
      });
    });

    // 8) CHEAT SHEET MATRIX
    const matrixTableBody = document.getElementById('matrixTableBody');
    const matrixSearch = document.getElementById('matrixSearch');
    const matrixSubjectFilter = document.getElementById('matrixSubjectFilter');

    function renderCheatSheetMatrix() {
      try {
        if (!matrixTableBody) return;
        const query = (matrixSearch?.value || '').toLowerCase().trim();
        const subjFilter = matrixSubjectFilter?.value || 'all';

        matrixTableBody.innerHTML = '';

        const list = PHYSICS_DATA.quantities.filter(q => {
          const matchSubj = subjFilter === 'all' || q.subjectIds.includes(subjFilter);
          const matchQuery = !query ||
            q.name.toLowerCase().includes(query) ||
            q.mks.name.toLowerCase().includes(query) ||
            q.cgs.name.toLowerCase().includes(query) ||
            q.mks.symbol.toLowerCase().includes(query) ||
            q.cgs.symbol.toLowerCase().includes(query);
          return matchSubj && matchQuery;
        });

        list.forEach(q => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td class="td-qty">
              <i class="fa ${q.icon}"></i>
              <div>
                <strong>${q.name}</strong>
                <div class="td-sub" style="font-family:var(--font-mono); color:var(--neon-cyan); font-size:0.8rem;">(${q.symbol})</div>
              </div>
            </td>
            <td><code>${renderMathString(q.formula)}</code></td>
            <td><span class="badge-mks-sm" style="background:rgba(0,240,255,0.15); color:var(--neon-cyan); padding:2px 6px; border-radius:4px;">${q.mks.symbol}</span> ${q.mks.name}</td>
            <td><span class="badge-cgs-sm" style="background:rgba(189,0,255,0.15); color:var(--neon-purple); padding:2px 6px; border-radius:4px;">${q.cgs.symbol}</span> ${q.cgs.name}</td>
            <td><strong>${converter.getExponentEquivalence(q)}</strong></td>
            <td>
              <button class="action-sm-btn test-qty-btn" data-id="${q.id}">
                <i class="fa fa-calculator"></i> ગણો
              </button>
            </td>
          `;
          matrixTableBody.appendChild(tr);
        });

        matrixTableBody.querySelectorAll('.test-qty-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.selectedQuantityId = btn.dataset.id;
            switchTab('converter');
            if (quantitySelect) quantitySelect.value = state.selectedQuantityId;
            updateConversion();
            playSound('click');
            triggerHaptic(20);
          });
        });
      } catch (e) {
        console.warn('renderCheatSheetMatrix error', e);
      }
    }

    matrixSearch?.addEventListener('input', renderCheatSheetMatrix);
    matrixSubjectFilter?.addEventListener('change', renderCheatSheetMatrix);

    // 9) TAB NAVIGATION & HASH ROUTING
    const navTabs = document.querySelectorAll('[data-tab-target]');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(tabId) {
      if (!tabId) tabId = 'converter';
      state.activeTab = tabId;

      navTabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tabTarget === tabId);
      });
      tabPanes.forEach(p => {
        p.classList.toggle('active', p.id === `tab-${tabId}`);
      });

      if (tabId === 'quiz' && !quiz.currentQuestion) {
        loadNewQuizQuestion();
      } else if (tabId === 'prefix') {
        updatePrefixChanger();
      } else if (tabId === 'triangles') {
        updateMagicTriangleUI();
      } else if (tabId === 'temp') {
        updatePairwiseTemperature();
        renderThermalBenchmarkTable();
      } else if (tabId === 'fluids') {
        switchSimTab(state.activeSimTab);
      } else if (tabId === 'visualizer') {
        visualizer.initCanvas();
        updateRedesignedGame();
      } else if (tabId === 'matrix') {
        renderCheatSheetMatrix();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = tab.dataset.tabTarget;
        switchTab(targetId);
        window.location.hash = targetId;
        playSound('click');
        triggerHaptic(15);
      });
    });

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById(`tab-${hash}`)) {
        switchTab(hash);
      }
    });

    // Theme & Sound Toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa fa-sun"></i>';
      } else {
        document.body.classList.remove('dark-theme');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa fa-moon"></i>';
      }
      state.theme = theme;
      localStorage.setItem('mks_cgs_theme_gu', theme);
    }

    applyTheme('dark');

    themeToggleBtn?.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      applyTheme(isDark ? 'light' : 'dark');
      playSound('click');
      triggerHaptic(20);
    });

    const soundToggleBtn = document.getElementById('soundToggleBtn');
    soundToggleBtn?.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundToggleBtn.innerHTML = state.soundEnabled ? '<i class="fa fa-volume-up"></i>' : '<i class="fa fa-volume-mute"></i>';
      showToast(state.soundEnabled ? 'અવાજ ચાલુ થયો' : 'અવાજ બંધ થયો');
    });

    // Boot
    initPrefixChanger();
    initReynoldsCases();
    initStokesPresets();
    initCapillarySim();
    initMagicTrianglesUI();
    initRedesignedCounterBalanceGame();
    selectSubject('applied_physics');
    updatePairwiseTemperature();
    renderThermalBenchmarkTable();
    loadNewQuizQuestion();

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(`tab-${initialHash}`)) {
      switchTab(initialHash);
    } else {
      switchTab('converter');
    }

  } catch (globalErr) {
    console.error('Fatal initialization error in GTU Physics Lab (Gujarati):', globalErr);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
