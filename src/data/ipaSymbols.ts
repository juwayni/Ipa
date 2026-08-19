import type { IPASymbol, PlaceOfArticulation, MannerOfArticulation, Voicing, VowelHeight, VowelBackness, Roundness } from '../types/ipa';

// Trilingual Terminology Helper Maps
const JA_PLACE: Record<string, string> = {
  'bilabial': '両唇音', 'labiodental': '唇歯音', 'dental': '歯音', 'alveolar': '歯茎音',
  'postalveolar': '後歯茎音', 'retroflex': '反舌音', 'palatal': '硬口蓋音', 'velar': '軟口蓋音',
  'uvular': '小舌音', 'pharyngeal': '咽頭音', 'glottal': '声門音', 'epiglottal': '喉頭蓋音'
};

const HU_PLACE: Record<string, string> = {
  'bilabial': 'bilabiális', 'labiodental': 'labiodentális', 'dental': 'dentális', 'alveolar': 'alveoláris',
  'postalveolar': 'posztalveoláris', 'retroflex': 'retroflex', 'palatal': 'palatális', 'velar': 'veláris',
  'uvular': 'uvuláris', 'pharyngeal': 'faringális', 'glottal': 'glottális', 'epiglottal': 'epiglottális'
};

const JA_MANNER: Record<string, string> = {
  'plosive': '破裂音', 'nasal': '鼻音', 'trill': 'ふるえ音', 'tap-flap': 'はじき音',
  'fricative': '摩擦音', 'lateral-fricative': '側面摩擦音', 'approximant': '接近音',
  'lateral-approximant': '側面接近音', 'affricate': '破擦音'
};

const HU_MANNER: Record<string, string> = {
  'plosive': 'okkluzíva (zárhang)', 'nasal': 'nazális (orrhang)', 'trill': 'pergetett hang', 'tap-flap': 'legyintőhang',
  'fricative': 'frikatíva (réshang)', 'lateral-fricative': 'oldalsó réshang', 'approximant': 'approximáns (megközelítő hang)',
  'lateral-approximant': 'oldalsó megközelítő hang', 'affricate': 'affrikáta'
};

const JA_HEIGHT: Record<string, string> = {
  'close': '狭', 'near-close': '広めの狭', 'close-mid': '半狭',
  'mid': '中央', 'open-mid': '半広', 'near-open': '狭めの広', 'open': '広'
};
const HU_HEIGHT: Record<string, string> = {
  'close': 'Zárt', 'near-close': 'Zártabb', 'close-mid': 'Félig zárt',
  'mid': 'Középső', 'open-mid': 'Félig nyílt', 'near-open': 'Nyíltabb', 'open': 'Nyílt'
};

const JA_BACKNESS: Record<string, string> = {
  'front': '前舌', 'central': '中舌', 'back': '後舌'
};
const HU_BACKNESS: Record<string, string> = {
  'front': 'elülső', 'central': 'középső', 'back': 'hátsó'
};

const JA_ROUND: Record<string, string> = {
  'rounded': '円唇母音', 'unrounded': '非円唇母音'
};
const HU_ROUND: Record<string, string> = {
  'rounded': 'ajakkerekítéses magánhangzó', 'unrounded': 'ajakréses magánhangzó'
};

