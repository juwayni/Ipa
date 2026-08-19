const fs = require('fs');
let code = fs.readFileSync('src/data/ipaSymbols.ts', 'utf8');

code = code.replace(/const CONFUSIONS_MAP:[\s\S]*?;\n\n/s, `const CONFUSIONS_MAP: Record<string, Array<{ symbolId: string; reason: { en: string; ja: string; hu: string } }>> = {
  'theta': [{ symbolId: 's', reason: { en: 'Th-fronting: confusing dental /θ/ with alveolar /s/.', ja: '歯摩擦音 /θ/ と 歯茎摩擦音 /s/ の混同。', hu: 'Dentális /θ/ és alveoláris /s/ összetévesztése.' } }],
  'eth': [{ symbolId: 'v', reason: { en: 'Replacing dental /ð/ with labiodental /v/.', ja: '歯摩擦音 /ð/ と 唇歯摩擦音 /v/ の混同。', hu: 'Dentális /ð/ cseréje labiodentális /v/-re.' } }],
  'esh': [{ symbolId: 's', reason: { en: 'Replacing postalveolar /ʃ/ with alveolar /s/.', ja: '後歯茎摩擦音 /ʃ/ と 歯茎摩擦音 /s/ の混同。', hu: 'Posztalveoláris /ʃ/ és alveoláris /s/ összetévesztése.' } }],
  'ezh': [{ symbolId: 'z', reason: { en: 'Confusing voiced postalveolar /ʒ/ with alveolar /z/.', ja: '有声後歯茎摩擦音 /ʒ/ と 歯茎摩擦音 /z/ の混同。', hu: 'Zöngés posztalveoláris /ʒ/ és alveoláris /z/ összetévesztése.' } }],
  'ng': [{ symbolId: 'n', reason: { en: 'Failing to retract the tongue to the velum for /ŋ/.', ja: '軟口蓋音 /ŋ/ の調音位置不足。', hu: 'A nyelv hátrahúzásának hiánya a veláris /ŋ/-nél.' } }],
  'i': [{ symbolId: 'I', reason: { en: 'Confusing tense /i/ with lax /ɪ/.', ja: '緊張音 /i/ と 弛緩音 /ɪ/ の混同。', hu: 'Feszített /i/ és laza /ɪ/ összetévesztése.' } }],
  'u': [{ symbolId: 'U', reason: { en: 'Confusing tense /u/ with lax /ʊ/.', ja: '緊張音 /u/ と 弛緩音 /ʊ/ の混同。', hu: 'Feszített /u/ és laza /ʊ/ összetévesztése.' } }]
};\n\n`);

fs.writeFileSync('src/data/ipaSymbols.ts', code);
console.log('Fixed confusion map type.');
