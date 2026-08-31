/**
 * Formula Magic Triangles Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.0)
 * - ગુજરાતી સમજૂતી અને ચલને સૂત્રનો કર્તા બનાવવાની પદ્ધતિ (Formula isolation in Gujarati)
 */

class MagicTrianglesEngine {
  constructor(physicsData) {
    this.data = physicsData;
    this.triangles = this.data.magicTriangles;
  }

  getTriangleById(id) {
    return this.triangles.find(t => t.id === id) || this.triangles[0];
  }

  calculate(triangleId, targetVar, valA, valB) {
    const t = this.getTriangleById(triangleId);
    let result = 0;
    let formulaMath = '';
    let explanation = '';
    let targetLabel = '';
    let targetUnit = '';

    const a = parseFloat(valA) || 0;
    const b = parseFloat(valB) || 0;

    if (targetVar === 'top') {
      result = a * b;
      targetLabel = t.top.label;
      targetUnit = t.top.unit;
      formulaMath = `${t.top.symbol} = ${t.bottomLeft.symbol} \\cdot ${t.bottomRight.symbol}`;
      explanation = `ઉપરના ચલ ${t.top.label} શોધવા માટે નીચેના બંને ચલોનો ગુણાકાર કરવો: ${t.top.symbol} = ${a} × ${b} = ${result} ${targetUnit}.`;
    } else if (targetVar === 'bottomLeft') {
      result = b !== 0 ? a / b : 0;
      targetLabel = t.bottomLeft.label;
      targetUnit = t.bottomLeft.unit;
      formulaMath = `${t.bottomLeft.symbol} = \\frac{${t.top.symbol}}{${t.bottomRight.symbol}}`;
      explanation = `ડાબી બાજુના ચલ ${t.bottomLeft.label} શોધવા માટે ઉપરના ચલને જમણી બાજુના ચલ વડે ભાગવા: ${t.bottomLeft.symbol} = ${a} / ${b} = ${result} ${targetUnit}.`;
    } else if (targetVar === 'bottomRight') {
      result = b !== 0 ? a / b : 0;
      targetLabel = t.bottomRight.label;
      targetUnit = t.bottomRight.unit;
      formulaMath = `${t.bottomRight.symbol} = \\frac{${t.top.symbol}}{${t.bottomLeft.symbol}}`;
      explanation = `જમણી બાજુના ચલ ${t.bottomRight.label} શોધવા માટે ઉપરના ચલને ડાબી બાજુના ચલ વડે ભાગવા: ${t.bottomRight.symbol} = ${a} / ${b} = ${result} ${targetUnit}.`;
    }

    return {
      result,
      formattedResult: Number(result.toPrecision(5)).toString(),
      targetLabel,
      targetUnit,
      formulaMath,
      explanation
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MagicTrianglesEngine;
}