const CONSONANT_CSV_DATA = [
  ["Voiceless bilabial nasal","m̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c3/Voiceless_Bilabial_Nasal.ogg/Voiceless_Bilabial_Nasal.ogg.mp3"],
  ["Voiced bilabial nasal","m","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a9/Bilabial_nasal.ogg/Bilabial_nasal.ogg.mp3"],
  ["Voiceless labiodental nasal","ɱ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/76/Voiceless_labiodental_nasal.ogg/Voiceless_labiodental_nasal.ogg.mp3"],
  ["Voiced labiodental nasal","ɱ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Labiodental_nasal.ogg/Labiodental_nasal.ogg.mp3"],
  ["Voiced linguolabial nasal","n̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/82/Linguolabial_nasal.ogg/Linguolabial_nasal.ogg.mp3"],
  ["Voiceless dental nasal","n̪̊",""],
  ["Voiced dental nasal","n̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Voiced_Dental_Nasal.ogg/Voiced_Dental_Nasal.ogg.mp3"],
  ["Voiceless alveolar nasal","n̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/82/Voiceless_Alveolar_Nasal.ogg/Voiceless_Alveolar_Nasal.ogg.mp3"],
  ["Voiced alveolar nasal","n","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Alveolar_nasal.ogg/Alveolar_nasal.ogg.mp3"],
  ["Voiceless postalveolar nasal","n̠̊",""],
  ["Voiced postalveolar nasal","n̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Voiced_postalveolar_nasal.ogg/Voiced_postalveolar_nasal.ogg.mp3"],
  ["Voiceless retroflex nasal","ɳ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d0/Voiceless_retroflex_nasal.wav/Voiceless_retroflex_nasal.wav.mp3"],
  ["Voiced retroflex nasal","ɳ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/af/Retroflex_nasal.ogg/Retroflex_nasal.ogg.mp3"],
  ["Voiceless palatal nasal","ɲ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Voiceless_palatal_nasal.ogg/Voiceless_palatal_nasal.ogg.mp3"],
  ["Voiced palatal nasal","ɲ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/46/Palatal_nasal.ogg/Palatal_nasal.ogg.mp3"],
  ["Voiceless velar nasal","ŋ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c7/Voiceless_velar_nasal.wav/Voiceless_velar_nasal.wav.mp3"],
  ["Voiced velar nasal","ŋ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/39/Velar_nasal.ogg/Velar_nasal.ogg.mp3"],
  ["Voiceless uvular nasal","ɴ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f4/Voiceless_uvular_nasal.ogg/Voiceless_uvular_nasal.ogg.mp3"],
  ["Voiced uvular nasal","ɴ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3e/Uvular_nasal.ogg/Uvular_nasal.ogg.mp3"],
  ["Voiceless bilabial plosive","p","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/51/Voiceless_bilabial_plosive.ogg/Voiceless_bilabial_plosive.ogg.mp3"],
  ["Voiced bilabial plosive","b","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Voiced_bilabial_plosive.ogg/Voiced_bilabial_plosive.ogg.mp3"],
  ["Voiceless labiodental plosive","p̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Voiceless_labiodental_plosive.ogg/Voiceless_labiodental_plosive.ogg.mp3"],
  ["Voiced labiodental plosive","b̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6e/Voiced_labiodental_plosive.wav/Voiced_labiodental_plosive.wav.mp3"],
  ["Voiceless linguolabial plosive","t̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Voiceless_linguolabial_stop.ogg/Voiceless_linguolabial_stop.ogg.mp3"],
  ["Voiced linguolabial plosive","d̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/95/Voiced_linguolabial_stop.ogg/Voiced_linguolabial_stop.ogg.mp3"],
  ["Voiceless dental plosive","t̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/dc/Voiceless_dental_stop.ogg/Voiceless_dental_stop.ogg.mp3"],
  ["Voiced dental plosive","d̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1c/Voiced_dental_stop.ogg/Voiced_dental_stop.ogg.mp3"],
  ["Voiceless alveolar plosive","t","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/02/Voiceless_alveolar_plosive.ogg/Voiceless_alveolar_plosive.ogg.mp3"],
  ["Voiced alveolar plosive","d","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Voiced_alveolar_plosive.ogg/Voiced_alveolar_plosive.ogg.mp3"],
  ["Voiceless retroflex plosive","ʈ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b0/Voiceless_retroflex_stop.oga/Voiceless_retroflex_stop.oga.mp3"],
  ["Voiced retroflex plosive","ɖ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/27/Voiced_retroflex_stop.oga/Voiced_retroflex_stop.oga.mp3"],
  ["Voiceless palatal plosive","c","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5d/Voiceless_palatal_plosive.ogg/Voiceless_palatal_plosive.ogg.mp3"],
  ["Voiced palatal plosive","ɟ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Voiced_palatal_plosive.ogg/Voiced_palatal_plosive.ogg.mp3"],
  ["Voiceless velar plosive","k","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Voiceless_velar_plosive.ogg/Voiceless_velar_plosive.ogg.mp3"],
  ["Voiced velar plosive","ɡ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/12/Voiced_velar_plosive_02.ogg/Voiced_velar_plosive_02.ogg.mp3"],
  ["Voiceless uvular plosive","q","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Voiceless_uvular_plosive.ogg/Voiceless_uvular_plosive.ogg.mp3"],
  ["Voiced uvular plosive","ɢ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/Voiced_uvular_stop.oga/Voiced_uvular_stop.oga.mp3"],
  ["Epiglottal plosive","ʡ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b2/Epiglottal_stop.ogg/Epiglottal_stop.ogg.mp3"],
  ["Glottal stop","ʔ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4d/Glottal_stop.ogg/Glottal_stop.ogg.mp3"],
  ["Voiceless dental sibilant affricate","t̪s̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/Voiceless_dental_sibilant_affricate.oga/Voiceless_dental_sibilant_affricate.oga.mp3"],
  ["Voiced dental sibilant affricate","d̪z̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/16/Voiced_dental_sibilant_affricate.oga/Voiced_dental_sibilant_affricate.oga.mp3"],
  ["Voiceless alveolar affricate","ts","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9d/Voiceless_alveolar_sibilant_affricate.oga/Voiceless_alveolar_sibilant_affricate.oga.mp3"],
  ["Voiced alveolar affricate","dz","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/Voiced_alveolar_sibilant_affricate.oga/Voiced_alveolar_sibilant_affricate.oga.mp3"],
  ["Voiceless postalveolar affricate","t̠ʃ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/97/Voiceless_palato-alveolar_affricate.ogg/Voiceless_palato-alveolar_affricate.ogg.mp3"],
  ["Voiced postalveolar affricate","d̠ʒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e6/Voiced_palato-alveolar_affricate.ogg/Voiced_palato-alveolar_affricate.ogg.mp3"],
  ["Voiceless retroflex affricate","tʂ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e9/Voiceless_retroflex_affricate.ogg/Voiceless_retroflex_affricate.ogg.mp3"],
  ["Voiced retroflex affricate","dʐ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/58/Voiced_retroflex_affricate.ogg/Voiced_retroflex_affricate.ogg.mp3"],
  ["Voiceless alveolo-palatal affricate","tɕ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Voiceless_alveolo-palatal_affricate.ogg/Voiceless_alveolo-palatal_affricate.ogg.mp3"],
  ["Voiced alveolo-palatal affricate","dʑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Voiced_alveolo-palatal_affricate.ogg/Voiced_alveolo-palatal_affricate.ogg.mp3"],
  ["Voiceless dental sibilant fricative","s̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7d/Voiceless_dental_sibilant_fricative.ogg/Voiceless_dental_sibilant_fricative.ogg.mp3"],
  ["Voiceless alveolar fricative","s","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ac/Voiceless_alveolar_sibilant.ogg/Voiceless_alveolar_sibilant.ogg.mp3"],
  ["Voiced alveolar fricative","z","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Voiced_alveolar_sibilant.ogg/Voiced_alveolar_sibilant.ogg.mp3"],
  ["Voiceless postalveolar fricative","ʃ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Voiceless_palato-alveolar_sibilant.ogg/Voiceless_palato-alveolar_sibilant.ogg.mp3"],
  ["Voiced postalveolar fricative","ʒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/30/Voiced_palato-alveolar_sibilant.ogg/Voiced_palato-alveolar_sibilant.ogg.mp3"],
  ["Voiceless labiodental fricative","f","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c7/Voiceless_labio-dental_fricative.ogg/Voiceless_labio-dental_fricative.ogg.mp3"],
  ["Voiced labiodental fricative","v","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Voiced_labio-dental_fricative.ogg/Voiced_labio-dental_fricative.ogg.mp3"],
  ["Voiceless dental fricative","θ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/80/Voiceless_dental_fricative.ogg/Voiceless_dental_fricative.ogg.mp3"],
  ["Voiced dental fricative","ð","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6a/Voiced_dental_fricative.ogg/Voiced_dental_fricative.ogg.mp3"],
  ["Voiceless velar fricative","x","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Voiceless_velar_fricative.ogg/Voiceless_velar_fricative.ogg.mp3"],
  ["Voiced velar fricative","ɣ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/47/Voiced_velar_fricative.ogg/Voiced_velar_fricative.ogg.mp3"],
  ["Voiceless glottal fricative","h","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/da/Voiceless_glottal_fricative.ogg/Voiceless_glottal_fricative.ogg.mp3"],
  ["Voiced alveolar lateral approximant","l","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Alveolar_lateral_approximant.ogg/Alveolar_lateral_approximant.ogg.mp3"],
  ["Voiced alveolar tap or flap","ɾ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Alveolar_tap.ogg/Alveolar_tap.ogg.mp3"],
  ["Voiced alveolar trill","r","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Alveolar_trill.ogg/Alveolar_trill.ogg.mp3"],
  ["Voiced palatal approximant","j","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Palatal_approximant.ogg/Palatal_approximant.ogg.mp3"],
  ["Voiced labial–velar approximant","w","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Voiced_labio-velar_approximant.ogg/Voiced_labio-velar_approximant.ogg.mp3"]
];

