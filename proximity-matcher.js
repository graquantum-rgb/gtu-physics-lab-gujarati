/**
 * Universal Cosmic Spectrum & Proximity Matcher Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v13.0)
 * - સમગ્ર બ્રહ્માંડમાં ૦ થી મહત્તમ ઉપલબ્ધ મૂલ્યોની સરખામણી (Cosmic Spectrum from 0 to Global Maximum)
 * - Exponent Notation Cleanly Formatted: 5.972 × 10²⁴ instead of 5.972e+24
 * - Smooth scroll auto-centering without jumping the page
 */

class ProximityMatcherEngine {
  constructor(physicsData) {
    this.data = physicsData;
  }

  toSuperScript(num) {
    const supers = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
      '-': '⁻', '+': '⁺'
    };
    return String(num).split('').map(c => supers[c] || c).join('');
  }

  formatExponentClean(val) {
    if (val === 0) return '0';
    const abs = Math.abs(val);
    if (abs >= 1e4 || (abs < 1e-3 && abs > 0)) {
      const expStr = val.toExponential(2);
      const parts = expStr.split('e');
      const mantissa = parseFloat(parts[0]).toFixed(2);
      const power = parseInt(parts[1], 10);
      return `${mantissa} × 10${this.toSuperScript(power)}`;
    }
    return Number(val.toPrecision(4)).toString();
  }

  formatExponentHtml(val) {
    if (val === 0) return '0';
    const abs = Math.abs(val);
    if (abs >= 1e4 || (abs < 1e-3 && abs > 0)) {
      const expStr = val.toExponential(2);
      const parts = expStr.split('e');
      const mantissa = parseFloat(parts[0]).toFixed(2);
      const power = parseInt(parts[1], 10);
      return `${mantissa} × 10<sup>${power}</sup>`;
    }
    return Number(val.toPrecision(4)).toString();
  }

  findClosestBenchmark(quantity, val, fromUnit = 'mks') {
    if (!quantity || !quantity.benchmarks || quantity.benchmarks.length === 0) {
      return null;
    }

    const numericVal = parseFloat(val);
    if (isNaN(numericVal) || numericVal <= 0) {
      return quantity.benchmarks[0];
    }

    const list = quantity.benchmarks;
    let closest = list[0];
    let minLogDiff = Math.abs(Math.log10(numericVal) - Math.log10(Math.max(1e-50, closest.val)));

    list.forEach(b => {
      const logDiff = Math.abs(Math.log10(numericVal) - Math.log10(Math.max(1e-50, b.val)));
      if (logDiff < minLogDiff) {
        minLogDiff = logDiff;
        closest = b;
      }
    });

    return closest;
  }

  renderBenchmarkCard(match, container, quantity, currentVal, onBenchmarkSelect) {
    if (!container) return;
    if (!quantity || !quantity.benchmarks || quantity.benchmarks.length === 0) {
      container.innerHTML = '';
      return;
    }

    const benchmarks = quantity.benchmarks;
    const closestItem = match || benchmarks[0];

    let chipsHtml = '';
    benchmarks.forEach((b, idx) => {
      const isSelected = b.label === closestItem.label;
      const formattedVal = this.formatExponentClean(b.val);
      chipsHtml += `
        <button class="benchmark-chip-btn ${isSelected ? 'active-benchmark' : ''}" data-idx="${idx}" title="${b.desc}">
          <span class="chip-val">${formattedVal} ${b.unit}</span>
          <span class="chip-label">${b.label.split(' (')[0]}</span>
        </button>
      `;
    });

    container.innerHTML = `
      <div class="cosmic-spectrum-card" style="background: linear-gradient(135deg, rgba(19, 27, 46, 0.95), rgba(30, 41, 59, 0.9)); border: 1.5px solid var(--neon-cyan); border-radius: var(--radius-lg); padding: 1rem; margin-top: 1rem; box-shadow: 0 4px 16px rgba(0, 240, 255, 0.15);">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.65rem;">
          <div style="display:flex; align-items:center; gap:0.4rem;">
            <span style="background:rgba(0,240,255,0.2); color:var(--neon-cyan); padding:0.2rem 0.6rem; border-radius:var(--radius-pill); font-size:0.75rem; font-weight:800;">
              <i class="fa-solid fa-earth-asia"></i> વૈશ્વિક પરિમાણ સંદર્ભ (Cosmic Range Spectrum)
            </span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(૦ થી મહત્તમ ઉપલબ્ધ મૂલ્યો)</span>
          </div>
          <span style="font-size:0.72rem; color:var(--neon-amber); font-weight:700;">
            <i class="fa-solid fa-hand-pointer"></i> કોઈપણ મૂલ્ય પર ક્લિક કરી સિમ્યુલેટ કરો
          </span>
        </div>

        <!-- Closest Milestone Hero Display with Exponent Form -->
        <div style="background:rgba(15, 23, 42, 0.85); border:1px solid rgba(0,240,255,0.3); border-radius:var(--radius-md); padding:0.75rem 0.9rem; margin-bottom:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">
            <div style="flex:1; min-width:200px;">
              <span style="font-size:0.7rem; font-weight:800; color:var(--neon-cyan); text-transform:uppercase;">સૌથી નજીકનું વાસ્તવિક માપદંડ (Closest Milestone):</span>
              <h4 style="font-size:1.05rem; font-weight:900; color:#ffffff; margin:0.15rem 0;">${closestItem.label}</h4>
              <p style="font-size:0.825rem; color:var(--text-secondary); line-height:1.35;">${closestItem.desc}</p>
            </div>
            <div style="background:rgba(0,255,136,0.15); border:1.5px solid var(--neon-green); border-radius:var(--radius-md); padding:0.45rem 0.85rem; text-align:center; min-width:110px;">
              <span style="font-size:0.65rem; color:var(--neon-green); font-weight:800; display:block;">મૂલ્ય (Value)</span>
              <span style="font-family:var(--font-mono); font-size:1.1rem; font-weight:900; color:var(--neon-green);">
                ${this.formatExponentHtml(closestItem.val)} ${closestItem.unit}
              </span>
            </div>
          </div>
        </div>

        <!-- Horizontal Scrollable Range Spectrum -->
        <div id="spectrumScrollRow" class="spectrum-scroll-row" style="display:flex; gap:0.45rem; overflow-x:auto; white-space:nowrap; padding-bottom:6px; scrollbar-width:thin;">
          ${chipsHtml}
        </div>
      </div>
    `;

    // Bind click events on chips
    const scrollRow = container.querySelector('#spectrumScrollRow');
    container.querySelectorAll('.benchmark-chip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(btn.dataset.idx, 10);
        const selected = benchmarks[idx];

        // Smooth scroll chip into center of horizontal container without jumping whole page
        if (scrollRow) {
          const btnOffset = btn.offsetLeft - scrollRow.offsetLeft;
          const targetScroll = btnOffset - (scrollRow.clientWidth / 2) + (btn.clientWidth / 2);
          scrollRow.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }

        container.querySelectorAll('.benchmark-chip-btn').forEach(b => b.classList.remove('active-benchmark'));
        btn.classList.add('active-benchmark');

        if (selected && typeof onBenchmarkSelect === 'function') {
          onBenchmarkSelect(selected);
        }
      });
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProximityMatcherEngine;
}
