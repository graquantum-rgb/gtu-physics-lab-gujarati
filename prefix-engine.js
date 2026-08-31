/**
 * SI Prefix Changer Engine with Teacher's B ⟷ s Method (ગુજરાતી આવૃત્તિ - Gujarati Edition v12.0)
 * - ગુજરાતી શિક્ષકની B ⟷ s પદ્ધતિ (મોટામાંથી નાનામાં -> ગુણાકાર, નાનામાંથી મોટામાં -> ભાગાકાર)
 * - Terminology: "SI પૂર્વગ" (SI Prefix)
 */

class PrefixChangerEngine {
  constructor(physicsData) {
    this.data = physicsData;
    this.prefixes = this.data.prefixes;
    this.prefixUnits = this.data.prefixBaseUnits;
  }

  getPrefixBySymbol(symbol) {
    return this.prefixes.find(p => p.symbol === symbol) || this.prefixes.find(p => p.power === 0);
  }

  getBaseUnitById(id) {
    return this.prefixUnits.find(u => u.id === id) || this.prefixUnits[0];
  }

  convert(fromPrefixSym, toPrefixSym, baseUnitId, numVal = 19) {
    const fromP = this.getPrefixBySymbol(fromPrefixSym);
    const toP = this.getPrefixBySymbol(toPrefixSym);
    const baseU = this.getBaseUnitById(baseUnitId);

    const val = parseFloat(numVal) || 0;
    const p1 = fromP.power;
    const p2 = toP.power;
    const deltaPower = p1 - p2;

    const fromUnitSymbol = `${fromP.symbol}${baseU.symbol}`;
    const toUnitSymbol = `${toP.symbol}${baseU.symbol}`;

    const isBigToSmall = p1 > p2;
    const isEqual = p1 === p2;

    let ruleHeader = '';
    let ruleDesc = '';

    if (isEqual) {
      ruleHeader = 'સમાન SI પૂર્વગ (Equal Prefixes)';
      ruleDesc = 'બંને SI પૂર્વગ સમાન હોવાથી કોઈ ઘાતાંકીય ફેરફાર થતો નથી (10⁰ = 1).';
    } else if (isBigToSmall) {
      ruleHeader = 'મોટા પૂર્વગમાંથી નાના પૂર્વગમાં (Big ➔ small: ગુણાકાર કરો)';
      ruleDesc = `શિક્ષકની પદ્ધતિ: મોટા SI પૂર્વગ (${fromP.name} 10^${p1}) માંથી નાના SI પૂર્વગ (${toP.name} 10^${p2}) માં જતી વખતે ઘાતના તફાવત 10^${deltaPower} વડે ગુણાકાર કરવો.`;
    } else {
      ruleHeader = 'નાના પૂર્વગમાંથી મોટા પૂર્વગમાં (small ➔ Big: ભાગાકાર કરો)';
      ruleDesc = `શિક્ષકની પદ્ધતિ: નાના SI પૂર્વગ (${fromP.name} 10^${p1}) માંથી મોટા SI પૂર્વગ (${toP.name} 10^${p2}) માં જતી વખતે 10^${Math.abs(deltaPower)} વડે ભાગાકાર કરવો (અથવા 10^${deltaPower} વડે ગુણાકાર કરવો).`;
    }

    const factorEquationLatex = `${val} \\times 10^{${deltaPower}} \\text{ ${toUnitSymbol}}`;
    const factorEquationPlain = `${val} × 10${this.toSuperScript(deltaPower)} ${toUnitSymbol}`;

    return {
      numVal: val,
      fromP,
      toP,
      baseU,
      fromUnitSymbol,
      toUnitSymbol,
      p1,
      p2,
      deltaPower,
      isBigToSmall,
      isEqual,
      ruleHeader,
      ruleDesc,
      factorEquationLatex,
      factorEquationPlain
    };
  }

  toSuperScript(num) {
    const supers = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
      '-': '⁻', '+': '⁺'
    };
    return String(num).split('').map(c => supers[c] || c).join('');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PrefixChangerEngine;
}