const VOWEL_CSV_DATA = [
  ["Close front unrounded vowel","i","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/Close_front_unrounded_vowel.ogg/Close_front_unrounded_vowel.ogg.mp3"],
  ["Close front rounded vowel","y","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Close_front_rounded_vowel.ogg/Close_front_rounded_vowel.ogg.mp3"],
  ["Close central unrounded vowel","ɨ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/53/Close_central_unrounded_vowel.ogg/Close_central_unrounded_vowel.ogg.mp3"],
  ["Close central rounded vowel","ʉ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/66/Close_central_rounded_vowel.ogg/Close_central_rounded_vowel.ogg.mp3"],
  ["Close back unrounded vowel","ɯ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Close_back_unrounded_vowel.ogg/Close_back_unrounded_vowel.ogg.mp3"],
  ["Close back rounded vowel","u","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5d/Close_back_rounded_vowel.ogg/Close_back_rounded_vowel.ogg.mp3"],
  ["Near-close near-front unrounded vowel","ɪ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4c/Near-close_near-front_unrounded_vowel.ogg/Near-close_near-front_unrounded_vowel.ogg.mp3"],
  ["Near-close near-front rounded vowel","ʏ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Near-close_near-front_rounded_vowel.ogg/Near-close_near-front_rounded_vowel.ogg.mp3"],
  ["Near-close near-back rounded vowel","ʊ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d5/Near-close_near-back_rounded_vowel.ogg/Near-close_near-back_rounded_vowel.ogg.mp3"],
  ["Close-mid front unrounded vowel","e","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Close-mid_front_unrounded_vowel.ogg/Close-mid_front_unrounded_vowel.ogg.mp3"],
  ["Close-mid front rounded vowel","ø","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/53/Close-mid_front_rounded_vowel.ogg/Close-mid_front_rounded_vowel.ogg.mp3"],
  ["Close-mid central unrounded vowel","ɘ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/60/Close-mid_central_unrounded_vowel.ogg/Close-mid_central_unrounded_vowel.ogg.mp3"],
  ["Close-mid central rounded vowel","ɵ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/Close-mid_central_rounded_vowel.ogg/Close-mid_central_rounded_vowel.ogg.mp3"],
  ["Close-mid back unrounded vowel","ɤ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/26/Close-mid_back_unrounded_vowel.ogg/Close-mid_back_unrounded_vowel.ogg.mp3"],
  ["Close-mid back rounded vowel","o","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/84/Close-mid_back_rounded_vowel.ogg/Close-mid_back_rounded_vowel.ogg.mp3"],
  ["Mid central vowel","ə","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Mid-central_vowel.ogg/Mid-central_vowel.ogg.mp3"],
  ["Open-mid front unrounded vowel","ɛ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/71/Open-mid_front_unrounded_vowel.ogg/Open-mid_front_unrounded_vowel.ogg.mp3"],
  ["Open-mid front rounded vowel","œ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/Open-mid_front_rounded_vowel_%282%29.ogg/Open-mid_front_rounded_vowel_%282%29.ogg.mp3"],
  ["Open-mid central unrounded vowel","ɜ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Open-mid_central_unrounded_vowel.ogg/Open-mid_central_unrounded_vowel.ogg.mp3"],
  ["Open-mid central rounded vowel","ɞ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Open-mid_central_rounded_vowel.ogg/Open-mid_central_rounded_vowel.ogg.mp3"],
  ["Open-mid back unrounded vowel","ʌ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/80/PR-open-mid_back_unrounded_vowel2.ogg/PR-open-mid_back_unrounded_vowel2.ogg.mp3"],
  ["Open-mid back rounded vowel","ɔ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d0/PR-open-mid_back_rounded_vowel.ogg/PR-open-mid_back_rounded_vowel.ogg.mp3"],
  ["Near-open front unrounded vowel","æ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c9/Near-open_front_unrounded_vowel.ogg/Near-open_front_unrounded_vowel.ogg.mp3"],
  ["Near-open central vowel","ɐ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Near-open_central_unrounded_vowel.ogg/Near-open_central_unrounded_vowel.ogg.mp3"],
  ["Open front unrounded vowel","a","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/PR-open_front_unrounded_vowel.ogg/PR-open_front_unrounded_vowel.ogg.mp3"],
  ["Open front rounded vowel","ɶ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Open_front_rounded_vowel.ogg/Open_front_rounded_vowel.ogg.mp3"],
  ["Open central unrounded vowel","ä","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/50/Open_central_unrounded_vowel.ogg/Open_central_unrounded_vowel.ogg.mp3"],
  ["Open back unrounded vowel","ɑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e5/Open_back_unrounded_vowel.ogg/Open_back_unrounded_vowel.ogg.mp3"],
  ["Open back rounded vowel","ɒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/31/PR-open_back_rounded_vowel.ogg/PR-open_back_rounded_vowel.ogg.mp3"]
];

