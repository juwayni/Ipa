import { consonantManners, consonantPlaces, referenceOnlyAudio, references } from './schema.js';

const jaTerms = {
  voiceless: '無声', voiced: '有声', bilabial: '両唇', labiodental: '唇歯', dental: '歯', alveolar: '歯茎', postalveolar: '後部歯茎', retroflex: 'そり舌', palatal: '硬口蓋', velar: '軟口蓋', uvular: '口蓋垂', pharyngeal: '咽頭', glottal: '声門', plosive: '破裂音', nasal: '鼻音', trill: 'ふるえ音', 'tap/flap': 'はじき音', fricative: '摩擦音', 'lateral fricative': '側面摩擦音', approximant: '接近音', 'lateral approximant': '側面接近音', vowel: '母音', rounded: '円唇', unrounded: '非円唇', front: '前舌', central: '中舌', back: '後舌', close: '狭', 'near-close': '準狭', 'close-mid': '半狭', mid: '中央', 'open-mid': '半広', 'near-open': '準広', open: '広'
};
const huTerms = {
  voiceless: 'zöngétlen', voiced: 'zöngés', bilabial: 'két ajakkal képzett', labiodental: 'ajak-fog', dental: 'dentális', alveolar: 'alveoláris', postalveolar: 'posztalveoláris', retroflex: 'retroflex', palatal: 'palatális', velar: 'veláris', uvular: 'uvuláris', pharyngeal: 'faringális', glottal: 'glottális', plosive: 'zárhang', nasal: 'nazális', trill: 'pergőhang', 'tap/flap': 'legyintőhang', fricative: 'réshang', 'lateral fricative': 'laterális réshang', approximant: 'közelítőhang', 'lateral approximant': 'laterális közelítőhang', vowel: 'magánhangzó', rounded: 'ajakkerekítéses', unrounded: 'ajakkerekítés nélküli', front: 'elöl képzett', central: 'centrális', back: 'hátul képzett', close: 'zárt', 'near-close': 'majdnem zárt', 'close-mid': 'félig zárt', mid: 'középső', 'open-mid': 'félig nyílt', 'near-open': 'majdnem nyílt', open: 'nyílt'
};
const jp = (parts) => parts.map((p) => jaTerms[p] || p).join('');
const hu = (parts) => parts.map((p) => huTerms[p] || p).join(' ');
const code = (symbol) => Array.from(symbol).map((ch) => `U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`).join(' ');
const article = (word) => /^[aeiou]/.test(word) ? 'an' : 'a';
function baseEntry({ symbol, category, subcategory, type, en, ja, huName, difficulty = 'beginner', lessonOrder = 999, ...rest }) {
  return {
    id: Array.from(symbol).map((ch) => ch.codePointAt(0).toString(16)).join('-'),
    symbol,
    unicode: code(symbol.replace('◌', '')),
    names: { en: { name: en, description: en }, ja: { name: ja, description: ja }, hu: { name: huName, description: huName } },
    category,
    subcategory,
    type,
    voicing: 'not-applicable',
    description: en,
    howToProduce: 'Read the classification chips and compare the sound with related symbols; use verified recordings when available.',
    exampleWords: [],
    exampleLanguages: [],
    audioSources: [referenceOnlyAudio],
    audioFiles: [],
    relatedSymbols: [],
    commonConfusions: [],
    difficulty,
    lessonOrder,
    isCore: true,
    isExtended: false,
    notes: 'Classification follows the IPA chart categories. Localized labels use conservative technical terminology rather than unsourced vernacular names.',
    references: Object.keys(references),
    searchAliases: [],
    ...rest
  };
}
function consonant(symbol, manner, place, voicing, order) {
  const en = `${voicing} ${place} ${manner}`;
  return baseEntry({
    symbol, category: 'pulmonic-consonant', subcategory: manner, type: 'consonant', en,
    ja: jp([voicing, place, manner]), huName: hu([voicing, place, manner]),
    voicing, placeOfArticulation: place, mannerOfArticulation: manner,
    howToProduce: `Create ${article(place)} ${place} constriction and produce ${article(manner)} ${manner}; keep the vocal folds ${voicing === 'voiced' ? 'vibrating' : 'apart and not vibrating'}.`,
    difficulty: order < 32 ? 'beginner' : order < 58 ? 'intermediate' : 'advanced', lessonOrder: order,
    searchAliases: [place, manner, voicing, `${place} ${manner}`]
  });
}
const consonantRows = [
  ['p','plosive','bilabial','voiceless'],['b','plosive','bilabial','voiced'],['t','plosive','alveolar','voiceless'],['d','plosive','alveolar','voiced'],['ʈ','plosive','retroflex','voiceless'],['ɖ','plosive','retroflex','voiced'],['c','plosive','palatal','voiceless'],['ɟ','plosive','palatal','voiced'],['k','plosive','velar','voiceless'],['ɡ','plosive','velar','voiced'],['q','plosive','uvular','voiceless'],['ɢ','plosive','uvular','voiced'],['ʔ','plosive','glottal','voiceless'],
  ['m','nasal','bilabial','voiced'],['ɱ','nasal','labiodental','voiced'],['n','nasal','alveolar','voiced'],['ɳ','nasal','retroflex','voiced'],['ɲ','nasal','palatal','voiced'],['ŋ','nasal','velar','voiced'],['ɴ','nasal','uvular','voiced'],
  ['ʙ','trill','bilabial','voiced'],['r','trill','alveolar','voiced'],['ʀ','trill','uvular','voiced'],['ⱱ','tap/flap','labiodental','voiced'],['ɾ','tap/flap','alveolar','voiced'],['ɽ','tap/flap','retroflex','voiced'],
  ['ɸ','fricative','bilabial','voiceless'],['β','fricative','bilabial','voiced'],['f','fricative','labiodental','voiceless'],['v','fricative','labiodental','voiced'],['θ','fricative','dental','voiceless'],['ð','fricative','dental','voiced'],['s','fricative','alveolar','voiceless'],['z','fricative','alveolar','voiced'],['ʃ','fricative','postalveolar','voiceless'],['ʒ','fricative','postalveolar','voiced'],['ʂ','fricative','retroflex','voiceless'],['ʐ','fricative','retroflex','voiced'],['ç','fricative','palatal','voiceless'],['ʝ','fricative','palatal','voiced'],['x','fricative','velar','voiceless'],['ɣ','fricative','velar','voiced'],['χ','fricative','uvular','voiceless'],['ʁ','fricative','uvular','voiced'],['ħ','fricative','pharyngeal','voiceless'],['ʕ','fricative','pharyngeal','voiced'],['h','fricative','glottal','voiceless'],['ɦ','fricative','glottal','voiced'],
  ['ɬ','lateral fricative','alveolar','voiceless'],['ɮ','lateral fricative','alveolar','voiced'],['ʋ','approximant','labiodental','voiced'],['ɹ','approximant','alveolar','voiced'],['ɻ','approximant','retroflex','voiced'],['j','approximant','palatal','voiced'],['ɰ','approximant','velar','voiced'],['l','lateral approximant','alveolar','voiced'],['ɭ','lateral approximant','retroflex','voiced'],['ʎ','lateral approximant','palatal','voiced'],['ʟ','lateral approximant','velar','voiced']
];
function vowel(symbol, height, backness, rounded, order) {
  const round = rounded ? 'rounded' : 'unrounded';
  const en = `${height} ${backness} ${round} vowel`;
  return baseEntry({
    symbol, category: 'vowel', subcategory: height, type: 'vowel', en,
    ja: jp([height, backness, round, 'vowel']), huName: hu([height, backness, round, 'vowel']),
    vowelHeight: height, vowelBackness: backness, rounded,
    howToProduce: `Hold the tongue ${height} and ${backness}; keep the lips ${rounded ? 'rounded' : 'unrounded'} and let air flow without a consonantal constriction.`,
    difficulty: order < 118 ? 'beginner' : 'intermediate', lessonOrder: order,
    searchAliases: [height, backness, round, 'monophthong']
  });
}
const vowelRows = [
  ['i','close','front',false],['y','close','front',true],['ɨ','close','central',false],['ʉ','close','central',true],['ɯ','close','back',false],['u','close','back',true],['ɪ','near-close','front',false],['ʏ','near-close','front',true],['ʊ','near-close','back',true],['e','close-mid','front',false],['ø','close-mid','front',true],['ɘ','close-mid','central',false],['ɵ','close-mid','central',true],['ɤ','close-mid','back',false],['o','close-mid','back',true],['ə','mid','central',false],['ɛ','open-mid','front',false],['œ','open-mid','front',true],['ɜ','open-mid','central',false],['ɞ','open-mid','central',true],['ʌ','open-mid','back',false],['ɔ','open-mid','back',true],['æ','near-open','front',false],['ɐ','near-open','central',false],['a','open','front',false],['ɶ','open','front',true],['ɑ','open','back',false],['ɒ','open','back',true]
];
const notationRows = [
  ['ʘ','non-pulmonic-consonant','click','bilabial click'],['ǀ','non-pulmonic-consonant','click','dental click'],['ǃ','non-pulmonic-consonant','click','postalveolar click'],['ǂ','non-pulmonic-consonant','click','palatal click'],['ǁ','non-pulmonic-consonant','click','alveolar lateral click'],
  ['ɓ','non-pulmonic-consonant','implosive','voiced bilabial implosive'],['ɗ','non-pulmonic-consonant','implosive','voiced alveolar implosive'],['ʄ','non-pulmonic-consonant','implosive','voiced palatal implosive'],['ɠ','non-pulmonic-consonant','implosive','voiced velar implosive'],['ʛ','non-pulmonic-consonant','implosive','voiced uvular implosive'],['pʼ','non-pulmonic-consonant','ejective','bilabial ejective'],['tʼ','non-pulmonic-consonant','ejective','alveolar ejective'],['kʼ','non-pulmonic-consonant','ejective','velar ejective'],
  ['ˈ','suprasegmental','stress','primary stress'],['ˌ','suprasegmental','stress','secondary stress'],['ː','suprasegmental','length','long'],['ˑ','suprasegmental','length','half-long'],['̆','suprasegmental','length','extra-short'],['.','suprasegmental','separator','syllable break'],['|','suprasegmental','prosody','minor prosodic break'],['‖','suprasegmental','prosody','major prosodic break'],['‿','suprasegmental','prosody','linking absence of break'],
  ['◌̥','diacritic','phonation','voiceless'],['◌̬','diacritic','phonation','voiced'],['◌ʰ','diacritic','release','aspirated'],['◌̹','diacritic','rounding','more rounded'],['◌̜','diacritic','rounding','less rounded'],['◌̟','diacritic','articulation','advanced'],['◌̠','diacritic','articulation','retracted'],['◌̈','diacritic','centralization','centralized'],['◌̽','diacritic','centralization','mid-centralized'],['◌̩','diacritic','syllabicity','syllabic'],['◌̯','diacritic','syllabicity','non-syllabic'],['◌˞','diacritic','vowel coloring','rhoticity'],['◌̃','diacritic','nasalization','nasalized'],['◌̚','diacritic','release','no audible release'],['◌̤','diacritic','phonation','breathy voiced'],['◌̰','diacritic','phonation','creaky voiced'],['◌̼','diacritic','articulation','linguolabial'],['◌ʷ','diacritic','secondary articulation','labialized'],['◌ʲ','diacritic','secondary articulation','palatalized'],['◌ˠ','diacritic','secondary articulation','velarized'],['◌ˤ','diacritic','secondary articulation','pharyngealized'],['◌̴','diacritic','secondary articulation','velarized or pharyngealized'],['◌̝','diacritic','relative articulation','raised'],['◌̞','diacritic','relative articulation','lowered'],['◌̘','diacritic','tongue root','advanced tongue root'],['◌̙','diacritic','tongue root','retracted tongue root'],
  ['˥','tone','level tone','extra high tone'],['˦','tone','level tone','high tone'],['˧','tone','level tone','mid tone'],['˨','tone','level tone','low tone'],['˩','tone','level tone','extra low tone'],['ꜛ','tone','register','upstep'],['ꜜ','tone','register','downstep'],['↗','tone','global contour','global rise'],['↘','tone','global contour','global fall']
];
function notation([symbol, category, subcategory, en], index) {
  return baseEntry({
    symbol, category, subcategory, type: category === 'diacritic' ? 'modifier' : 'notation', en,
    ja: en, huName: en,
    howToProduce: category === 'diacritic' ? 'Combine this mark with a base IPA symbol to modify its articulation, phonation, release, or syllabic role.' : 'Use this notation to mark prosodic, tone, or non-pulmonic information in transcription.',
    difficulty: category === 'diacritic' || category === 'tone' ? 'advanced' : 'intermediate', lessonOrder: 200 + index,
    searchAliases: [subcategory, en, category], notes: category === 'diacritic' ? 'The dotted circle shows placement; it is not part of the final transcription.' : 'Use according to IPA conventions and language-specific transcription practice.'
  });
}
export const ipaEntries = [
  ...consonantRows.map((row, index) => consonant(row[0], row[1], row[2], row[3], 10 + index)),
  ...vowelRows.map((row, index) => vowel(row[0], row[1], row[2], row[3], 110 + index)),
  ...notationRows.map(notation)
];
export { consonantManners, consonantPlaces, references };
