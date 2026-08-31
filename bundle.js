
// --- FILE: units-data.js ---
/**
 * Master Physics & GTU Diploma Syllabus Dataset (ગુજરાતી આવૃત્તિ - Gujarati Edition v13.0)
 * - Complete Exhaustive Physical Quantities covering ALL Chapters for Applied Physics & Modern Physics
 * - Accurate Symbols, Formulas, Dimensions, MKS (SI), CGS, Unitless & Special Unit Definitions
 * - Rich Cosmic Range Spectrum (0 to Maximum Universal Range)
 */

const PHYSICS_DATA = {
  subjects: [
    {
      id: 'applied_physics',
      code: 'DI01000121',
      name: 'Applied Physics (DI01000121)',
      shortName: 'Applied Physics (DI01000121)',
      icon: 'fa-cube',
      themeColor: '#00f0ff',
      chapters: [
        {
          id: 'ap_unit1',
          unitNo: 'Unit - 1',
          name: 'એકમો અને માપન (Units & Measurements)',
          color: '#0284c7',
          bgLight: 'rgba(2, 132, 199, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14h36v20H6z"/><path d="M12 14v8M18 14v5M24 14v8M30 14v5M36 14v8"/><path d="M6 24h36M10 6v8M10 34v8"/></svg>`
        },
        {
          id: 'ap_unit2',
          unitNo: 'Unit - 2',
          name: 'વર્તુળાકાર ગતિ (Circular Motion)',
          color: '#8b5cf6',
          bgLight: 'rgba(139, 92, 246, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16" stroke-dasharray="4 3"/><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M24 8l4-4-4-4M24 8H16"/><path d="M40 24l4 4 4-4M40 24v8"/></svg>`
        },
        {
          id: 'ap_unit3',
          unitNo: 'Unit - 3',
          name: 'દ્રવ્યના સામાન્ય ગુણધર્મો (Properties of Matter)',
          color: '#059669',
          bgLight: 'rgba(5, 150, 105, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6s12 14 12 22a12 12 0 01-24 0c0-8 12-22 12-22z"/><path d="M18 28a6 6 0 006 6"/></svg>`
        },
        {
          id: 'ap_unit4',
          unitNo: 'Unit - 4',
          name: 'ઉષ્મા અને થર્મોમેટ્રી (Heat & Thermometry)',
          color: '#d97706',
          bgLight: 'rgba(217, 119, 6, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10v18.5a7 7 0 108 0V10a4 4 0 00-8 0z"/><circle cx="24" cy="34" r="3.5" fill="currentColor"/><path d="M24 20v10M20 16h4M20 22h4"/></svg>`
        },
        {
          id: 'ap_unit5',
          unitNo: 'Unit - 5',
          name: 'તરંગો અને અલ્ટ્રાસોનિક્સ (Wave & Ultrasonics)',
          color: '#e11d48',
          bgLight: 'rgba(225, 29, 72, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 24c5-14 10-14 15 0s10 14 15 0 10-14 10-14"/><circle cx="19" cy="24" r="2" fill="currentColor"/><circle cx="34" cy="24" r="2" fill="currentColor"/></svg>`
        }
      ]
    },
    {
      id: 'modern_physics',
      code: 'DI01000061',
      name: 'Modern Physics (DI01000061)',
      shortName: 'Modern Physics (DI01000061)',
      icon: 'fa-atom',
      themeColor: '#bd00ff',
      chapters: [
        {
          id: 'mp_unit1',
          unitNo: 'Unit - 1',
          name: 'એકમો અને માપન (Units & Measurements)',
          color: '#0284c7',
          bgLight: 'rgba(2, 132, 199, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14h36v20H6z"/><path d="M12 14v8M18 14v5M24 14v8M30 14v5M36 14v8"/><path d="M6 24h36M10 6v8M10 34v8"/></svg>`
        },
        {
          id: 'mp_unit2',
          unitNo: 'Unit - 2',
          name: 'સ્થિત વિદ્યુત અને કેપેસિટન્સ (Electrostatics & Capacitance)',
          color: '#4f46e5',
          bgLight: 'rgba(79, 70, 229, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 24h12M30 24h12M18 10v28M30 10v28"/><path d="M22 16h4M22 24h4M22 32h4" stroke-dasharray="2 2"/></svg>`
        },
        {
          id: 'mp_unit3',
          unitNo: 'Unit - 3',
          name: 'તરંગો અને અલ્ટ્રાસોનિક્સ (Waves & Ultrasonics)',
          color: '#10b981',
          bgLight: 'rgba(16, 185, 129, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16v16M18 10v28M26 6v36M34 12v24M42 18v12"/></svg>`
        },
        {
          id: 'mp_unit4',
          unitNo: 'Unit - 4',
          name: 'ઓપ્ટિક્સ અને લેસર (LASER & Optical Fiber)',
          color: '#f59e0b',
          bgLight: 'rgba(245, 158, 11, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 24l32-16v32L8 24z"/><path d="M24 16v16M32 12v24"/></svg>`
        },
        {
          id: 'mp_unit5',
          unitNo: 'Unit - 5',
          name: 'સેમિકન્ડક્ટર ઉપકરણો (Semiconductor Devices)',
          color: '#ec4899',
          bgLight: 'rgba(236, 72, 153, 0.18)',
          svgIcon: `<svg viewBox="0 0 48 48" class="chapter-svg" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="28" height="20" rx="2"/><path d="M14 6v8M24 6v8M34 6v8M14 34v8M24 34v8M34 34v8"/></svg>`
        }
      ]
    }
  ],

  prefixes: [
    { name: 'એક્ઝા (Exa)', symbol: 'E', power: 18, factor: 1e18 },
    { name: 'પેટા (Peta)', symbol: 'P', power: 15, factor: 1e15 },
    { name: 'ટેરા (Tera)', symbol: 'T', power: 12, factor: 1e12 },
    { name: 'ગીગા (Giga)', symbol: 'G', power: 9, factor: 1e9 },
    { name: 'મેગા (Mega)', symbol: 'M', power: 6, factor: 1e6 },
    { name: 'કિલો (Kilo)', symbol: 'k', power: 3, factor: 1e3 },
    { name: 'હેક્ટો (Hecto)', symbol: 'h', power: 2, factor: 1e2 },
    { name: 'ડેકા (Deca)', symbol: 'da', power: 1, factor: 1e1 },
    { name: 'મૂળ એકમ (Base)', symbol: '', power: 0, factor: 1e0 },
    { name: 'ડેસી (Deci)', symbol: 'd', power: -1, factor: 1e-1 },
    { name: 'સેન્ટી (Centi)', symbol: 'c', power: -2, factor: 1e-2 },
    { name: 'મિલી (Milli)', symbol: 'm', power: -3, factor: 1e-3 },
    { name: 'માઈક્રો (Micro)', symbol: 'μ', power: -6, factor: 1e-6 },
    { name: 'નેનો (Nano)', symbol: 'n', power: -9, factor: 1e-9 },
    { name: 'પીકો (Pico)', symbol: 'p', power: -12, factor: 1e-12 },
    { name: 'ફેમ્ટો (Femto)', symbol: 'f', power: -15, factor: 1e-15 },
    { name: 'એટો (Atto)', symbol: 'a', power: -18, factor: 1e-18 }
  ],

  prefixBaseUnits: [
    { id: 'meter', name: 'મીટર (meter)', symbol: 'm' },
    { id: 'gram', name: 'ગ્રામ (gram)', symbol: 'g' },
    { id: 'second', name: 'સેકન્ડ (second)', symbol: 's' },
    { id: 'newton', name: 'ન્યૂટન (newton)', symbol: 'N' },
    { id: 'joule', name: 'જૂલ (joule)', symbol: 'J' },
    { id: 'watt', name: 'વોટ (watt)', symbol: 'W' },
    { id: 'pascal', name: 'પાસ્કલ (pascal)', symbol: 'Pa' },
    { id: 'hertz', name: 'હર્ટ્ઝ (hertz)', symbol: 'Hz' },
    { id: 'ampere', name: 'એમ્પિયર (ampere)', symbol: 'A' },
    { id: 'coulomb', name: 'કુલંબ (coulomb)', symbol: 'C' },
    { id: 'volt', name: 'વોલ્ટ (volt)', symbol: 'V' },
    { id: 'farad', name: 'ફેરાડ (farad)', symbol: 'F' },
    { id: 'ohm', name: 'ઓહ્મ (ohm)', symbol: 'Ω' }
  ],

  reynoldsCases: [
    { id: 'tap_water', name: '૧) નળનું પાણી (પાતળી પાઇપ)', v: 1.5, D: 0.05, rho: 1000, eta: 0.001 },
    { id: 'oil_pipe', name: '૨) લુબ્રિકેટિંગ ઓઇલ (મધ્યમ પાઇપ)', v: 0.8, D: 0.1, rho: 900, eta: 0.29 },
    { id: 'air_duct', name: '૩) હવા નળી (HVAC ડક્ટ)', v: 4.0, D: 0.3, rho: 1.2, eta: 0.000018 },
    { id: 'blood_vessel', name: '૪) માનવ રક્તવાહિની (કેશવાહિની)', v: 0.3, D: 0.004, rho: 1060, eta: 0.0035 },
    { id: 'custom', name: '૫) કસ્ટમ પરિમાણો (Custom)', v: 1.5, D: 0.05, rho: 1000, eta: 0.001 }
  ],

  sphereMaterialPresets: [
    { id: 'steel', name: '૧) સ્ટીલ બોલ બેરિંગ (Steel)', density: 7850 },
    { id: 'glass', name: '૨) કાચની ગોળી (Glass)', density: 2500 },
    { id: 'lead', name: '૩) સીસું / લેડ બોલ (Lead)', density: 11340 },
    { id: 'aluminum', name: '૪) એલ્યુમિનિયમ (Aluminum)', density: 2700 },
    { id: 'cork', name: '૫) બૂચ / કૉર્ક (Cork - ઉપર તરશે)', density: 240 },
    { id: 'wood', name: '૬) લાકડું (Wood - ઉપર તરશે)', density: 650 },
    { id: 'custom', name: '૭) કસ્ટમ ઘનતા (Custom)', density: 7850 }
  ],

  stokesFluidPresets: [
    { id: 'glycerin', name: '૧) ગ્લિસરીન (Glycerin)', density: 1260, visc: 1.412 },
    { id: 'castor_oil', name: '૨) એરંડીનું તેલ (Castor Oil)', density: 961, visc: 0.985 },
    { id: 'water', name: '૩) શુદ્ધ પાણી (Water)', density: 1000, visc: 0.001 },
    { id: 'honey', name: '૪) શુદ્ધ મધ (Honey)', density: 1420, visc: 5.0 },
    { id: 'air', name: '૫) સામાન્ય હવા (Air)', density: 1.225, visc: 0.0000181 },
    { id: 'custom', name: '૬) કસ્ટમ પ્રવાહી (Custom)', density: 1260, visc: 1.412 }
  ],

  planetGravityPresets: [
    { id: 'earth', name: '૧) પૃથ્વી (Earth - 9.81 m/s²)', g: 9.80665 },
    { id: 'moon', name: '૨) ચંદ્ર (Moon - 1.62 m/s²)', g: 1.62 },
    { id: 'mars', name: '૩) મંગળ (Mars - 3.72 m/s²)', g: 3.72 },
    { id: 'jupiter', name: '૪) ગુરુ (Jupiter - 24.79 m/s²)', g: 24.79 },
    { id: 'zero_g', name: '૫) શૂન્ય ગુરુત્વાકર્ષણ (0 g)', g: 0.001 },
    { id: 'custom', name: '૬) કસ્ટમ ગુરુત્વ (Custom)', g: 9.80665 }
  ],

  liquidPresets: [
    { id: 'water', name: 'પાણી (Water)', desc: 'કાચ સાથે સ્પર્શકોણ θ = 0°, પૃષ્ઠતાણ T = 0.0728 N/m', st: 0.0728, angle: 0, rho: 1000, color: '#00f0ff', heightFactor: 1.0 },
    { id: 'mercury', name: 'પારો (Mercury)', desc: 'કાચ સાથે સ્પર્શકોણ θ = 135°, પૃષ્ઠતાણ T = 0.485 N/m (નીચે ઉતરશે)', st: 0.485, angle: 135, rho: 13600, color: '#94a3b8', heightFactor: -0.45 },
    { id: 'soap_solution', name: 'સાબુનું દ્રાવણ (Soap Solution)', desc: 'કાચ સાથે સ્પર્શકોણ θ = 25°, પૃષ્ઠતાણ T = 0.030 N/m', st: 0.030, angle: 25, rho: 1010, color: '#ec4899', heightFactor: 0.42 },
    { id: 'ethanol', name: 'ઇથેનોલ / આલ્કોહોલ (Ethanol)', desc: 'કાચ સાથે સ્પર્શકોણ θ = 0°, પૃષ્ઠતાણ T = 0.0223 N/m', st: 0.0223, angle: 0, rho: 789, color: '#a855f7', heightFactor: 0.38 }
  ],

  thermalBenchmarks: [
    { name: 'નિરપેક્ષ શૂન્ય તાપમાન (Absolute Zero)', category: 'સૈદ્ધાંતિક સીમા', c: -273.15, f: -459.67, k: 0 },
    { name: 'બરફનું ગલનબિંદુ / પાણીનું ઠારણબિંદુ (Ice Point)', category: 'પાણીની ભૌતિક સ્થિતિ', c: 0, f: 32, k: 273.15 },
    { name: 'પાણીની મહત્તમ ઘનતા (Max Density of Water)', category: 'અનિયમિત પ્રસરણ', c: 4, f: 39.2, k: 277.15 },
    { name: 'માનવ શરીરનું સામાન્ય તાપમાન (Human Body)', category: 'જૈવિક માપદંડ', c: 37, f: 98.6, k: 310.15 },
    { name: 'ઓરડાનું પ્રમાણભૂત તાપમાન (Standard Room Temp)', category: 'પ્રયોગશાળા સંદર્ભ', c: 20, f: 68, k: 293.15 },
    { name: 'પાણીનું ઉત્કલનબિંદુ (Steam / Boiling Point)', category: 'પ્રમાણભૂત દબાણે (1 atm)', c: 100, f: 212, k: 373.15 },
    { name: 'બંને સ્કેલ સમાન થાય તે તાપમાન (-40°)', category: 'ગાણિતિક સમકક્ષ બિંદુ', c: -40, f: -40, k: 233.15 }
  ],

  magicTriangles: [
    {
      id: 'triangle_linear_velocity',
      title: 'રેખીય વેગ અને કોણીય ઝડપ (Linear Velocity v = r × ω)',
      top: { label: 'રેખીય વેગ (v)', symbol: 'v', unit: 'm/s', default: 10 },
      bottomLeft: { label: 'ત્રિજ્યા (r)', symbol: 'r', unit: 'm', default: 0.5 },
      bottomRight: { label: 'કોણીય ઝડપ (ω)', symbol: 'ω', unit: 'rad/s', default: 20 },
      equationLatex: 'v = r \\cdot \\omega'
    },
    {
      id: 'triangle_capacitor',
      title: 'કેપેસિટરનો વિદ્યુતભાર (Capacitor Q = C × V)',
      top: { label: 'વિદ્યુતભાર (Q)', symbol: 'Q', unit: 'C', default: 0.05 },
      bottomLeft: { label: 'કેપેસિટન્સ (C)', symbol: 'C', unit: 'F', default: 0.005 },
      bottomRight: { label: 'વોલ્ટેજ (V)', symbol: 'V', unit: 'V', default: 10 },
      equationLatex: 'Q = C \\cdot V'
    },
    {
      id: 'triangle_wave_velocity',
      title: 'તરંગ વેગ અને આવૃત્તિ (Wave Velocity v = f × λ)',
      top: { label: 'તરંગ વેગ (v)', symbol: 'v', unit: 'm/s', default: 340 },
      bottomLeft: { label: 'આવૃત્તિ (f)', symbol: 'f', unit: 'Hz', default: 170 },
      bottomRight: { label: 'તરંગલંબાઈ (λ)', symbol: 'λ', unit: 'm', default: 2 },
      equationLatex: 'v = f \\cdot \\lambda'
    },
    {
      id: 'triangle_force',
      title: 'ન્યૂટનનો બીજો નિયમ: બળ (Force F = m × a)',
      top: { label: 'બળ (F)', symbol: 'F', unit: 'N', default: 100 },
      bottomLeft: { label: 'દળ (m)', symbol: 'm', unit: 'kg', default: 10 },
      bottomRight: { label: 'પ્રવેગ (a)', symbol: 'a', unit: 'm/s²', default: 10 },
      equationLatex: 'F = m \\cdot a'
    },
    {
      id: 'triangle_density',
      title: 'દ્રવ્યની ઘનતા અને દળ (Mass m = ρ × V)',
      top: { label: 'દળ (m)', symbol: 'm', unit: 'kg', default: 1000 },
      bottomLeft: { label: 'ઘનતા (ρ)', symbol: 'ρ', unit: 'kg/m³', default: 1000 },
      bottomRight: { label: 'કદ (V)', symbol: 'V', unit: 'm³', default: 1 },
      equationLatex: 'm = \\rho \\cdot V'
    },
    {
      id: 'triangle_momentum',
      title: 'રેખીય વેગમાન (Momentum p = m × v)',
      top: { label: 'વેગમાન (p)', symbol: 'p', unit: 'kg·m/s', default: 50 },
      bottomLeft: { label: 'દળ (m)', symbol: 'm', unit: 'kg', default: 5 },
      bottomRight: { label: 'વેગ (v)', symbol: 'v', unit: 'm/s', default: 10 },
      equationLatex: 'p = m \\cdot v'
    },
    {
      id: 'triangle_ohms_law',
      title: 'ઓહ્મનો નિયમ: વોલ્ટેજ (Voltage V = I × R)',
      top: { label: 'વોલ્ટેજ (V)', symbol: 'V', unit: 'V', default: 240 },
      bottomLeft: { label: 'પ્રવાહ (I)', symbol: 'I', unit: 'A', default: 2 },
      bottomRight: { label: 'અવરોધ (R)', symbol: 'R', unit: 'Ω', default: 120 },
      equationLatex: 'V = I \\cdot R'
    },
    {
      id: 'triangle_power',
      title: 'કાર્ય અને પાવર (Work W = P × t)',
      top: { label: 'કાર્ય (W)', symbol: 'W', unit: 'J', default: 1000 },
      bottomLeft: { label: 'પાવર (P)', symbol: 'P', unit: 'W', default: 100 },
      bottomRight: { label: 'સમય (t)', symbol: 't', unit: 's', default: 10 },
      equationLatex: 'W = P \\cdot t'
    }
  ],

  // Complete Exhaustive Physical Quantities Database
  quantities: [
    // -------------------------------------------------------------
    // CHAPTER 1: UNITS AND MEASUREMENTS (Common to Both Subjects)
    // -------------------------------------------------------------
    {
      id: 'length',
      name: 'લંબાઈ (Length)',
      symbol: 'l',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર (centimeter)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: 'l',
      standardDefinition: 'અવકાશમાં બે બિંદુઓ વચ્ચેનું અંતર અથવા લંબાઈ માપવા માટેનું મૂળભૂત પરિમાણ (1 m = 100 cm = 10² cm).',
      defaultVal: 1,
      icon: 'fa-ruler-horizontal',
      benchmarks: [
        { label: 'પ્લાન્ક લંબાઈ (Planck Length)', val: 1.6e-35, unit: 'm', desc: 'ભૌતિકશાસ્ત્રમાં શક્ય નાનામાં નાની લંબાઈ (૧.૬ × ૧૦⁻³⁵ m).' },
        { label: 'પ્રોટોનની ત્રિજ્યા (Proton Radius)', val: 8.4e-16, unit: 'm', desc: 'ન્યુક્લિયસમાં રહેલા પ્રોટોનનું પરિમાણ (૦.૮૪ ફેમ્ટોમીટર).' },
        { label: 'હાઇડ્રોજન પરમાણુ (Hydrogen Atom)', val: 1.06e-10, unit: 'm', desc: 'પરમાણ્વીય કદ / બોહર ત્રિજ્યા (આશરે ૦.૧ nm).' },
        { label: 'DNA ની પહોળાઈ (DNA Helix Width)', val: 2e-9, unit: 'm', desc: 'જૈવિક DNA અણુની પહોળાઈ (૨ નેનોમીટર).' },
        { label: 'રક્તકણ (Red Blood Cell)', val: 7e-6, unit: 'm', desc: 'માનવ રક્તકણનો વ્યાસ (૭ માઇક્રોમીટર).' },
        { label: 'માનવ વાળની જાડાઈ (Human Hair)', val: 1e-4, unit: 'm', desc: 'વાળની સરેરાશ જાડાઈ (૧૦૦ માઇક્રોમીટર).' },
        { label: 'માનવ ઊંચાઈ (Human Height)', val: 1.7, unit: 'm', desc: 'પુખ્ત માનવીની સરેરાશ ઊંચાઈ (૧.૭ મીટર).' },
        { label: 'બુર્જ ખલીફા (Burj Khalifa)', val: 828, unit: 'm', desc: 'વિશ્વની સૌથી ઊંચી ઇમારત (૮૨૮ મીટર).' },
        { label: 'માઉન્ટ એવરેસ્ટ (Mt. Everest)', val: 8849, unit: 'm', desc: 'પૃથ્વી પરનું સર્વોચ્ચ શિખર (૮,૮૪૯ મીટર).' },
        { label: 'પૃથ્વીની ત્રિજ્યા (Earth Radius)', val: 6.371e6, unit: 'm', desc: 'પૃથ્વીની સરેરાશ ત્રિજ્યા (૬,૩૭૧ કિલોમીટર).' },
        { label: 'પૃથ્વી-ચંદ્ર અંતર (Earth-Moon Distance)', val: 3.844e8, unit: 'm', desc: 'ચંદ્રનું પૃથ્વીથી સરેરાશ અંતર (૩.૮૪ × ૧૦⁸ m).' },
        { label: 'પૃથ્વી-સૂર્ય અંતર (1 AU Distance)', val: 1.496e11, unit: 'm', desc: 'ખગોળીય એકમ Astronomical Unit (૧.૫ × ૧૦¹¹ m).' },
        { label: '૧ પ્રકાશવર્ષ (1 Light Year)', val: 9.461e15, unit: 'm', desc: 'પ્રકાશે એક વર્ષમાં કાપેલું અંતર (૯.૪૬ × ૧૦¹૫ m).' },
        { label: 'મિલ્કી વે ગેલેક્સી વ્યાસ (Milky Way Diameter)', val: 9.5e20, unit: 'm', desc: 'આપણી આકાશગંગાનો વ્યાસ (૧ લાખ પ્રકાશવર્ષ).' },
        { label: 'દ્રશ્યમાન બ્રહ્માંડ (Observable Universe)', val: 8.8e26, unit: 'm', desc: 'સમગ્ર નિરીક્ષણક્ષમ બ્રહ્માંડનો વ્યાસ (૯૩ અબજ પ્રકાશવર્ષ).' }
      ]
    },
    {
      id: 'mass',
      name: 'દળ (Mass)',
      symbol: 'm',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'કિલોગ્રામ (kilogram)', symbol: 'kg' },
      cgs: { name: 'ગ્રામ (gram)', symbol: 'g' },
      mksToCgsRatio: 1000,
      exponent: 3,
      dimension: '[M¹ L⁰ T⁰]',
      formula: 'm',
      standardDefinition: 'પદાર્થમાં રહેલા દ્રવ્યના જથ્થાનું માપ એટલે દળ (1 kg = 1000 g = 10³ g).',
      defaultVal: 1,
      icon: 'fa-weight-hanging',
      benchmarks: [
        { label: 'ઇલેક્ટ્રોનનું દળ (Electron Mass)', val: 9.109e-31, unit: 'kg', desc: 'મૂળભૂત કણ ઇલેક્ટ્રોનનું સ્થિર દળ (૯.૧૧ × ૧૦⁻³¹ kg).' },
        { label: 'પ્રોટોનનું દળ (Proton Mass)', val: 1.673e-27, unit: 'kg', desc: 'ન્યુક્લિયસમાં પ્રોટોનનું દળ (૧.૬૭ × ૧૦⁻²૭ kg = 1 amu).' },
        { label: 'યુરેનિયમ પરમાણુ (Uranium-238 Atom)', val: 3.95e-25, unit: 'kg', desc: 'ભારે રેડિયોએક્ટિવ તત્વ યુરેનિયમનું પરમાણ્વીય દળ.' },
        { label: 'DNA અણુ (Single DNA Molecule)', val: 1e-21, unit: 'kg', desc: 'માનવ કોષમાં DNA અણુનું અંદાજિત દળ.' },
        { label: 'એક બેક્ટેરિયા (Single Bacterium)', val: 1e-15, unit: 'kg', desc: 'E. coli બેક્ટેરિયાનું દળ (૧ પિકોગ્રામ).' },
        { label: 'ધૂળનો રજકણ (Dust Speck)', val: 1e-9, unit: 'kg', desc: 'હવામાં તરતા ધૂળના કણનું દળ (૧ માઇક્રોગ્રામ).' },
        { label: 'મચ્છર (Mosquito)', val: 2.5e-6, unit: 'kg', desc: 'સામાન્ય મચ્છરનું દળ (૨.૫ મિલીગ્રામ).' },
        { label: 'વરસાદનું ટીપું (Raindrop)', val: 5e-5, unit: 'kg', desc: 'વરસાદના સરેરાશ ટીપાનું દળ (૫૦ મિલીગ્રામ).' },
        { label: 'સફરજન (Apple)', val: 0.15, unit: 'kg', desc: 'સામાન્ય સફરજનનું દળ (૧૫૦ ગ્રામ).' },
        { label: 'માનવ વજન (Human Mass)', val: 70, unit: 'kg', desc: 'પુખ્ત વ્યક્તિનું સરેરાશ દળ (૭૦ કિલોગ્રામ).' },
        { label: 'હાથી (Asian Elephant)', val: 4000, unit: 'kg', desc: 'પુખ્ત હાથીનું દળ (૪ ટન / ૪,૦૦૦ kg).' },
        { label: 'બ્લુ વ્હેલ (Blue Whale)', val: 1.5e5, unit: 'kg', desc: 'પૃથ્વી પરનું સૌથી મોટું પ્રાણી (૧૫૦ ટન).' },
        { label: 'ગ્રેટ પિરામિડ (Great Pyramid of Giza)', val: 6e9, unit: 'kg', desc: 'ગીઝાના પિરામિડનું અંદાજિત દળ (૬૦ લાખ ટન).' },
        { label: 'પૃથ્વીનું વાતાવરણ (Earth’s Atmosphere)', val: 5.15e18, unit: 'kg', desc: 'પૃથ્વીની આસપાસ હવાનું કુલ દળ (૫.૧૫ × ૧૦૧૮ kg).' },
        { label: 'ચંદ્રનું દળ (Moon Mass)', val: 7.348e22, unit: 'kg', desc: 'પૃથ્વીના ઉપગ્રહ ચંદ્રનું દળ (૭.૩૫ × ૧૦²² kg).' },
        { label: 'પૃથ્વીનું દળ (Earth Mass)', val: 5.972e24, unit: 'kg', desc: 'આપણી પૃથ્વીનું કુલ દળ (૫.૯૭ × ૧૦²⁴ kg).' },
        { label: 'સૂર્યનું દળ (Sun Mass)', val: 1.989e30, unit: 'kg', desc: 'સૂર્યમંડળના કેન્દ્ર સૂર્યનું દળ (૨ × ૧૦³⁰ kg).' },
        { label: 'મિલ્કી વે ગેલેક્સી દળ (Milky Way Mass)', val: 1.5e42, unit: 'kg', desc: 'આપણી આકાશગંગાનું અંદાજિત કુલ દળ (૧.૫ × ૧૦⁴² kg).' }
      ]
    },
    {
      id: 'time',
      name: 'સમય (Time)',
      symbol: 't',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'સેકન્ડ (second)', symbol: 's' },
      cgs: { name: 'સેકન્ડ (second)', symbol: 's' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁰ L⁰ T¹]',
      formula: 't',
      standardDefinition: 'ઘટનાઓના ક્રમ અને અવધિનું માપ (1 s = 1 s).',
      defaultVal: 1,
      icon: 'fa-stopwatch',
      benchmarks: [
        { label: 'પ્લાન્ક સમય (Planck Time)', val: 5.39e-44, unit: 's', desc: 'ભૌતિકશાસ્ત્રમાં શક્ય નાનામાં નાનો સમયગાળો (૫.૩૯ × ૧૦⁻⁴⁴ s).' },
        { label: 'પરમાણ્વીય કંપન (Atomic Vibration)', val: 1e-15, unit: 's', desc: 'ઇલેક્ટ્રોન કક્ષીય સંક્રાંતિ સમય (૧ ફેમ્ટોસેકન્ડ).' },
        { label: 'CPU ક્લોક સાઇકલ (3 GHz CPU Cycle)', val: 3.33e-10, unit: 's', desc: 'કમ્પ્યુટર પ્રોસેસરની એક સાઇકલ (૦.૩૩ ns).' },
        { label: 'આંખનો પલકારો (Human Eye Blink)', val: 0.3, unit: 's', desc: 'માનવ આંખનો એક પલકારો (૩૦૦ ms).' },
        { label: '૧ દિવસ (1 Earth Day)', val: 86400, unit: 's', desc: 'પૃથ્વીનું ધરીભ્રમણ (૨૪ કલાક = ૮૬,૪૦૦ s).' },
        { label: '૧ વર્ષ (1 Year)', val: 3.156e7, unit: 's', desc: 'પૃથ્વીનું સૂર્ય પરિભ્રમણ (૩.૧૫૬ × ૧૦⁷ s).' },
        { label: 'પૃથ્વીની ઉંમર (Age of Earth)', val: 1.43e17, unit: 's', desc: 'પૃથ્વીનું નિર્માણ (૪.૫૪ અબજ વર્ષ).' },
        { label: 'બ્રહ્માંડની ઉંમર (Age of Universe)', val: 4.35e17, unit: 's', desc: 'બિગ બેંગથી આજ સુધીનો સમય (૧૩.૮ અબજ વર્ષ).' }
      ]
    },
    {
      id: 'temperature',
      name: 'તાપમાન (Temperature)',
      symbol: 'T',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit4'],
      mks: { name: 'કેલ્વિન (Kelvin)', symbol: 'K' },
      cgs: { name: 'સેલ્સિયસ (Celsius)', symbol: '°C' },
      mksToCgsRatio: 1,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰ K¹]',
      formula: 'T',
      standardDefinition: 'પદાર્થની ગરમી કે ઠંડકની માત્રા દર્શાવતી મૂળભૂત રાશિ (SI એકમ K, સામાન્ય એકમ °C).',
      defaultVal: 273.15,
      icon: 'fa-temperature-high',
      benchmarks: [
        { label: 'નિરપેક્ષ શૂન્ય (Absolute Zero)', val: 0, unit: 'K', desc: 'લઘુત્તમ શક્ય તાપમાન (-૨૭૩.૧૫ °C = 0 K).' },
        { label: 'પ્રવાહી નાઇટ્રોજન (Liquid Nitrogen)', val: 77, unit: 'K', desc: 'ક્રાયોજેનિક પ્રવાહી નાઇટ્રોજન (-૧૯૬ °C).' },
        { label: 'બરફનું ગલનબિંદુ (Ice Melting Point)', val: 273.15, unit: 'K', desc: 'પાણીનું ઠારણબિંદુ (૦ °C = 273.15 K).' },
        { label: 'ઓરડાનું તાપમાન (Room Temp)', val: 293.15, unit: 'K', desc: 'પ્રમાણભૂત ઓરડાનું તાપમાન (૨૦ °C).' },
        { label: 'માનવ શરીર (Human Body)', val: 310.15, unit: 'K', desc: 'સામાન્ય માનવ શરીર (૩૭ °C = 98.6 °F).' },
        { label: 'પાણીનું ઉત્કલનબિંદુ (Boiling Point)', val: 373.15, unit: 'K', desc: 'પ્રમાણભૂત ઉત્કલનબિંદુ (૧૦૦ °C = 373.15 K).' },
        { label: 'સૂર્યની સપાટી (Sun Surface)', val: 5778, unit: 'K', desc: 'સૂર્યની બાહ્ય સપાટીનું તાપમાન (૫,૫૦૦ °C).' },
        { label: 'સૂર્યનું કેન્દ્ર (Sun Core)', val: 1.5e7, unit: 'K', desc: 'ફ્યુઝન ચાલતું સૂર્યનું કેન્દ્ર (૧.૫ કરોડ K).' }
      ]
    },
    {
      id: 'electric_current',
      name: 'વિદ્યુત પ્રવાહ (Electric Current)',
      symbol: 'I',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'mp_unit2', 'mp_unit5'],
      mks: { name: 'એમ્પિયર (ampere)', symbol: 'A' },
      cgs: { name: 'સ્ટેટએમ્પિયર (statampere)', symbol: 'statA' },
      mksToCgsRatio: 3e9,
      exponent: 9,
      dimension: '[M⁰ L⁰ T⁰ A¹]',
      formula: 'I = \\frac{Q}{t}',
      standardDefinition: 'વાહકના કોઈપણ આડછેદમાંથી એકમ સમયમાં પસાર થતા વિદ્યુતભારના જથ્થાને વિદ્યુત પ્રવાહ કહે છે (1 A = 3 × 10⁹ statA = 0.1 abA).',
      defaultVal: 1,
      icon: 'fa-bolt',
      benchmarks: [
        { label: 'ચેતાકોષ સિગ્નલ પ્રવાહ (Neuron Current)', val: 1e-12, unit: 'A', desc: 'માનવ મગજના જ્ઞાનતંતુમાં વહેતો સૂક્ષ્મ પ્રવાહ (૧ પિકોએમ્પિયર).' },
        { label: 'ઇલેક્ટ્રોનિક ચિપ લીકેજ (Transistor Leakage)', val: 1e-9, unit: 'A', desc: 'નેનોમીટર ટ્રાન્ઝિસ્ટરમાં લીકેજ પ્રવાહ (૧ નેનોએમ્પિયર).' },
        { label: 'LED લાઇટ પ્રવાહ (Standard Indicator LED)', val: 0.02, unit: 'A', desc: 'સામાન્ય LED ચાલુ કરવા જરૂરી પ્રવાહ (૨૦ મિલીએમ્પિયર).' },
        { label: 'સ્માર્ટફોન ચાર્જિંગ (USB-C Fast Charging)', val: 3.0, unit: 'A', desc: 'મોબાઇલ ફોન ઝડપી ચાર્જિંગ પ્રવાહ (૩ A).' },
        { label: 'ઘરેલું ઇલેક્ટ્રિક ગીઝર / AC (Home AC / Geyser)', val: 15, unit: 'A', desc: 'મોટા ઘરગથ્થુ ઉપકરણોનો પ્રવાહ (૧૫ A).' },
        { label: 'ઇલેક્ટ્રિક વેલ્ડિંગ મશીન (Arc Welding Machine)', val: 200, unit: 'A', desc: 'ધાતુ સાંધવા માટે આર્ક વેલ્ડિંગ પ્રવાહ (૨૦૦ A).' },
        { label: 'રેલવે લોકોમોટિવ મોટર (Electric Train Motor)', val: 1200, unit: 'A', desc: 'ટ્રેન એન્જિન ટ્રેક્શન મોટર પ્રવાહ (૧,૨૦૦ A).' },
        { label: 'આકાશી વીજળી ચમકારો (Natural Lightning Bolt)', val: 30000, unit: 'A', desc: 'વીજળી પડતી વખતે પ્રવાહ (૩૦,૦૦૦ A = ૩૦ kA).' }
      ]
    },
    {
      id: 'luminosity',
      name: 'જ્યોતિ તીવ્રતા / લ્યુમિનોસિટી (Luminosity)',
      symbol: 'L',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'કેન્ડેલા (candela)', symbol: 'cd' },
      cgs: { name: 'કેન્ડેલા (candela)', symbol: 'cd' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰ J¹]',
      formula: 'I_v',
      standardDefinition: 'પ્રકાશ સ્ત્રોત દ્વારા આપેલ દિશામાં એકમ ઘનકોણ દીઠ ઉત્સર્જિત થતી જ્યોતિ ઊર્જા (1 cd = 1 cd).',
      defaultVal: 1,
      icon: 'fa-sun',
      benchmarks: [
        { label: 'સામાન્ય મીણબત્તી (Standard Wax Candle)', val: 1, unit: 'cd', desc: '૧ સ્ટાન્ડર્ડ કેન્ડલ પાવર (૧ cd).' },
        { label: '100W ટંગસ્ટન બલ્બ (100W Filament Bulb)', val: 120, unit: 'cd', desc: 'પરંપરાગત ફિલામેન્ટ બલ્બની તીવ્રતા (૧૨૦ cd).' },
        { label: 'કારની હેડલાઇટ હાઇ-બીમ (Car Headlight High Beam)', val: 25000, unit: 'cd', desc: 'ઓટોમોબાઇલ વાહન હેડલાઇટ (૨૫,૦૦૦ cd).' },
        { label: 'દરિયાઈ લાઇટહાઉસ બીકન (Lighthouse Beacon)', val: 1e6, unit: 'cd', desc: 'જહાજોના માર્ગદર્શન માટે લાઇટહાઉસ (૧૦ લાખ cd).' },
        { label: 'સૂર્યની તેજસ્વીતા (Sun Total Luminosity)', val: 3e27, unit: 'cd', desc: 'સૂર્યની સમગ્ર અવકાશમાં જ્યોતિ તીવ્રતા (૩ × ૧૦²૭ cd).' }
      ]
    },
    {
      id: 'area',
      name: 'ક્ષેત્રફળ (Area)',
      symbol: 'A',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'ચોરસ મીટર (m²)', symbol: 'm²' },
      cgs: { name: 'ચોરસ સેન્ટીમીટર (cm²)', symbol: 'cm²' },
      mksToCgsRatio: 10000,
      exponent: 4,
      dimension: '[M⁰ L² T⁰]',
      formula: 'A = l \\cdot b',
      standardDefinition: 'દ્વિ-પરિમાણીય સપાટીનું વિસ્તાર માપ (1 m² = (10² cm)² = 10⁴ cm²).',
      defaultVal: 1,
      icon: 'fa-vector-square',
      benchmarks: [
        { label: 'પરમાણ્વીય આડછેદ (Atomic Cross-Section Barn)', val: 1e-28, unit: 'm²', desc: 'ન્યુક્લિયર ફિઝિક્સ ૧ બાર્ન (૧૦⁻૨૮ m²).' },
        { label: 'SIM કાર્ડ ચિપ ક્ષેત્રફળ (Micro SIM Chip Area)', val: 1e-4, unit: 'm²', desc: 'મોબાઇલ સિમ કાર્ડ કોન્ટેક્ટ એરિયા (૧ cm²).' },
        { label: 'A4 સાઇઝ કાગળ (A4 Paper Sheet Area)', val: 0.0624, unit: 'm²', desc: 'પ્રિન્ટિંગ કાગળનું ક્ષેત્રફળ (૬૨૪ cm²).' },
        { label: 'ફૂટબોલ મેદાન (FIFA Football Pitch Area)', val: 7140, unit: 'm²', desc: 'આંતરરાષ્ટ્રીય ફૂટબોલ ગ્રાઉન્ડ (૦.૭૧૪ હેક્ટર).' },
        { label: 'પૃથ્વીની કુલ સપાટી (Earth Total Surface Area)', val: 5.1e14, unit: 'm²', desc: 'પૃથ્વીની સમગ્ર સપાટીનું ક્ષેત્રફળ (૫૧ કરોડ ચોરસ કિમી).' }
      ]
    },
    {
      id: 'volume',
      name: 'કદ (Volume)',
      symbol: 'V',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'ઘન મીટર (m³)', symbol: 'm³' },
      cgs: { name: 'ઘન સેન્ટીમીટર (cm³ / cc)', symbol: 'cm³' },
      mksToCgsRatio: 1000000,
      exponent: 6,
      dimension: '[M⁰ L³ T⁰]',
      formula: 'V = l \\cdot b \\cdot h',
      standardDefinition: 'પદાર્થ દ્વારા ત્રિ-પરિમાણમાં રોકાયેલી જગ્યાનું માપ (1 m³ = (10² cm)³ = 10⁶ cm³).',
      defaultVal: 1,
      icon: 'fa-cube',
      benchmarks: [
        { label: 'પ્રોટોનનું કદ (Proton Volume)', val: 2.5e-45, unit: 'm³', desc: 'ન્યુક્લિયસમાં પ્રોટોનનું અંદાજિત કદ.' },
        { label: 'પાણીનું ૧ ટીપું (Single Water Droplet)', val: 5e-8, unit: 'm³', desc: 'વરસાદના ટીપાનું કદ (૦.૦૫ મિલી = ૦.૦૫ cm³).' },
        { label: '૧ લિટર બોટલ (1 Liter Water Bottle)', val: 0.001, unit: 'm³', desc: '૧ લિટર = ૧,૦૦૦ cm³ = ૧૦⁻³ m³.' },
        { label: 'ઓલિમ્પિક સ્વિમિંગ પૂલ (Olympic Pool Volume)', val: 2500, unit: 'm³', desc: '૨૫ લાખ લિટર પાણીનો સંગ્રહ (૨,૫૦૦ m³).' },
        { label: 'પૃથ્વીનું કુલ કદ (Earth Total Volume)', val: 1.08e21, unit: 'm³', desc: 'પૃથ્વી ગોળાનું કુલ ઘનફળ (૧.૦૮ × ૧૦૨૧ m³).' }
      ]
    },
    {
      id: 'speed_velocity',
      name: 'ઝડપ / વેગ (Speed / Velocity)',
      symbol: 'v',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit2'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v = \\frac{d}{t}',
      standardDefinition: 'એકમ સમયમાં કાપેલ અંતર અથવા થયેલ સ્થાનાંતર (1 m/s = 100 cm/s = 3.6 km/h).',
      defaultVal: 1,
      icon: 'fa-gauge-high',
      benchmarks: [
        { label: 'ગોકળગાયની ગતિ (Garden Snail Speed)', val: 0.001, unit: 'm/s', desc: 'ગોકળગાયની ધીમી ગતિ (૧ mm/s = ૦.૧ cm/s).' },
        { label: 'માનવ ચાલવાની ઝડપ (Human Walking Pace)', val: 1.4, unit: 'm/s', desc: 'સરેરાશ ચાલવાની ઝડપ (૫ km/h = ૧.૪ m/s = ૧૪૦ cm/s).' },
        { label: 'ચીત્તાની મહત્તમ દોડ (Cheetah Sprint Speed)', val: 30, unit: 'm/s', desc: 'સૌથી ઝડપી પ્રાણી ચીત્તો (૧૧૦ km/h = ૩૦ m/s).' },
        { label: 'હવામાં ધ્વનિનો વેગ (Speed of Sound in Air at 20°C)', val: 343, unit: 'm/s', desc: '૧ માક ઝડપ (૧,૨૩૫ km/h = ૩૪૩ m/s).' },
        { label: 'પૃથ્વી મુક્તિ વેગ (Earth Escape Velocity)', val: 11200, unit: 'm/s', desc: 'પૃથ્વીના ગુરુત્વાકર્ષણમાંથી મુક્ત થવા જરૂરી વેગ (૧૧.૨ km/s).' },
        { label: 'શૂન્યાવકાશમાં પ્રકાશનો વેગ (Speed of Light in Vacuum c)', val: 2.998e8, unit: 'm/s', desc: 'બ્રહ્માંડની સર્વોચ્ચ ઝડપ (૩ × ૧૦⁸ m/s = ૩ × ૧૦¹⁰ cm/s).' }
      ]
    },
    {
      id: 'acceleration',
      name: 'પ્રવેગ (Acceleration)',
      symbol: 'a',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit2'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ² (m/s²)', symbol: 'm/s²' },
      cgs: { name: 'ગેલ / સેમી પ્રતિ સેકન્ડ² (cm/s² / Gal)', symbol: 'cm/s²' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻²]',
      formula: 'a = \\frac{\\Delta v}{\\Delta t}',
      standardDefinition: 'એકમ સમયમાં વેગમાં થતા ફેરફારનો દર (1 m/s² = 100 cm/s² = 100 Gal).',
      defaultVal: 9.81,
      icon: 'fa-forward-fast',
      benchmarks: [
        { label: 'ખંડીય પ્લેટનું સરકવું (Continental Drift)', val: 1e-9, unit: 'm/s²', desc: 'ટેક્ટોનિક પ્લેટોની અતિ ધીમી ગતિ.' },
        { label: 'ચંદ્ર પર ગુરુત્વ પ્રવેગ (Moon Surface Gravity)', val: 1.62, unit: 'm/s²', desc: 'ચંદ્ર પર મુક્ત પતન પ્રવેગ (૧.૬૨ m/s² = ૧૬૨ Gal).' },
        { label: 'પૃથ્વી પર પ્રમાણભૂત ગુરુત્વ પ્રવેગ (Earth Standard g)', val: 9.80665, unit: 'm/s²', desc: 'પૃથ્વીની સપાટી પર પ્રમાણભૂત ગુરુત્વ પ્રવેગ (૯.૮૧ m/s² = ૯૮૧ cm/s²).' },
        { label: 'F1 રેસિંગ કાર પ્રવેગ (Formula 1 Launch Acceleration)', val: 15, unit: 'm/s²', desc: '૦ થી ૧૦૦ km/h માત્ર ૨.૪ સેકન્ડમાં (૧.૫ g).' },
        { label: 'ન્યુટ્રોન તારા પર ગુરુત્વ (Neutron Star Surface Gravity)', val: 2e12, unit: 'm/s²', desc: 'ન્યુટ્રોન તારાની સપાટી પર પ્રચંડ પ્રવેગ (૨ × ૧૦¹૨ m/s²).' }
      ]
    },
    {
      id: 'force',
      name: 'બળ (Force)',
      symbol: 'F',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit2', 'ap_unit3', 'mp_unit2'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F = m \\cdot a',
      standardDefinition: 'પદાર્થની સ્થિર કે ગતિમાન અવસ્થા બદલવા માટે જરૂરી બાહ્ય પરિબળ (1 N = 10⁵ dyn).',
      defaultVal: 1,
      icon: 'fa-hand-fist',
      benchmarks: [
        { label: 'DNA પર ખેંચાણ બળ (Optical Tweezer on DNA)', val: 1e-12, unit: 'N', desc: 'DNA અણુ ખેંચવા જરૂરી બળ (૧ પિકોન્યૂટન).' },
        { label: 'કીડીનો ભાર ખેંચવો (Ant Pulling Load)', val: 1e-3, unit: 'N', desc: 'એક કીડી દ્વારા લાગતું ખેંચાણ બળ (૧ મિલીન્યૂટન).' },
        { label: 'સફરજનનું પૃથ્વી પર વજન (Weight of 1 Apple)', val: 1, unit: 'N', desc: '૧૦૦ ગ્રામ સફરજન પર ગુરુત્વાકર્ષણ (૧ N = ૧૦⁵ dyn).' },
        { label: 'બોક્સિંગ મુક્કીનું બળ (Boxing Punch Force)', val: 2500, unit: 'N', desc: 'હેવીવેઇટ બોક્સિંગ પંચનું આઘાતી બળ (૨.૫ kN).' },
        { label: 'Saturn V ચંદ્ર રોકેટ (Saturn V Rocket Thrust)', val: 3.4e7, unit: 'N', desc: 'મૂન રોકેટ લિફ્ટઓફ થ્રસ્ટ (૩૪ MN).' },
        { label: 'સૂર્ય-પૃથ્વી ગુરુત્વાકર્ષણ (Sun-Earth Gravitational Pull)', val: 3.54e22, unit: 'N', desc: 'પૃથ્વીને સૂર્યની આસપાસ ભ્રમણ કરાવતું પ્રચંડ બળ (૩.૫ × ૧૦²² N).' }
      ]
    },
    {
      id: 'work',
      name: 'કાર્ય અને ઊર્જા (Work & Energy)',
      symbol: 'W',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'mp_unit2'],
      mks: { name: 'જૂલ (joule)', symbol: 'J' },
      cgs: { name: 'અર્ગ (erg)', symbol: 'erg' },
      mksToCgsRatio: 10000000,
      exponent: 7,
      dimension: '[M¹ L² T⁻²]',
      formula: 'W = F \\cdot d',
      standardDefinition: 'બળ અને બળની દિશામાં થયેલા સ્થાનાંતરના ગુણાકારને કાર્ય કહે છે (1 J = 10⁷ erg).',
      defaultVal: 1,
      icon: 'fa-person-running',
      benchmarks: [
        { label: '૧ ઇલેક્ટ્રોન-વોલ્ટ (1 eV Photon Energy)', val: 1.6e-19, unit: 'J', desc: 'પરમાણુમાં એક ઇલેક્ટ્રોનની બંધન ઊર્જા.' },
        { label: 'સફરજન ૧ મીટર ઊંચકવું (Lifting 1 Apple by 1m)', val: 1, unit: 'J', desc: '૧ ન્યૂટન બળ સામે ૧ મીટર કાર્ય = ૧ જૂલ (૧૦⁷ erg).' },
        { label: 'ખોરાકની ૧ કેલરી (1 Food Calorie = 1 kcal)', val: 4184, unit: 'J', desc: 'માનવ આહારની ૧ ડાયેટરી કેલરી (૪.૧૮૪ kJ).' },
        { label: 'વીજળીનો ચમકારો (Single Cloud Lightning Strike)', val: 1e9, unit: 'J', desc: 'આકાશમાં થતી એક વીજળીની કુલ ઊર્જા (૧ GJ).' },
        { label: 'હિરોશિમા અણુબોમ્બ (Hiroshima Atomic Bomb)', val: 6.3e13, unit: 'J', desc: '૧૫ કિલોટન ન્યુક્લિયર વિસ્ફોટ (૬.૩ × ૧૦¹³ J).' },
        { label: 'સૂર્ય ઉત્સર્જિત ઊર્જા પ્રતિ સેકન્ડ (Sun Energy Output/sec)', val: 3.8e26, unit: 'J', desc: 'સૂર્ય દર સેકન્ડે સમગ્ર અવકાશમાં ફેંકે છે (૩.૮ × ૧૦²⁶ J).' }
      ]
    },
    {
      id: 'power',
      name: 'પાવર / કાર્યત્વરા (Power)',
      symbol: 'P',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'વોટ (watt)', symbol: 'W' },
      cgs: { name: 'અર્ગ પ્રતિ સેકન્ડ (erg/s)', symbol: 'erg/s' },
      mksToCgsRatio: 10000000,
      exponent: 7,
      dimension: '[M¹ L² T⁻³]',
      formula: 'P = \\frac{W}{t}',
      standardDefinition: 'એકમ સમયમાં થતા કાર્યના દરને પાવર કહે છે (1 W = 1 J/s = 10⁷ erg/s). 1 HP = 746 W.',
      defaultVal: 100,
      icon: 'fa-plug-circle-bolt',
      benchmarks: [
        { label: 'માનવ હૃદય પાવર (Human Heart Mechanical Power)', val: 1.3, unit: 'W', desc: 'લોહી પમ્પ કરવા માટે હૃદયનો પાવર (૧.૩ વોટ).' },
        { label: 'LED લેમ્પ પાવર (Standard Home LED Bulb)', val: 9, unit: 'W', desc: 'ઓરડામાં પ્રકાશ આપતો LED બલ્બ (૯ વોટ).' },
        { label: 'માનવ શરીર મેટાબોલિક પાવર (Resting Human Basal Rate)', val: 100, unit: 'W', desc: 'વિશ્રામ અવસ્થામાં માનવ શરીર ૧૦૦ વોટ ઉષ્મા ફેંકે છે.' },
        { label: '૧ હોર્સપાવર મોટર (1 Horsepower Electric Motor)', val: 746, unit: 'W', desc: '૧ HP કૃષિ પમ્પ મોટરનો પાવર (૭૪૬ વોટ).' },
        { label: 'હાઇ-સ્પીડ ઇલેક્ટ્રિક ટ્રેન (High-Speed Train Locomotive)', val: 8e6, unit: 'W', desc: 'વંદે ભારત / બુલેટ ટ્રેન લોકોમોટિવ પાવર (૮ મેગાવોટ = 8 MW).' },
        { label: 'સૂર્યનો કુલ પાવર (Sun Total Radiant Power Output)', val: 3.828e26, unit: 'W', desc: 'સમગ્ર સૂર્યની કુલ તેજસ્વીતા (૩.૮ × ૧૦²૬ વોટ).' }
      ]
    },
    {
      id: 'density',
      name: 'ઘનતા (Density)',
      symbol: 'ρ',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit3'],
      mks: { name: 'કિલોગ્રામ પ્રતિ ઘન મીટર (kg/m³)', symbol: 'kg/m³' },
      cgs: { name: 'ગ્રામ પ્રતિ ઘન સેમી (g/cm³)', symbol: 'g/cm³' },
      mksToCgsRatio: 0.001,
      exponent: -3,
      dimension: '[M¹ L⁻³ T⁰]',
      formula: '\\rho = \\frac{m}{V}',
      standardDefinition: 'પદાર્થના એકમ કદ દીઠ રહેલા દળને ઘનતા કહે છે (1 kg/m³ = 10⁻³ g/cm³ અથવા 1 g/cm³ = 1000 kg/m³).',
      defaultVal: 1000,
      icon: 'fa-gem',
      benchmarks: [
        { label: 'હાઇડ્રોજન વાયુ (Hydrogen Gas at STP)', val: 0.0899, unit: 'kg/m³', desc: 'સૌથી હલકો રાસાયણિક વાયુ હાઇડ્રોજન.' },
        { label: 'સામાન્ય હવા (Air at STP)', val: 1.225, unit: 'kg/m³', desc: 'દરિયાની સપાટીએ હવાની ઘનતા (૧.૨૨૫ kg/m³).' },
        { label: 'શુદ્ધ પાણી (Pure Water at 4 °C)', val: 1000, unit: 'kg/m³', desc: 'પાણીની મહત્તમ ઘનતાનો આધારભૂત માપદંડ (૧ g/cm³).' },
        { label: 'ઇજનેરી સ્ટીલ (Structural Steel)', val: 7850, unit: 'kg/m³', desc: 'બાંધકામ અને બોલ બેરિંગ સ્ટીલની ઘનતા (૭.૮૫ g/cm³).' },
        { label: 'પ્રવાહી પારો (Liquid Mercury)', val: 13600, unit: 'kg/m³', desc: 'પ્રવાહી ધાતુ પારાની ઘનતા (૧૩.૬ g/cm³).' },
        { label: 'ઓસ્મિયમ ધાતુ (Osmium - Densest Element)', val: 22590, unit: 'kg/m³', desc: 'પૃથ્વી પરનું સૌથી ભારે તત્વ (૨૨.૫૯ g/cm³).' },
        { label: 'ન્યુટ્રોન તારો (Neutron Star Density)', val: 4e17, unit: 'kg/m³', desc: 'પરમાણ્વીય ન્યુક્લિયસ જેવી પ્રચંડ ઘનતા (૧ ચમચી = ૪૦ કરોડ ટન).' }
      ]
    },
    {
      id: 'pressure',
      name: 'દબાણ (Pressure)',
      symbol: 'P',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1', 'ap_unit3'],
      mks: { name: 'પાસ્કલ (pascal)', symbol: 'Pa' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી² (dyn/cm²)', symbol: 'dyn/cm²' },
      mksToCgsRatio: 10,
      exponent: 1,
      dimension: '[M¹ L⁻¹ T⁻²]',
      formula: 'P = \\frac{F}{A}',
      standardDefinition: 'સપાટીના એકમ ક્ષેત્રફળ પર લંબરૂપે લાગતા બળને દબાણ કહે છે (1 Pa = 1 N/m² = 10 dyn/cm²).',
      defaultVal: 101325,
      icon: 'fa-arrows-down-to-line',
      benchmarks: [
        { label: 'પ્રમાણભૂત વાતાવરણ દબાણ (1 Standard Atmosphere 1 atm)', val: 101325, unit: 'Pa', desc: 'દરિયાની સપાટીએ હવામાન દબાણ (૧૦૧.૩ kPa).' },
        { label: 'કારના ટાયરનું હવા દબાણ (Car Tire Pressure 32 PSI)', val: 220000, unit: 'Pa', desc: 'સામાન્ય વાહન ટાયર પ્રેશર (૨.૨ બાર = ૨૨૦ kPa).' },
        { label: 'મરિયાના ટ્રેન્ચ તળિયે (Mariana Trench Bottom)', val: 1.1e8, unit: 'Pa', desc: 'સમુદ્ર ખીણનું જળદબાણ (૧,૧૦૦ બાર = ૧૧૦ MPa).' },
        { label: 'પૃથ્વીનું કેન્દ્ર (Earth Core Pressure)', val: 3.6e11, unit: 'Pa', desc: 'પૃથ્વીના ગર્ભમાં પ્રચંડ દબાણ (૩.૬ મિલિયન બાર).' },
        { label: 'સૂર્યનું કેન્દ્ર (Sun Core Pressure)', val: 2.5e16, unit: 'Pa', desc: 'પરમાણ્વીય ફ્યુઝન થતું સૂર્યનું આંતરિક દબાણ (૨.૫ × ૧૦¹⁶ Pa).' }
      ]
    },
    {
      id: 'least_count',
      name: 'લઘુત્તમ માપશક્તિ (Least Count)',
      symbol: 'L.C.',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit1', 'mp_unit1'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર (centimeter)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: 'L.C. = \\frac{\\text{Pitch}}{\\text{Total Divisions}}',
      standardDefinition: 'કોઈપણ માપન સાધન વડે ચોકસાઈપૂર્વક માપી શકાતા નાનામાં નાના માપને લઘુત્તમ માપશક્તિ (L.C.) કહે છે (દા.ત. મીટર પટ્ટી: 1 mm, વર્નિયર કેલિપર્સ: 0.1 mm, માઇક્રોમીટર સ્ક્રૂ: 0.01 mm).',
      defaultVal: 0.0001,
      icon: 'fa-ruler-combined',
      benchmarks: [
        { label: 'મીટર પટ્ટી (Ordinary Meter Scale)', val: 0.001, unit: 'm', desc: 'સામાન્ય ફૂટપટ્ટીની લઘુત્તમ માપશક્તિ (૧ mm = ૦.૧ cm).' },
        { label: 'વર્નિયર કેલિપર્સ (Vernier Calipers)', val: 0.0001, unit: 'm', desc: 'પ્રયોગશાળા વર્નિયર કેલિપર્સ (૦.૧ mm = ૦.૦૧ cm).' },
        { label: 'માઇક્રોમીટર સ્ક્રૂ ગેજ (Micrometer Screw Gauge)', val: 0.00001, unit: 'm', desc: 'સ્ક્રૂ ગેજની ચોકસાઈ (૦.૦૧ mm = ૦.૦૦૧ cm = ૧૦ μm).' },
        { label: 'સ્ફેરોમીટર (Spherometer LC)', val: 0.000005, unit: 'm', desc: 'ગોળીય કાચની વક્રતા ત્રિજ્યા માપવા (૫ μm).' },
        { label: 'લેસર ઇન્ટરફેરોમીટર (Laser Interferometer LC)', val: 1e-10, unit: 'm', desc: 'પ્રકાશ તરંગોની મદદથી અતિ ચોક્કસ માપન (૦.૧ nm).' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 2: CIRCULAR MOTION (Applied Physics)
    // -------------------------------------------------------------
    {
      id: 'distance',
      name: 'કાપેલ અંતર (Distance)',
      symbol: 'd',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર (centimeter)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: 'd = v \\cdot t',
      standardDefinition: 'ગતિમાન પદાર્થે કાપેલા વાસ્તવિક પથની કુલ લંબાઈને અંતર કહે છે. તે અદિશ રાશિ છે (1 m = 100 cm).',
      defaultVal: 100,
      icon: 'fa-route',
      benchmarks: [
        { label: '૧૦૦ મીટર દોડ પથ (100m Sprint Track)', val: 100, unit: 'm', desc: 'ઓલિમ્પિક સ્પ્રિન્ટ રેસનું અંતર (૧૦૦ m = ૧૦,૦૦૦ cm).' },
        { label: 'મેરેથોન દોડ અંતર (Official Marathon Distance)', val: 42195, unit: 'm', desc: '૪૨.૧૯૫ કિલોમીટરનું અંતર.' },
        { label: 'પૃથ્વીનો વિષુવવૃત્તીય પરિઘ (Earth Circumference)', val: 40075000, unit: 'm', desc: 'પૃથ્વીની આસપાસ એક સંપૂર્ણ ચક્કર (૪૦,૦૭૫ km).' }
      ]
    },
    {
      id: 'displacement',
      name: 'સ્થાનાંતર (Displacement)',
      symbol: 'S',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર (centimeter)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: 'S = x_2 - x_1',
      standardDefinition: 'પદાર્થના પ્રારંભિક અને અંતિમ સ્થાન વચ્ચેના લઘુત્તમ અંતરને સ્થાનાંતર કહે છે. તે સદિશ રાશિ છે (1 m = 100 cm).',
      defaultVal: 10,
      icon: 'fa-arrow-right-long',
      benchmarks: [
        { label: 'ઓરડામાં સ્થાનાંતર (Room Displacement)', val: 5, unit: 'm', desc: 'ઓરડામાં એક છેડેથી બીજા છેડે સીધું સ્થાનાંતર.' },
        { label: 'પેરાશૂટ જમ્પ સ્થાનાંતર (Skydiver Fall)', val: 3000, unit: 'm', desc: 'વિમાનમાંથી પૃથ્વી તરફ શિરોલંબ સ્થાનાંતર (૩ km).' }
      ]
    },
    {
      id: 'momentum',
      name: 'રેખીય વેગમાન (Linear Momentum)',
      symbol: 'p',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'કિલોગ્રામ·મીટર પ્રતિ સેકન્ડ (kg·m/s)', symbol: 'kg·m/s' },
      cgs: { name: 'ગ્રામ·સેમી પ્રતિ સેકન્ડ (g·cm/s)', symbol: 'g·cm/s' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻¹]',
      formula: 'p = m \\cdot v',
      standardDefinition: 'પદાર્થના દળ અને વેગના ગુણાકારને રેખીય વેગમાન કહે છે (1 kg·m/s = 10³ g × 10² cm/s = 10⁵ g·cm/s).',
      defaultVal: 10,
      icon: 'fa-bowling-ball',
      benchmarks: [
        { label: 'બંદૂકની ગોળીનું વેગમાન (Rifle Bullet Momentum)', val: 4, unit: 'kg·m/s', desc: '૧૦ ગ્રામ ગોળી ૪૦૦ m/s વેગે છૂટે (૪ kg·m/s = ૪ લાખ g·cm/s).' },
        { label: 'ક્રિકેટ બોલ ફાસ્ટ બોલિંગ (Fast Cricket Delivery)', val: 6.5, unit: 'kg·m/s', desc: '૧૬૦ ગ્રામ બોલ ૧૫૦ km/h ની ઝડપે ફેંકાય.' },
        { label: 'ગતિમાન ટ્રકનું વેગમાન (Highway Truck at 80 km/h)', val: 2.2e5, unit: 'kg·m/s', desc: '૧૦ ટનની ટ્રક હાઇવે પર ગતિ કરતી હોય.' }
      ]
    },
    {
      id: 'impulse_of_force',
      name: 'બળનો આઘાત (Impulse of Force)',
      symbol: 'F·Δt',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'ન્યૂટન·સેકન્ડ (N·s)', symbol: 'N·s' },
      cgs: { name: 'ડાઇન·સેકન્ડ (dyn·s)', symbol: 'dyn·s' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻¹]',
      formula: 'J = F \\cdot \\Delta t = \\Delta p',
      standardDefinition: 'મોટું બળ અતિ અલ્પ સમયગાળા માટે લાગે ત્યારે બળ અને સમયના ગુણાકારને બળનો આઘાત કહે છે, જે વેગમાનના ફેરફાર જેટલો હોય છે (1 N·s = 10⁵ dyn·s).',
      defaultVal: 10,
      icon: 'fa-baseball-bat-ball',
      benchmarks: [
        { label: 'ટેનિસ બોલ પર રેકેટ ફટકો (Tennis Racket Smash)', val: 3, unit: 'N·s', desc: 'રેકેટ સાથે બોલનો ૫ મિલીસેકન્ડ સંપર્ક (૩ N·s).' },
        { label: 'ક્રિકેટ બેટનો સિક્સર શોટ (Cricket Bat Hit for Six)', val: 12, unit: 'N·s', desc: 'બેટ અને બોલ વચ્ચે ક્ષણિક પ્રચંડ આઘાતી બળ (૧૨ N·s).' },
        { label: 'કાર ક્રેશ ટેસ્ટ આઘાત (Car Crash Airbag Deployment)', val: 15000, unit: 'N·s', desc: 'અકસ્માત સમયે પેસેન્જર પર લાગતો આઘાત (૧૫ kN·s).' }
      ]
    },
    {
      id: 'angular_displacement',
      name: 'કોણીય સ્થાનાંતર (Angular Displacement)',
      symbol: 'Δθ',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'રેડિયન (radian)', symbol: 'rad' },
      cgs: { name: 'અંશ / ડિગ્રી (degree)', symbol: '°' },
      mksToCgsRatio: 57.2958,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\Delta\\theta = \\frac{\\text{Arc}}{\\text{Radius}} = \\frac{s}{r}',
      standardDefinition: 'વર્તુળાકાર ગતિ કરતા કણના સ્થાન સદિશે કેન્દ્ર આગળ બનાવેલા ખૂણાને કોણીય સ્થાનાંતર કહે છે (1 rad = 180°/π ≈ 57.296°, પરિમાણ રહિત વિશિષ્ટ એકમ).',
      defaultVal: 1,
      icon: 'fa-circle-notch',
      benchmarks: [
        { label: 'કાટખૂણો (Right Angle 90°)', val: 1.5708, unit: 'rad', desc: 'π/2 રેડિયન = ૯૦°.' },
        { label: '૧ સંપૂર્ણ પરિભ્રમણ (1 Complete Revolution 360°)', val: 6.2832, unit: 'rad', desc: '2π રેડિયન = ૩૬૦°.' }
      ]
    },
    {
      id: 'angular_speed',
      name: 'કોણીય ઝડપ / કોણીય આવૃત્તિ (Angular Speed)',
      symbol: 'ω',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'રેડિયન પ્રતિ સેકન્ડ (rad/s)', symbol: 'rad/s' },
      cgs: { name: 'ડિગ્રી પ્રતિ સેકન્ડ (°/s)', symbol: '°/s' },
      mksToCgsRatio: 57.2958,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁻¹]',
      formula: '\\omega = \\frac{\\Delta\\theta}{\\Delta t} = 2\\pi f',
      standardDefinition: 'એકમ સમયમાં થતા કોણીય સ્થાનાંતરના દરને કોણીય ઝડપ કહે છે (1 rad/s ≈ 57.296 °/s = 9.55 rpm).',
      defaultVal: 10,
      icon: 'fa-rotate',
      benchmarks: [
        { label: 'પૃથ્વી ધરીભ્રમણ કોણીય ઝડપ (Earth Rotation Speed)', val: 7.292e-5, unit: 'rad/s', desc: 'પૃથ્વી ૨૪ કલાકમાં એક ચક્કર ફરે છે (૭.૨૯ × ૧૦⁻⁵ rad/s).' },
        { label: 'ઘડિયાળનો સેકન્ડ કાંટો (Watch Second Hand)', val: 0.1047, unit: 'rad/s', desc: '૬૦ સેકન્ડમાં એક ચક્કર (૨π / ૬૦ = ૦.૧૦૫ rad/s).' },
        { label: 'સીલિંગ ફેન (Ceiling Fan 300 RPM)', val: 31.4, unit: 'rad/s', desc: 'સામાન્ય પંખાની કોણીય ઝડપ (૩૧.૪ rad/s = ૧,૮૦૦ °/s).' },
        { label: 'ડેન્ટિસ્ટ ડ્રિલ (Dental Turbine Drill 400,000 RPM)', val: 41888, unit: 'rad/s', desc: 'દાંતની અતિ હાઇ-સ્પીડ ટર્બાઇન ડ્રિલ (૪૧,૮૮૮ rad/s).' }
      ]
    },
    {
      id: 'linear_velocity_circular',
      name: 'રેખીય વેગ (Linear Velocity in Circle)',
      symbol: 'v',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v = r \\cdot \\omega',
      standardDefinition: 'વર્તુળ માર્ગે ગતિ કરતા પદાર્થનો સ્પર્શકની દિશામાં રેખીય વેગ (v = r·ω, 1 m/s = 100 cm/s).',
      defaultVal: 10,
      icon: 'fa-arrows-split-up-and-left',
      benchmarks: [
        { label: 'વિષુવવૃત્ત પર પૃથ્વીનો રેખીય વેગ (Earth Equator Tangential Speed)', val: 465, unit: 'm/s', desc: 'ધરીભ્રમણને કારણે વિષુવવૃત્ત પર પૃથ્વીની ઝડપ (૧,૬૭૦ km/h).' },
        { label: 'ચંદ્રનો કક્ષીય વેગ (Moon Orbital Velocity)', val: 1022, unit: 'm/s', desc: 'પૃથ્વીની આસપાસ ચંદ્રનો પરિભ્રમણ વેગ (૧.૦૨ km/s).' }
      ]
    },
    {
      id: 'centripetal_accel',
      name: 'કેન્દ્રગામી પ્રવેગ (Centripetal Acceleration)',
      symbol: 'a_c',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ² (m/s²)', symbol: 'm/s²' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ² (cm/s²)', symbol: 'cm/s²' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻²]',
      formula: 'a_c = \\frac{v^2}{r} = r \\cdot \\omega^2',
      standardDefinition: 'વર્તુળાકાર ગતિમાં કેન્દ્ર તરફ લાગતો ત્રિજ્યાવર્તી પ્રવેગ (1 m/s² = 100 cm/s²).',
      defaultVal: 9.8,
      icon: 'fa-arrows-to-circle',
      benchmarks: [
        { label: 'ચંદ્રનો કક્ષા પ્રવેગ (Moon Centripetal Acceleration)', val: 0.0027, unit: 'm/s²', desc: 'પૃથ્વીના કેન્દ્ર તરફ ચંદ્રનો કક્ષીય પ્રવેગ.' },
        { label: 'વોશિંગ મશીન ડ્રાયર (Spin Dryer Centrifuge)', val: 400, unit: 'm/s²', desc: 'કપડાં સુકવવા સ્પિન ટબનો પ્રવેગ (૪૦ g).' },
        { label: 'અલ્ટ્રાસેન્ટ્રીફ્યુજ (Laboratory Ultracentrifuge)', val: 1e6, unit: 'm/s²', desc: 'DNA અને પ્રોટીન અલગ કરવા માટે પ્રચંડ પ્રવેગ (૧ લાખ g).' }
      ]
    },
    {
      id: 'centripetal_force',
      name: 'કેન્દ્રગામી બળ (Centripetal Force)',
      symbol: 'F_C',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F_C = \\frac{m \\cdot v^2}{r} = m \\cdot r \\cdot \\omega^2',
      standardDefinition: 'પદાર્થને વર્તુળાકાર માર્ગે જાળવી રાખવા માટે કેન્દ્ર તરફ લાગતું આવશ્યક બળ (1 N = 10⁵ dyn).',
      defaultVal: 50,
      icon: 'fa-compact-disc',
      benchmarks: [
        { label: 'દોરી સાથે બાંધેલો પથ્થર (Whirling Stone in Hand)', val: 15, unit: 'N', desc: 'હાથથી દોરી ફેરવતી વખતે લાગતું કેન્દ્રગામી ખેંચાણ બળ.' },
        { label: 'વળાંક પર કારનું કેન્દ્રગામી બળ (Car Turning 60 km/h Curve)', val: 6000, unit: 'N', desc: 'ટાયર અને રસ્તા વચ્ચેનું ઘર્ષણ પૂરું પાડે છે (૬ kN).' }
      ]
    },
    {
      id: 'banking_angle',
      name: 'ઢોળાવ કોણ / બેંકિંગ એંગલ (Banking Angle)',
      symbol: 'θ_b',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'રેડિયન (radian)', symbol: 'rad' },
      cgs: { name: 'અંશ / ડિગ્રી (degree)', symbol: '°' },
      mksToCgsRatio: 57.2958,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\tan\\theta_b = \\frac{v^2}{r \\cdot g}',
      standardDefinition: 'વળાંક વાળા રસ્તા પર વાહનને લપસ્યા વગર સલામત રીતે વળવા માટે બહારની ધારને અંદરની ધાર કરતા ઊંચી રાખવામાં આવેલો ખૂણો (1 rad ≈ 57.296°).',
      defaultVal: 0.15,
      icon: 'fa-road',
      benchmarks: [
        { label: 'હાઇવે વળાંક ઢોળાવ (Highway Safe Curve 10°)', val: 0.1745, unit: 'rad', desc: 'સામાન્ય હાઇવે રસ્તાનો બેંકિંગ એંગલ (૧૦°).' },
        { label: 'NASCAR રેસિંગ ટ્રેક બેંકિંગ (NASCAR High Bank 33°)', val: 0.576, unit: 'rad', desc: 'હાઇ-સ્પીડ કાર રેસિંગ ટ્રેકનો પ્રચંડ ઢોળાવ (૩૩°).' }
      ]
    },
    {
      id: 'friction_coefficient',
      name: 'ઘર્ષણાંક (Friction Co-efficient)',
      symbol: 'μ_s',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit2'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\mu_s = \\frac{F_s}{N}',
      standardDefinition: 'મહત્તમ સ્થિત ઘર્ષણ બળ અને લંબબળના ગુણોત્તરને ઘર્ષણાંક કહે છે. તે પરિમાણ રહિત અદિશ સંખ્યા છે (શુદ્ધ ગુણોત્તર ૧:૧).',
      defaultVal: 0.6,
      icon: 'fa-shoe-prints',
      benchmarks: [
        { label: 'ટેફલોન પર ટેફલોન (Teflon on Teflon)', val: 0.04, unit: '-', desc: 'અતિ ઓછું ઘર્ષણ ધરાવતી નોન-સ્ટીક સપાટી (μ ≈ ૦.૦૪).' },
        { label: 'બરફ પર સ્ટીલ (Steel Skate on Ice)', val: 0.03, unit: '-', desc: 'બરફ પર આઇસ સ્કેટિંગ (μ ≈ ૦.૦૩).' },
        { label: 'સુકા ડામર પર રબર ટાયર (Rubber Tire on Dry Asphalt)', val: 0.8, unit: '-', desc: 'સામાન્ય વાહન બ્રેકિંગ ઘર્ષણાંક (μ ≈ ૦.૭ - ૦.૯).' },
        { label: 'F1 રેસિંગ સોફ્ટ ટાયર (Formula 1 Racing Slick Tire)', val: 1.5, unit: '-', desc: 'અતિ ઉચ્ચ પકડ ધરાવતું રેસિંગ રબર (μ ≈ ૧.૫).' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 3: GENERAL PROPERTIES OF MATTER (Applied Physics)
    // -------------------------------------------------------------
    {
      id: 'spring_constant',
      name: 'સ્પ્રિંગ અચળાંક / બળ અચળાંક (Spring Constant)',
      symbol: 'k',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન પ્રતિ મીટર (N/m)', symbol: 'N/m' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી (dyn/cm)', symbol: 'dyn/cm' },
      mksToCgsRatio: 1000,
      exponent: 3,
      dimension: '[M¹ L⁰ T⁻²]',
      formula: 'k = \\frac{F}{x}',
      standardDefinition: 'સ્પ્રિંગમાં એકમ લંબાઈનો વધારો કરવા માટે જરૂરી પુનઃસ્થાપક બળ (1 N/m = 10³ dyn/cm).',
      defaultVal: 100,
      icon: 'fa-compress',
      benchmarks: [
        { label: 'પેન ક્લિક સ્પ્રિંગ (Ballpoint Pen Click Spring)', val: 100, unit: 'N/m', desc: 'બોલપેનની અંદર રહેલી નાની સ્પ્રિંગ (૧ N/cm = ૧,૦૦૦ dyn/cm).' },
        { label: 'કાર સસ્પેન્શન સ્પ્રિંગ (Automobile Coil Spring)', val: 50000, unit: 'N/m', desc: 'વાહન આંચકા શોષક સ્પ્રિંગ (૫૦ kN/m).' },
        { label: 'રેલવે વેગન બફર સ્પ્રિંગ (Railway Train Buffer Spring)', val: 5e5, unit: 'N/m', desc: 'ટ્રેન બોગી બફર સ્પ્રિંગ (૫૦૦ kN/m).' }
      ]
    },
    {
      id: 'stress',
      name: 'પ્રતિબળ (Stress)',
      symbol: 'σ',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન પ્રતિ મીટર² / પાસ્કલ (N/m² / Pa)', symbol: 'N/m²' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી² (dyn/cm²)', symbol: 'dyn/cm²' },
      mksToCgsRatio: 10,
      exponent: 1,
      dimension: '[M¹ L⁻¹ T⁻²]',
      formula: '\\sigma = \\frac{F}{A}',
      standardDefinition: 'વિરૂપક બળ હેઠળ પદાર્થના આડછેદના એકમ ક્ષેત્રફળ દીઠ ઉદ્ભવતા આંતરિક પુનઃસ્થાપક બળને પ્રતિબળ કહે છે (1 N/m² = 1 Pa = 10 dyn/cm²).',
      defaultVal: 1e6,
      icon: 'fa-minimize',
      benchmarks: [
        { label: 'હાડકાંની તણાવ ક્ષમતા (Human Bone Tensile Yield Stress)', val: 1.3e8, unit: 'N/m²', desc: 'માનવ હાડકું તૂટતા પહેલા સહન કરતું મહત્તમ પ્રતિબળ (૧૩૦ MPa).' },
        { label: 'બાંધકામ સ્ટીલ ક્ષમતા (Structural Steel Yield Stress)', val: 2.5e8, unit: 'N/m²', desc: 'ઇજનેરી સ્ટીલની યીલ્ડ સ્ટ્રેન્થ (૨૫૦ MPa = ૨.૫ × ૧૦⁹ dyn/cm²).' },
        { label: 'ગ્રેફીન તણાવ ક્ષમતા (Graphene Ultimate Tensile Strength)', val: 1.3e11, unit: 'N/m²', desc: 'વિશ્વનું સૌથી મજબૂત દ્રવ્ય ગ્રેફીન (૧૩૦ GPa).' }
      ]
    },
    {
      id: 'strain',
      name: 'વિકૃતિ (Strain)',
      symbol: 'ε',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\epsilon = \\frac{\\Delta L}{L}',
      standardDefinition: 'પરિમાણમાં થતા ફેરફાર અને મૂળ પરિમાણના ગુણોત્તરને વિકૃતિ કહે છે. તે પરિમાણ રહિત શુદ્ધ ગુણોત્તર છે (1:1).',
      defaultVal: 0.002,
      icon: 'fa-expand',
      benchmarks: [
        { label: 'સ્ટીલ ઇલાસ્ટિક વિકૃતિ સીમા (Steel Elastic Limit Strain)', val: 0.002, unit: '-', desc: 'સ્ટીલ ખેંચાણમાં ૦.૨% ઇલાસ્ટિક વિકૃતિ પામે છે (૦.૦૦૨).' },
        { label: 'રબર બેન્ડ વિકૃતિ (Rubber Band Elastic Strain)', val: 5.0, unit: '-', desc: 'રબર પોતાની મૂળ લંબાઈ કરતા ૫ ગણું ખેંચાઈ શકે છે (ε = ૫).' }
      ]
    },
    {
      id: 'youngs_modulus',
      name: 'યંગ મોડ્યુલસ (Young’s Modulus)',
      symbol: 'Y',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન પ્રતિ મીટર² / પાસ્કલ (N/m² / Pa)', symbol: 'N/m²' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી² (dyn/cm²)', symbol: 'dyn/cm²' },
      mksToCgsRatio: 10,
      exponent: 1,
      dimension: '[M¹ L⁻¹ T⁻²]',
      formula: 'Y = \\frac{\\text{Tensile Stress}}{\\text{Longitudinal Strain}} = \\frac{F \\cdot L}{A \\cdot \\Delta L}',
      standardDefinition: 'સ્થિતિસ્થાપકતા હદમાં તણાવ પ્રતિબળ અને સંગત વિકૃતિના ગુણોત્તરને યંગ મોડ્યુલસ કહે છે (1 N/m² = 10 dyn/cm²). સ્ટીલ માટે Y = 2 × 10¹¹ N/m² = 2 × 10¹² dyn/cm².',
      defaultVal: 2e11,
      icon: 'fa-cube',
      benchmarks: [
        { label: 'રબર (Natural Rubber Y)', val: 1e7, unit: 'N/m²', desc: 'અતિ નરમ પદાર્થ રબર (૧૦ MPa).' },
        { label: 'લાકડું (Oak Wood Y)', val: 1.1e10, unit: 'N/m²', desc: 'બાંધકામ લાકડું (૧૧ GPa).' },
        { label: 'એલ્યુમિનિયમ ધાતુ (Aluminum Metal Y)', val: 7e10, unit: 'N/m²', desc: 'એરોસ્પેસ એલ્યુમિનિયમ (૭૦ GPa).' },
        { label: 'ઇજનેરી સ્ટીલ (Structural Steel Y)', val: 2e11, unit: 'N/m²', desc: 'પ્રમાણભૂત સ્ટીલ યંગ મોડ્યુલસ (૨૦૦ GPa = ૨ × ૧૦૧² dyn/cm²).' },
        { label: 'હીરો / ડાયમંડ (Pure Diamond Crystal Y)', val: 1.2e12, unit: 'N/m²', desc: 'વિશ્વનું સૌથી કઠણ કુદરતી રત્ન હીરો (૧,૨૦૦ GPa).' }
      ]
    },
    {
      id: 'bulk_modulus',
      name: 'બલ્ક મોડ્યુલસ / કદ સ્થિતિસ્થાપકતા ગુણાંક (Bulk Modulus)',
      symbol: 'B',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'પાસ્કલ / ન્યૂટન પ્રતિ મીટર² (Pa)', symbol: 'Pa' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી² (dyn/cm²)', symbol: 'dyn/cm²' },
      mksToCgsRatio: 10,
      exponent: 1,
      dimension: '[M¹ L⁻¹ T⁻²]',
      formula: 'B = -\\frac{\\Delta P}{\\Delta V / V}',
      standardDefinition: 'હાઇડ્રોલિક દબાણ અને કદ વિકૃતિના ગુણોત્તરને બલ્ક મોડ્યુલસ કહે છે (1 Pa = 10 dyn/cm²). પાણી માટે B ≈ 2.2 × 10⁹ Pa.',
      defaultVal: 2.2e9,
      icon: 'fa-compress-arrows-alt',
      benchmarks: [
        { label: 'હવા / વાયુ (Air Bulk Modulus at STP)', val: 1.42e5, unit: 'Pa', desc: 'વાયુ અતિ સંકોચનશીલ હોય છે (૧૪૨ kPa).' },
        { label: 'શુદ્ધ પાણી (Pure Water Bulk Modulus)', val: 2.2e9, unit: 'Pa', desc: 'પાણી અસંકોચ્ય જેવું વર્તે છે (૨.૨ GPa).' },
        { label: 'સ્ટીલ બલ્ક મોડ્યુલસ (Steel Bulk Modulus)', val: 1.6e11, unit: 'Pa', desc: 'ઘન સ્ટીલ કદ સ્થિતિસ્થાપકતા (૧૬૦ GPa).' }
      ]
    },
    {
      id: 'surface_tension',
      name: 'પૃષ્ઠતાણ (Surface Tension)',
      symbol: 'T',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન પ્રતિ મીટર (N/m)', symbol: 'N/m' },
      cgs: { name: 'ડાઇન પ્રતિ સેમી (dyn/cm)', symbol: 'dyn/cm' },
      mksToCgsRatio: 1000,
      exponent: 3,
      dimension: '[M¹ L⁰ T⁻²]',
      formula: 'T = \\frac{F}{L} = \\frac{\\text{Energy}}{\\text{Area}}',
      standardDefinition: 'પ્રવાહીની મુક્ત સપાટી પર દોરેલી કાલ્પનિક રેખાની એકમ લંબાઈ દીઠ લાગતું ખેંચાણ બળ અથવા એકમ ક્ષેત્રફળ વધારવા જરૂરી પૃષ્ઠ ઊર્જા (1 N/m = 10³ dyn/cm = 1 J/m² = 10³ erg/cm²). પાણી માટે T = 0.0728 N/m = 72.8 dyn/cm.',
      defaultVal: 0.0728,
      icon: 'fa-droplet',
      benchmarks: [
        { label: 'ઇથેનોલ / આલ્કોહોલ (Ethanol Alcohol)', val: 0.0223, unit: 'N/m', desc: 'આલ્કોહોલનું પૃષ્ઠતાણ (૨૨.૩ dyn/cm).' },
        { label: 'સાબુનું દ્રાવણ (Soap Solution)', val: 0.030, unit: 'N/m', desc: 'સાબુ પાણીનું પૃષ્ઠતાણ ઘટાડે છે (૩૦ dyn/cm).' },
        { label: 'શુદ્ધ પાણી (Pure Water at 20 °C)', val: 0.0728, unit: 'N/m', desc: 'પાણીનું પ્રમાણભૂત પૃષ્ઠતાણ (૭૨.૮ dyn/cm).' },
        { label: 'પ્રવાહી પારો (Liquid Mercury at 20 °C)', val: 0.485, unit: 'N/m', desc: 'પારાનું પ્રચંડ પૃષ્ઠતાણ (૪૮૫ dyn/cm).' }
      ]
    },
    {
      id: 'contact_angle',
      name: 'સંપર્ક કોણ / સ્પર્શકોણ (Angle of Contact)',
      symbol: 'θ_C',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ડિગ્રી / અંશ (°)', symbol: '°' },
      cgs: { name: 'રેડિયન (radian)', symbol: 'rad' },
      mksToCgsRatio: 0.0174533,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\cos\\theta_C = \\frac{\\gamma_{SG} - \\gamma_{SL}}{\\gamma_{LG}}',
      standardDefinition: 'પ્રવાહી અને ઘન સપાટીના સ્પર્શબિંદુ આગળ પ્રવાહીની અંદર દોરેલા સ્પર્શક અને ઘન સપાટી વચ્ચેના ખૂણાને સંપર્ક કોણ કહે છે (પાણી-કાચ: θ = 0°, પારો-કાચ: θ = 135°).',
      defaultVal: 35,
      icon: 'fa-droplet-slash',
      benchmarks: [
        { label: 'શુદ્ધ પાણી અને સ્વચ્છ કાચ (Pure Water on Clean Glass)', val: 0, unit: '°', desc: 'સંપૂર્ણ ભીંજવે છે (θ = ૦°).' },
        { label: 'સામાન્ય પાણી અને કાચ (Tap Water on Glass)', val: 35, unit: '°', desc: 'અંતર્ગોળ મેનિસ્કસ (હાઇડ્રોફિલિક θ < ૯૦°).' },
        { label: 'પારો અને કાચ (Mercury on Glass)', val: 135, unit: '°', desc: 'ભીંજવતો નથી, બહિર્ગોળ મેનિસ્કસ (હાઇડ્રોફોબિક θ = ૧૩૫°).' }
      ]
    },
    {
      id: 'cohesive_force',
      name: 'સંસક્તિ બળ (Cohesive Force)',
      symbol: 'F_C',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F_C \\propto \\frac{1}{r^7}',
      standardDefinition: 'એક જ દ્રવ્યના સમાન અણુઓ વચ્ચે પ્રવર્તતા આંતર-આણ્વીય આકર્ષણ બળને સંસક્તિ બળ કહે છે (1 N = 10⁵ dyn).',
      defaultVal: 1e-9,
      icon: 'fa-circle-nodes',
      benchmarks: [
        { label: 'પાણીના બે અણુઓ વચ્ચે આકર્ષણ (Water Molecules Cohesion)', val: 1e-10, unit: 'N', desc: 'હાઇડ્રોજન બોન્ડિંગ સંસક્તિ બળ (૦.૧ નેનોન્યૂટન).' },
        { label: 'પારાના અણુઓ વચ્ચે સંસક્તિ (Mercury Cohesion)', val: 1e-9, unit: 'N', desc: 'પારાનું પ્રબળ ધાત્વિક સંસક્તિ બળ - જેથી ટીપું ગોળ બને છે.' }
      ]
    },
    {
      id: 'adhesive_force',
      name: 'આસક્તિ બળ (Adhesive Force)',
      symbol: 'F_A',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F_A',
      standardDefinition: 'જુદા જુદા દ્રવ્યોના અસમાન અણુઓ વચ્ચે પ્રવર્તતા આંતર-આણ્વીય આકર્ષણ બળને આસક્તિ બળ કહે છે (દા.ત. ફેવિકોલ/ગુંદર અને કાગળ, પાણી અને કાચ, 1 N = 10⁵ dyn).',
      defaultVal: 1e-9,
      icon: 'fa-paste',
      benchmarks: [
        { label: 'કાચ અને પાણી વચ્ચે આસક્તિ (Water-Glass Adhesion)', val: 1.5e-9, unit: 'N', desc: 'આસક્તિ > સંસક્તિ હોવાથી પાણી કાચને ભીંજવે છે.' },
        { label: 'ફેવિકોલ સુપર ગ્લુ આસક્તિ (Super Glue Epoxy Adhesion)', val: 1000, unit: 'N', desc: 'ઔદ્યોગિક ગુંદરનું પ્રચંડ આસક્તિ બળ (૧ kN).' }
      ]
    },
    {
      id: 'viscous_force',
      name: 'શ્યાનતા બળ (Viscous Force)',
      symbol: 'F_v',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F_v = -\\eta \\cdot A \\cdot \\frac{dv}{dx}',
      standardDefinition: 'પ્રવાહીના જુદા જુદા સ્તરો વચ્ચેની સાપેક્ષ ગતિનો વિરોધ કરતા આંતરિક ઘર્ષણ બળને શ્યાનતા બળ કહે છે (1 N = 10⁵ dyn). ન્યૂટનનું શ્યાનતા સમીકરણ: F = -η·A·(dv/dx).',
      defaultVal: 0.1,
      icon: 'fa-water',
      benchmarks: [
        { label: 'ગ્લિસરીનમાં સ્ટીલ ગોળી પર સ્ટોક્સ ડ્રેગ (Stokes Drag in Glycerin)', val: 0.05, unit: 'N', desc: 'Fd = 6πη·r·vt (૫૦ મિલીન્યૂટન = ૫,૦૦૦ ડાઇન).' },
        { label: 'જહાજ પર દરિયાઈ પાણીનું ડ્રેગ (Ship Viscous Hydrodynamic Drag)', val: 50000, unit: 'N', desc: 'મોટા જહાજ પર પાણીનું શ્યાનતા બળ (૫૦ kN).' }
      ]
    },
    {
      id: 'viscosity_coeff',
      name: 'શ્યાનતા ગુણાંક (Co-efficient of Viscosity)',
      symbol: 'η',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'પાસ્કલ·સેકન્ડ (Pa·s)', symbol: 'Pa·s' },
      cgs: { name: 'પોઈસ (poise)', symbol: 'P' },
      mksToCgsRatio: 10,
      exponent: 1,
      dimension: '[M¹ L⁻¹ T⁻¹]',
      formula: '\\eta = \\frac{F / A}{dv / dx}',
      standardDefinition: 'એકમ ક્ષેત્રફળવાળા સ્તરો વચ્ચે એકમ વેગ પ્રચલન જાળવી રાખવા માટે જરૂરી શ્યાનતા બળ (1 Pa·s = 1 N·s/m² = 10 poise = 1000 cP). ગ્લિસરીન માટે η ≈ 1.412 Pa·s = 14.12 P.',
      defaultVal: 1.412,
      icon: 'fa-oil-can',
      benchmarks: [
        { label: 'હવા (Air at 20 °C)', val: 1.81e-5, unit: 'Pa·s', desc: 'વાયુ માધ્યમની અતિ અલ્પ શ્યાનતા (૦.૦૦૦૧૮ પોઈસ).' },
        { label: 'શુદ્ધ પાણી (Water at 20 °C)', val: 0.001, unit: 'Pa·s', desc: '૧ સેન્ટીપોઈસ = 1 cP = 0.01 P = 0.001 Pa·s.' },
        { label: 'શુદ્ધ ગ્લિસરીન (Pure Glycerin at 20 °C)', val: 1.412, unit: 'Pa·s', desc: 'સ્ટોક્સના પ્રયોગ માટે પ્રમાણભૂત પ્રવાહી (૧૪.૧૨ પોઈસ).' },
        { label: 'કુદરતી મધ (Pure Natural Honey)', val: 5.0, unit: 'Pa·s', desc: 'ઘટ્ટ કુદરતી મધની શ્યાનતા (૫૦ પોઈસ).' }
      ]
    },
    {
      id: 'critical_velocity',
      name: 'ક્રાંતિ વેગ (Critical Velocity)',
      symbol: 'v_c',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v_c = \\frac{R_e \\cdot \\eta}{\\rho \\cdot D}',
      standardDefinition: 'જે મહત્તમ વેગ સુધી પ્રવાહીનું વહન ધારારેખી (Laminar) રહે અને જે વેગથી વધતા વહન પ્રક્ષુબ્ધ (Turbulent) બને તે વેગને ક્રાંતિ વેગ કહે છે (1 m/s = 100 cm/s).',
      defaultVal: 1.2,
      icon: 'fa-gauge',
      benchmarks: [
        { label: 'પાણીની પાતળી પાઇપમાં ક્રાંતિ વેગ (Tap Water Pipe vc)', val: 0.04, unit: 'm/s', desc: 'પાણી માટે ૫ cm પાઇપમાં vc = ૦.૦૪ m/s (૪ cm/s).' },
        { label: 'લુબ્રિકેટિંગ ઓઇલ પાઇપ (Heavy Oil Pipe vc)', val: 6.44, unit: 'm/s', desc: 'ઘટ્ટ ઓઇલ માટે ક્રાંતિ વેગ ઘણો ઊંચો હોય છે.' }
      ]
    },
    {
      id: 'reynolds_number',
      name: 'રેનોલ્ડ્સ આંક (Reynold Number)',
      symbol: 'R',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: 'R = \\frac{\\rho \\cdot v \\cdot D}{\\eta}',
      standardDefinition: 'જડત્વ બળ અને શ્યાનતા બળના ગુણોત્તરને રેનોલ્ડ્સ આંક કહે છે. તે પરિમાણ રહિત સંખ્યા છે. Re < 2000: ધારારેખી વહન (Laminar), 2000 ≤ Re ≤ 3000: સંક્રાંતિ વહન, Re > 3000: પ્રક્ષુબ્ધ વહન (Turbulent).',
      defaultVal: 1500,
      icon: 'fa-wind',
      benchmarks: [
        { label: 'બેક્ટેરિયાનું પાણીમાં તરવું (Bacteria Swimming Re)', val: 1e-5, unit: '-', desc: 'અતિ અલ્પ શ્યાન વહન (Re << 1).' },
        { label: 'ધારારેખી વહન સીમા (Laminar Boundary Re)', val: 2000, unit: '-', desc: 'ધારારેખી વહનની મહત્તમ સીમા.' },
        { label: 'પ્રક્ષુબ્ધ વહન (Turbulent Jet Flow Re)', val: 100000, unit: '-', desc: 'વિમાન અને સબમરીન આસપાસનું પ્રક્ષુબ્ધ વહન.' }
      ]
    },
    {
      id: 'terminal_velocity',
      name: 'અંતિમ વેગ / ટર્મિનલ વેગ (Terminal Velocity)',
      symbol: 'v_T',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit3'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v_T = \\frac{2}{9} \\cdot \\frac{r^2 (\\rho_s - \\rho_0) g}{\\eta}',
      standardDefinition: 'શ્યાન માધ્યમમાં મુક્ત પતન કરતી ગોળી જ્યારે ગુરુત્વાકર્ષણ બળ, ઉત્પ્લાવક બળ અને શ્યાનતા બળના સંતુલનને કારણે જે અચળ મહત્તમ વેગ પ્રાપ્ત કરે છે તેને અંતિમ વેગ કહે છે (1 m/s = 100 cm/s).',
      defaultVal: 0.05,
      icon: 'fa-circle-down',
      benchmarks: [
        { label: 'હવામાં ધૂળના કણનો અંતિમ વેગ (Dust Particle in Air vt)', val: 1e-4, unit: 'm/s', desc: 'હવામાં ધૂળ અતિ ધીમેથી નીચે બેસે છે (૦.૧ mm/s).' },
        { label: 'ગ્લિસરીનમાં સ્ટીલ ગોળી (Steel Ball in Glycerin vt)', val: 0.08, unit: 'm/s', desc: 'પ્રયોગશાળામાં સ્ટોક્સ પદ્ધતિ વડે માપાતો વેગ (૮ cm/s).' },
        { label: 'વરસાદના ટીપાનો અંતિમ વેગ (Raindrop Falling in Air vt)', val: 9, unit: 'm/s', desc: 'વાતાવરણમાં વરસાદનું ટીપું ૯ m/s (૩૨ km/h) ઝડપે પડે છે.' },
        { label: 'સ્કાયડાઇવર પેરાશૂટ વગર (Human Skydiver Terminal Speed)', val: 56, unit: 'm/s', desc: 'મુક્ત પતન કરતા માનવીનો મહત્તમ અંતિમ વેગ (૨૦૦ km/h).' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 4: HEAT AND THERMOMETRY (Applied Physics)
    // -------------------------------------------------------------
    {
      id: 'heat_flow',
      name: 'ઉષ્મા ઊર્જાનો જથ્થો (Amount of Heat Flow)',
      symbol: 'Q',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit4'],
      mks: { name: 'જૂલ (joule)', symbol: 'J' },
      cgs: { name: 'કેલરી / અર્ગ (cal / erg)', symbol: 'cal' },
      mksToCgsRatio: 0.239006,
      exponent: 0,
      dimension: '[M¹ L² T⁻²]',
      formula: 'Q = m \\cdot c \\cdot \\Delta T',
      standardDefinition: 'તાપમાનના તફાવતને કારણે એક પદાર્થમાંથી બીજા પદાર્થમાં સ્થાનાંતરિત થતી ઉષ્મા ઊર્જા (1 cal = 4.184 J, 1 J = 0.239 cal = 10⁷ erg).',
      defaultVal: 4184,
      icon: 'fa-fire-flame-curved',
      benchmarks: [
        { label: '૧ ગ્રામ પાણી ૧ °C ગરમ કરવા (Heat 1g Water by 1°C)', val: 4.184, unit: 'J', desc: '૧ કેલરી ઉષ્મા = ૪.૧૮૪ જૂલ.' },
        { label: '૧ કપ ચા ઉકાળવા ઉષ્મા (Boiling a Cup of Tea)', val: 80000, unit: 'J', desc: '૨૫૦ ml પાણી ઉકાળવા જરૂરી ઉષ્મા (૮૦ kJ).' }
      ]
    },
    {
      id: 'thermal_conductivity',
      name: 'ઉષ્મા વાહકતા ગુણાંક (Co-efficient of Thermal Conduction)',
      symbol: 'κ',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit4'],
      mks: { name: 'વોટ પ્રતિ મીટર·કેલ્વિન (W/m·K)', symbol: 'W/m·K' },
      cgs: { name: 'કેલરી પ્રતિ સેમી·સેકન્ડ·°C (cal/cm·s·°C)', symbol: 'cal/cm·s·°C' },
      mksToCgsRatio: 0.00239,
      exponent: -3,
      dimension: '[M¹ L¹ T⁻³ K⁻¹]',
      formula: '\\kappa = \\frac{Q \\cdot d}{A \\cdot (T_1 - T_2) \\cdot t}',
      standardDefinition: 'સ્થાયી ઉષ્મા અવસ્થામાં પદાર્થના એકમ ક્ષેત્રફળ અને એકમ તાપમાન પ્રચલન ધરાવતા આડછેદમાંથી એકમ સમયમાં વહેતી ઉષ્માનો જથ્થો (1 W/m·K = 0.00239 cal/cm·s·°C). તાંબુ (Copper): κ ≈ 385 W/m·K.',
      defaultVal: 385,
      icon: 'fa-temperature-arrow-up',
      benchmarks: [
        { label: 'હવા (Air Thermal Conduction)', val: 0.026, unit: 'W/m·K', desc: 'હવા ઉત્તમ ઉષ્મા અવાહક છે.' },
        { label: 'કાચ (Window Glass)', val: 0.8, unit: 'W/m·K', desc: 'સામાન્ય કાચની ઉષ્મા વાહકતા.' },
        { label: 'શુદ્ધ તાંબુ (Pure Copper Metal)', val: 385, unit: 'W/m·K', desc: 'ઉત્તમ ઉષ્મા વાહક ધાતુ (૩૮૫ W/m·K).' },
        { label: 'શુદ્ધ ચાંદી (Pure Silver Metal)', val: 429, unit: 'W/m·K', desc: 'સૌથી વધુ ઉષ્મા વાહક ધાતુ (૪૨૯ W/m·K).' },
        { label: 'હીરો / ડાયમંડ (Diamond)', val: 2200, unit: 'W/m·K', desc: 'કુદરતમાં સર્વોચ્ચ ઉષ્મા વાહકતા ધરાવતો સ્ફટિક (૨,૨૦૦ W/m·K).' }
      ]
    },
    {
      id: 'heat_capacity',
      name: 'ઉષ્મા ધારિતા (Heat Capacity)',
      symbol: 'ΔQ',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit4'],
      mks: { name: 'જૂલ પ્રતિ કેલ્વિન (J/K)', symbol: 'J/K' },
      cgs: { name: 'કેલરી પ્રતિ °C (cal/°C)', symbol: 'cal/°C' },
      mksToCgsRatio: 0.239,
      exponent: 0,
      dimension: '[M¹ L² T⁻² K⁻¹]',
      formula: 'C = \\frac{\\Delta Q}{\\Delta T}',
      standardDefinition: 'સમગ્ર પદાર્થનું તાપમાન ૧ કેલ્વિન (અથવા ૧ °C) વધારવા માટે જરૂરી ઉષ્મા ઊર્જાનો જથ્થો (1 J/K = 0.239 cal/°C).',
      defaultVal: 418.4,
      icon: 'fa-fire',
      benchmarks: [
        { label: '૧૦૦ ગ્રામ પાણીની ઉષ્મા ધારિતા (100g Water Heat Capacity)', val: 418.4, unit: 'J/K', desc: '૧૦૦ ગ્રામ પાણીનું ૧ °C તાપમાન વધારવા ૪૧૮.૪ J ઉષ્મા જોઈએ.' },
        { label: '૧ કિલો સ્ટીલ બ્લોક (1kg Steel Block Capacity)', val: 460, unit: 'J/K', desc: '૧ કિલો સ્ટીલ ગરમ કરવા ૪૬૦ J/K.' }
      ]
    },
    {
      id: 'specific_heat',
      name: 'વિશિષ્ટ ઉષ્મા (Specific Heat)',
      symbol: 'C',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit4'],
      mks: { name: 'જૂલ પ્રતિ કિલોગ્રામ·કેલ્વિન (J/kg·K)', symbol: 'J/kg·K' },
      cgs: { name: 'કેલરી પ્રતિ ગ્રામ·°C (cal/g·°C)', symbol: 'cal/g·°C' },
      mksToCgsRatio: 0.000239,
      exponent: -4,
      dimension: '[M⁰ L² T⁻² K⁻¹]',
      formula: 'c = \\frac{Q}{m \\cdot \\Delta T}',
      standardDefinition: 'પદાર્થના એકમ દળનું તાપમાન ૧ કેલ્વિન વધારવા માટે જરૂરી ઉષ્માનો જથ્થો (પાણી: c = 4184 J/kg·K = 1 cal/g·°C).',
      defaultVal: 4184,
      icon: 'fa-droplet',
      benchmarks: [
        { label: 'સીસું ધાતુ (Lead Metal Specific Heat)', val: 128, unit: 'J/kg·K', desc: 'સીસાની ઓછી વિશિષ્ટ ઉષ્મા (૧૨૮ J/kg·K).' },
        { label: 'તાંબુ (Copper Specific Heat)', val: 385, unit: 'J/kg·K', desc: 'તાંબાની વિશિષ્ટ ઉષ્મા (૩૮૫ J/kg·K).' },
        { label: 'શુદ્ધ પાણી (Water Specific Heat)', val: 4184, unit: 'J/kg·K', desc: 'પાણીની ઉચ્ચ વિશિષ્ટ ઉષ્મા (૪,૧૮૪ J/kg·K = ૧ cal/g·°C).' },
        { label: 'હાઇડ્રોજન વાયુ (Hydrogen Gas Specific Heat)', val: 14300, unit: 'J/kg·K', desc: 'હાઇડ્રોજન વાયુની સર્વોચ્ચ વિશિષ્ટ ઉષ્મા (૧૪.૩ kJ/kg·K).' }
      ]
    },
    {
      id: 'thermal_expansion_coeff',
      name: 'ઉષ્મા પ્રસરણાંક (Co-efficient of Thermal Expansion)',
      symbol: 'α',
      subjectIds: ['applied_physics'],
      chapterIds: ['ap_unit4'],
      mks: { name: 'પ્રતિ કેલ્વિન (K⁻¹ / °C⁻¹)', symbol: 'K⁻¹' },
      cgs: { name: 'પ્રતિ °C (°C⁻¹)', symbol: '°C⁻¹' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰ K⁻¹]',
      formula: '\\alpha = \\frac{\\Delta L}{L_0 \\cdot \\Delta T}',
      standardDefinition: 'પદાર્થનું તાપમાન ૧ કેલ્વિન વધારતા તેની એકમ લંબાઈમાં થતા વધારાને રેખીય પ્રસરણાંક કહે છે (1 K⁻¹ = 1 °C⁻¹). સ્ટીલ: α ≈ 1.2 × 10⁻⁵ K⁻¹.',
      defaultVal: 1.2e-5,
      icon: 'fa-arrows-left-right',
      benchmarks: [
        { label: 'ઇન્વાર મિશ્રધાતુ (Invar Alloy 36)', val: 1.2e-6, unit: 'K⁻¹', desc: 'ઘડિયાળ પેન્ડુલમ માટે અતિ નહિવત પ્રસરણ (૧.૨ × ૧૦⁻⁶ K⁻¹).' },
        { label: 'કાચ (Borosilicate Pyrex Glass)', val: 3.3e-6, unit: 'K⁻¹', desc: 'ગરમી પ્રતિરોધક બોરોસીલીકેટ કાચ.' },
        { label: 'રેલવે ટ્રેક સ્ટીલ (Structural Steel α)', val: 1.2e-5, unit: 'K⁻¹', desc: 'રેલવે પાટા વચ્ચે જગ્યા રાખવાનું કારણ (૧.૨ × ૧૦⁻⁵ K⁻¹).' },
        { label: 'એલ્યુમિનિયમ (Aluminum Metal α)', val: 2.3e-5, unit: 'K⁻¹', desc: 'એલ્યુમિનિયમનું ઝડપી ઉષ્મીય પ્રસરણ (૨.૩ × ૧૦⁻⁵ K⁻¹).' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 5: WAVES AND ULTRASONICS (Common to Both Subjects)
    // -------------------------------------------------------------
    {
      id: 'periodic_time',
      name: 'આવર્તકાળ (Periodic Time)',
      symbol: 'T',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit5', 'mp_unit3', 'mp_unit4'],
      mks: { name: 'સેકન્ડ (second)', symbol: 's' },
      cgs: { name: 'સેકન્ડ (second)', symbol: 's' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁰ L⁰ T¹]',
      formula: 'T = \\frac{1}{f}',
      standardDefinition: 'એક પૂર્ણ દોલન કે તરંગ ઉત્પન્ન થવા માટે લાગતા સમયગાળાને આવર્તકાળ કહે છે (T = 1/f, 1 s = 1 s).',
      defaultVal: 0.001,
      icon: 'fa-clock-rotate-left',
      benchmarks: [
        { label: 'દ્રશ્યમાન પ્રકાશ તરંગ આવર્તકાળ (Visible Light Period)', val: 2e-15, unit: 's', desc: 'લીલા પ્રકાશનો આવર્તકાળ (૨ ફેમ્ટોસેકન્ડ).' },
        { label: 'અલ્ટ્રાસોનિક ૨ MHz તરંગ (Ultrasonic Wave Period)', val: 5e-7, unit: 's', desc: 'સોનોગ્રાફી તરંગ આવર્તકાળ (૦.૫ માઇક્રોસેકન્ડ).' },
        { label: '૫૦ Hz AC વિદ્યુત સાઇકલ (50Hz AC Cycle Time)', val: 0.02, unit: 's', desc: 'એક AC સાઇકલનો સમય (૨૦ મિલીસેકન્ડ).' },
        { label: 'સાદા લોલકનો આવર્તકાળ (Simple Pendulum 1m Period)', val: 2.0, unit: 's', desc: '૧ મીટર લંબાઈના લોલકનો આવર્તકાળ (૨ સેકન્ડ).' }
      ]
    },
    {
      id: 'frequency',
      name: 'આવૃત્તિ (Frequency)',
      symbol: 'f',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit5', 'mp_unit3', 'mp_unit4'],
      mks: { name: 'હર્ટ્ઝ (hertz)', symbol: 'Hz' },
      cgs: { name: 'હર્ટ્ઝ (hertz)', symbol: 'Hz' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁻¹]',
      formula: 'f = \\frac{1}{T} = \\frac{v}{\\lambda}',
      standardDefinition: 'એકમ સમયમાં (1 સેકન્ડમાં) થતા પૂર્ણ કંપનોની સંખ્યા (1 Hz = 1 s⁻¹). શ્રાવ્ય ધ્વનિ: 20 Hz થી 20,000 Hz, અલ્ટ્રાસોનિક: f > 20 kHz.',
      defaultVal: 1000,
      icon: 'fa-wave-square',
      benchmarks: [
        { label: 'શ્રાવ્ય ધ્વનિ મર્યાદા (Human Audible Sound)', val: 1000, unit: 'Hz', desc: 'માનવ કાન સાંભળી શકે તેવો મધ્યમ ધ્વનિ (૨૦ Hz થી ૨૦ kHz).' },
        { label: 'અલ્ટ્રાસોનિક સોનાર (Ultrasonic SONAR / Medical)', val: 2e6, unit: 'Hz', desc: 'તબીબી સોનોગ્રાફી અલ્ટ્રાસાઉન્ડ (૨ MHz = ૨૦ લાખ Hz).' },
        { label: 'FM રેડિયો પ્રસારણ (FM Radio Broadcast)', val: 1e8, unit: 'Hz', desc: 'વાણિજ્યિક FM રેડિયો બેન્ડ (૧૦૦ MHz).' },
        { label: 'Wi-Fi અને મોબાઇલ 5G (Wi-Fi 5 GHz / 5G Mobile)', val: 5e9, unit: 'Hz', desc: 'વાયરલેસ ઇન્ટરનેટ માઇક્રોવેવ ફ્રીક્વન્સી (૫ GHz).' },
        { label: 'દ્રશ્યમાન પ્રકાશ (Visible Light Frequency)', val: 5e14, unit: 'Hz', desc: 'દ્રશ્યમાન પ્રકાશ તરંગો (૫૦૦ THz).' }
      ]
    },
    {
      id: 'wavelength',
      name: 'તરંગલંબાઈ (Wavelength)',
      symbol: 'λ',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit5', 'mp_unit3', 'mp_unit4'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર / એંગસ્ટ્રોમ (cm / Å)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: '\\lambda = \\frac{v}{f}',
      standardDefinition: 'તરંગ પરના બે ક્રમિક શૃંગ અથવા બે ક્રમિક ગર્ત વચ્ચેના અંતરને તરંગલંબાઈ કહે છે (1 m = 100 cm = 10¹⁰ Å = 10⁹ nm).',
      defaultVal: 0.5,
      icon: 'fa-water',
      benchmarks: [
        { label: 'મેડિકલ X-રે તરંગલંબાઈ (Medical X-Ray Wavelength)', val: 1e-10, unit: 'm', desc: '૧ એંગસ્ટ્રોમ = 1 Å = ૦.૧ nm.' },
        { label: 'He-Ne લેસર લાલ પ્રકાશ (He-Ne Laser Red Light)', val: 6.328e-7, unit: 'm', desc: 'પ્રયોગશાળા લેસર લાલ તરંગલંબાઈ (૬૩૨.૮ nm = ૬,૩૨૮ Å).' },
        { label: 'અલ્ટ્રાસોનિક તરંગલંબાઈ પાણીમાં (Ultrasonic Wave in Water 2MHz)', val: 0.00075, unit: 'm', desc: 'પાણીમાં અલ્ટ્રાસોનિક તરંગ (૦.૭૫ mm).' },
        { label: 'શ્રાવ્ય ધ્વનિ તરંગલંબાઈ (Audible Sound 340 Hz)', val: 1.0, unit: 'm', desc: 'હવામાં ધ્વનિ તરંગલંબાઈ (૧ મીટર).' }
      ]
    },
    {
      id: 'amplitude',
      name: 'કંપવિસ્તાર (Amplitude)',
      symbol: 'A',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit5', 'mp_unit3', 'mp_unit4'],
      mks: { name: 'મીટર (meter)', symbol: 'm' },
      cgs: { name: 'સેન્ટીમીટર (centimeter)', symbol: 'cm' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁰]',
      formula: 'A',
      standardDefinition: 'મધ્યમાન સ્થાનથી તરંગ અથવા દોલક કણના મહત્તમ સ્થાનાંતરને કંપવિસ્તાર કહે છે (1 m = 100 cm).',
      defaultVal: 0.02,
      icon: 'fa-up-down',
      benchmarks: [
        { label: 'ધ્વનિ કંપવિસ્તાર હવામાં (Gentle Sound Air Molecule Displacement)', val: 1e-8, unit: 'm', desc: 'હવાના અણુઓનું સૂક્ષ્મ કંપન (૧૦ નેનોમીટર).' },
        { label: 'દરિયાઈ મોજાં કંપવિસ્તાર (Ocean Tsunami Wave Amplitude)', val: 15, unit: 'm', desc: 'દરિયામાં ઊંચા મોજાંનો કંપવિસ્તાર (૧૫ મીટર).' }
      ]
    },
    {
      id: 'wave_velocity',
      name: 'તરંગ વેગ (Wave Velocity)',
      symbol: 'v',
      subjectIds: ['applied_physics', 'modern_physics'],
      chapterIds: ['ap_unit5', 'mp_unit3', 'mp_unit4'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v = f \\cdot \\lambda',
      standardDefinition: 'તરંગ દ્વારા માધ્યમમાં એકમ સમયમાં કપાયેલું અંતર (v = f·λ, 1 m/s = 100 cm/s). હવામાં ધ્વનિ: v ≈ 340 m/s.',
      defaultVal: 340,
      icon: 'fa-bolt',
      benchmarks: [
        { label: 'હવામાં ધ્વનિ વેગ (Speed of Sound in Air at 20°C)', val: 343, unit: 'm/s', desc: 'હવામાં ધ્વનિ તરંગ વેગ (૩૪૩ m/s = ૩૪,૩૦૦ cm/s).' },
        { label: 'પાણીમાં ધ્વનિ વેગ (Speed of Sound in Water)', val: 1480, unit: 'm/s', desc: 'સોનાર અલ્ટ્રાસાઉન્ડ પાણીમાં (૧,૪૮૦ m/s).' },
        { label: 'સ્ટીલમાં ધ્વનિ વેગ (Speed of Sound in Steel Solid)', val: 5960, unit: 'm/s', desc: 'ઘન સ્ટીલમાં સંગત તરંગ વેગ (૫,૯૬૦ m/s).' },
        { label: 'પ્રકાશ તરંગ વેગ શૂન્યાવકાશમાં (Light Wave Speed in Vacuum c)', val: 3e8, unit: 'm/s', desc: 'વિદ્યુતચુંબકીય તરંગ વેગ (૩ × ૧૦⁸ m/s = ૩ × ૧૦¹⁰ cm/s).' }
      ]
    },
    {
      id: 'phase',
      name: 'કળા (Phase)',
      symbol: 'ϕ',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit3', 'mp_unit4'],
      mks: { name: 'રેડિયન (radian)', symbol: 'rad' },
      cgs: { name: 'અંશ / ડિગ્રી (degree)', symbol: '°' },
      mksToCgsRatio: 57.2958,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\phi = \\omega t - k x + \\phi_0',
      standardDefinition: 'તરંગ ગતિ કરતા કણનું આપેલ સમયે સ્થાન અને ગતિની દિશા દર્શાવતો ખૂણો (1 rad ≈ 57.296°). સમાન કળા: Δϕ = 2nπ, વિરુદ્ધ કળા: Δϕ = (2n+1)π.',
      defaultVal: 3.14159,
      icon: 'fa-circle-half-stroke',
      benchmarks: [
        { label: 'સહાયક વ્યતિકરણ સમાન કળા (Constructive In-Phase)', val: 0, unit: 'rad', desc: 'બંને તરંગો સમાન કળામાં (૦°).' },
        { label: 'વિનાશક વ્યતિકરણ વિરુદ્ધ કળા (Destructive Out-of-Phase 180°)', val: 3.14159, unit: 'rad', desc: 'π રેડિયન = ૧૮૦° વિરુદ્ધ કળા.' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 2: ELECTROSTATICS AND CAPACITANCE (Modern Physics)
    // -------------------------------------------------------------
    {
      id: 'charge',
      name: 'વિદ્યુતભાર (Charge)',
      symbol: 'Q',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2'],
      mks: { name: 'કુલંબ (coulomb)', symbol: 'C' },
      cgs: { name: 'સ્ટેટકુલંબ / esu (statcoulomb)', symbol: 'statC' },
      mksToCgsRatio: 3e9,
      exponent: 9,
      dimension: '[M⁰ L⁰ T¹ A¹]',
      formula: 'Q = I \\cdot t = n \\cdot e',
      standardDefinition: 'દ્રવ્યનો મૂળભૂત આંતરિક ગુણધર્મ જેના કારણે તે વિદ્યુતચુંબકીય બળ અનુભવે છે (1 C = 3 × 10⁹ statC = 0.1 abC). ઇલેક્ટ્રોન ચાર્જ: e = 1.602 × 10⁻¹⁹ C.',
      defaultVal: 1,
      icon: 'fa-atom',
      benchmarks: [
        { label: '૧ ઇલેક્ટ્રોન / પ્રોટોન વિદ્યુતભાર (Elementary Charge e)', val: 1.602e-19, unit: 'C', desc: 'મૂળભૂત કણ વિદ્યુતભાર (૧.૬૦૨ × ૧૦⁻¹⁹ C = ૪.૮ × ૧૦⁻¹⁰ esu).' },
        { label: 'કાંસકા સાથે ઘસેલા વાળ (Static Hair Friction Charge)', val: 1e-8, unit: 'C', desc: 'સ્થિત વિદ્યુતભાર (૧૦ નેનોકુલંબ).' },
        { label: 'સ્માર્ટફોન બેટરી ક્ષમતા (5000 mAh Phone Battery)', val: 18000, unit: 'C', desc: '૫,૦૦૦ mAh બેટરીનો કુલ વિદ્યુતભાર (૧૮,૦૦૦ C).' },
        { label: 'વીજળીનો વાદળ વિદ્યુતભાર (Thundercloud Lightning Charge)', val: 25, unit: 'C', desc: 'એક વીજળી ચમકારામાં સ્થાનાંતરિત વિદ્યુતભાર (૨૫ C).' }
      ]
    },
    {
      id: 'coulomb_force',
      name: 'કુલંબીય બળ (Coulomb Force)',
      symbol: 'F',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2'],
      mks: { name: 'ન્યૂટન (newton)', symbol: 'N' },
      cgs: { name: 'ડાઇન (dyne)', symbol: 'dyn' },
      mksToCgsRatio: 100000,
      exponent: 5,
      dimension: '[M¹ L¹ T⁻²]',
      formula: 'F = \\frac{1}{4\\pi \\epsilon_0} \\cdot \\frac{q_1 q_2}{r^2}',
      standardDefinition: 'બે સ્થિર બિંદુવત વિદ્યુતભારો વચ્ચે પ્રવર્તતું આકર્ષણ કે અપાકર્ષણ બળ (1 N = 10⁵ dyn). કુલંબ અચળાંક: k = 1/(4πε₀) = 9 × 10⁹ N·m²/C².',
      defaultVal: 9e9,
      icon: 'fa-magnet',
      benchmarks: [
        { label: 'હાઇડ્રોજન પરમાણુમાં પ્રોટોન-ઇલેક્ટ્રોન આકર્ષણ (Proton-Electron in Atom)', val: 8.2e-8, unit: 'N', desc: 'બોહર ત્રિજ્યા પર કુલંબીય આકર્ષણ (૮૨ નેનોન્યૂટન = ૮.૨ ડાઇન).' },
        { label: '૧ મીટર અંતરે રહેલા બે ૧ C વિદ્યુતભારો (Two 1C Charges at 1m)', val: 9e9, unit: 'N', desc: 'પ્રચંડ કુલંબીય અપાકર્ષણ બળ (૯ અબજ ન્યૂટન = ૯ GN).' }
      ]
    },
    {
      id: 'permittivity_free_space',
      name: 'શૂન્યાવકાશની પરમિટિવિટી (Permittivity of Free Space)',
      symbol: 'ε₀',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2'],
      mks: { name: 'ફેરાડ પ્રતિ મીટર / C²/N·m² (F/m)', symbol: 'F/m' },
      cgs: { name: 'esu² / dyn·cm²', symbol: 'esu²/dyn·cm²' },
      mksToCgsRatio: 1,
      exponent: 0,
      dimension: '[M⁻¹ L⁻³ T⁴ A²]',
      formula: '\\epsilon_0 = \\frac{1}{4\\pi k}',
      standardDefinition: 'શૂન્યાવકાશની વિદ્યુતક્ષેત્ર રેખાઓ પસાર થવા દેવાની ક્ષમતા દર્શાવતો અચળાંક (ε₀ = 8.854 × 10⁻¹² F/m = 8.854 × 10⁻¹² C²/N·m²).',
      defaultVal: 8.854e-12,
      icon: 'fa-shield-halved',
      benchmarks: [
        { label: 'શૂન્યાવકાશની પરમિટિવિટી અચળાંક (Standard Vacuum Permittivity ε₀)', val: 8.854e-12, unit: 'F/m', desc: 'મૂળભૂત ભૌતિક અચળાંક (૮.૮૫૪ × ૧૦⁻¹² F/m).' }
      ]
    },
    {
      id: 'electric_potential',
      name: 'વિદ્યુત સ્થિતિમાન / વોલ્ટેજ (Electric Potential / Voltage)',
      symbol: 'V',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2', 'mp_unit5'],
      mks: { name: 'વોલ્ટ (volt)', symbol: 'V' },
      cgs: { name: 'સ્ટેટવોલ્ટ (statvolt)', symbol: 'statV' },
      mksToCgsRatio: 0.00333564,
      exponent: -3,
      dimension: '[M¹ L² T⁻³ A⁻¹]',
      formula: 'V = \\frac{W}{Q} = \\frac{k \\cdot Q}{r}',
      standardDefinition: 'એકમ ધન વિદ્યુતભારને અનંત અંતરેથી વિદ્યુતક્ષેત્રના આપેલ બિંદુ સુધી લાવવા માટે કરવા પડતા કાર્યને વિદ્યુત સ્થિતિમાન કહે છે (1 statV = 300 V, 1 V = 1/300 statV ≈ 0.00333 statV = 1 J/C).',
      defaultVal: 230,
      icon: 'fa-car-battery',
      benchmarks: [
        { label: 'ચેતાકોષ સિગ્નલ વોલ્ટેજ (Neuron Action Potential)', val: 0.07, unit: 'V', desc: 'મગજના સિગ્નલ (૭૦ mV).' },
        { label: 'AA પેન્સિલ બેટરી (Standard AA Battery)', val: 1.5, unit: 'V', desc: '૧.૫ વોલ્ટ ડીસી સેલ.' },
        { label: 'ઘરેલું AC સપ્લાય (Indian Domestic AC Supply)', val: 230, unit: 'V', desc: '૨૩૦ વોલ્ટ સિંગલ ફેઝ પાવર.' },
        { label: 'હાઇ-ટેન્શન પાવર લાઇન (National Grid Line)', val: 765000, unit: 'V', desc: '૭૬૫ kV હાઇ વોલ્ટેજ ટ્રાન્સમિશન.' },
        { label: 'આકાશી વીજળી ચમકારો (Lightning Bolt Potential)', val: 1e8, unit: 'V', desc: '૧૦ કરોડ વોલ્ટ (૧૦૦ MV).' }
      ]
    },
    {
      id: 'capacitance',
      name: 'કેપેસિટન્સ (Capacitance)',
      symbol: 'C',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2'],
      mks: { name: 'ફેરાડ (farad)', symbol: 'F' },
      cgs: { name: 'સ્ટેટફેરાડ / cm (statfarad)', symbol: 'statF' },
      mksToCgsRatio: 9e11,
      exponent: 11,
      dimension: '[M⁻¹ L⁻² T⁴ A²]',
      formula: 'C = \\frac{Q}{V} = \\frac{\\epsilon_0 A}{d}',
      standardDefinition: 'કેપેસિટરની વિદ્યુતભાર અને વિદ્યુત ઊર્જા સંગ્રહ કરવાની ક્ષમતા (1 F = 1 C/V = 9 × 10¹¹ statF = 9 × 10¹¹ cm). વ્યાવહારિક એકમો: μF, nF, pF.',
      defaultVal: 1e-6,
      icon: 'fa-microchip',
      benchmarks: [
        { label: 'CPU ઇન્ટિગ્રેટેડ સર્કિટ કેપેસિટન્સ (Processor Stray Capacitance)', val: 1e-15, unit: 'F', desc: '૧ ફેમ્ટોફેરાડ (૧ fF).' },
        { label: 'રેડિયો ટ્યુનિંગ કેપેસિટર (Radio Tuning Trimmer)', val: 1e-11, unit: 'F', desc: '૧૦ પિકોફેરાડ (૧૦ pF).' },
        { label: 'પંખાનું મોટર કેપેસિટર (Ceiling Fan Capacitor)', val: 2.5e-6, unit: 'F', desc: '૨.૫ માઇક્રોફેરાડ (૨.૫ μF).' },
        { label: 'ઇલેક્ટ્રિક વાહન સુપરકેપેસિટર (EV Supercapacitor Bank)', val: 3000, unit: 'F', desc: '૩,૦૦૦ ફેરાડ હાઇ-પાવર સુપરકેપેસિટર.' },
        { label: 'સમગ્ર પૃથ્વી ગોળાનું કેપેસિટન્સ (Earth Isolated Sphere Capacitance)', val: 7.11e-4, unit: 'F', desc: 'પૃથ્વીનું કેપેસિટન્સ (૭૧૧ માઇક્રોફેરાડ).' }
      ]
    },
    {
      id: 'relative_permittivity',
      name: 'સાપેક્ષ પરમિટિવિટી / ડાઇઇલેક્ટ્રિક અચળાંક (Relative Permittivity / Dielectric Constant)',
      symbol: 'εᵣ / κ',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit2'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\epsilon_r = \\kappa = \\frac{\\epsilon}{\\epsilon_0} = \\frac{C}{C_0}',
      standardDefinition: 'માધ્યમની પરમિટિવિટી અને શૂન્યાવકાશની પરમિટિવિટીના ગુણોત્તરને ડાઇઇલેક્ટ્રિક અચળાંક કહે છે. તે પરિમાણ રહિત શુદ્ધ ગુણોત્તર છે (શૂન્યાવકાશ: 1, હવા: 1.0006, કાગળ: 3.5, શુદ્ધ પાણી: 80.4).',
      defaultVal: 80.4,
      icon: 'fa-layer-group',
      benchmarks: [
        { label: 'શૂન્યાવકાશ (Vacuum Dielectric Constant)', val: 1.0, unit: '-', desc: 'આધારભૂત સંદર્ભ (κ = ૧.૦).' },
        { label: 'કાગળ / માઇકા (Paper / Mica Dielectric)', val: 3.5, unit: '-', desc: 'કેપેસિટરમાં વપરાતું માઇકા (κ ≈ ૩ - ૬).' },
        { label: 'શુદ્ધ પાણી (Pure Water at 20°C)', val: 80.4, unit: '-', desc: 'પાણીનું ઉચ્ચ ડાઇઇલેક્ટ્રિક મૂલ્ય (κ ≈ ૮૦.૪).' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 4: LASER AND OPTICAL FIBER (Modern Physics)
    // -------------------------------------------------------------
    {
      id: 'speed_of_light_medium',
      name: 'માધ્યમમાં પ્રકાશનો વેગ (Velocity of Light in Medium)',
      symbol: 'v',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'v = \\frac{c}{\\mu}',
      standardDefinition: 'પ્રકાશનો પારદર્શક માધ્યમમાં વેગ (v = c/μ, જ્યાં μ = વક્રીભવનાંક, 1 m/s = 100 cm/s). કાચમાં: v ≈ 2 × 10⁸ m/s.',
      defaultVal: 2e8,
      icon: 'fa-bolt-lightning',
      benchmarks: [
        { label: 'પાણીમાં પ્રકાશનો વેગ (Speed of Light in Water μ=1.33)', val: 2.25e8, unit: 'm/s', desc: 'પાણીમાં પ્રકાશ ૨.૨૫ × ૧૦⁸ m/s વેગે ગતિ કરે છે.' },
        { label: 'કાચમાં પ્રકાશનો વેગ (Speed of Light in Crown Glass μ=1.5)', val: 2e8, unit: 'm/s', desc: 'કાચમાં ૨ × ૧૦⁸ m/s (૨ લાખ km/s).' },
        { label: 'હીરામાં પ્રકાશનો વેગ (Speed of Light in Diamond μ=2.42)', val: 1.24e8, unit: 'm/s', desc: 'હીરામાં પ્રકાશ ધીમો પડી જાય છે (૧.૨૪ × ૧૦⁸ m/s).' }
      ]
    },
    {
      id: 'speed_of_light_vacuum',
      name: 'શૂન્યાવકાશમાં પ્રકાશનો વેગ (Velocity of Light in Vacuum)',
      symbol: 'c',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'મીટર પ્રતિ સેકન્ડ (m/s)', symbol: 'm/s' },
      cgs: { name: 'સેમી પ્રતિ સેકન્ડ (cm/s)', symbol: 'cm/s' },
      mksToCgsRatio: 100,
      exponent: 2,
      dimension: '[M⁰ L¹ T⁻¹]',
      formula: 'c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}',
      standardDefinition: 'બ્રહ્માંડમાં કોઈપણ માહિતી કે કણની મહત્તમ શક્ય ઝડપ (c = 299,792,458 m/s ≈ 3 × 10⁸ m/s = 3 × 10¹⁰ cm/s).',
      defaultVal: 2.998e8,
      icon: 'fa-sun',
      benchmarks: [
        { label: 'પ્રકાશનો વેગ શૂન્યાવકાશમાં (Exact Universal Speed of Light c)', val: 299792458, unit: 'm/s', desc: '૩ × ૧૦⁸ m/s = ૩ લાખ km/s.' }
      ]
    },
    {
      id: 'refractive_index',
      name: 'વક્રીભવનાંક (Refractive Index)',
      symbol: 'μ',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\mu = \\frac{c}{v} = \\frac{\\sin\\theta_i}{\\sin\\theta_r}',
      standardDefinition: 'શૂન્યાવકાશમાં પ્રકાશના વેગ અને માધ્યમમાં પ્રકાશના વેગના ગુણોત્તરને વક્રીભવનાંક કહે છે (સ્નેલનો નિયમ, પરિમાણ રહિત શુદ્ધ ગુણોત્તર ૧:૧). પાણી: μ = 1.33, કાચ: μ = 1.5, હીરો: μ = 2.42.',
      defaultVal: 1.5,
      icon: 'fa-glasses',
      benchmarks: [
        { label: 'શૂન્યાવકાશ વક્રીભવનાંક (Vacuum)', val: 1.0, unit: '-', desc: 'આધારભૂત સંદર્ભ (μ = ૧.૦).' },
        { label: 'હવા (Air at STP)', val: 1.000293, unit: '-', desc: 'હવાનો વક્રીભવનાંક.' },
        { label: 'શુદ્ધ પાણી (Pure Water)', val: 1.333, unit: '-', desc: 'પાણીનો વક્રીભવનાંક (૪/૩ = ૧.૩૩).' },
        { label: 'ક્રાઉન ગ્લાસ કાચ (Crown Glass)', val: 1.52, unit: '-', desc: 'સામાન્ય કાચ (μ ≈ ૧.૫).' },
        { label: 'શુદ્ધ હીરો (Pure Diamond)', val: 2.42, unit: '-', desc: 'હીરાનો ઊંચો વક્રીભવનાંક (૨.૪૨).' }
      ]
    },
    {
      id: 'numerical_aperture',
      name: 'ન્યુમેરિકલ એપરચર (Numerical Aperture)',
      symbol: 'N.A.',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      cgs: { name: 'પરિમાણ રહિત (Unitless)', symbol: '-' },
      mksToCgsRatio: 1,
      isUnitless: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: 'N.A. = \\sin\\theta_a = \\sqrt{\\mu_1^2 - \\mu_2^2}',
      standardDefinition: 'ઓપ્ટિકલ ફાઇબરની પ્રકાશ એકત્રિત કરવાની ક્ષમતા દર્શાવતી પરિમાણ રહિત સંખ્યા (N.A. = √(μ₁² - μ₂²), જ્યાં μ₁ = કોર, μ₂ = ક્લેડિંગ).',
      defaultVal: 0.28,
      icon: 'fa-circle-dot',
      benchmarks: [
        { label: 'સિંગલ મોડ ટેલિકોમ ફાઇબર (Single-Mode Fiber NA)', val: 0.14, unit: '-', desc: 'લાંબા અંતરના ઓપ્ટિકલ કેબલ (N.A. ≈ ૦.૧૪).' },
        { label: 'મલ્ટીમોડ ફાઇબર (Multimode Glass Fiber NA)', val: 0.28, unit: '-', desc: 'LAN નેટવર્ક ફાઇબર (N.A. ≈ ૦.૨૮).' }
      ]
    },
    {
      id: 'critical_angle',
      name: 'ક્રાંતિકોણ (Critical Angle)',
      symbol: 'θ_C',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'ડિગ્રી / અંશ (°)', symbol: '°' },
      cgs: { name: 'રેડિયન (radian)', symbol: 'rad' },
      mksToCgsRatio: 0.0174533,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\sin\\theta_C = \\frac{\\mu_2}{\\mu_1}',
      standardDefinition: 'ઘટ્ટ માધ્યમમાં જે આપાતકોણે પાતળા માધ્યમમાં વક્રીભૂતકોણ 90° થાય તે આપાતકોણને ક્રાંતિકોણ કહે છે (કાચ-હવા: θ_C ≈ 42°, પાણી-હવા: θ_C ≈ 48.6°, હીરો: θ_C ≈ 24.4°).',
      defaultVal: 41.8,
      icon: 'fa-right-left',
      benchmarks: [
        { label: 'હીરાનો ક્રાંતિકોણ (Diamond-Air Critical Angle)', val: 24.4, unit: '°', desc: 'હીરાનો અતિ નાનો ક્રાંતિકોણ (૨૪.૪°) જેનાથી હીરો ચળકે છે.' },
        { label: 'કાચનો ક્રાંતિકોણ (Crown Glass-Air Critical Angle)', val: 41.8, unit: '°', desc: 'કાચ-હવા ક્રાંતિકોણ (૪૧.૮°).' },
        { label: 'પાણીનો ક્રાંતિકોણ (Water-Air Critical Angle)', val: 48.6, unit: '°', desc: 'પાણી-હવા ક્રાંતિકોણ (૪૮.૬°).' }
      ]
    },
    {
      id: 'angle_of_incidence',
      name: 'આપાતકોણ (Angle of Incidence)',
      symbol: 'θ_i',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'ડિગ્રી / અંશ (°)', symbol: '°' },
      cgs: { name: 'રેડિયન (radian)', symbol: 'rad' },
      mksToCgsRatio: 0.0174533,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\theta_i',
      standardDefinition: 'આપાત કિરણે સપાટી પર દોરેલા લંબ સાથે બનાવેલા ખૂણાને આપાતકોણ કહે છે (1 rad ≈ 57.296°).',
      defaultVal: 45,
      icon: 'fa-arrow-trend-down',
      benchmarks: [
        { label: 'લંબ આપાત (Normal Incidence)', val: 0, unit: '°', desc: 'કિરણ લંબરૂપે આપાત થાય ત્યારે θi = ૦°.' },
        { label: '૪૫ ડિગ્રી આપાત (45° Standard Incidence)', val: 45, unit: '°', desc: 'પ્રિઝમ અને અરીસામાં સ્ટાન્ડર્ડ આપાતકોણ.' }
      ]
    },
    {
      id: 'angle_of_refraction',
      name: 'વક્રીભૂતકોણ (Angle of Refraction)',
      symbol: 'θ_r',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'ડિગ્રી / અંશ (°)', symbol: '°' },
      cgs: { name: 'રેડિયન (radian)', symbol: 'rad' },
      mksToCgsRatio: 0.0174533,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\sin\\theta_r = \\frac{\\mu_1 \\sin\\theta_i}{\\mu_2}',
      standardDefinition: 'વક્રીભૂત કિરણે સપાટી પર દોરેલા લંબ સાથે બનાવેલા ખૂણાને વક્રીભૂતકોણ કહે છે (1 rad ≈ 57.296°).',
      defaultVal: 28.1,
      icon: 'fa-arrow-trend-up',
      benchmarks: [
        { label: 'ક્રાંતિકોણે વક્રીભૂતકોણ (Refraction at Critical Angle)', val: 90, unit: '°', desc: 'સપાટીને સમાંતર કિરણ નીકળે (θr = ૯૦°).' }
      ]
    },
    {
      id: 'angle_of_reflection',
      name: 'પરાવર્તનકોણ (Angle of Reflection)',
      symbol: 'θ_re',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit4'],
      mks: { name: 'ડિગ્રી / અંશ (°)', symbol: '°' },
      cgs: { name: 'રેડિયન (radian)', symbol: 'rad' },
      mksToCgsRatio: 0.0174533,
      isSpecialUnit: true,
      exponent: 0,
      dimension: '[M⁰ L⁰ T⁰]',
      formula: '\\theta_{re} = \\theta_i',
      standardDefinition: 'પરાવર્તિત કિરણે સપાટી પર દોરેલા લંબ સાથે બનાવેલા ખૂણાને પરાવર્તનકોણ કહે છે (નિયમ: પરાવર્તનકોણ = આપાતકોણ θ_re = θ_i).',
      defaultVal: 45,
      icon: 'fa-arrow-right-arrow-left',
      benchmarks: [
        { label: 'સપાટ અરીસા પરાવર્તન (Mirror Reflection θre = θi)', val: 45, unit: '°', desc: 'પરાવર્તનના નિયમ મુજબ θre = ૪૫°.' }
      ]
    },

    // -------------------------------------------------------------
    // CHAPTER 5: SEMICONDUCTOR DEVICES (Modern Physics)
    // -------------------------------------------------------------
    {
      id: 'resistance',
      name: 'વિદ્યુત અવરોધ (Resistance)',
      symbol: 'R',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit5'],
      mks: { name: 'ઓહ્મ (ohm)', symbol: 'Ω' },
      cgs: { name: 'સ્ટેટઓહ્મ (statohm)', symbol: 'statΩ' },
      mksToCgsRatio: 1.11265e-12,
      exponent: -12,
      dimension: '[M¹ L² T⁻³ A⁻²]',
      formula: 'R = \\frac{V}{I} = \\rho \\cdot \\frac{L}{A}',
      standardDefinition: 'વાહકમાંથી વિદ્યુત પ્રવાહના વહન સામે નડતા અવરોધને વિદ્યુત અવરોધ કહે છે (1 Ω = 1 V/A = 10⁶ μΩ, 1 statΩ = 9 × 10¹¹ Ω).',
      defaultVal: 100,
      icon: 'fa-microchip',
      benchmarks: [
        { label: 'સુપરકન્ડક્ટર અવરોધ (Superconductor Resistance)', val: 0, unit: 'Ω', desc: 'ક્રિટિકલ તાપમાને શૂન્ય અવરોધ (R = 0 Ω).' },
        { label: '૧ મીટર તાંબાનો વાયર (1m Copper Wire 1mm²)', val: 0.017, unit: 'Ω', desc: 'તાંબાના વાયરનો અલ્પ અવરોધ (૧૭ મિલીઓહ્મ).' },
        { label: 'માનવ શરીર સુકી ચામડી અવરોધ (Dry Human Body Skin)', val: 100000, unit: 'Ω', desc: 'સુકા માનવ શરીરનો અવરોધ (૧૦૦ kΩ).' },
        { label: 'ટેફલોન / સિલિકોન અવાહક (Teflon Insulator Resistance)', val: 1e16, unit: 'Ω', desc: 'ઉત્તમ વિદ્યુત અવાહક (૧૦¹⁶ Ω).' }
      ]
    },
    {
      id: 'energy_band_gap',
      name: 'ઊર્જા બેન્ડ ગેપ (Energy Band Gap)',
      symbol: 'E_g',
      subjectIds: ['modern_physics'],
      chapterIds: ['mp_unit5'],
      mks: { name: 'ઇલેક્ટ્રોન-વોલ્ટ (eV)', symbol: 'eV' },
      cgs: { name: 'જૂલ (joule)', symbol: 'J' },
      mksToCgsRatio: 1.60218e-19,
      exponent: -19,
      dimension: '[M¹ L² T⁻²]',
      formula: 'E_g = h \\cdot f = \\frac{h \\cdot c}{\\lambda}',
      standardDefinition: 'વેલેન્સ બેન્ડની ટોચ અને કન્ડક્શન બેન્ડના તળિયા વચ્ચેના પ્રતિબંધિત ઊર્જા અંતરને બેન્ડ ગેપ કહે છે (1 eV = 1.602 × 10⁻¹⁹ J). સિલિકોન (Si): Eg = 1.1 eV, જર્મેનિયમ (Ge): Eg = 0.72 eV, ગેલિયમ આર્સેનાઇડ (GaAs): Eg = 1.42 eV.',
      defaultVal: 1.1,
      icon: 'fa-layer-group',
      benchmarks: [
        { label: 'ધાતુ વાહક (Conductor Metal Eg = 0)', val: 0, unit: 'eV', desc: 'ધાતુઓમાં બેન્ડ ઓવરલેપ થાય છે (Eg = 0 eV).' },
        { label: 'જર્મેનિયમ સેમિકન્ડક્ટર (Germanium Ge at 300K)', val: 0.72, unit: 'eV', desc: 'જર્મેનિયમનો બેન્ડ ગેપ (૦.૭૨ eV).' },
        { label: 'સિલિકોન સેમિકન્ડક્ટર (Silicon Si at 300K)', val: 1.1, unit: 'eV', desc: 'ઇલેક્ટ્રોનિક્સમાં સૌથી વધુ વપરાતા સિલિકોનનો બેન્ડ ગેપ (૧.૧ eV).' },
        { label: 'ગેલિયમ આર્સેનાઇડ (GaAs Optoelectronics)', val: 1.42, unit: 'eV', desc: 'લેસર ડાયોડ અને સોલાર સેલ (૧.૪૨ eV).' },
        { label: 'ગેલિયમ નાઇટ્રાઇડ બ્લુ LED (GaN Blue LED)', val: 3.4, unit: 'eV', desc: 'વાદળી/સફેદ LED નો વાઇડ બેન્ડ ગેપ (૩.૪ eV).' },
        { label: 'હીરો અવાહક (Diamond Insulator Band Gap)', val: 5.5, unit: 'eV', desc: 'અવાહક પદાર્થનો વિશાળ બેન્ડ ગેપ (૫.૫ eV = ૮.૮ × ૧૦⁻¹⁹ J).' }
      ]
    }
  ],

  // Gujarati Practice Quiz Bank
  quizBank: [
    {
      id: 'q1',
      subjectId: 'applied_physics',
      difficulty: 'easy',
      question: '૧ ન્યૂટન (1 N) બળ બરાબર CGS પદ્ધતિમાં કેટલા ડાઇન (dyn) થાય?',
      equation: '1 \\text{ N} = 1 \\text{ kg}\\cdot\\text{m/s}^2 = ? \\text{ dyn}',
      options: ['10³ dyn', '10⁴ dyn', '10⁵ dyn', '10⁷ dyn'],
      correctIdx: 2,
      hint: '1 kg = 10³ g અને 1 m = 10² cm નો ગુણાકાર કરો (10³ × 10² = 10⁵).',
      explanation: '1 N = 1 kg × 1 m/s² = 10³ g × 10² cm/s² = 10⁵ g·cm/s² = 10⁵ dyn.'
    },
    {
      id: 'q2',
      subjectId: 'applied_physics',
      difficulty: 'easy',
      question: '૧ જૂલ (1 J) કાર્ય બરાબર CGS પદ્ધતિમાં કેટલા અર્ગ (erg) થાય?',
      equation: '1 \\text{ J} = 1 \\text{ N}\\cdot\\text{m} = ? \\text{ erg}',
      options: ['10⁵ erg', '10⁶ erg', '10⁷ erg', '10⁹ erg'],
      correctIdx: 2,
      hint: '1 N = 10⁵ dyn અને 1 m = 10² cm છે. બંનેનો ગુણાકાર કરો.',
      explanation: '1 J = 1 N × 1 m = 10⁵ dyn × 10² cm = 10⁷ dyn·cm = 10⁷ erg.'
    },
    {
      id: 'q3',
      subjectId: 'applied_physics',
      difficulty: 'medium',
      question: 'શુદ્ધ પાણીની મહત્તમ ઘનતા (1000 kg/m³) CGS પદ્ધતિમાં કેટલી થાય?',
      equation: '1000 \\text{ kg/m}^3 = ? \\text{ g/cm}^3',
      options: ['0.001 g/cm³', '1 g/cm³', '100 g/cm³', '1000 g/cm³'],
      correctIdx: 1,
      hint: '1 kg/m³ = 10⁻³ g/cm³ થાય. તેથી 1000 kg/m³ = 1 g/cm³.',
      explanation: '1000 kg/m³ = 1000 × (10³ g / 10⁶ cm³) = 1000 × 10⁻³ g/cm³ = 1 g/cm³ (4 °C તાપમાને).'
    },
    {
      id: 'q4',
      subjectId: 'applied_physics',
      difficulty: 'medium',
      question: 'શ્યાનતા ગુણાંકનો SI એકમ Pa·s અને CGS એકમ Poise (P) વચ્ચેનો સંબંધ કયો છે?',
      equation: '1 \\text{ Pa}\\cdot\\text{s} = 1 \\text{ N}\\cdot\\text{s/m}^2 = ? \\text{ poise}',
      options: ['0.1 poise', '1 poise', '10 poise', '100 poise'],
      correctIdx: 2,
      hint: '1 Pa·s = 10 dyn·s/cm² = 10 poise.',
      explanation: '1 Pa·s = (10⁵ dyn)·s / (10⁴ cm²) = 10 dyn·s/cm² = 10 poise (P).'
    },
    {
      id: 'q5',
      subjectId: 'applied_physics',
      difficulty: 'hard',
      question: 'જો પ્રવાહી અને કાચ વચ્ચેનો સંપર્ક કોણ θ > 90° હોય, તો કેશવાહિનીમાં પ્રવાહીનું સ્તર કેવું રહેશે?',
      equation: 'h = \\frac{2 T \\cos\\theta}{\\rho g r} \\quad (\\theta > 90^\\circ)',
      options: ['ઉપર ચઢશે (Meniscus Concave)', 'નીચે ઉતરશે (Meniscus Convex)', 'કોઈ ફેરફાર નહીં થાય', 'ઉભરાઈ જશે'],
      correctIdx: 1,
      hint: 'જ્યારે θ > 90° હોય ત્યારે cosθ ઋણ (-) બને છે, જેમ કે પારો (θ = 135°).',
      explanation: 'θ > 90° માટે cosθ < 0 (ઋણ) હોવાથી ઊંચાઈ h ઋણ બને છે, એટલે કે પ્રવાહી કેશવાહિનીમાં નીચે ઉતરે છે (Capillary Depression).'
    },
    {
      id: 'q6',
      subjectId: 'modern_physics',
      difficulty: 'easy',
      question: '૧ કુલંબ (1 C) વિદ્યુતભાર બરાબર કેટલા સ્ટેટકુલંબ (statC / esu) થાય?',
      equation: '1 \\text{ C} = ? \\text{ statC}',
      options: ['3 × 10⁵ statC', '3 × 10⁸ statC', '3 × 10⁹ statC', '3 × 10¹⁰ statC'],
      correctIdx: 2,
      hint: 'પ્રકાશના વેગ c = 3 × 10¹⁰ cm/s પરથી 1 C = 3 × 10⁹ statC મળે છે.',
      explanation: '1 C = 1 / 10 abC = 3 × 10⁹ statC (ઇલેક્ટ્રોસ્ટેટિક એકમ esu).'
    },
    {
      id: 'q7',
      subjectId: 'modern_physics',
      difficulty: 'medium',
      question: 'ઓપ્ટિકલ ફાઇબરમાં પૂર્ણ આંતરિક પરાવર્તન (TIR) માટે કઈ શરત અનિવાર્ય છે?',
      equation: '\\theta_i > \\theta_C \\quad \\& \\quad \\mu_{\\text{core}} > \\mu_{\\text{cladding}}',
      options: ['આપાતકોણ ક્રાંતિકોણ કરતા નાનો હોવો જોઈએ', 'આપાતકોણ ક્રાંતિકોણ કરતા મોટો (θi > θC) અને μ1 > μ2 હોવો જોઈએ', 'બંને માધ્યમોનો વક્રીભવનાંક સમાન હોવો જોઈએ', 'પ્રકાશ પાતળામાંથી ઘટ્ટ માધ્યમમાં જવો જોઈએ'],
      correctIdx: 1,
      hint: 'પ્રકાશ ઘટ્ટ માધ્યમમાંથી પાતળા માધ્યમમાં જવો જોઈએ અને આપાતકોણ θi > θC હોવો જોઈએ.',
      explanation: 'પૂર્ણ આંતરિક પરાવર્તન માટે કોરનો વક્રીભવનાંક ક્લેડિંગ કરતા મોટો (μ₁ > μ₂) હોવો જોઈએ અને આપાતકોણ ક્રાંતિકોણ કરતા મોટો (θi > θC) હોવો જોઈએ.'
    },
    {
      id: 'q8',
      subjectId: 'applied_physics',
      difficulty: 'easy',
      question: 'કયા તાપમાને સેલ્સિયસ (°C) અને ફેરનહીટ (°F) સ્કેલના મૂલ્યો સમાન બને છે?',
      equation: '\\frac{C}{5} = \\frac{F - 32}{9} \\implies C = F = ?',
      options: ['0°', '-40°', '32°', '100°'],
      correctIdx: 1,
      hint: 'સમીકરણ x/5 = (x - 32)/9 ઉકેલો: 9x = 5x - 160 -> 4x = -160 -> x = -40.',
      explanation: '-40 °C = (-40 × 9/5) + 32 = -72 + 32 = -40 °F. આ બંને સ્કેલનું સામાન્ય બિંદુ છે.'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHYSICS_DATA;
}


// --- FILE: converter.js ---
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


// --- FILE: prefix-engine.js ---
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


// --- FILE: fluid-simulators.js ---
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


// --- FILE: proximity-matcher.js ---
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


// --- FILE: magic-triangles.js ---
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


// --- FILE: temp-matrix.js ---
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


// --- FILE: visualizer.js ---
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


// --- FILE: quiz.js ---
/**
 * Interactive Practice Quiz Engine (ગુજરાતી આવૃત્તિ - Gujarati Edition v11.0)
 */

class QuizEngine {
  constructor(physicsData, converterEngine) {
    this.data = physicsData;
    this.converter = converterEngine;
    this.quizBank = this.data.quizBank;
    this.currentQuestion = null;
    this.currentSubject = 'applied_physics';
    this.currentDifficulty = 'all';

    this.stats = {
      score: 0,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      totalCorrect: 0
    };
  }

  setSubject(subjectId) {
    this.currentSubject = subjectId;
  }

  setDifficulty(diff) {
    this.currentDifficulty = diff;
  }

  getNextQuestion() {
    let pool = this.quizBank.filter(q => q.subjectId === this.currentSubject);
    if (this.currentDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === this.currentDifficulty);
    }
    if (pool.length === 0) {
      pool = this.quizBank;
    }

    const randIdx = Math.floor(Math.random() * pool.length);
    this.currentQuestion = pool[randIdx];
    return this.currentQuestion;
  }

  submitAnswer(selectedOptionIdx) {
    if (!this.currentQuestion) return null;
    const isCorrect = selectedOptionIdx === this.currentQuestion.correctIdx;

    this.stats.totalAnswered++;
    if (isCorrect) {
      this.stats.totalCorrect++;
      this.stats.score += 10;
      this.stats.streak++;
      if (this.stats.streak > this.stats.bestStreak) {
        this.stats.bestStreak = this.stats.streak;
      }
    } else {
      this.stats.streak = 0;
    }

    return {
      isCorrect,
      correctOptionIdx: this.currentQuestion.correctIdx,
      explanation: this.currentQuestion.explanation,
      stats: this.getStats()
    };
  }

  getStats() {
    return { ...this.stats };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizEngine;
}


// --- FILE: app.js ---
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