const CANONICAL_ID_MAP: Record<string, string> = {
  'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'ɡ': 'g', 'ʔ': 'glottal_stop',
  'm': 'm', 'n': 'n', 'ŋ': 'ng', 'ɲ': 'ny',
  'ts': 'affricate_ts', 'dz': 'affricate_dz', 't̠ʃ': 'affricate_tsh', 'd̠ʒ': 'affricate_dzh',
  'f': 'f', 'v': 'v', 'θ': 'theta', 'ð': 'eth', 's': 's', 'z': 'z', 'ʃ': 'esh', 'ʒ': 'ezh', 'x': 'x', 'ɣ': 'gh', 'h': 'h',
  'l': 'l', 'ɾ': 'r_tap', 'r': 'r_trill', 'j': 'j', 'w': 'w',
  'i': 'i', 'y': 'y', 'e': 'e', 'ɛ': 'epsilon', 'æ': 'ash', 'a': 'a', 'ə': 'schwa', 'u': 'u', 'o': 'o', 'ɔ': 'open_o', 'ɑ': 'script_a', 'ɒ': 'turned_script_a',
  'ʘ': 'click_bilabial', 'ǀ': 'click_dental', 'ɓ': 'implosive_voiced_bilabial', 'p\'': 'ejective_p'
};

