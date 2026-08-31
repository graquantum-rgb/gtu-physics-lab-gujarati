/**
 * Core Conversion & Step-by-Step Derivation Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.0)
 * - ગણતરી અને સ્ટેપ્સ સંપૂર્ણપણે ગુજરાતીમાં સમજૂતી સાથે (Step-by-step math with Gujarati explanations)
 * - મૂલ્યો અને એકમો સ્ટાન્ડર્ડ અંગ્રેજીમાં (Values & units in standard English)
 */

class UnitConverterEngine {
  constructor(physicsData) {
    this.data = physicsData;
    this.quantitiesMap = new Map();
    this.init();
  }

  init() {
    this.data.quantities.forEach(q => {
      this.quantitiesMap.set(q.id, q);
    });
  }

  getQuantityById(id) {
    return this.quantitiesMap.get(id) || this.data.quantities[0];
  }

  convert(quantityId, inputVal, fromSystem = 'mks') {
    const q = this.getQuantityById(quantityId);
    const val = parseFloat(inputVal);

    if (isNaN(val)) {
      return {
        inputVal: 0,
        resultVal: 0,
        formattedResult: '0',
        fromUnit: q.mks.name,
        toUnit: q.cgs.name,
        fromUnitSymbol: q.mks.symbol,
        toUnitSymbol: q.cgs.symbol,
        ratio: q.mksToCgsRatio
      };
    }

    let resultVal = 0;
    let fromUnit = '';
    let toUnit = '';
    let fromSymbol = '';
    let toSymbol = '';

    if (fromSystem === 'mks') {
      fromUnit = q.mks.name;
      toUnit = q.cgs.name;
      fromSymbol = q.mks.symbol;
      toSymbol = q.cgs.symbol;

      if (q.id === 'temperature') {
        resultVal = val - 273.15;
      } else {
        resultVal = val * q.mksToCgsRatio;
      }
    } else {
      fromUnit = q.cgs.name;
      toUnit = q.mks.name;
      fromSymbol = q.cgs.symbol;
      toSymbol = q.mks.symbol;

      if (q.id === 'temperature') {
        resultVal = val + 273.15;
      } else {
        resultVal = val / q.mksToCgsRatio;
      }
    }

    return {
      inputVal: val,
      resultVal: resultVal,
      formattedResult: this.formatNumberDisplay(resultVal),
      fromUnit,
      toUnit,
      fromUnitSymbol: fromSymbol,
      toUnitSymbol: toSymbol,
      ratio: q.mksToCgsRatio
    };
  }

  formatNumberDisplay(num) {
    if (num === 0) return '0';
    const abs = Math.abs(num);

    if (abs >= 1e4 || (abs < 1e-3 && abs > 0)) {
      const expStr = num.toExponential(4);
      const parts = expStr.split('e');
      const mantissa = parseFloat(parts[0]).toFixed(3);
      const power = parseInt(parts[1], 10);
      return `${mantissa} × 10<sup>${power}</sup>`;
    }

    if (abs >= 1000) {
      return num.toLocaleString('en-US', { maximumFractionDigits: 4 });
    }

    return Number(num.toPrecision(6)).toString();
  }

  formatPlainScientific(num) {
    if (num === 0) return '0';
    const abs = Math.abs(num);
    if (abs >= 1e4 || (abs < 1e-3 && abs > 0)) {
      const expStr = num.toExponential(4);
      const parts = expStr.split('e');
      const mantissa = parseFloat(parts[0]).toFixed(3);
      const power = parseInt(parts[1], 10);
      return `${mantissa} × 10${this.toSuperScript(power)}`;
    }
    return Number(num.toPrecision(6)).toString();
  }

  getExponentEquivalence(q) {
    if (q.isUnitless) {
      return `1 ${q.mks.symbol} ⟷ 1 ${q.cgs.symbol} (શુદ્ધ ગુણોત્તર ૧:૧)`;
    }
    if (q.isSpecialUnit) {
      if (q.id === 'temperature') {
        return `T(K) ⟷ T(°C) + 273.15`;
      }
      return `1 ${q.mks.symbol} ⟷ 57.296°`;
    }

    const ratio = q.mksToCgsRatio;
    const exponent = Math.round(Math.log10(ratio));

    if (Math.abs(ratio - Math.pow(10, exponent)) < 1e-7) {
      return `1 ${q.mks.symbol} ⟷ 10${this.toSuperScript(exponent)} ${q.cgs.symbol}`;
    } else {
      return `1 ${q.mks.symbol} ⟷ ${this.formatRatioExponent(ratio)} ${q.cgs.symbol}`;
    }
  }

  formatRatioExponent(ratio) {
    if (ratio === 1) return '1';
    const exp = Math.round(Math.log10(ratio));
    if (Math.abs(ratio - Math.pow(10, exp)) < 1e-7) {
      return `10${this.toSuperScript(exp)}`;
    }
    const mantissa = ratio / Math.pow(10, Math.floor(Math.log10(ratio)));
    const power = Math.floor(Math.log10(ratio));
    return `${mantissa.toFixed(3)} × 10${this.toSuperScript(power)}`;
  }

