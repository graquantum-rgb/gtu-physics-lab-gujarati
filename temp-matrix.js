/**
 * Temperature Pairwise Matrix Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.0)
 * - સેલ્સિયસ (°C), ફેરનહીટ (°F), અને કેલ્વિન (K) વચ્ચે સ્ટેપ-બાય-સ્ટેપ ગણતરી
 */

class TemperatureMatrixEngine {
  constructor(physicsData) {
    this.data = physicsData;
    this.benchmarks = this.data.thermalBenchmarks;
  }

  convertPairwise(val, fromScale, toScale) {
    const v = parseFloat(val);
    if (isNaN(v)) return { result: 0, steps: [] };

    if (fromScale === toScale) {
      return {
        result: v,
        steps: [{
          title: 'સમાન સ્કેલ (Same Scale)',
          desc: 'બંને તાપમાન સ્કેલ સમાન છે.',
          math: `T = ${v}`,
          notes: 'કોઈ રૂપાંતરણની જરૂર નથી.'
        }]
      };
    }

    const steps = [];
    let result = 0;

    // 1) Celsius to Fahrenheit
    if (fromScale === 'C' && toScale === 'F') {
      result = (v * 9 / 5) + 32;
      steps.push({
        title: 'પગલું ૧: પ્રમાણભૂત સૂત્રનો ઉપયોગ',
        desc: 'સેલ્સિયસમાંથી ફેરનહીટમાં રૂપાંતરણનું સૂત્ર:',
        math: `F = \\left(C \\times \\frac{9}{5}\\right) + 32`,
        notes: 'સેલ્સિયસ મૂલ્યને 9/5 (1.8) વડે ગુણીને તેમાં 32 ઉમેરો.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} °C ની કિંમત મૂકતા:`,
        math: `F = \\left(${v} \\times \\frac{9}{5}\\right) + 32 = ${(v * 1.8).toFixed(2)} + 32 = \\mathbf{${result.toFixed(2)}^\\circ\\text{F}}`,
        notes: `${v} °C બરાબર ${result.toFixed(2)} °F થાય છે.`
      });
    }
    // 2) Fahrenheit to Celsius
    else if (fromScale === 'F' && toScale === 'C') {
      result = (v - 32) * 5 / 9;
      steps.push({
        title: 'પગલું ૧: પ્રમાણભૂત સૂત્રનો ઉપયોગ',
        desc: 'ફેરનહીટમાંથી સેલ્સિયસમાં રૂપાંતરણનું સૂત્ર:',
        math: `C = (F - 32) \\times \\frac{5}{9}`,
        notes: 'ફેરનહીટ મૂલ્યમાંથી 32 બાદ કરી તેને 5/9 વડે ગુણો.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} °F ની કિંમત મૂકતા:`,
        math: `C = (${v} - 32) \\times \\frac{5}{9} = ${(v - 32).toFixed(2)} \\times \\frac{5}{9} = \\mathbf{${result.toFixed(2)}^\\circ\\text{C}}`,
        notes: `${v} °F બરાબર ${result.toFixed(2)} °C થાય છે.`
      });
    }
    // 3) Celsius to Kelvin
    else if (fromScale === 'C' && toScale === 'K') {
      result = v + 273.15;
      steps.push({
        title: 'પગલું ૧: નિરપેક્ષ તાપમાન સૂત્ર',
        desc: 'સેલ્સિયસમાંથી કેલ્વિનમાં રૂપાંતરણ:',
        math: `K = C + 273.15`,
        notes: 'સેલ્સિયસ મૂલ્યમાં 273.15 ઉમેરવાથી નિરપેક્ષ તાપમાન K મળે છે.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} °C ની કિંમત મૂકતા:`,
        math: `K = ${v} + 273.15 = \\mathbf{${result.toFixed(2)}\\text{ K}}`,
        notes: `${v} °C બરાબર ${result.toFixed(2)} K થાય છે.`
      });
    }
    // 4) Kelvin to Celsius
    else if (fromScale === 'K' && toScale === 'C') {
      result = v - 273.15;
      steps.push({
        title: 'પગલું ૧: નિરપેક્ષ તાપમાન સૂત્ર',
        desc: 'કેલ્વિનમાંથી સેલ્સિયસમાં રૂપાંતરણ:',
        math: `C = K - 273.15`,
        notes: 'કેલ્વિન મૂલ્યમાંથી 273.15 બાદ કરવા.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} K ની કિંમત મૂકતા:`,
        math: `C = ${v} - 273.15 = \\mathbf{${result.toFixed(2)}^\\circ\\text{C}}`,
        notes: `${v} K બરાબર ${result.toFixed(2)} °C થાય છે.`
      });
    }
    // 5) Fahrenheit to Kelvin
    else if (fromScale === 'F' && toScale === 'K') {
      result = (v - 32) * 5 / 9 + 273.15;
      steps.push({
        title: 'પગલું ૧: સંયુક્ત સૂત્ર',
        desc: 'ફેરનહીટમાંથી કેલ્વિનમાં રૂપાંતરણ:',
        math: `K = (F - 32) \\times \\frac{5}{9} + 273.15`,
        notes: 'પ્રથમ સેલ્સિયસ મેળવો અને ત્યારબાદ 273.15 ઉમેરો.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} °F ની કિંમત મૂકતા:`,
        math: `K = (${v} - 32) \\times \\frac{5}{9} + 273.15 = \\mathbf{${result.toFixed(2)}\\text{ K}}`,
        notes: `${v} °F બરાબર ${result.toFixed(2)} K થાય છે.`
      });
    }
    // 6) Kelvin to Fahrenheit
    else if (fromScale === 'K' && toScale === 'F') {
      result = (v - 273.15) * 9 / 5 + 32;
      steps.push({
        title: 'પગલું ૧: સંયુક્ત સૂત્ર',
        desc: 'કેલ્વિનમાંથી ફેરનહીટમાં રૂપાંતરણ:',
        math: `F = (K - 273.15) \\times \\frac{9}{5} + 32`,
        notes: 'પ્રથમ સેલ્સિયસ શોધો અને ત્યારબાદ ફેરનહીટમાં ફેરવો.'
      });
      steps.push({
        title: 'પગલું ૨: કિંમત મૂકીને ગણતરી',
        desc: `${v} K ની કિંમત મૂકતા:`,
        math: `F = (${v} - 273.15) \\times \\frac{9}{5} + 32 = \\mathbf{${result.toFixed(2)}^\\circ\\text{F}}`,
        notes: `${v} K બરાબર ${result.toFixed(2)} °F થાય છે.`
      });
    }

    return {
      result: Number(result.toFixed(2)),
      steps
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TemperatureMatrixEngine;
}