// Educational Maps for Examples, Related Symbols, and Common Confusions
const EXAMPLE_WORDS_MAP: Record<string, Array<{ word: string; language: string; languageCode: string; transcription: string; meaning: string; audioUrl?: string }>> = {
  'p': [{ word: 'pen', language: 'English', languageCode: 'en', transcription: '/pɛn/', meaning: 'writing instrument' }, { word: 'パン', language: 'Japanese', languageCode: 'ja', transcription: '/paɴ/', meaning: 'bread' }, { word: 'apa', language: 'Hungarian', languageCode: 'hu', transcription: '/ɒpɒ/', meaning: 'father' }],
  'b': [{ word: 'bed', language: 'English', languageCode: 'en', transcription: '/bɛd/', meaning: 'furniture for sleep' }, { word: 'バス', language: 'Japanese', languageCode: 'ja', transcription: '/basu/', meaning: 'bus' }, { word: 'bor', language: 'Hungarian', languageCode: 'hu', transcription: '/bor/', meaning: 'wine' }],
  't': [{ word: 'top', language: 'English', languageCode: 'en', transcription: '/tɑp/', meaning: 'highest point' }, { word: 'tam', language: 'Hungarian', languageCode: 'hu', transcription: '/tɒm/', meaning: 'there' }],
  'd': [{ word: 'dog', language: 'English', languageCode: 'en', transcription: '/dɔɡ/', meaning: 'canine animal' }, { word: 'díj', language: 'Hungarian', languageCode: 'hu', transcription: '/diːj/', meaning: 'prize' }],
  'k': [{ word: 'cat', language: 'English', languageCode: 'en', transcription: '/kæt/', meaning: 'feline animal' }, { word: 'kép', language: 'Hungarian', languageCode: 'hu', transcription: '/keːp/', meaning: 'picture' }],
  'g': [{ word: 'go', language: 'English', languageCode: 'en', transcription: '/ɡoʊ/', meaning: 'move forward' }, { word: 'golyó', language: 'Hungarian', languageCode: 'hu', transcription: '/ɡojoː/', meaning: 'sphere/ball' }],
  'm': [{ word: 'man', language: 'English', languageCode: 'en', transcription: '/mæn/', meaning: 'adult male human' }, { word: 'ma', language: 'Hungarian', languageCode: 'hu', transcription: '/mɒ/', meaning: 'today' }],
  'n': [{ word: 'net', language: 'English', languageCode: 'en', transcription: '/nɛt/', meaning: 'mesh fabric' }, { word: 'nap', language: 'Hungarian', languageCode: 'hu', transcription: '/nɒp/', meaning: 'sun / day' }],
  'ng': [{ word: 'sing', language: 'English', languageCode: 'en', transcription: '/sɪŋ/', meaning: 'vocalize music' }],
  'ny': [{ word: 'nyár', language: 'Hungarian', languageCode: 'hu', transcription: '/ɲaːr/', meaning: 'summer' }],
  'f': [{ word: 'fish', language: 'English', languageCode: 'en', transcription: '/fɪʃ/', meaning: 'aquatic animal' }, { word: 'fa', language: 'Hungarian', languageCode: 'hu', transcription: '/fɒ/', meaning: 'tree / wood' }],
  'v': [{ word: 'van', language: 'English', languageCode: 'en', transcription: '/væn/', meaning: 'motor vehicle' }, { word: 'víz', language: 'Hungarian', languageCode: 'hu', transcription: '/viːz/', meaning: 'water' }],
  's': [{ word: 'sun', language: 'English', languageCode: 'en', transcription: '/sʌn/', meaning: 'solar star' }],
  'z': [{ word: 'zoo', language: 'English', languageCode: 'en', transcription: '/zuː/', meaning: 'animal park' }],
  'esh': [{ word: 'shoe', language: 'English', languageCode: 'en', transcription: '/ʃuː/', meaning: 'footwear' }, { word: 'só', language: 'Hungarian', languageCode: 'hu', transcription: '/ʃoː/', meaning: 'salt' }],
  'ezh': [{ word: 'measure', language: 'English', languageCode: 'en', transcription: '/ˈmɛʒər/', meaning: 'assess size' }],
  'theta': [{ word: 'think', language: 'English', languageCode: 'en', transcription: '/θɪŋk/', meaning: 'cogitate' }],
  'eth': [{ word: 'this', language: 'English', languageCode: 'en', transcription: '/ðɪs/', meaning: 'pronoun near' }],
  'x': [{ word: 'Bach', language: 'German', languageCode: 'de', transcription: '/baχ/', meaning: 'stream / surname' }, { word: 'lough', language: 'Gaelic', languageCode: 'gd', transcription: '/lɔx/', meaning: 'lake' }],
  'i': [{ word: 'see', language: 'English', languageCode: 'en', transcription: '/siː/', meaning: 'perceive with eyes' }, { word: 'így', language: 'Hungarian', languageCode: 'hu', transcription: '/iːɟ/', meaning: 'this way' }],
  'u': [{ word: 'too', language: 'English', languageCode: 'en', transcription: '/tuː/', meaning: 'also / excessively' }, { word: 'úgy', language: 'Hungarian', languageCode: 'hu', transcription: '/uːɟ/', meaning: 'that way' }],
  'a': [{ word: 'father', language: 'English', languageCode: 'en', transcription: '/ˈfɑːðər/', meaning: 'male parent' }],
  'e': [{ word: 'bed', language: 'English', languageCode: 'en', transcription: '/bɛd/', meaning: 'furniture for sleep' }],
  'o': [{ word: 'go', language: 'English', languageCode: 'en', transcription: '/ɡoʊ/', meaning: 'move forward' }]
};

