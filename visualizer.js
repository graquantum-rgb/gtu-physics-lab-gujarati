/**
 * Interactive Physics Counter-Balance Game (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.1)
 * - ગુજરાતી લેબલ્સ અને સંતુલન સ્થિતિ (Equilibrium labels in Gujarati)
 * - મોટા ફોન્ટ્સ અને રંગીન ઊંચા એરો (Large fonts with colorful magnitude arrows)
 * - મૂલ્યો અને એકમો અંગ્રેજીમાં (Values & units in standard English)
 */

if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
    if (typeof radii === 'number') radii = [radii, radii, radii, radii];
    if (!Array.isArray(radii)) radii = [5, 5, 5, 5];
    const r = Math.min(radii[0] || 0, w / 2, h / 2);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
}

class PhysicsVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.animationId = null;

    this.state = {
      quantityName: 'બળ (Force)',
      leftVal: 1,
      leftUnitLabel: 'MN',
      leftPrefixSym: 'M',
      leftPrefixFactor: 1e6,
      leftAbsoluteMagnitude: 1e6,
      rightVal: 1e18,
      rightUnitLabel: 'pN',
      rightPrefixSym: 'p',
      rightPrefixFactor: 1e-12,
      rightAbsoluteMagnitude: 1e6,
      baseUnitSymbol: 'N',
      beamAngle: 0,
      targetAngle: 0,
      isBalanced: true,
      fireworks: [],
      time: 0,
      leftArrowHeight: 75,
      rightArrowHeight: 75
    };

    this.initCanvas();
    this.startLoop();
  }

  initCanvas() {
    if (!this.canvas) return;
    try {
      const parent = this.canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(280, rect.width > 0 ? rect.width : 360);
      const h = w < 440 ? 290 : 320;
      this.canvas.width = w * dpr;
      this.canvas.height = h * dpr;
      this.canvas.style.width = `${w}px`;
      this.canvas.style.height = `${h}px`;
      if (this.ctx) {
        this.ctx.resetTransform?.();
        this.ctx.scale(dpr, dpr);
      }
    } catch (e) {
      console.warn('Canvas init error', e);
    }
  }

  triggerFireworks() {
    this.state.fireworks = [];
    const width = this.canvas?.parentElement?.clientWidth || 360;
    const colors = ['#00f0ff', '#bd00ff', '#00ff88', '#ffb700', '#ff0055'];

    for (let f = 0; f < 4; f++) {
      const originX = width * 0.2 + Math.random() * width * 0.6;
      const originY = 30 + Math.random() * 40;
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 * i) / 30;
        const speed = 2.5 + Math.random() * 4.5;
        this.state.fireworks.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2.2 + Math.random() * 2.8,
          alpha: 1.0
        });
      }
    }
  }

  updateGameStateWithUnits(qtyName, leftVal, leftPrefixSym, leftPrefixFactor, rightVal, rightPrefixSym, rightPrefixFactor, baseUnitSymbol) {
    this.state.quantityName = qtyName;
    this.state.leftVal = parseFloat(leftVal) || 0;
    this.state.rightVal = parseFloat(rightVal) || 0;
    this.state.baseUnitSymbol = baseUnitSymbol || 'N';

    const leftPrefixF = parseFloat(leftPrefixFactor) || 1;
    const rightPrefixF = parseFloat(rightPrefixFactor) || 1;

    this.state.leftPrefixSym = leftPrefixSym || '';
    this.state.rightPrefixSym = rightPrefixSym || '';
    this.state.leftPrefixFactor = leftPrefixF;
    this.state.rightPrefixFactor = rightPrefixF;

    this.state.leftUnitLabel = `${this.state.leftPrefixSym}${this.state.baseUnitSymbol}`;
    this.state.rightUnitLabel = `${this.state.rightPrefixSym}${this.state.baseUnitSymbol}`;

    const leftTotal = this.state.leftVal * leftPrefixF;
    const rightTotal = this.state.rightVal * rightPrefixF;

    this.state.leftAbsoluteMagnitude = leftTotal;
    this.state.rightAbsoluteMagnitude = rightTotal;

    const relDiff = leftTotal !== 0 ? (rightTotal - leftTotal) / leftTotal : rightTotal !== 0 ? 1 : 0;
    const isExact = Math.abs(relDiff) < 0.0005;

    this.state.targetAngle = Math.max(-0.35, Math.min(0.35, relDiff * 0.4));

    const baseArrowH = 75;
    if (isExact || (leftTotal === 0 && rightTotal === 0)) {
      this.state.leftArrowHeight = baseArrowH;
      this.state.rightArrowHeight = baseArrowH;
    } else if (leftTotal <= 0 && rightTotal > 0) {
      this.state.leftArrowHeight = 20;
      this.state.rightArrowHeight = baseArrowH + 45;
    } else if (rightTotal <= 0 && leftTotal > 0) {
      this.state.leftArrowHeight = baseArrowH + 45;
      this.state.rightArrowHeight = 20;
    } else {
      const logRatio = Math.log10(leftTotal / rightTotal);
      const delta = Math.max(-45, Math.min(45, logRatio * 18));
      this.state.leftArrowHeight = Math.max(22, Math.min(125, baseArrowH + delta));
      this.state.rightArrowHeight = Math.max(22, Math.min(125, baseArrowH - delta));
    }

    const wasBalanced = this.state.isBalanced;
    this.state.isBalanced = isExact;

    if (isExact && !wasBalanced && leftTotal > 0) {
      this.triggerFireworks();
      return true;
    }
    return false;
  }

  startLoop() {
    const loop = () => {
      this.render();
      this.animationId = requestAnimationFrame(loop);
    };
    loop();
  }

  render() {
    if (!this.ctx || !this.canvas) return;
    try {
      const parentW = this.canvas.parentElement?.clientWidth || 360;
      const width = Math.max(280, parentW);
      const height = width < 440 ? 290 : 320;
      const ctx = this.ctx;

      ctx.clearRect(0, 0, width, height);
      this.state.time += 0.03;

      const bob = this.state.isBalanced ? Math.sin(this.state.time * 2.5) * 0.008 : 0;
      this.state.beamAngle += (this.state.targetAngle + bob - this.state.beamAngle) * 0.15;

      this.drawScale(ctx, width, height);

      if (this.state.fireworks.length > 0) {
        this.drawFireworks(ctx);
      }
    } catch (e) {
      console.warn('Render error', e);
    }
  }

  drawScale(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height * 0.48;
    const beamLength = Math.min(width * 0.68, 300);
    const angle = this.state.beamAngle;

    // Fulcrum
    ctx.save();
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 35, height - 16);
    ctx.lineTo(centerX + 35, height - 16);
    ctx.lineTo(centerX + 14, centerY);
    ctx.lineTo(centerX - 14, centerY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(centerX - 45, height - 16, 90, 10);
    ctx.strokeStyle = '#64748b';
    ctx.strokeRect(centerX - 45, height - 16, 90, 10);
    ctx.restore();

    // Center Pivot
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
    ctx.fillStyle = this.state.isBalanced ? '#00ff88' : '#ffb700';
    ctx.shadowBlur = 12;
    ctx.shadowColor = ctx.fillStyle;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.restore();

    // Beam
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    const grad = ctx.createLinearGradient(-beamLength / 2, 0, beamLength / 2, 0);
    grad.addColorStop(0, '#00f0ff');
    grad.addColorStop(0.5, '#475569');
    grad.addColorStop(1, '#bd00ff');

    ctx.fillStyle = grad;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-beamLength / 2, -5, beamLength, 10, 5);
    } else {
      ctx.rect(-beamLength / 2, -5, beamLength, 10);
    }
    ctx.fill();

    ctx.strokeStyle = this.state.isBalanced ? '#00ff88' : '#ff0055';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 6;
    ctx.shadowColor = ctx.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -36);
    ctx.stroke();

    ctx.restore();

    // Pan anchors
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const leftAnchorX = centerX + (-beamLength / 2 + 10) * cosA;
    const leftAnchorY = centerY + (-beamLength / 2 + 10) * sinA;

    const rightAnchorX = centerX + (beamLength / 2 - 10) * cosA;
    const rightAnchorY = centerY + (beamLength / 2 - 10) * sinA;

    const stringLength = width < 380 ? 44 : 50;
    const panWidth = width < 380 ? 64 : 74;

    this.drawPan(ctx, leftAnchorX, leftAnchorY, stringLength, panWidth, '#00f0ff', 'ડાબું પલ્લું', this.state.leftVal, this.state.leftUnitLabel);
    this.drawPan(ctx, rightAnchorX, rightAnchorY, stringLength, panWidth, '#bd00ff', 'જમણું પલ્લું', this.state.rightVal, this.state.rightUnitLabel);

    this.drawSideMagnitudeIndicators(ctx, width, height);

    ctx.save();
    ctx.textAlign = 'center';
    if (this.state.isBalanced) {
      ctx.font = 'bold 13px "Noto Sans Gujarati", Inter, sans-serif';
      ctx.fillStyle = '#00ff88';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#00ff88';
      ctx.fillText('⚖️ ૧૦૦% સંપૂર્ણ સંતુલન પ્રાપ્ત થયું!', centerX, 20);
    } else {
      ctx.font = 'bold 11.5px "Noto Sans Gujarati", Inter, sans-serif';
      ctx.fillStyle = this.state.beamAngle > 0 ? '#bd00ff' : '#00f0ff';
      ctx.fillText(this.state.beamAngle > 0 ? '⚖️ જમણું પલ્લું ભારે છે (મૂલ્ય ઘટાડો)' : '⚖️ ડાબું પલ્લું ભારે છે (મૂલ્ય વધારો)', centerX, 20);
    }
    ctx.restore();
  }

  drawSideMagnitudeIndicators(ctx, width, height) {
    const isBal = this.state.isBalanced;
    const leftH = this.state.leftArrowHeight;
    const rightH = this.state.rightArrowHeight;

    const leftX = width < 380 ? 28 : 38;
    const rightX = width - (width < 380 ? 28 : 38);
    const arrowBaseY = height - 38;

    const leftColor = isBal ? '#00ff88' : '#00f0ff';
    this.drawDynamicArrow(ctx, leftX, arrowBaseY, leftH, leftColor, isBal);
    this.drawSideValueBadge(ctx, leftX, arrowBaseY - leftH - 12, this.state.leftVal, this.state.leftUnitLabel, this.state.leftAbsoluteMagnitude, leftColor);

    const rightColor = isBal ? '#00ff88' : '#bd00ff';
    this.drawDynamicArrow(ctx, rightX, arrowBaseY, rightH, rightColor, isBal);
    this.drawSideValueBadge(ctx, rightX, arrowBaseY - rightH - 12, this.state.rightVal, this.state.rightUnitLabel, this.state.rightAbsoluteMagnitude, rightColor);
  }

  drawDynamicArrow(ctx, x, baseY, arrowH, color, isBal) {
    const arrowTopY = baseY - arrowH;
    const arrowHeadW = 14;
    const arrowHeadH = 12;
    const stemW = 6;

    ctx.save();
    ctx.shadowBlur = isBal ? 12 : 8;
    ctx.shadowColor = color;

    const stemGrad = ctx.createLinearGradient(0, baseY, 0, arrowTopY);
    stemGrad.addColorStop(0, 'rgba(15, 23, 42, 0.6)');
    stemGrad.addColorStop(1, color);

    ctx.fillStyle = stemGrad;
    ctx.fillRect(x - stemW / 2, arrowTopY + arrowHeadH, stemW, arrowH - arrowHeadH);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, arrowTopY);
    ctx.lineTo(x - arrowHeadW / 2, arrowTopY + arrowHeadH);
    ctx.lineTo(x + arrowHeadW / 2, arrowTopY + arrowHeadH);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, baseY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawSideValueBadge(ctx, x, topY, val, unitStr, totalMag, color) {
    ctx.save();
    ctx.textAlign = 'center';

    const shortVal = this.formatShortDisplay(val);
    const shortTotal = this.formatShortDisplay(totalMag);

    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;
    ctx.fillText(`${shortVal} ${unitStr}`, x, topY);

    ctx.font = 'bold 9.5px Inter, sans-serif';
    ctx.fillStyle = color;
    ctx.shadowBlur = 4;
    ctx.fillText(`(${shortTotal} ${this.state.baseUnitSymbol})`, x, topY + 12);

    ctx.restore();
  }

  drawPan(ctx, anchorX, anchorY, stringLength, panWidth, color, title, val, unitStr) {
    const panY = anchorY + stringLength;

    ctx.save();
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(anchorX, anchorY);
    ctx.lineTo(anchorX - panWidth / 2, panY);
    ctx.moveTo(anchorX, anchorY);
    ctx.lineTo(anchorX + panWidth / 2, panY);
    ctx.stroke();

    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;
    ctx.beginPath();
    ctx.ellipse(anchorX, panY, panWidth / 2, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    const blockW = Math.min(36, panWidth * 0.55);
    const blockH = 20;
    ctx.fillStyle = color;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(anchorX - blockW / 2, panY - blockH, blockW, blockH, 4);
    } else {
      ctx.rect(anchorX - blockW / 2, panY - blockH, blockW, blockH);
    }
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px "Noto Sans Gujarati", Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, anchorX, panY - 7);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.shadowBlur = 6;
    ctx.shadowColor = color;

    const displayValStr = this.formatShortDisplay(val);
    ctx.fillText(`${displayValStr} ${unitStr}`, anchorX, panY + 18);

    ctx.restore();
  }

  formatShortDisplay(v) {
    if (v === 0) return '0';
    const abs = Math.abs(v);
    if (abs >= 1e4 || (abs < 1e-3 && abs > 0)) {
      const expStr = v.toExponential(2);
      const parts = expStr.split('e');
      const mantissa = parseFloat(parts[0]).toFixed(2);
      const power = parseInt(parts[1], 10);
      const supers = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '-': '⁻', '+': '⁺'
      };
      const superPower = String(power).split('').map(c => supers[c] || c).join('');
      return `${mantissa} × 10${superPower}`;
    }
    return Number(v.toPrecision(4)).toString();
  }

  drawFireworks(ctx) {
    ctx.save();
    for (let i = this.state.fireworks.length - 1; i >= 0; i--) {
      const p = this.state.fireworks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.alpha -= 0.02;

      if (p.alpha <= 0) {
        this.state.fireworks.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fill();
    }
    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PhysicsVisualizer;
}
