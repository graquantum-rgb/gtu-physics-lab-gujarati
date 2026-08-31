/**
 * Interactive Fluid Mechanics Simulators (ગુજરાતી આવૃત્તિ - Gujarati Edition v13.0)
 * 1. Reynolds Flow Simulator (કણ સ્વરૂપ & તરંગ સ્વરૂપ - Particle & Streamline Wave Modes)
 * 2. Stokes' Law Terminal Velocity (Tall 440px Tube + Gorgeous 3D Metallic Finish Sphere + Vector Forces Fg, Fb, Fd)
 * 3. Capillary Action Simulator (Large 440x340px Container + Dynamic Jurin's Law Height + Realistic Meniscus)
 * 4. Contact Angle & Wetting Simulator (સ્પર્શકોણ θ અને યંગનું સમીકરણ ડ્રોપલેટ સિમ્યુલેશન)
 */

class FluidMechanicsSimulators {
  constructor(physicsData) {
    this.data = physicsData;
    this.presets = this.data.liquidPresets || [];
    this.particles = [];
    this.reynoldsMode = 'particles'; // 'particles' or 'waves'
    this.time = 0;
    this.stokesSphereY = 160;
    this.stokesBubbles = [];
    this.capillaryCurrentHeight = 0;

    this.initParticles();
    this.initStokesBubbles();
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: Math.random() * 340,
        y: 35 + Math.random() * 110,
        vx: 1.5 + Math.random() * 2.5,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1.5 + Math.random() * 2.2,
        color: '#00f0ff',
        layer: Math.random()
      });
    }
  }

  initStokesBubbles() {
    this.stokesBubbles = [];
    for (let i = 0; i < 20; i++) {
      this.stokesBubbles.push({
        x: 35 + Math.random() * 110,
        y: 40 + Math.random() * 350,
        speed: 0.3 + Math.random() * 0.8,
        r: 1 + Math.random() * 2.5
      });
    }
  }

  setReynoldsMode(mode) {
    this.reynoldsMode = mode === 'waves' ? 'waves' : 'particles';
  }

  calculateReynolds(velocity, diameter, density, viscosity) {
    const v = parseFloat(velocity) || 0;
    const D = parseFloat(diameter) || 0.05;
    const rho = parseFloat(density) || 1000;
    const eta = parseFloat(viscosity) || 0.001;

    const re = eta > 0 ? (rho * v * D) / eta : 0;
    const vc = rho * D > 0 ? (2000 * eta) / (rho * D) : 0;

    let regime = 'laminar';
    let regimeBadge = 'ધારારેખી વહન (Laminar Flow Re < 2000)';
    let color = '#00ff88';

    if (re >= 2000 && re <= 3000) {
      regime = 'transitional';
      regimeBadge = 'સંક્રાંતિ વહન (Transitional Flow 2000-3000)';
      color = '#ffb700';
    } else if (re > 3000) {
      regime = 'turbulent';
      regimeBadge = 'પ્રક્ષુબ્ધ વહન (Turbulent Flow Re > 3000)';
      color = '#ff0055';
    }

    return {
      re: Math.round(re),
      vc: vc.toFixed(3),
      regime,
      regimeBadge,
      color,
      v,
      D,
      rho,
      eta
    };
  }

  renderReynoldsCanvas(canvas, currentParams) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = 340;
    const h = 180;
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const re = currentParams?.re || 2000;
    const isTurbulent = re > 3000;
    const isTransitional = re >= 2000 && re <= 3000;
    const speedMult = Math.min(4, Math.max(0.5, (currentParams?.v || 1.5) * 1.2));

    // Pipe Interior Background
    const pipeTop = 24;
    const pipeBottom = h - 24;
    const pipeHeight = pipeBottom - pipeTop;
    const pipeCenterY = (pipeTop + pipeBottom) / 2;

    const bgGrad = ctx.createLinearGradient(0, pipeTop, 0, pipeBottom);
    bgGrad.addColorStop(0, '#0c1527');
    bgGrad.addColorStop(0.5, '#13233f');
    bgGrad.addColorStop(1, '#0c1527');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(8, pipeTop, w - 16, pipeHeight);

    // Pipe Solid Wall Borders
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(8, pipeTop);
    ctx.lineTo(w - 8, pipeTop);
    ctx.moveTo(8, pipeBottom);
    ctx.lineTo(w - 8, pipeBottom);
    ctx.stroke();

    // Metallic Pipe Hatching Marks
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1.5;
    for (let x = 15; x < w - 15; x += 22) {
      ctx.beginPath();
      ctx.moveTo(x, pipeTop - 8);
      ctx.lineTo(x + 10, pipeTop);
      ctx.moveTo(x, pipeBottom);
      ctx.lineTo(x + 10, pipeBottom + 8);
      ctx.stroke();
    }

    this.time += 0.04 * speedMult;

    // --- MODE 1: WAVE STREAMLINE MODE (તરંગ સ્વરૂપ) ---
    if (this.reynoldsMode === 'waves') {
      const numLines = 9;
      const spacing = pipeHeight / (numLines + 1);

      for (let i = 1; i <= numLines; i++) {
        const baseCy = pipeTop + i * spacing;
        const distFromCenter = Math.abs(baseCy - pipeCenterY) / (pipeHeight / 2);
        const velocityProfile = Math.max(0.2, 1 - Math.pow(distFromCenter, 2));

        let strokeColor = '#00f0ff';
        let lineAmp = 0;
        let lineFreq = 0.03;

        if (isTurbulent) {
          strokeColor = i % 2 === 0 ? '#ff0055' : '#ff5500';
          lineAmp = 7.5 * (1 + 0.3 * Math.sin(this.time * 2 + i));
          lineFreq = 0.06 + 0.02 * (i % 3);
        } else if (isTransitional) {
          strokeColor = '#ffb700';
          lineAmp = 3.0;
          lineFreq = 0.04;
        } else {
          // Pure Laminar: Parallel streamlines
          strokeColor = '#00ff88';
          lineAmp = 0.6;
          lineFreq = 0.02;
        }

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = isTurbulent ? 2 : 2.5;
        ctx.beginPath();

        for (let x = 12; x <= w - 12; x += 4) {
          const waveOffset = Math.sin(x * lineFreq - this.time * 3 * velocityProfile + i * 0.8) * lineAmp;
          const y = baseCy + waveOffset;
          if (x === 12) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Moving Wave Front Glow Dot on each line
        const dotX = 12 + ((this.time * 40 * velocityProfile + i * 35) % (w - 30));
        const dotY = baseCy + Math.sin(dotX * lineFreq - this.time * 3 * velocityProfile + i * 0.8) * lineAmp;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = strokeColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    } 
    // --- MODE 2: PARTICLE MODE (કણ સ્વરૂપ) ---
    else {
      this.particles.forEach(p => {
        const distFromCenter = Math.abs(p.y - pipeCenterY) / (pipeHeight / 2);
        const velocityProfile = Math.max(0.2, 1 - Math.pow(distFromCenter, 2));

        if (isTurbulent) {
          p.x += (p.vx * speedMult * velocityProfile) + (Math.random() - 0.5) * 3.5;
          p.y += (Math.random() - 0.5) * 3.2 + Math.sin(this.time * 4 + p.x * 0.05) * 1.5;
          p.color = Math.random() > 0.4 ? '#ff0055' : '#ff7700';
        } else if (isTransitional) {
          p.x += (p.vx * speedMult * velocityProfile) + (Math.random() - 0.5) * 1.0;
          p.y += (Math.random() - 0.5) * 0.8 + Math.sin(this.time * 2 + p.x * 0.03) * 0.6;
          p.color = '#ffb700';
        } else {
          // Laminar
          p.x += p.vx * speedMult * velocityProfile;
          p.y += (Math.random() - 0.5) * 0.05;
          p.color = '#00ff88';
        }

        if (p.y < pipeTop + 4) p.y = pipeTop + 5;
        if (p.y > pipeBottom - 4) p.y = pipeBottom - 5;

        if (p.x > w - 12) {
          p.x = 12;
          p.y = pipeTop + 6 + Math.random() * (pipeHeight - 12);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    ctx.restore();
  }

  calculateStokes(radius, sphereDensity, fluidDensity, viscosity, gravity = 9.80665) {
    const r = parseFloat(radius) || 0.005;
    const rhoS = parseFloat(sphereDensity) || 7850;
    const rhoF = parseFloat(fluidDensity) || 1260;
    const eta = parseFloat(viscosity) || 1.412;
    const g = parseFloat(gravity) || 9.80665;

    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    const mass = volume * rhoS;
    const fg = mass * g;
    const fb = volume * rhoF * g;

    const diff = rhoS - rhoF;
    const isRising = diff < 0;

    let vt = 0;
    if (eta > 0) {
      vt = ((2 / 9) * Math.pow(r, 2) * diff * g) / eta;
    }

    const fdTerminal = 6 * Math.PI * eta * r * Math.abs(vt);

    return {
      r,
      rhoS,
      rhoF,
      eta,
      g,
      vt,
      formattedVt: vt.toFixed(4),
      isRising,
      fg,
      fb,
      fdTerminal,
      motionBadge: isRising ? 'ઉપર તરફ તરશે (RISING UPWARDS: ρ_s < ρ_0)' : 'નીચે તરફ ડૂબશે (FALLING: ρ_s > ρ_0)'
    };
  }

  /**
   * Enhanced Stokes' Law Canvas:
   * - Tall 440px Glass Cylinder Tube
   * - 3D Metallic Finish Sphere with Specular Highlight & Rim Reflection
   */
  renderStokesCanvas(canvas, stokesData) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = 240;
    const h = 440; // Increased length of tube
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    // Glass Cylinder Container (Tall Tube)
    const jarLeft = 32;
    const jarTop = 18;
    const jarWidth = 176;
    const jarHeight = h - 36;
    const fluidTop = 45;

    // Cylinder Background Glass
    ctx.fillStyle = '#0a101f';
    ctx.fillRect(jarLeft, jarTop, jarWidth, jarHeight);

    // Liquid Body Gradient
    const fluidGrad = ctx.createLinearGradient(jarLeft, fluidTop, jarLeft + jarWidth, jarTop + jarHeight);
    fluidGrad.addColorStop(0, 'rgba(2, 132, 199, 0.5)');
    fluidGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.25)');
    fluidGrad.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
    ctx.fillStyle = fluidGrad;
    ctx.fillRect(jarLeft + 3, fluidTop, jarWidth - 6, jarHeight - (fluidTop - jarTop) - 3);

    // Glass Tube Heavy Outer Bevel
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.strokeRect(jarLeft, jarTop, jarWidth, jarHeight);

    // Glass Specular Sheen Stripe on Left
    const sheenGrad = ctx.createLinearGradient(jarLeft, 0, jarLeft + 30, 0);
    sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
    sheenGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = sheenGrad;
    ctx.fillRect(jarLeft + 4, jarTop + 4, 25, jarHeight - 8);

    // Liquid Meniscus Top Curve
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(jarLeft + 3, fluidTop);
    ctx.quadraticCurveTo(jarLeft + jarWidth / 2, fluidTop + 8, jarLeft + jarWidth - 3, fluidTop);
    ctx.stroke();

    // Measurement Scale Graduations on Glass Tube
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = 'bold 9px JetBrains Mono';
    for (let y = fluidTop + 25; y < jarTop + jarHeight - 20; y += 35) {
      const cmVal = Math.round((jarTop + jarHeight - y) / 7.5);
      ctx.beginPath();
      ctx.moveTo(jarLeft + 4, y);
      ctx.lineTo(jarLeft + 16, y);
      ctx.stroke();
      ctx.fillText(`${cmVal} cm`, jarLeft + 20, y + 3);
    }

    // Animated Micro Fluid Bubbles
    this.stokesBubbles.forEach(b => {
      b.y -= b.speed;
      if (b.y < fluidTop + 6) {
        b.y = jarTop + jarHeight - 12;
        b.x = jarLeft + 15 + Math.random() * (jarWidth - 30);
      }
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.fill();
    });

    // Animate Falling or Rising Sphere
    const vt = stokesData?.vt || 0.05;
    const isRising = stokesData?.isRising || false;
    const speed = Math.max(0.3, Math.min(3.0, Math.abs(vt) * 70));

    if (isRising) {
      this.stokesSphereY -= speed * 0.4;
      if (this.stokesSphereY < fluidTop + 25) {
        this.stokesSphereY = jarTop + jarHeight - 45;
      }
    } else {
      this.stokesSphereY += speed * 0.4;
      if (this.stokesSphereY > jarTop + jarHeight - 45) {
        this.stokesSphereY = fluidTop + 25;
      }
    }

    const sphereCenterX = jarLeft + jarWidth / 2 + 10;
    const sphereRadius = Math.max(12, Math.min(24, (stokesData?.r || 0.005) * 2200));

    // --- 3D METALLIC FINISH SPHERE RENDERING ---
    // 1. Soft Drop Shadow below sphere
    ctx.beginPath();
    ctx.ellipse(sphereCenterX, this.stokesSphereY + sphereRadius + 6, sphereRadius * 0.8, sphereRadius * 0.25, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    // 2. Base Metallic Multi-Stop Radial Gradient (3D Sphere Lighting)
    const lightOffsetX = sphereRadius * 0.35;
    const lightOffsetY = sphereRadius * 0.35;
    const metalGrad = ctx.createRadialGradient(
      sphereCenterX - lightOffsetX, this.stokesSphereY - lightOffsetY, sphereRadius * 0.08,
      sphereCenterX, this.stokesSphereY, sphereRadius
    );

    // Color palette based on sphere density (Steel vs Glass vs Lead vs Cork)
    const rhoS = stokesData?.rhoS || 7850;
    if (rhoS > 10000) {
      // Heavy Lead: Dark Gunmetal Finish
      metalGrad.addColorStop(0, '#f8fafc');
      metalGrad.addColorStop(0.15, '#cbd5e1');
      metalGrad.addColorStop(0.5, '#64748b');
      metalGrad.addColorStop(0.85, '#334155');
      metalGrad.addColorStop(1, '#0f172a');
    } else if (rhoS < 1000) {
      // Cork / Wood: Warm Amber Tone
      metalGrad.addColorStop(0, '#fef08a');
      metalGrad.addColorStop(0.2, '#f59e0b');
      metalGrad.addColorStop(0.7, '#b45309');
      metalGrad.addColorStop(1, '#451a03');
    } else if (rhoS < 3000) {
      // Glass: Crystal Cyan Gloss
      metalGrad.addColorStop(0, '#ffffff');
      metalGrad.addColorStop(0.2, '#bae6fd');
      metalGrad.addColorStop(0.65, '#0284c7');
      metalGrad.addColorStop(1, '#0c4a6e');
    } else {
      // Polished Steel / Chrome Ball Bearing
      metalGrad.addColorStop(0, '#ffffff');
      metalGrad.addColorStop(0.18, '#e2e8f0');
      metalGrad.addColorStop(0.45, '#94a3b8');
      metalGrad.addColorStop(0.75, '#475569');
      metalGrad.addColorStop(0.95, '#1e293b');
      metalGrad.addColorStop(1, '#0f172a');
    }

    ctx.beginPath();
    ctx.arc(sphereCenterX, this.stokesSphereY, sphereRadius, 0, Math.PI * 2);
    ctx.fillStyle = metalGrad;
    ctx.shadowBlur = 12;
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.fill();
    ctx.shadowBlur = 0;

    // 3. Specular Metallic Hotspot Glint (White 3D Reflection)
    ctx.beginPath();
    ctx.arc(sphereCenterX - lightOffsetX, this.stokesSphereY - lightOffsetY, sphereRadius * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fill();

    // 4. Metallic Rim Edge Reflection
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // --- 3 Vector Force Arrows on Sphere: Fg (down), Fb (up), Fd (opposite to motion) ---
    const arrowLen = 38;

    // 1. Gravity Fg (Downwards Arrow - Red)
    this.drawVectorArrow(ctx, sphereCenterX, this.stokesSphereY, sphereCenterX, this.stokesSphereY + arrowLen, '#ff0055', 'Fg');

    // 2. Buoyancy Fb (Upwards Arrow - Cyan)
    this.drawVectorArrow(ctx, sphereCenterX - 16, this.stokesSphereY, sphereCenterX - 16, this.stokesSphereY - arrowLen * 0.7, '#00f0ff', 'Fb');

    // 3. Drag Fd (Opposite to velocity - Green)
    if (isRising) {
      this.drawVectorArrow(ctx, sphereCenterX + 16, this.stokesSphereY, sphereCenterX + 16, this.stokesSphereY + arrowLen * 0.65, '#00ff88', 'Fd');
    } else {
      this.drawVectorArrow(ctx, sphereCenterX + 16, this.stokesSphereY, sphereCenterX + 16, this.stokesSphereY - arrowLen * 0.65, '#00ff88', 'Fd');
    }

    ctx.restore();
  }

  drawVectorArrow(ctx, fromX, fromY, toX, toY, color, label) {
    const headLen = 7;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.5;

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    ctx.font = 'bold 10px JetBrains Mono';
    ctx.fillText(label, toX + 4, toY + 3);
  }

  calculateCapillary(liquidId, diameterCm = 0.1) {
    const liquid = this.presets.find(l => l.id === liquidId) || this.presets[0];
    const rM = (diameterCm / 2) / 100;
    const g = 9.80665;
    const thetaRad = (liquid.angle * Math.PI) / 180;
    const cosTheta = Math.cos(thetaRad);

    const hM = (2 * liquid.st * cosTheta) / (liquid.rho * g * rM);
    const hMm = hM * 1000;

    const isDepression = hM < 0;

    return {
      liquid,
      diameterCm,
      rM,
      hM,
      hMm: hMm.toFixed(2),
      cosTheta: cosTheta.toFixed(3),
      isDepression,
      behaviorTitle: isDepression ? 'કેશવાહિનીમાં સ્તર નીચે ઉતરવું (Capillary Depression)' : 'કેશવાહિનીમાં સ્તર ઉપર ચઢવું (Capillary Rise)',
      meniscusType: isDepression ? 'બહિર્ગોળ મેનિસ્કસ (Convex Meniscus)' : 'અંતર્ગોળ મેનિસ્કસ (Concave Meniscus)'
    };
  }

  /**
   * Enhanced Large Capillary Action Simulation Canvas (440 x 340 px)
   */
  renderCapillaryCanvas(canvas, capData) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = 440; // Enlarged width
    const h = 340; // Enlarged height
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const troughTop = 180;
    const troughHeight = 130;
    const liquidColor = capData?.liquid?.color || '#00f0ff';
    const isDepression = capData?.isDepression || false;
    const targetHMm = parseFloat(capData?.hMm) || 15;

    // Smooth transition for liquid column height
    this.capillaryCurrentHeight += (targetHMm - this.capillaryCurrentHeight) * 0.1;

    // Wide Trough / Beaker Body
    ctx.fillStyle = '#0a101f';
    ctx.fillRect(25, troughTop, w - 50, troughHeight);

    const troughGrad = ctx.createLinearGradient(25, troughTop, 25, troughTop + troughHeight);
    troughGrad.addColorStop(0, liquidColor + '66');
    troughGrad.addColorStop(0.7, liquidColor + '33');
    troughGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = troughGrad;
    ctx.fillRect(25, troughTop, w - 50, troughHeight);

    // Beaker Heavy Glass Border
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.strokeRect(25, troughTop, w - 50, troughHeight);

    // Beaker Liquid Free Surface Level
    ctx.strokeStyle = liquidColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(25, troughTop);
    ctx.lineTo(w - 25, troughTop);
    ctx.stroke();

    // Capillary Glass Tube Dimensions (Taller & Proportional)
    const tubeW = Math.max(14, Math.min(36, (capData?.diameterCm || 0.1) * 160));
    const tubeX = (w - tubeW) / 2;
    const tubeTop = 30;
    const tubeBottom = troughTop + troughHeight - 20;

    // Tube Glass Background
    ctx.fillStyle = 'rgba(10, 16, 31, 0.95)';
    ctx.fillRect(tubeX, tubeTop, tubeW, tubeBottom - tubeTop);

    // Calculate Column Liquid Level (Scaling: 30 mm = 100px)
    const pxHeight = Math.max(-65, Math.min(130, (this.capillaryCurrentHeight / 20) * 65));
    const liquidColTop = troughTop - pxHeight;

    // Liquid Column inside Capillary Tube
    ctx.fillStyle = liquidColor + 'dd';
    ctx.fillRect(tubeX + 2, Math.min(troughTop, liquidColTop), tubeW - 4, Math.abs(pxHeight) + (tubeBottom - troughTop));

    // Realistic Meniscus Curve inside tube
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    if (isDepression) {
      // Convex Meniscus (e.g. Mercury)
      ctx.moveTo(tubeX + 2, liquidColTop);
      ctx.quadraticCurveTo(tubeX + tubeW / 2, liquidColTop - 8, tubeX + tubeW - 2, liquidColTop);
    } else {
      // Concave Meniscus (e.g. Water)
      ctx.moveTo(tubeX + 2, liquidColTop);
      ctx.quadraticCurveTo(tubeX + tubeW / 2, liquidColTop + 8, tubeX + tubeW - 2, liquidColTop);
    }
    ctx.stroke();

    // Capillary Glass Tube Borders & Highlights
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.strokeRect(tubeX, tubeTop, tubeW, tubeBottom - tubeTop);

    // Height Measurement Bracket & Label (h)
    const bracketX = tubeX + tubeW + 20;
    ctx.strokeStyle = '#00ff88';
    ctx.fillStyle = '#00ff88';
    ctx.lineWidth = 2;

    // Vertical line
    ctx.beginPath();
    ctx.moveTo(bracketX, troughTop);
    ctx.lineTo(bracketX, liquidColTop);
    ctx.stroke();

    // Top & bottom horizontal ticks
    ctx.beginPath();
    ctx.moveTo(bracketX - 8, troughTop);
    ctx.lineTo(bracketX + 8, troughTop);
    ctx.moveTo(bracketX - 8, liquidColTop);
    ctx.lineTo(bracketX + 8, liquidColTop);
    ctx.stroke();

    // Text Badge
    ctx.font = 'bold 12px JetBrains Mono';
    ctx.fillText(`h = ${targetHMm.toFixed(2)} mm`, bracketX + 14, (troughTop + liquidColTop) / 2 + 4);

    ctx.restore();
  }

  calculateContactAngle(angleDeg) {
    const angle = parseFloat(angleDeg) || 0;
    let classification = '';
    let color = '';
    let description = '';

    if (angle === 0) {
      classification = 'સંપૂર્ણ ભીંજવનાર (Complete Wetting θ = 0°)';
      color = '#00ff88';
      description = 'પ્રવાહી ઘન સપાટી પર સંપૂર્ણપણે ફેલાઈ જાય છે (દા.ત. શુદ્ધ પાણી અને સ્વચ્છ કાચ).';
    } else if (angle < 90) {
      classification = 'હાઈડ્રોફિલિક / આંશિક ભીંજવનાર (Hydrophilic θ < 90°)';
      color = '#00f0ff';
      description = 'પ્રવાહી ઘન સપાટીને ભીંજવે છે, સંસક્તિ બળ કરતા આસક્તિ બળ વધુ હોય છે (અંતર્ગોળ મેનિસ્કસ).';
    } else if (angle === 90) {
      classification = 'તટસ્થ સ્થિતિ (Neutral θ = 90°)';
      color = '#ffb700';
      description = 'આસક્તિ અને સંસક્તિ બળો સમાન હોય છે (સપાટ મેનિસ્કસ).';
    } else {
      classification = 'હાઈડ્રોફોબિક / ભીંજવતું નથી (Hydrophobic θ > 90°)';
      color = '#ff0055';
      description = 'પ્રવાહી સપાટીને ભીંજવતું નથી, બહિર્ગોળ મેનિસ્કસ બનાવે છે (દા.ત. પારો અને કાચ θ = 135°).';
    }

    return {
      angle,
      classification,
      color,
      description
    };
  }

  renderContactAngleCanvas(canvas, contactData) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = 340;
    const h = 200;
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const groundY = 150;
    const theta = (contactData?.angle || 35) * (Math.PI / 180);
    const dropColor = contactData?.color || '#00f0ff';

    // Solid Surface (Substrate)
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(20, groundY, w - 40, 40);

    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(20, groundY);
    ctx.lineTo(w - 20, groundY);
    ctx.stroke();

    // Hatching on Solid Plate
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.4)';
    ctx.lineWidth = 1.5;
    for (let x = 25; x < w - 25; x += 15) {
      ctx.beginPath();
      ctx.moveTo(x, groundY + 1);
      ctx.lineTo(x - 8, groundY + 16);
      ctx.stroke();
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px JetBrains Mono';
    ctx.fillText('ઘન સપાટી (Solid Substrate)', 30, groundY + 28);

    // Droplet Geometry based on theta
    const centerX = w / 2;
    const dropWidth = 140 * Math.sin(Math.max(0.1, theta / 2));
    const dropHeight = Math.max(8, 70 * (1 - Math.cos(theta)));

    // Droplet Shape
    ctx.beginPath();
    ctx.fillStyle = dropColor + '66';
    ctx.strokeStyle = dropColor;
    ctx.lineWidth = 2.5;

    if (contactData?.angle === 0) {
      // Flat Film
      ctx.rect(centerX - 80, groundY - 6, 160, 6);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.moveTo(centerX - dropWidth, groundY);
      ctx.bezierCurveTo(
        centerX - dropWidth * 0.7, groundY - dropHeight * 1.3,
        centerX + dropWidth * 0.7, groundY - dropHeight * 1.3,
        centerX + dropWidth, groundY
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Tangent Line & Contact Angle Arc
    if (contactData?.angle > 0 && contactData?.angle <= 175) {
      const contactX = centerX - dropWidth;
      const contactY = groundY;
      const tangentLen = 50;

      const tangAngle = -theta;
      const endX = contactX + tangentLen * Math.cos(tangAngle);
      const endY = contactY + tangentLen * Math.sin(tangAngle);

      // Tangent line
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(contactX, contactY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Arc
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(contactX, contactY, 24, 0, tangAngle, true);
      ctx.stroke();

      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.fillText(`θ = ${contactData.angle}°`, contactX + 28, contactY - 10);
    }

    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FluidMechanicsSimulators;
}