const RELATED_SYMBOLS_MAP: Record<string, string[]> = {
  'p': ['b', 't', 'k', 'm'],
  'b': ['p', 'd', 'g', 'm'],
  't': ['d', 's', 'p', 'k'],
  'd': ['t', 'z', 'b', 'g'],
  'k': ['g', 'p', 't', 'x'],
  'g': ['k', 'b', 'd', 'gh'],
  's': ['z', 'esh', 'theta'],
  'z': ['s', 'ezh', 'eth'],
  'esh': ['ezh', 's', 'tsh'],
  'ezh': ['esh', 'z', 'dzh'],
  'theta': ['eth', 's', 'f'],
  'eth': ['theta', 'z', 'v'],
  'i': ['e', 'y', 'schwa'],
  'u': ['o', 'open_o', 'schwa'],
  'a': ['ash', 'script_a', 'epsilon']
};

const CONFUSIONS_MAP: Record<string, Array<{ symbolId: string; reason: { en: string; ja: string; hu: string } }>> = {
  'theta': [{ symbolId: 's', reason: { en: 'Th-fronting: confusing dental /θ/ with alveolar /s/.', ja: '歯摩擦音 /θ/ と 歯茎摩擦音 /s/ の混同。', hu: 'Dentális /θ/ és alveoláris /s/ összetévesztése.' } }],
  'eth': [{ symbolId: 'v', reason: { en: 'Replacing dental /ð/ with labiodental /v/.', ja: '歯摩擦音 /ð/ と 唇歯摩擦音 /v/ の混同。', hu: 'Dentális /ð/ cseréje labiodentális /v/-re.' } }],
  'esh': [{ symbolId: 's', reason: { en: 'Replacing postalveolar /ʃ/ with alveolar /s/.', ja: '後歯茎摩擦音 /ʃ/ と 歯茎摩擦音 /s/ の混同。', hu: 'Posztalveoláris /ʃ/ és alveoláris /s/ összetévesztése.' } }],
  'ezh': [{ symbolId: 'z', reason: { en: 'Confusing voiced postalveolar /ʒ/ with alveolar /z/.', ja: '有声後歯茎摩擦音 /ʒ/ と 歯茎摩擦音 /z/ の混同。', hu: 'Zöngés posztalveoláris /ʒ/ és alveoláris /z/ összetévesztése.' } }],
  'ng': [{ symbolId: 'n', reason: { en: 'Failing to retract the tongue to the velum for /ŋ/.', ja: '軟口蓋音 /ŋ/ の調音位置不足。', hu: 'A nyelv hátrahúzásának hiánya a veláris /ŋ/-nél.' } }],
  'i': [{ symbolId: 'I', reason: { en: 'Confusing tense /i/ with lax /ɪ/.', ja: '緊張音 /i/ と 弛緩音 /ɪ/ の混同。', hu: 'Feszített /i/ és laza /ɪ/ összetévesztése.' } }],
  'u': [{ symbolId: 'U', reason: { en: 'Confusing tense /u/ with lax /ʊ/.', ja: '緊張音 /u/ と 弛緩音 /ʊ/ の混同。', hu: 'Feszített /u/ és laza /ʊ/ összetévesztése.' } }]
};