  toSuperScript(num) {
    const supers = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
      '-': '⁻', '+': '⁺'
    };
    return String(num).split('').map(c => supers[c] || c).join('');
  }

  generateDerivationSteps(quantityId, inputVal, fromSystem = 'mks') {
    const q = this.getQuantityById(quantityId);
    const val = parseFloat(inputVal) || 0;
    const isMks = fromSystem === 'mks';

    const steps = [];

    // STEP 1: Definition
    steps.push({
      title: 'પગલું ૧: મૂળભૂત વ્યાખ્યા અને પ્રમાણભૂત સમીકરણ',
      desc: `${q.name} ની ભૌતિક વ્યાખ્યા અને મૂળભૂત પારિમાણિક સૂત્ર:`,
      math: `\\text{ભૌતિક રાશિ: } \\mathbf{${q.name}} \\quad [\\text{Symbol: } ${q.symbol}] \\\\ \\text{પારિમાણિક સૂત્ર: } ${q.dimension} \\\\ \\text{ગણતરી સૂત્ર: } ${q.formula}`,
      notes: q.standardDefinition
    });

    // STEP 2: Dimensional breakdown
    if (q.id === 'force') {
      steps.push({
        title: 'પગલું ૨: પારિમાણિક વિશ્લેષણ અને એકમોનું વિસ્તરણ',
        desc: 'બળ = દળ × પ્રવેગ. MKS અને CGS એકમોનું મૂળભૂત રૂપાંતરણ:',
        math: `1\\text{ N} = 1\\text{ kg} \\cdot 1\\text{ m/s}^2 \\\\ 1\\text{ kg} = 10^3\\text{ g}, \\quad 1\\text{ m} = 10^2\\text{ cm} \\\\ 1\\text{ N} = (10^3\\text{ g}) \\times (10^2\\text{ cm/s}^2) = 10^{3+2}\\text{ g}\\cdot\\text{cm/s}^2 = 10^5\\text{ dyn}`,
        notes: '૧ ન્યૂટન (N) બરાબર ૧૦⁵ ડાઇન (dyn) થાય છે.'
      });
    } else if (q.id === 'work' || q.id === 'power') {
      steps.push({
        title: 'પગલું ૨: કાર્ય અને ઊર્જા સમીકરણનું વિસ્તરણ',
        desc: 'કાર્ય = બળ × સ્થાનાંતર = N · m:',
        math: `1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = (10^5\\text{ dyn}) \\times (10^2\\text{ cm}) = 10^7\\text{ dyn}\\cdot\\text{cm} = 10^7\\text{ erg}`,
        notes: '૧ જૂલ (J) બરાબર ૧૦⁷ અર્ગ (erg) થાય છે.'
      });
    } else if (q.id === 'density') {
      steps.push({
        title: 'પગલું ૨: ઘનતાના એકમોનું રૂપાંતરણ',
        desc: 'ઘનતા = દળ / કદ (kg/m³ થી g/cm³):',
        math: `1\\text{ kg/m}^3 = \\frac{1\\text{ kg}}{1\\text{ m}^3} = \\frac{10^3\\text{ g}}{(10^2\\text{ cm})^3} = \\frac{10^3\\text{ g}}{10^6\\text{ cm}^3} = 10^{-3}\\text{ g/cm}^3`,
        notes: '૧ kg/m³ = ૧૦⁻³ g/cm³ (અથવા ૧ g/cm³ = ૧૦૦૦ kg/m³).'
      });
    } else {
      steps.push({
        title: 'પગલું ૨: પ્રમાણભૂત ગુણોત્તર સંબંધ',
        desc: `${q.mks.name} અને ${q.cgs.name} વચ્ચેનો સંબંધ:`,
        math: `1\\text{ ${q.mks.symbol}} = ${this.formatRatioExponent(q.mksToCgsRatio)}\\text{ ${q.cgs.symbol}}`,
        notes: `પ્રમાણભૂત રૂપાંતરણ અવયવ: ${this.getExponentEquivalence(q)}`
      });
    }

    // STEP 3: Arithmetic Substitution
    let finalMath = '';
    let finalNote = '';

    if (q.id === 'temperature') {
      if (isMks) {
        const cVal = val - 273.15;
        finalMath = `T(^\\circ\\text{C}) = ${val}\\text{ K} - 273.15 = \\mathbf{${cVal.toFixed(2)}^\\circ\\text{C}}`;
        finalNote = `${val} K બરાબર ${cVal.toFixed(2)} °C થાય છે.`;
      } else {
        const kVal = val + 273.15;
        finalMath = `T(\\text{K}) = ${val}^\\circ\\text{C} + 273.15 = \\mathbf{${kVal.toFixed(2)}\\text{ K}}`;
        finalNote = `${val} °C બરાબર ${kVal.toFixed(2)} K થાય છે.`;
      }
    } else if (isMks) {
      const res = val * q.mksToCgsRatio;
      finalMath = `${val}\\text{ ${q.mks.symbol}} \\times (${this.formatRatioExponent(q.mksToCgsRatio)}) = \\mathbf{${this.formatNumberDisplay(res)}\\text{ ${q.cgs.symbol}}}`;
      finalNote = `આમ, ${val} ${q.mks.name} (${q.mks.symbol}) બરાબર ${this.formatPlainScientific(res)} ${q.cgs.name} (${q.cgs.symbol}) થાય છે.`;
    } else {
      const res = val / q.mksToCgsRatio;
      finalMath = `${val}\\text{ ${q.cgs.symbol}} \\div (${this.formatRatioExponent(q.mksToCgsRatio)}) = \\mathbf{${this.formatNumberDisplay(res)}\\text{ ${q.mks.symbol}}}`;
      finalNote = `આમ, ${val} ${q.cgs.name} (${q.cgs.symbol}) બરાબર ${this.formatPlainScientific(res)} ${q.mks.name} (${q.mks.symbol}) થાય છે.`;
    }

    steps.push({
      title: 'પગલું ૩: કિંમત મૂકીને અંતિમ ગણતરી',
      desc: 'આપેલા મૂલ્યનું અંતિમ ગાણિતિક પરિણામ:',
      math: finalMath,
      notes: finalNote
    });

    return { steps };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UnitConverterEngine;
}