function helperInferPlace(name: string): PlaceOfArticulation | undefined {
  const n = name.toLowerCase();
  if (n.includes('bilabial')) return 'bilabial';
  if (n.includes('labiodental')) return 'labiodental';
  if (n.includes('dental')) return 'dental';
  if (n.includes('postalveolar')) return 'postalveolar';
  if (n.includes('alveolar')) return 'alveolar';
  if (n.includes('retroflex')) return 'retroflex';
  if (n.includes('palatal')) return 'palatal';
  if (n.includes('velar')) return 'velar';
  if (n.includes('uvular')) return 'uvular';
  if (n.includes('pharyngeal')) return 'pharyngeal';
  if (n.includes('glottal')) return 'glottal';
  if (n.includes('epiglottal')) return 'epiglottal';
  return undefined;
}

function helperInferManner(name: string): MannerOfArticulation | undefined {
  const n = name.toLowerCase();
  if (n.includes('affricate')) return 'affricate';
  if (n.includes('plosive') || n.includes('stop')) return 'plosive';
  if (n.includes('nasal')) return 'nasal';
  if (n.includes('trill')) return 'trill';
  if (n.includes('tap') || n.includes('flap')) return 'tap-flap';
  if (n.includes('lateral fricative')) return 'lateral-fricative';
  if (n.includes('fricative')) return 'fricative';
  if (n.includes('lateral approximant')) return 'lateral-approximant';
  if (n.includes('approximant')) return 'approximant';
  return undefined;
}

function helperInferVoicing(name: string): Voicing | undefined {
  const n = name.toLowerCase();
  if (n.startsWith('voiced')) return 'voiced';
  if (n.startsWith('voiceless')) return 'voiceless';
  return undefined;
}

function helperInferVowelHeight(name: string): VowelHeight | undefined {
  const n = name.toLowerCase();
  if (n.includes('close-mid')) return 'close-mid';
  if (n.includes('open-mid')) return 'open-mid';
  if (n.includes('near-close')) return 'near-close';
  if (n.includes('near-open')) return 'near-open';
  if (n.includes('close')) return 'close';
  if (n.includes('open')) return 'open';
  if (n.includes('mid')) return 'mid';
  return undefined;
}

function helperInferVowelBackness(name: string): VowelBackness | undefined {
  const n = name.toLowerCase();
  if (n.includes('near-front')) return 'near-front';
  if (n.includes('near-back')) return 'near-back';
  if (n.includes('front')) return 'front';
  if (n.includes('central')) return 'central';
  if (n.includes('back')) return 'back';
  return undefined;
}

function helperInferRoundness(name: string): Roundness | undefined {
  const n = name.toLowerCase();
  if (n.includes('unrounded')) return 'unrounded';
  if (n.includes('rounded')) return 'rounded';
  return undefined;
}

function buildTrilingualNames(nameEn: string, place?: string, manner?: string, voicing?: string) {
  const voicingJa = voicing === 'voiced' ? '有声' : voicing === 'voiceless' ? '無声' : '';
  const voicingHu = voicing === 'voiced' ? 'Zöngés' : voicing === 'voiceless' ? 'Zöngétlen' : '';

  const placeJa = place ? JA_PLACE[place] || place : '';
  const placeHu = place ? HU_PLACE[place] || place : '';

  const mannerJa = manner ? JA_MANNER[manner] || manner : '';
  const mannerHu = manner ? HU_MANNER[manner] || manner : '';

  const ja = `${voicingJa}${placeJa}${mannerJa}`.trim() || nameEn;
  const hu = `${voicingHu} ${placeHu} ${mannerHu}`.trim() || nameEn;

  return { ja, hu };
}

const parsedConsonants: IPASymbol[] = CONSONANT_CSV_DATA.map((row, idx) => {
  const [nameEnglish, symbol, audioUrl] = row; void audioUrl;
  const canonicalId = CANONICAL_ID_MAP[symbol] || `consonant_${idx}_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;

  const voicing = helperInferVoicing(nameEnglish);
  const place = helperInferPlace(nameEnglish);
  const manner = helperInferManner(nameEnglish);
  const trilingual = buildTrilingualNames(nameEnglish, place, manner, voicing);

  return {
    id: canonicalId,
    symbol,
    unicode: `U+${symbol.codePointAt(0)?.toString(16).padStart(4, '0').toUpperCase()}`,
    nameEnglish,
    nameJapanese: trilingual.ja,
    nameHungarian: trilingual.hu,
    category: 'pulmonic',
    voicing,
    placeOfArticulation: place,
    mannerOfArticulation: manner,
    description: { en: nameEnglish, ja: trilingual.ja, hu: trilingual.hu },
    articulatoryGuide: {
      en: `Articulatory position for ${nameEnglish}: place ${place || 'unspecified'}, manner ${manner || 'unspecified'}.`,
      ja: `${trilingual.ja} の調音位置。`,
      hu: `${trilingual.hu} képzése.`,
    },
    exampleWords: EXAMPLE_WORDS_MAP[canonicalId] || [],
    relatedSymbols: RELATED_SYMBOLS_MAP[canonicalId] || [],
    commonConfusions: CONFUSIONS_MAP[canonicalId] || [],
    difficulty: idx < 30 ? 'beginner' : idx < 80 ? 'intermediate' : 'advanced',
    lessonOrder: idx + 1,
    isCore: idx < 40,
  };
});

const parsedVowels: IPASymbol[] = VOWEL_CSV_DATA.map((row, idx) => {
  const [nameEnglish, symbol, audioUrl] = row; void audioUrl;
  const canonicalId = CANONICAL_ID_MAP[symbol] || `vowel_${idx}_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;

  const vHeight = helperInferVowelHeight(nameEnglish);
  const vBackness = helperInferVowelBackness(nameEnglish);
  const vRound = helperInferRoundness(nameEnglish);

  const nameJa = `${vHeight ? JA_HEIGHT[vHeight] || '' : ''}${vBackness ? JA_BACKNESS[vBackness] || '' : ''}${vRound ? JA_ROUND[vRound] || '' : ''}` || nameEnglish;
  const nameHu = `${vHeight ? HU_HEIGHT[vHeight] || '' : ''} ${vBackness ? HU_BACKNESS[vBackness] || '' : ''} ${vRound ? HU_ROUND[vRound] || '' : ''}`.trim() || nameEnglish;

  return {
    id: canonicalId,
    symbol,
    unicode: `U+${symbol.codePointAt(0)?.toString(16).padStart(4, '0').toUpperCase()}`,
    nameEnglish,
    nameJapanese: nameJa,
    nameHungarian: nameHu,
    category: 'vowels',
    vowelHeight: vHeight,
    vowelBackness: vBackness,
    roundness: vRound,
    description: { en: nameEnglish, ja: nameJa, hu: nameHu },
    articulatoryGuide: {
      en: `Vowel position for ${nameEnglish}: height ${vHeight || 'unspecified'}, backness ${vBackness || 'unspecified'}.`,
      ja: `${nameJa} の発音方法。`,
      hu: `${nameHu} képzése.`,
    },
    exampleWords: EXAMPLE_WORDS_MAP[canonicalId] || [],
    relatedSymbols: RELATED_SYMBOLS_MAP[canonicalId] || [],
    commonConfusions: CONFUSIONS_MAP[canonicalId] || [],
    difficulty: 'intermediate',
    lessonOrder: 200 + idx,
    isCore: true,
  };
});

const rawAll = [...parsedConsonants, ...parsedVowels];
const uniqueMap = new Map<string, IPASymbol>();

for (const sym of rawAll) {
  if (!uniqueMap.has(sym.id)) {
    uniqueMap.set(sym.id, sym);
  }
}

export const IPA_SYMBOLS: IPASymbol[] = Array.from(uniqueMap.values());
