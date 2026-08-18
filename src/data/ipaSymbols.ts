import type { IPASymbol } from '../types/ipa';

export const IPA_SYMBOLS: IPASymbol[] = [
  // ==========================================
  // PULMONIC CONSONANTS: PLOSIVES
  // ==========================================
  {
    id: 'p',
    symbol: 'p',
    unicode: 'U+0070',
    nameEnglish: 'Voiceless bilabial plosive',
    nameJapanese: '無声両唇破裂音',
    nameHungarian: 'Zöngétlen bilabiális okkluzíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'bilabial',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiceless bilabial plosive sound produced by blocking airflow with both lips and releasing it.',
      ja: '両唇を閉じて息を止め、それを開放することによって発声される無声破裂音。',
      hu: 'Zöngétlen bilabiális zárhang, amelyet a két ajak összezárásával és hirtelen felnyitásával képezünk.'
    },
    articulatoryGuide: {
      en: 'Press both lips together firmly to stop airflow from the lungs, then open them briskly without vibrating your vocal cords.',
      ja: '両唇をしっかり閉じ、声帯を振動させずに息を止めてから、一気に唇を開きます。',
      hu: 'Szorítsd össze a két ajkadat, majd a hangszalagok rezgetése nélkül hirtelen engedd ki a levegőt.'
    },
    exampleWords: [
      { word: 'pen', language: 'English', languageCode: 'en', transcription: '/pɛn/', meaning: 'Writing instrument', targetSoundIndex: 0 },
      { word: 'パン', language: 'Japanese', languageCode: 'ja', transcription: '/paɴ/', meaning: 'Bread', targetSoundIndex: 0 },
      { word: 'apa', language: 'Hungarian', languageCode: 'hu', transcription: '/ɒpɒ/', meaning: 'Father', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/5/51/Voiceless_bilabial_plosive.ogg/Voiceless_bilabial_plosive.ogg.mp3',
    relatedSymbols: ['b', 'm', 'p\''],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 1,
    isCore: true
  },
  {
    id: 'b',
    symbol: 'b',
    unicode: 'U+0062',
    nameEnglish: 'Voiced bilabial plosive',
    nameJapanese: '有声両唇破裂音',
    nameHungarian: 'Zöngés bilabiális okkluzíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'bilabial',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiced bilabial plosive produced by stopping airflow with both lips while vibrating vocal cords.',
      ja: '声帯を振動させながら両唇で息を止め、急に開放する音。',
      hu: 'Zöngés bilabiális zárhang.'
    },
    articulatoryGuide: {
      en: 'Close both lips, build up air pressure while vibrating your vocal cords, and release.',
      ja: '両唇を閉じ、声帯を震わせながら息を蓄え、一気に放ちます。',
      hu: 'Zárd össze az ajkaidat, rezgesd a hangszalagjaidat, majd engedd ki a levegőt.'
    },
    exampleWords: [
      { word: 'bad', language: 'English', languageCode: 'en', transcription: '/bæd/', meaning: 'Not good', targetSoundIndex: 0 },
      { word: '豚', language: 'Japanese', languageCode: 'ja', transcription: '/buta/', meaning: 'Pig', targetSoundIndex: 0 },
      { word: 'bab', language: 'Hungarian', languageCode: 'hu', transcription: '/bɒb/', meaning: 'Bean', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Voiced_bilabial_plosive.ogg/Voiced_bilabial_plosive.ogg.mp3',
    relatedSymbols: ['p', 'm', 'ɓ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 2,
    isCore: true
  },
  {
    id: 't',
    symbol: 't',
    unicode: 'U+0074',
    nameEnglish: 'Voiceless alveolar plosive',
    nameJapanese: '無声歯茎破裂音',
    nameHungarian: 'Zöngétlen alveoláris okkluzíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiceless plosive produced with the tongue tip against the alveolar ridge.',
      ja: '舌尖を歯茎にくっつけて息を止め、離すことで発声される無声破裂音。',
      hu: 'Zöngétlen fogmedri zárhang.'
    },
    articulatoryGuide: {
      en: 'Touch the tip of your tongue to the ridge behind your upper teeth, build pressure, and release without voice.',
      ja: '舌先を上の歯茎につけ、息を止めてから一気に離します。声帯は震わせません。',
      hu: 'Érintsd a nyelved hegyét a felső fogmederhez, majd engedd ki a levegőt zöngétlenül.'
    },
    exampleWords: [
      { word: 'top', language: 'English', languageCode: 'en', transcription: '/tɒp/', meaning: 'Highest point', targetSoundIndex: 0 },
      { word: '鳥', language: 'Japanese', languageCode: 'ja', transcription: '/tori/', meaning: 'Bird', targetSoundIndex: 0 },
      { word: 'tó', language: 'Hungarian', languageCode: 'hu', transcription: '/toː/', meaning: 'Lake', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/02/Voiceless_alveolar_plosive.ogg/Voiceless_alveolar_plosive.ogg.mp3',
    relatedSymbols: ['d', 'n', 'ʈ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 3,
    isCore: true
  },
  {
    id: 'd',
    symbol: 'd',
    unicode: 'U+0064',
    nameEnglish: 'Voiced alveolar plosive',
    nameJapanese: '有声歯茎破裂音',
    nameHungarian: 'Zöngés alveoláris okkluzíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiced plosive made with the tongue tip against the alveolar ridge.',
      ja: '声帯を振動させながら、舌尖を歯茎にくっつけて一気に離す音。',
      hu: 'Zöngés fogmedri zárhang.'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against upper alveolar ridge, vibrate vocal cords, and release the block.',
      ja: '舌先を上の歯茎につけ、声帯を振るわせながら開放します。',
      hu: 'Helyezd a nyelvhegyet a felső fogmederhez, rezgesd a hangszalagokat és engedd el.'
    },
    exampleWords: [
      { word: 'dog', language: 'English', languageCode: 'en', transcription: '/dɒɡ/', meaning: 'Canine animal', targetSoundIndex: 0 },
      { word: 'ドア', language: 'Japanese', languageCode: 'ja', transcription: '/doa/', meaning: 'Door', targetSoundIndex: 0 },
      { word: 'dió', language: 'Hungarian', languageCode: 'hu', transcription: '/dioː/', meaning: 'Walnut', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Voiced_alveolar_plosive.ogg/Voiced_alveolar_plosive.ogg.mp3',
    relatedSymbols: ['t', 'n', 'ɖ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 4,
    isCore: true
  },
  {
    id: 'k',
    symbol: 'k',
    unicode: 'U+006B',
    nameEnglish: 'Voiceless velar plosive',
    nameJapanese: '無声軟口蓋破裂音',
    nameHungarian: 'Zöngétlen veláris okkluzíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiceless plosive produced with the back of the tongue against the soft palate.',
      ja: '舌の奥を軟口蓋に押し当てて息を止め、急に開放する無声破裂音。',
      hu: 'Zöngétlen ínyvitorlai zárhang.'
    },
    articulatoryGuide: {
      en: 'Raise the back of your tongue to touch your soft palate, block air, then pop it open without voice.',
      ja: '舌の奥を軟口蓋につけて息を止め、破裂させるように離します。',
      hu: 'Emeld fel a nyelved hátulját a lágy szájpadláshoz, állítsd meg a levegőt, majd pattintsd ki.'
    },
    exampleWords: [
      { word: 'cat', language: 'English', languageCode: 'en', transcription: '/kæt/', meaning: 'Feline animal', targetSoundIndex: 0 },
      { word: '傘', language: 'Japanese', languageCode: 'ja', transcription: '/kasa/', meaning: 'Umbrella', targetSoundIndex: 0 },
      { word: 'kék', language: 'Hungarian', languageCode: 'hu', transcription: '/keːk/', meaning: 'Blue', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Voiceless_velar_plosive.ogg/Voiceless_velar_plosive.ogg.mp3',
    relatedSymbols: ['g', 'ŋ', 'c'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 5,
    isCore: true
  },
  {
    id: 'g',
    symbol: 'ɡ',
    unicode: 'U+0261',
    nameEnglish: 'Voiced velar plosive',
    nameJapanese: '有声軟口蓋破裂音',
    nameHungarian: 'Zöngés veláris okkluzíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A voiced plosive produced with the back of the tongue against the soft palate.',
      ja: '声帯を振動させ、舌の奥を軟口蓋に当てて開放する有声破裂音。',
      hu: 'Zöngés ínyvitorlai zárhang.'
    },
    articulatoryGuide: {
      en: 'Touch the back of your tongue to your soft palate while humming/vibrating vocal cords, then release.',
      ja: '声帯を震わせながら舌奥を軟口蓋に押し当て、急に離します。',
      hu: 'Érintsd a nyelv hátsó részét a lágy szájpadláshoz, rezgesd a hangszalagokat, majd engedd el.'
    },
    exampleWords: [
      { word: 'go', language: 'English', languageCode: 'en', transcription: '/ɡoʊ/', meaning: 'Move forward', targetSoundIndex: 0 },
      { word: '外国', language: 'Japanese', languageCode: 'ja', transcription: '/ɡaikoku/', meaning: 'Foreign country', targetSoundIndex: 0 },
      { word: 'gomb', language: 'Hungarian', languageCode: 'hu', transcription: '/ɡomb/', meaning: 'Button', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/12/Voiced_velar_plosive_02.ogg/Voiced_velar_plosive_02.ogg.mp3',
    relatedSymbols: ['k', 'ŋ', 'ɟ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 6,
    isCore: true
  },
  {
    id: 'glottal_stop',
    symbol: 'ʔ',
    unicode: 'U+0294',
    nameEnglish: 'Glottal stop',
    nameJapanese: '声門閉鎖音',
    nameHungarian: 'Gégezárhang',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'glottal',
    mannerOfArticulation: 'plosive',
    description: {
      en: 'A stop sound made by momentarily closing the vocal folds (glottis), as in "uh-oh".',
      ja: '声帯（声門）をしっかり閉じて息を止め、急に開放する音。',
      hu: 'A hangszalagok pillanatnyi zárásával képzett gégezárhang.'
    },
    articulatoryGuide: {
      en: 'Tighten your vocal cords to hold your breath inside your throat, then release sharply.',
      ja: '喉奥をクッと締めて息を止め、ハッと解放します。',
      hu: 'Zárd el a levegőt a torkodban, majd hirtelen engedd ki.'
    },
    exampleWords: [
      { word: 'uh-oh', language: 'English', languageCode: 'en', transcription: '/ˈʌʔ.oʊ/', meaning: 'Exclamation of error', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4d/Glottal_stop.ogg/Glottal_stop.ogg.mp3',
    relatedSymbols: ['h', 'k', 'p'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 7,
    isCore: true
  },

  // ==========================================
  // PULMONIC CONSONANTS: NASALS
  // ==========================================
  {
    id: 'm',
    symbol: 'm',
    unicode: 'U+006D',
    nameEnglish: 'Voiced bilabial nasal',
    nameJapanese: '有声両唇鼻音',
    nameHungarian: 'Zöngés bilabiális nazális',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'bilabial',
    mannerOfArticulation: 'nasal',
    description: {
      en: 'A voiced nasal made with closed lips while air flows through the nose.',
      ja: '両唇を閉じ、息を鼻に逃がしながら声帯を振動させる鼻音。',
      hu: 'Zöngés bilabiális orrhang.'
    },
    articulatoryGuide: {
      en: 'Close both lips, lower your velum so air exits through the nose, and hum with voice.',
      ja: '両唇を閉じ、鼻から息を出しながら「ムー」と声を出します。',
      hu: 'Zárd össze az ajkaidat, engedd le a lágy szájpadlást, hogy a levegő az orrodon át távozzon.'
    },
    exampleWords: [
      { word: 'man', language: 'English', languageCode: 'en', transcription: '/mæn/', meaning: 'Adult male', targetSoundIndex: 0 },
      { word: '水', language: 'Japanese', languageCode: 'ja', transcription: '/mizu/', meaning: 'Water', targetSoundIndex: 0 },
      { word: 'már', language: 'Hungarian', languageCode: 'hu', transcription: '/maːr/', meaning: 'Already', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a9/Bilabial_nasal.ogg/Bilabial_nasal.ogg.mp3',
    relatedSymbols: ['p', 'b', 'ɱ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 8,
    isCore: true
  },
  {
    id: 'n',
    symbol: 'n',
    unicode: 'U+006E',
    nameEnglish: 'Voiced alveolar nasal',
    nameJapanese: '有声歯茎鼻音',
    nameHungarian: 'Zöngés alveoláris nazális',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'nasal',
    description: {
      en: 'A voiced nasal produced with tongue against alveolar ridge while air escapes through the nose.',
      ja: '舌先を歯茎につけ、鼻から息を通しながら声を出す有声鼻音。',
      hu: 'Zöngés fogmedri orrhang.'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against alveolar ridge, lower velum to direct air through nose, and hum.',
      ja: '舌先を上の歯茎につけ、口を閉じ気味にして鼻から声を出します。',
      hu: 'Tedd a nyelvhegyedet a fogmederhez, és engedd a levegőt az orron át kiáramolni.'
    },
    exampleWords: [
      { word: 'no', language: 'English', languageCode: 'en', transcription: '/noʊ/', meaning: 'Negation', targetSoundIndex: 0 },
      { word: '猫', language: 'Japanese', languageCode: 'ja', transcription: '/neko/', meaning: 'Cat', targetSoundIndex: 0 },
      { word: 'nap', language: 'Hungarian', languageCode: 'hu', transcription: '/nɒp/', meaning: 'Sun/Day', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Alveolar_nasal.ogg/Alveolar_nasal.ogg.mp3',
    relatedSymbols: ['m', 'ŋ', 'ɲ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 9,
    isCore: true
  },
  {
    id: 'ng',
    symbol: 'ŋ',
    unicode: 'U+014B',
    nameEnglish: 'Voiced velar nasal',
    nameJapanese: '有声軟口蓋鼻音',
    nameHungarian: 'Zöngés veláris nazális',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'nasal',
    description: {
      en: 'A voiced nasal produced with the back of tongue against soft palate while air flows through nose.',
      ja: '舌の奥を軟口蓋につけ、息を鼻から抜いて出す音（-ngの音）。',
      hu: 'Zöngés veláris orrhang.'
    },
    articulatoryGuide: {
      en: 'Place back of tongue against soft palate, lower velum to allow nasal airflow with voice.',
      ja: '舌奥を軟口蓋につけたまま、息を鼻から抜いて「ンー」と鳴らします。',
      hu: 'Tartsd a nyelv hátsó részét a lágy szájpadlásnál, engedd ki a levegőt az orron át.'
    },
    exampleWords: [
      { word: 'sing', language: 'English', languageCode: 'en', transcription: '/sɪŋ/', meaning: 'Vocalize music', targetSoundIndex: 3 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/39/Velar_nasal.ogg/Velar_nasal.ogg.mp3',
    relatedSymbols: ['n', 'ɲ', 'g'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 10,
    isCore: true
  },
  {
    id: 'ny',
    symbol: 'ɲ',
    unicode: 'U+0272',
    nameEnglish: 'Voiced palatal nasal',
    nameJapanese: '有声硬口蓋鼻音',
    nameHungarian: 'Zöngés palatális nazális',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'palatal',
    mannerOfArticulation: 'nasal',
    description: {
      en: 'A voiced palatal nasal produced with tongue blade pressed against hard palate.',
      ja: '舌面を硬口蓋に広く押し当てて出す鼻音（ハンガリー語のny）。',
      hu: 'Zöngés palatális orrhang (a magyar ny hang).'
    },
    articulatoryGuide: {
      en: 'Press the flat middle body of your tongue against the roof of your mouth while producing a nasal tone.',
      ja: '舌の表面を口の天井に広く押し当て、鼻から音を出します。',
      hu: 'Nyomd a nyelvtestet a kemény szájpadláshoz, miközben a levegő az orrodon át távozik.'
    },
    exampleWords: [
      { word: 'nyár', language: 'Hungarian', languageCode: 'hu', transcription: '/ɲaːr/', meaning: 'Summer', targetSoundIndex: 0 },
      { word: 'señor', language: 'Spanish', languageCode: 'es', transcription: '/seˈɲor/', meaning: 'Sir/Mr.', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/46/Palatal_nasal.ogg/Palatal_nasal.ogg.mp3',
    relatedSymbols: ['n', 'ŋ', 'j'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 11,
    isCore: true
  },

  // ==========================================
  // PULMONIC CONSONANTS: AFFRICATES
  // ==========================================
  {
    id: 'affricate_ts',
    symbol: 'ts',
    unicode: 'U+0074 U+0073',
    nameEnglish: 'Voiceless alveolar affricate',
    nameJapanese: '無声歯茎破擦音',
    nameHungarian: 'Zöngétlen alveoláris affrikáta (magyar c)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'affricate',
    description: {
      en: 'A voiceless affricate starting with an alveolar stop /t/ and releasing into fricative /s/ (magyar "c").',
      ja: '「t」の破裂から「s」の摩擦へ瞬時に移行する無声破擦音（日本語の「ツ」の頭音）。',
      hu: 'A t zárhangból és s (sz) réshangból álló zöngétlen affrikáta (a magyar c).'
    },
    articulatoryGuide: {
      en: 'Stop air at alveolar ridge with tongue tip, then release slightly to create a sharp "ts" friction.',
      ja: '舌先を歯茎につけて息を止め、一瞬で狭い隙間を開けて「ツ」と吹きます。',
      hu: 'Állítsd meg a levegőt a fogmedernél, majd engedd át keskeny résen a "c" hang képzéséhez.'
    },
    exampleWords: [
      { word: 'cats', language: 'English', languageCode: 'en', transcription: '/kæts/', meaning: 'Plural cats', targetSoundIndex: 3 },
      { word: 'cica', language: 'Hungarian', languageCode: 'hu', transcription: '/tsit͡sɒ/', meaning: 'Kitty', targetSoundIndex: 0 },
      { word: '机', language: 'Japanese', languageCode: 'ja', transcription: '/tsɯkɯe/', meaning: 'Desk', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9d/Voiceless_alveolar_sibilant_affricate.oga/Voiceless_alveolar_sibilant_affricate.oga.mp3',
    relatedSymbols: ['t', 's', 'dz'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 12,
    isCore: true
  },
  {
    id: 'affricate_dz',
    symbol: 'dz',
    unicode: 'U+0064 U+007A',
    nameEnglish: 'Voiced alveolar affricate',
    nameJapanese: '有声歯茎破擦音',
    nameHungarian: 'Zöngés alveoláris affrikáta (magyar dz)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'affricate',
    description: {
      en: 'A voiced affricate combining alveolar stop /d/ and fricative /z/ (magyar "dz").',
      ja: '「d」の破裂から「z」の摩擦へ有声のまま移行する音。',
      hu: 'A d zárhangból és z réshangból álló zöngés affrikáta (a magyar dz).'
    },
    articulatoryGuide: {
      en: 'Hold tongue tip at alveolar ridge with vocal cord vibration, release into a buzzing "dz".',
      ja: '声帯を振るわせながら舌先を歯茎につけ、瞬時に「ズ」の摩擦へ解き放ちます。',
      hu: 'Rezgesd a hangszalagjaidat, állítsd meg a levegőt, majd engedd el "dz" hangként.'
    },
    exampleWords: [
      { word: 'edző', language: 'Hungarian', languageCode: 'hu', transcription: '/ɛdzoː/', meaning: 'Coach', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/Voiced_alveolar_sibilant_affricate.oga/Voiced_alveolar_sibilant_affricate.oga.mp3',
    relatedSymbols: ['ts', 'd', 'z'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 13,
    isCore: true
  },
  {
    id: 'affricate_tsh',
    symbol: 't̠ʃ',
    unicode: 'U+0074 U+0283',
    nameEnglish: 'Voiceless postalveolar affricate',
    nameJapanese: '無声後歯茎破擦音',
    nameHungarian: 'Zöngétlen posztalveoláris affrikáta (magyar cs)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'affricate',
    description: {
      en: 'A voiceless affricate starting behind alveolar ridge and releasing into /ʃ/ ("ch" in "chair", magyar "cs").',
      ja: '「t」から「ʃ（シュ）」へつなげる無声破擦音（日本語の「チ」の頭音、英語のch）。',
      hu: 'A t zárhangból és ʃ (s) réshangból álló zöngétlen affrikáta (a magyar cs).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip behind tooth ridge, block air, release into a soft "ch" friction without voicing.',
      ja: '歯茎の後ろで息を止め、唇を軽く丸めて一気に「チ」と吐き出します。',
      hu: 'Tedd a nyelved a fogmeder mögé, zárd el a levegőt, majd fújd ki "cs" hangként.'
    },
    exampleWords: [
      { word: 'chair', language: 'English', languageCode: 'en', transcription: '/tʃɛər/', meaning: 'Seat', targetSoundIndex: 0 },
      { word: 'család', language: 'Hungarian', languageCode: 'hu', transcription: '/tʃɒlaːd/', meaning: 'Family', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/97/Voiceless_palato-alveolar_affricate.ogg/Voiceless_palato-alveolar_affricate.ogg.mp3',
    relatedSymbols: ['esh', 'd̠ʒ', 'ts'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 14,
    isCore: true
  },
  {
    id: 'affricate_dzh',
    symbol: 'd̠ʒ',
    unicode: 'U+0064 U+0292',
    nameEnglish: 'Voiced postalveolar affricate',
    nameJapanese: '有声後歯茎破擦音',
    nameHungarian: 'Zöngés posztalveoláris affrikáta (magyar dzs)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'affricate',
    description: {
      en: 'A voiced affricate starting behind alveolar ridge and releasing into /ʒ/ ("j" in "jump", magyar "dzs").',
      ja: '有声のまま「d」から「ʒ（ジュ）」へ開放する音（英語のj）。',
      hu: 'A d zárhangból és ʒ (zs) réshangból álló zöngés affrikáta (a magyar dzs).'
    },
    articulatoryGuide: {
      en: 'Block air at postalveolar position while vibrating vocal cords, release into "j" friction.',
      ja: '声帯を振るわせつつ後歯茎で息を止め、「ジ」と一気に解放します。',
      hu: 'Rezgesd a hangszalagokat, zárd a levegőt posztalveolárisan, majd engedd el "dzs" hangként.'
    },
    exampleWords: [
      { word: 'jump', language: 'English', languageCode: 'en', transcription: '/dʒʌmp/', meaning: 'Leap', targetSoundIndex: 0 },
      { word: 'dzsem', language: 'Hungarian', languageCode: 'hu', transcription: '/dʒɛm/', meaning: 'Jam', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e6/Voiced_palato-alveolar_affricate.ogg/Voiced_palato-alveolar_affricate.ogg.mp3',
    relatedSymbols: ['ezh', 't̠ʃ', 'dz'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 15,
    isCore: true
  },

  // ==========================================
  // PULMONIC CONSONANTS: FRICATIVES
  // ==========================================
  {
    id: 'f',
    symbol: 'f',
    unicode: 'U+0066',
    nameEnglish: 'Voiceless labiodental fricative',
    nameJapanese: '無声唇歯摩擦音',
    nameHungarian: 'Zöngétlen labiodentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'labiodental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless fricative produced by forcing air between upper teeth and lower lip.',
      ja: '上の前歯を下唇に軽く触れさせ、隙間から息を吹く無声摩擦音。',
      hu: 'Zöngétlen ajak-fog réshang.'
    },
    articulatoryGuide: {
      en: 'Touch upper teeth gently onto inner lower lip, push air through without vocal cord vibration.',
      ja: '上の歯を下唇の内側に軽くのせ、その隙間から息を強く吹き出します。',
      hu: 'Enyhén érintsd a felső fogsorodat az alsó ajkadhoz, és fújd át a levegőt.'
    },
    exampleWords: [
      { word: 'fish', language: 'English', languageCode: 'en', transcription: '/fɪʃ/', meaning: 'Aquatic animal', targetSoundIndex: 0 },
      { word: 'fa', language: 'Hungarian', languageCode: 'hu', transcription: '/fɒ/', meaning: 'Tree', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c7/Voiceless_labio-dental_fricative.ogg/Voiceless_labio-dental_fricative.ogg.mp3',
    relatedSymbols: ['v', 'ɸ', 'θ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 16,
    isCore: true
  },
  {
    id: 'v',
    symbol: 'v',
    unicode: 'U+0076',
    nameEnglish: 'Voiced labiodental fricative',
    nameJapanese: '有声唇歯摩擦音',
    nameHungarian: 'Zöngés labiodentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'labiodental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced fricative produced by air rubbing between lower lip and upper teeth.',
      ja: '上の歯を下唇に当て、声を出しながら隙間から息を通す有声摩擦音。',
      hu: 'Zöngés ajak-fog réshang.'
    },
    articulatoryGuide: {
      en: 'Position upper teeth on lower lip, vibrate vocal cords while forcing air out.',
      ja: '上の歯を下唇につけ、声帯を震わせながら息を吹き出します。',
      hu: 'Helyezd a felső fogsorodat az alsó ajkadra, rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'voice', language: 'English', languageCode: 'en', transcription: '/vɔɪs/', meaning: 'Vocal sound', targetSoundIndex: 0 },
      { word: 'víz', language: 'Hungarian', languageCode: 'hu', transcription: '/viːz/', meaning: 'Water', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Voiced_labio-dental_fricative.ogg/Voiced_labio-dental_fricative.ogg.mp3',
    relatedSymbols: ['f', 'β', 'ð'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 17,
    isCore: true
  },
  {
    id: 'theta',
    symbol: 'θ',
    unicode: 'U+03B8',
    nameEnglish: 'Voiceless dental fricative',
    nameJapanese: '無声歯摩擦音',
    nameHungarian: 'Zöngétlen dentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'dental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless dental fricative sound as in English "think".',
      ja: '舌先を上下の歯の間に軽く挟むか裏側に当てて息を吹き出す無声音（thの音）。',
      hu: 'Zöngétlen fogi réshang (mint az angol "think"-ben).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip between or behind front teeth, blow air gently without voice.',
      ja: '舌先を上の前歯につけ、隙間から「ス」と息を吹き出します。',
      hu: 'Tedd a nyelvhegyet a metszőfogakhoz, és fújj át levegőt.'
    },
    exampleWords: [
      { word: 'think', language: 'English', languageCode: 'en', transcription: '/θɪŋk/', meaning: 'Ponder', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/80/Voiceless_dental_fricative.ogg/Voiceless_dental_fricative.ogg.mp3',
    relatedSymbols: ['ð', 'f', 's'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 18,
    isCore: true
  },
  {
    id: 'eth',
    symbol: 'ð',
    unicode: 'U+00F0',
    nameEnglish: 'Voiced dental fricative',
    nameJapanese: '有声歯摩擦音',
    nameHungarian: 'Zöngés dentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'dental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced dental fricative sound as in English "this".',
      ja: '舌先を前歯に触れさせ、声帯を振るわせて息を摩擦させる音（thの有声音）。',
      hu: 'Zöngés fogi réshang (mint az angol "this"-ben).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against upper front teeth, push air while vibrating vocal cords.',
      ja: '舌先を前歯につけ、声を出しながら息を通します。',
      hu: 'Tedd a nyelvhegyet a metszőfogakhoz, és rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'this', language: 'English', languageCode: 'en', transcription: '/ðɪs/', meaning: 'Demonstrative', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6a/Voiced_dental_fricative.ogg/Voiced_dental_fricative.ogg.mp3',
    relatedSymbols: ['θ', 'v', 'z'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 19,
    isCore: true
  },
  {
    id: 's',
    symbol: 's',
    unicode: 'U+0073',
    nameEnglish: 'Voiceless alveolar fricative',
    nameJapanese: '無声歯茎摩擦音',
    nameHungarian: 'Zöngétlen alveoláris frikatíva (magyar sz)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless sibilant fricative made at the alveolar ridge (magyar "sz").',
      ja: '舌先を歯茎に近づけて狭い隙間を作り、強い息を通して出す摩擦音。',
      hu: 'Zöngétlen fogmedri sziszegő réshang (a magyar sz).'
    },
    articulatoryGuide: {
      en: 'Form a narrow groove along tongue center near alveolar ridge, blow air sharply without voice.',
      ja: '舌の中央に溝を作り、歯茎に向かって息を吹き出します。',
      hu: 'Képezz keskeny rést a nyelved közepén a fogmedernél, és fújj át rajta levegőt.'
    },
    exampleWords: [
      { word: 'sun', language: 'English', languageCode: 'en', transcription: '/sʌn/', meaning: 'Star', targetSoundIndex: 0 },
      { word: 'szép', language: 'Hungarian', languageCode: 'hu', transcription: '/seːp/', meaning: 'Beautiful', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ac/Voiceless_alveolar_sibilant.ogg/Voiceless_alveolar_sibilant.ogg.mp3',
    relatedSymbols: ['z', 'ʃ', 'θ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 20,
    isCore: true
  },
  {
    id: 'z',
    symbol: 'z',
    unicode: 'U+007A',
    nameEnglish: 'Voiced alveolar fricative',
    nameJapanese: '有声歯茎摩擦音',
    nameHungarian: 'Zöngés alveoláris frikatíva (magyar z)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced sibilant fricative produced at the alveolar ridge (magyar "z").',
      ja: '声帯を振るわせながら、舌先と歯茎の隙間から息を出す有声摩擦音。',
      hu: 'Zöngés fogmedri sziszegő réshang (a magyar z).'
    },
    articulatoryGuide: {
      en: 'Make an /s/ shape with tongue, but vibrate vocal cords to create a buzzing sound.',
      ja: '「ス」の舌の形を保ちながら、声を「ズー」と出します。',
      hu: 'Képezz "sz" alakot a nyelveddel, de rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'zoo', language: 'English', languageCode: 'en', transcription: '/zuː/', meaning: 'Animal park', targetSoundIndex: 0 },
      { word: 'zöld', language: 'Hungarian', languageCode: 'hu', transcription: '/zøld/', meaning: 'Green', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Voiced_alveolar_sibilant.ogg/Voiced_alveolar_sibilant.ogg.mp3',
    relatedSymbols: ['s', 'ʒ', 'ð'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 21,
    isCore: true
  },
  {
    id: 'esh',
    symbol: 'ʃ',
    unicode: 'U+0283',
    nameEnglish: 'Voiceless postalveolar fricative',
    nameJapanese: '無声後歯茎摩擦音',
    nameHungarian: 'Zöngétlen posztalveoláris frikatíva (magyar s)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless postalveolar fricative sound ("sh" in "shoe", magyar "s").',
      ja: '舌を歯茎の後ろに近づけて息を吹き出す無声摩擦音（シュの音）。',
      hu: 'Zöngétlen posztalveoláris réshang (a magyar s).'
    },
    articulatoryGuide: {
      en: 'Raise front of tongue right behind alveolar ridge, slightly round lips, push air out.',
      ja: '舌前部を歯茎の少し後ろへ盛り上げ、唇を丸めて息を通します。',
      hu: 'Emeld a nyelv elülső részét a fogmeder mögé, kerekítsd az ajkadat.'
    },
    exampleWords: [
      { word: 'she', language: 'English', languageCode: 'en', transcription: '/ʃiː/', meaning: 'Female pronoun', targetSoundIndex: 0 },
      { word: 'só', language: 'Hungarian', languageCode: 'hu', transcription: '/ʃoː/', meaning: 'Salt', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Voiceless_palato-alveolar_sibilant.ogg/Voiceless_palato-alveolar_sibilant.ogg.mp3',
    relatedSymbols: ['ʒ', 's', 'ɕ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 22,
    isCore: true
  },
  {
    id: 'ezh',
    symbol: 'ʒ',
    unicode: 'U+0292',
    nameEnglish: 'Voiced postalveolar fricative',
    nameJapanese: '有声後歯茎摩擦音',
    nameHungarian: 'Zöngés posztalveoláris frikatíva (magyar zs)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced postalveolar fricative sound ("s" in "measure", magyar "zs").',
      ja: '声帯を振動させながら後歯茎で息を摩擦させる音。',
      hu: 'Zöngés posztalveoláris réshang (a magyar zs).'
    },
    articulatoryGuide: {
      en: 'Form the same tongue position as /ʃ/ ("sh"), but vibrate vocal cords.',
      ja: '「シュ」と同じ舌の位置で、声帯を振るわせて「ジュ」と発声します。',
      hu: 'Képezz "s" pozíciót a nyelveddel, de rezgesd a hangszalagokat.'
    },
    exampleWords: [
      { word: 'vision', language: 'English', languageCode: 'en', transcription: '/ˈvɪʒ.ən/', meaning: 'Sight', targetSoundIndex: 2 },
      { word: 'zseb', language: 'Hungarian', languageCode: 'hu', transcription: '/ʒɛb/', meaning: 'Pocket', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/30/Voiced_palato-alveolar_sibilant.ogg/Voiced_palato-alveolar_sibilant.ogg.mp3',
    relatedSymbols: ['ʃ', 'z', 'ʑ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 23,
    isCore: true
  },
  {
    id: 'x',
    symbol: 'x',
    unicode: 'U+0078',
    nameEnglish: 'Voiceless velar fricative',
    nameJapanese: '無声軟口蓋摩擦音',
    nameHungarian: 'Zöngétlen veláris frikatíva (magyar ch)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless velar fricative sound (German "ach", Scottish "loch", magyar "pech").',
      ja: '舌の奥を軟口蓋に近づけて隙間を作り、強い息を通す無声摩擦音。',
      hu: 'Zöngétlen veláris réshang (a magyar "pech" végén).'
    },
    articulatoryGuide: {
      en: 'Raise back of tongue toward soft palate without complete closure, blow air for rasping friction.',
      ja: '舌奥を軟口蓋に近づけ、狭い隙間から強い息をこすり出します。',
      hu: 'Emeld a nyelv hátulját a lágy szájpadláshoz, de ne zárd el teljesen.'
    },
    exampleWords: [
      { word: 'Loch', language: 'Scottish English', languageCode: 'gd', transcription: '/lɒx/', meaning: 'Lake', targetSoundIndex: 2 },
      { word: 'pech', language: 'Hungarian', languageCode: 'hu', transcription: '/pɛx/', meaning: 'Bad luck', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Voiceless_velar_fricative.ogg/Voiceless_velar_fricative.ogg.mp3',
    relatedSymbols: ['ɣ', 'χ', 'h'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 24,
    isCore: true
  },
  {
    id: 'gh',
    symbol: 'ɣ',
    unicode: 'U+0263',
    nameEnglish: 'Voiced velar fricative',
    nameJapanese: '有声軟口蓋摩擦音',
    nameHungarian: 'Zöngés veláris frikatíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced velar fricative sound (Spanish "fuego" /g/ sound).',
      ja: '軟口蓋で喉奥を鳴らしながら息をこすり出す有声摩擦音。',
      hu: 'Zöngés veláris réshang.'
    },
    articulatoryGuide: {
      en: 'Hold back of tongue near soft palate (like /x/), but add vocal cord vibration.',
      ja: '/x/と同じ口の形で、声を「ガー」とうならせるように出します。',
      hu: 'Tartsd a nyelved a lágy szájpadlás közelében, és rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'fuego', language: 'Spanish', languageCode: 'es', transcription: '/ˈfweɣo/', meaning: 'Fire', targetSoundIndex: 3 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/47/Voiced_velar_fricative.ogg/Voiced_velar_fricative.ogg.mp3',
    relatedSymbols: ['x', 'ɡ', 'ʁ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 25,
    isCore: true
  },
  {
    id: 'h',
    symbol: 'h',
    unicode: 'U+0068',
    nameEnglish: 'Voiceless glottal fricative',
    nameJapanese: '無声声門摩擦音',
    nameHungarian: 'Zöngétlen glottális frikatíva (magyar h)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'glottal',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless glottal fricative produced by air friction at the vocal folds.',
      ja: '声門を開いて息をそのまま通過させる摩擦音。',
      hu: 'Zöngétlen gégehang (a magyar h).'
    },
    articulatoryGuide: {
      en: 'Exhale breath through open vocal folds without shaping tongue heavily.',
      ja: '口を自然に開け、声帯を開いたまま息を「ハー」と吐き出します。',
      hu: 'Lélegezz ki nyitott hangszalagok mellett.'
    },
    exampleWords: [
      { word: 'house', language: 'English', languageCode: 'en', transcription: '/haʊs/', meaning: 'Home', targetSoundIndex: 0 },
      { word: 'ház', language: 'Hungarian', languageCode: 'hu', transcription: '/haːz/', meaning: 'House', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/da/Voiceless_glottal_fricative.ogg/Voiceless_glottal_fricative.ogg.mp3',
    relatedSymbols: ['ɦ', 'x', 'ç'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 26,
    isCore: true
  },

  // ==========================================
  // PULMONIC CONSONANTS: APPROXIMANTS, TAPS & TRILLS
  // ==========================================
  {
    id: 'l',
    symbol: 'l',
    unicode: 'U+006C',
    nameEnglish: 'Voiced alveolar lateral approximant',
    nameJapanese: '有声歯茎側面接近音',
    nameHungarian: 'Zöngés alveoláris laterális approximáns (magyar l)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'lateral-approximant',
    description: {
      en: 'A voiced lateral approximant made with tongue tip on alveolar ridge while air flows around sides.',
      ja: '舌先を歯茎につけ、舌の両脇から息と声を逃がす音。',
      hu: 'Zöngés fogmedri oldalsó megközelítő hang (a magyar l).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against upper teeth ridge, lower sides of tongue to let voiced air pass.',
      ja: '舌先を歯茎に固定し、舌の側面を開けて声を滑らかに出します。',
      hu: 'Érintsd a nyelvhegyedet a fogmederhez, engedd le a nyelv oldalait.'
    },
    exampleWords: [
      { word: 'love', language: 'English', languageCode: 'en', transcription: '/lʌv/', meaning: 'Affection', targetSoundIndex: 0 },
      { word: 'ló', language: 'Hungarian', languageCode: 'hu', transcription: '/loː/', meaning: 'Horse', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Alveolar_lateral_approximant.ogg/Alveolar_lateral_approximant.ogg.mp3',
    relatedSymbols: ['r', 'ʎ', 'ɫ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 27,
    isCore: true
  },
  {
    id: 'r_tap',
    symbol: 'ɾ',
    unicode: 'U+027E',
    nameEnglish: 'Voiced alveolar tap/flap',
    nameJapanese: '有声歯茎はじき音',
    nameHungarian: 'Zöngés alveoláris legyintőhang (spanyol r)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'tap-flap',
    description: {
      en: 'A quick single tap of tongue against alveolar ridge (Spanish single "r", American "butter").',
      ja: '舌先で歯茎を軽く1回だけ「ポン」とはじく音（日本語の「ラ」行音）。',
      hu: 'A nyelvhegy egyetlen gyors érintése a fogmedren.'
    },
    articulatoryGuide: {
      en: 'Flick tongue tip rapidly against alveolar ridge once while voicing.',
      ja: '舌先を脱力し、歯茎を一瞬だけ1回はじくように当てます。',
      hu: 'Pattintsd a nyelvhegyet gyorsan a fogmederhez egyszer.'
    },
    exampleWords: [
      { word: 'pero', language: 'Spanish', languageCode: 'es', transcription: '/ˈpeɾo/', meaning: 'But', targetSoundIndex: 2 },
      { word: 'ラーメン', language: 'Japanese', languageCode: 'ja', transcription: '/ɾaːmeɴ/', meaning: 'Ramen', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Alveolar_tap.ogg/Alveolar_tap.ogg.mp3',
    relatedSymbols: ['r', 'r_trill', 'l'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 28,
    isCore: true
  },
  {
    id: 'r_trill',
    symbol: 'r',
    unicode: 'U+0072',
    nameEnglish: 'Voiced alveolar trill',
    nameJapanese: '有声歯茎ふるえ音',
    nameHungarian: 'Zöngés alveoláris pergetett r',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'trill',
    description: {
      en: 'A rolling trill sound made by rapid repeated vibrations of tongue tip against alveolar ridge.',
      ja: '舌先を歯茎で幾度も震わせる巻き舌の音（スペイン語のrr、ハンガリー語のr）。',
      hu: 'Zöngés pergetett r hang.'
    },
    articulatoryGuide: {
      en: 'Relax tongue tip near alveolar ridge, pass a strong airstream to vibrate it repeatedly.',
      ja: '舌先を脱力して歯茎近辺に置き、強い息を通してブルルッと震わせます。',
      hu: 'Lazítsd el a nyelvhegyet, és fújj適強 levegőt a pergetéshez.'
    },
    exampleWords: [
      { word: 'perro', language: 'Spanish', languageCode: 'es', transcription: '/ˈpero/', meaning: 'Dog', targetSoundIndex: 2 },
      { word: 'róka', language: 'Hungarian', languageCode: 'hu', transcription: '/roːkɒ/', meaning: 'Fox', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Alveolar_trill.ogg/Alveolar_trill.ogg.mp3',
    relatedSymbols: ['ɾ', 'ʀ', 'ʁ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 29,
    isCore: true
  },
  {
    id: 'j',
    symbol: 'j',
    unicode: 'U+006A',
    nameEnglish: 'Voiced palatal approximant',
    nameJapanese: '有声硬口蓋接近音',
    nameHungarian: 'Zöngés palatális approximáns (magyar j/ly)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'palatal',
    mannerOfArticulation: 'approximant',
    description: {
      en: 'A voiced palatal glide sound (English "yes", magyar "j", Japanese "ya").',
      ja: '舌を硬口蓋に接近させて滑らかに声を出す音（ヤ行の音）。',
      hu: 'Zöngés palatális megközelítő hang (a magyar j és ly).'
    },
    articulatoryGuide: {
      en: 'Raise middle body of tongue toward roof of mouth (palate) and transition smoothly into vowel.',
      ja: '舌の中央部を口の天井に近づけ、滑らかに「ヤ」と発声します。',
      hu: 'Emeld a nyelv középső részét a szájpadláshoz, és lágyan siklass át.'
    },
    exampleWords: [
      { word: 'yes', language: 'English', languageCode: 'en', transcription: '/jɛs/', meaning: 'Affirmative', targetSoundIndex: 0 },
      { word: 'jó', language: 'Hungarian', languageCode: 'hu', transcription: '/joː/', meaning: 'Good', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Palatal_approximant.ogg/Palatal_approximant.ogg.mp3',
    relatedSymbols: ['i', 'ɥ', 'ç'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 30,
    isCore: true
  },
  {
    id: 'w',
    symbol: 'w',
    unicode: 'U+0077',
    nameEnglish: 'Voiced labial-velar approximant',
    nameJapanese: '有声両唇軟口蓋接近音',
    nameHungarian: 'Zöngés labioveláris approximáns',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'labial-velar',
    mannerOfArticulation: 'approximant',
    description: {
      en: 'A rounded glide produced by rounding lips while raising back of tongue toward soft palate.',
      ja: '唇を丸めつつ舌の奥を軟口蓋に近づけて出す滑音（ワ行音、英語のw）。',
      hu: 'Ajakkerekítéssel és a nyelv hátuljának emelésével képezett siklóhang.'
    },
    articulatoryGuide: {
      en: 'Pucker lips tightly, raise back of tongue toward velum, and release quickly with voice.',
      ja: '唇をしっかり丸め、舌の奥を持ち上げながら声を瞬時に出します。',
      hu: 'Kerekítsd az ajkaidat, emeld a nyelv hátulját, és engedd át a hangot.'
    },
    exampleWords: [
      { word: 'water', language: 'English', languageCode: 'en', transcription: '/ˈwɔːtər/', meaning: 'Liquid H2O', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Voiced_labio-velar_approximant.ogg/Voiced_labio-velar_approximant.ogg.mp3',
    relatedSymbols: ['u', 'v', 'ʍ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 31,
    isCore: true
  },

  // ==========================================
  // VOWELS (COMPLETE INTERACTIVE INVENTORY)
  // ==========================================
  {
    id: 'i',
    symbol: 'i',
    unicode: 'U+0069',
    nameEnglish: 'Close front unrounded vowel',
    nameJapanese: '非円唇前舌狭母音',
    nameHungarian: 'Zárt elülső ajakréses magánhangzó (magyar i/í)',
    category: 'vowels',
    vowelHeight: 'close',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'A high, front unrounded vowel (as in English "see", magyar "í", Japanese "い").',
      ja: '舌を前上方に引き上げ、唇を丸めずに広げて出す高母音（イの音）。',
      hu: 'Zárt, elülső képezésű ajakréses magánhangzó (a magyar i és í).'
    },
    articulatoryGuide: {
      en: 'Raise the front of your tongue high toward the hard palate, spread lips widely.',
      ja: '舌の前部を高く口の天井に近づけ、唇を横にひいて「イー」と発音します。',
      hu: 'Emeld a nyelv elülső részét magasra a szájpadláshoz, és húzd szélesre az ajkaidat.'
    },
    exampleWords: [
      { word: 'see', language: 'English', languageCode: 'en', transcription: '/siː/', meaning: 'Perceive', targetSoundIndex: 1 },
      { word: 'így', language: 'Hungarian', languageCode: 'hu', transcription: '/iːɟ/', meaning: 'Like this', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Close_front_unrounded_vowel.ogg',
    relatedSymbols: ['y', 'ɪ', 'e'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 32,
    isCore: true
  },
  {
    id: 'y',
    symbol: 'y',
    unicode: 'U+0079',
    nameEnglish: 'Close front rounded vowel',
    nameJapanese: '円唇前舌狭母音',
    nameHungarian: 'Zárt elülső ajakkerekítéses magánhangzó (magyar ü/ű)',
    category: 'vowels',
    vowelHeight: 'close',
    vowelBackness: 'front',
    roundness: 'rounded',
    description: {
      en: 'A high front vowel with rounded lips (French "tu", German "über", magyar "ü").',
      ja: '「イ」と言う舌の形のまま、唇を丸めて「ウ」のように発声する母音。',
      hu: 'Zárt elülső magánhangzó ajakkerekítéssel (a magyar ü/ű).'
    },
    articulatoryGuide: {
      en: 'Hold tongue in /i/ position, but round lips tightly like /u/.',
      ja: '「イー」の舌の位置で、唇だけ「ウー」のように丸めます。',
      hu: 'Formázz "i" pozíciót a nyelveddel, de kerekítsd az ajkaidat.'
    },
    exampleWords: [
      { word: 'üveg', language: 'Hungarian', languageCode: 'hu', transcription: '/yvɛɡ/', meaning: 'Glass', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg',
    relatedSymbols: ['i', 'u', 'ʏ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 33,
    isCore: true
  },
  {
    id: 'e',
    symbol: 'e',
    unicode: 'U+0065',
    nameEnglish: 'Close-mid front unrounded vowel',
    nameJapanese: '非円唇前舌半狭母音',
    nameHungarian: 'Középső-zárt elülső ajakréses magánhangzó (magyar é)',
    category: 'vowels',
    vowelHeight: 'close-mid',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'A close-mid front unrounded vowel (Spanish "e", French "été", magyar "é").',
      ja: '「イ」と「エ」の中間よりやや高めの前舌母音。',
      hu: 'Középső-zárt elülső magánhangzó (a magyar é hang).'
    },
    articulatoryGuide: {
      en: 'Position tongue in front, slightly lower than /i/, unrounded lips.',
      ja: '「イ」の位置からほんの少し顎を下げ、唇を開いて「エー」と発声します。',
      hu: 'Tedd a nyelved előre, kissé alacsonyabban mint az /i/-nél.'
    },
    exampleWords: [
      { word: 'év', language: 'Hungarian', languageCode: 'hu', transcription: '/eːv/', meaning: 'Year', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Close-mid_front_unrounded_vowel.ogg',
    relatedSymbols: ['i', 'ɛ', 'ø'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 34,
    isCore: true
  },
  {
    id: 'epsilon',
    symbol: 'ɛ',
    unicode: 'U+025B',
    nameEnglish: 'Open-mid front unrounded vowel',
    nameJapanese: '非円唇前舌半広母音',
    nameHungarian: 'Középső-nyílt elülső ajakréses magánhangzó (magyar e)',
    category: 'vowels',
    vowelHeight: 'open-mid',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'An open-mid front vowel (English "bed", magyar "e").',
      ja: '口を大きめに開けて発声する前舌のエの音。',
      hu: 'Középső-nyílt elülső ajakréses magánhangzó (a magyar e).'
    },
    articulatoryGuide: {
      en: 'Lower mouth slightly lower than /e/, open lips comfortably into a relaxed front vowel.',
      ja: '「エ」より少し口を縦に広く開けて発音します。',
      hu: 'Nyisd a szád kissé tágabbra mint az /e/-nél.'
    },
    exampleWords: [
      { word: 'bed', language: 'English', languageCode: 'en', transcription: '/bɛd/', meaning: 'Bed', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Open-mid_front_unrounded_vowel.ogg',
    relatedSymbols: ['e', 'æ', 'œ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 35,
    isCore: true
  },
  {
    id: 'ash',
    symbol: 'æ',
    unicode: 'U+00E6',
    nameEnglish: 'Near-open front unrounded vowel',
    nameJapanese: '非円唇前舌近広母音',
    nameHungarian: 'Majdnem nyílt elülső ajakréses magánhangzó (angol cat)',
    category: 'vowels',
    vowelHeight: 'near-open',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'A broad open front unrounded vowel as in English "cat".',
      ja: '「ア」と「エ」の中間のような広く開けた前舌音。',
      hu: 'Szélesen nyitott elülső magánhangzó (mint az angol "cat"-ben).'
    },
    articulatoryGuide: {
      en: 'Drop lower jaw wide while keeping tongue body forward and flat.',
      ja: '顎を大きく下げ、舌を前方に保ちながら「ア」と「エ」の間の音を出します。',
      hu: 'Engedd le az álladat tágra, tartsd a nyelved előre tolva.'
    },
    exampleWords: [
      { word: 'cat', language: 'English', languageCode: 'en', transcription: '/kæt/', meaning: 'Cat', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg',
    relatedSymbols: ['ɛ', 'a', 'ʌ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 36,
    isCore: true
  },
  {
    id: 'a',
    symbol: 'a',
    unicode: 'U+0061',
    nameEnglish: 'Open front unrounded vowel',
    nameJapanese: '非円唇前舌広母音',
    nameHungarian: 'Nyílt elülső ajakréses magánhangzó (magyar á)',
    category: 'vowels',
    vowelHeight: 'open',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'An open front vowel (Spanish "a", magyar "á", Japanese "あ").',
      ja: '口を大きく開けて舌の位置を前に置いた明るいアの音。',
      hu: 'Teljesen nyitott elülső ajakréses magánhangzó (a magyar á).'
    },
    articulatoryGuide: {
      en: 'Open mouth wide, rest tongue low and forward, pronounce clear open "a".',
      ja: '口を大きく開き、舌を低い位置の前寄りに置いて発声します。',
      hu: 'Nyisd ki a szád tágra, a nyelv laposan pihen elöl.'
    },
    exampleWords: [
      { word: 'ágy', language: 'Hungarian', languageCode: 'hu', transcription: '/aːɟ/', meaning: 'Bed', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Open_front_unrounded_vowel.ogg',
    relatedSymbols: ['æ', 'ɑ', 'ɒ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 37,
    isCore: true
  },
  {
    id: 'schwa',
    symbol: 'ə',
    unicode: 'U+0259',
    nameEnglish: 'Mid central vowel (schwa)',
    nameJapanese: '中舌中央母音（シュワー）',
    nameHungarian: 'Középső középső magánhangzó (schwa)',
    category: 'vowels',
    vowelHeight: 'mid',
    vowelBackness: 'central',
    roundness: 'unrounded',
    description: {
      en: 'The neutral central unstressed vowel sound in English ("about", "sofa").',
      ja: '口や舌に力を入れずに曖昧に出す中性的な母音（シュワー）。',
      hu: 'A semleges központi magánhangzó (schwa).'
    },
    articulatoryGuide: {
      en: 'Relax tongue and mouth completely in center position, make a short vocal sound.',
      ja: '口も舌もリラックスさせ、力を抜いて短く発声します。',
      hu: 'Lazítsd el a nyelved és a szádat teljesen középen.'
    },
    exampleWords: [
      { word: 'about', language: 'English', languageCode: 'en', transcription: '/əˈbaʊt/', meaning: 'Regarding', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg',
    relatedSymbols: ['ʌ', 'ɜ', 'a'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 38,
    isCore: true
  },
  {
    id: 'u',
    symbol: 'u',
    unicode: 'U+0075',
    nameEnglish: 'Close back rounded vowel',
    nameJapanese: '円唇後舌狭母音',
    nameHungarian: 'Zárt hátsó ajakkerekítéses magánhangzó (magyar u/ú)',
    category: 'vowels',
    vowelHeight: 'close',
    vowelBackness: 'back',
    roundness: 'rounded',
    description: {
      en: 'A high back rounded vowel (English "boot", magyar "ú").',
      ja: '舌奥を高く持ち上げ、唇を丸めて突き出して出す音（ウの原形）。',
      hu: 'Zárt, hátsó ajakkerekítéses magánhangzó (a magyar u/ú).'
    },
    articulatoryGuide: {
      en: 'Pull tongue back and high toward soft palate, purse lips into a tight small circle.',
      ja: '舌奥を軟口蓋に向けて高く引き上げ、唇を小さく丸めて「ウー」と出します。',
      hu: 'Húzd a nyelved hátra és fel, kerekítsd az ajkaidat szoros kis körre.'
    },
    exampleWords: [
      { word: 'boot', language: 'English', languageCode: 'en', transcription: '/buːt/', meaning: 'Footwear', targetSoundIndex: 1 },
      { word: 'út', language: 'Hungarian', languageCode: 'hu', transcription: '/uːt/', meaning: 'Road', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Close_back_rounded_vowel.ogg',
    relatedSymbols: ['ɯ', 'ʊ', 'o'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 39,
    isCore: true
  },
  {
    id: 'o',
    symbol: 'o',
    unicode: 'U+006F',
    nameEnglish: 'Close-mid back rounded vowel',
    nameJapanese: '円唇後舌半狭母音',
    nameHungarian: 'Középső-zárt hátsó ajakkerekítéses magánhangzó (magyar ó)',
    category: 'vowels',
    vowelHeight: 'close-mid',
    vowelBackness: 'back',
    roundness: 'rounded',
    description: {
      en: 'A close-mid back rounded vowel (Spanish "o", magyar "ó").',
      ja: '唇を丸め、舌の奥を中高の位置に置いて出すオーの音。',
      hu: 'Középső-zárt hátsó ajakkerekítéses magánhangzó (a magyar ó).'
    },
    articulatoryGuide: {
      en: 'Position tongue back, slightly lower than /u/, lips rounded into medium circle.',
      ja: '/u/よりも少し口を開け、唇を丸めたままオの音を出します。',
      hu: 'Helyezd a nyelved hátra, kissé alacsonyabban mint az /u/-nál.'
    },
    exampleWords: [
      { word: 'ófa', language: 'Hungarian', languageCode: 'hu', transcription: '/oːfɒ/', meaning: 'Old tree', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg',
    relatedSymbols: ['u', 'ɔ', 'oː'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 40,
    isCore: true
  },
  {
    id: 'open_o',
    symbol: 'ɔ',
    unicode: 'U+0254',
    nameEnglish: 'Open-mid back rounded vowel',
    nameJapanese: '円唇後舌半広母音',
    nameHungarian: 'Középső-nyílt hátsó ajakkerekítéses magánhangzó (magyar o)',
    category: 'vowels',
    vowelHeight: 'open-mid',
    vowelBackness: 'back',
    roundness: 'rounded',
    description: {
      en: 'An open-mid back rounded vowel (British "thought", magyar short "o").',
      ja: '口をより大きめに開けて発声する丸みのあるオの音。',
      hu: 'Középső-nyílt hátsó magánhangzó (a magyar o).'
    },
    articulatoryGuide: {
      en: 'Open mouth wider than /o/, rounded lips, back of tongue lowered slightly.',
      ja: '「オ」より顎を開いて口の奥を広げ、唇を丸めて発声します。',
      hu: 'Nyisd ki a szád tágabbra mint az /o/-nál.'
    },
    exampleWords: [
      { word: 'orvos', language: 'Hungarian', languageCode: 'hu', transcription: '/ɔrvɔʃ/', meaning: 'Doctor', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg',
    relatedSymbols: ['o', 'ɒ', 'ʌ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 41,
    isCore: true
  },
  {
    id: 'script_a',
    symbol: 'ɑ',
    unicode: 'U+0251',
    nameEnglish: 'Open back unrounded vowel',
    nameJapanese: '非円唇後舌広母音',
    nameHungarian: 'Nyílt hátsó ajakréses magánhangzó',
    category: 'vowels',
    vowelHeight: 'open',
    vowelBackness: 'back',
    roundness: 'unrounded',
    description: {
      en: 'An open back unrounded vowel (English "father").',
      ja: '口を一番大きく開け、舌を奥に低く引く非円唇の深みのあるア。',
      hu: 'Teljesen nyitott hátsó ajakréses magánhangzó.'
    },
    articulatoryGuide: {
      en: 'Drop lower jaw wide, draw tongue low into back of mouth without rounding lips.',
      ja: '喉奥を開くように顎を下ろして口を全開にし、唇を丸めずに「アー」と出します。',
      hu: 'Engedd le az álladat tágra, a nyelv hátul alacsonyan van.'
    },
    exampleWords: [
      { word: 'father', language: 'English', languageCode: 'en', transcription: '/ˈfɑːðər/', meaning: 'Father', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg',
    relatedSymbols: ['a', 'ɒ', 'ʌ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 42,
    isCore: true
  },
  {
    id: 'turned_script_a',
    symbol: 'ɒ',
    unicode: 'U+0252',
    nameEnglish: 'Open back rounded vowel',
    nameJapanese: '円唇後舌広母音',
    nameHungarian: 'Nyílt hátsó ajakkerekítéses magánhangzó (magyar a)',
    category: 'vowels',
    vowelHeight: 'open',
    vowelBackness: 'back',
    roundness: 'rounded',
    description: {
      en: 'An open back rounded vowel sound (magyar short "a", British "lot").',
      ja: '口を大きく開けて舌を奥にし、唇にわずかに丸みをつけるア/オの中間音。',
      hu: 'Teljesen nyitott hátsó ajakkerekítéses magánhangzó (a magyar a).'
    },
    articulatoryGuide: {
      en: 'Form an open /ɑ/ shape at back of mouth, but round lips slightly.',
      ja: '口を奥広く開け、唇を軽く丸めて深みのある「ア/オ」を出します。',
      hu: 'Nyisd tágra a szád mélyen hátul, és adj hozzá enyhe ajakkerekítést.'
    },
    exampleWords: [
      { word: 'alma', language: 'Hungarian', languageCode: 'hu', transcription: '/ɒlmɒ/', meaning: 'Apple', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Open_back_rounded_vowel.ogg',
    relatedSymbols: ['ɑ', 'ɔ', 'a'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 43,
    isCore: true
  },

  // ==========================================
  // NON-PULMONIC CONSONANTS
  // ==========================================
  {
    id: 'click_bilabial',
    symbol: 'ʘ',
    unicode: 'U+0298',
    nameEnglish: 'Bilabial click',
    nameJapanese: '両唇吸気音（クリック）',
    nameHungarian: 'Bilabiális csettintőhang',
    category: 'non-pulmonic',
    subcategory: 'click',
    description: {
      en: 'A kissing sound click produced by sucking air inward with closed lips.',
      ja: '唇をすぼめて「チュッ」と息を吸い込む両唇吸気音。',
      hu: 'Ajak-csettintés, mint egy puszilgatós hang.'
    },
    articulatoryGuide: {
      en: 'Suction lips together and pull air inward quickly to make a popping kiss sound.',
      ja: '両唇を密着させてから、息を内側に吸い込むように開放します。',
      hu: 'Szívd be a levegőt az ajkaid között puszilózó hangot képezve.'
    },
    exampleWords: [
      { word: 'ʘoa', language: 'Tuu languages', languageCode: 'ngh', transcription: '/ʘoa/', meaning: 'Phooey', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/00/Bilabial_click.ogg/Bilabial_click.ogg.mp3',
    relatedSymbols: ['ǀ', 'ǃ', 'ǂ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 44,
    isCore: false
  },
  {
    id: 'click_dental',
    symbol: 'ǀ',
    unicode: 'U+01C0',
    nameEnglish: 'Dental click',
    nameJapanese: '歯吸気音（「チッチッ」という音）',
    nameHungarian: 'Dentális csettintőhang',
    category: 'non-pulmonic',
    subcategory: 'click',
    description: {
      en: 'A dental click produced by snapping tongue off front teeth (the "tsk-tsk" sound).',
      ja: '舌先を上の前歯から引っ張って「チッチッ」と鳴らす音。',
      hu: 'A fogak mögött képezett csettintés ("tsk-tsk" hang).'
    },
    articulatoryGuide: {
      en: 'Press tongue tip against upper front teeth, create suction, and pull down sharply.',
      ja: '舌先を前歯の裏につけて吸着させ、パチンと下へ引っ張ります。',
      hu: 'Nyomd a nyelvhegyedet a felső metszőfogakhoz, majd rántsd le.'
    },
    exampleWords: [
      { word: 'Xhosa', language: 'Xhosa', languageCode: 'xh', transcription: '/ˈkǁʰoːsa/', meaning: 'Xhosa language', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e0/Dental_click.ogg/Dental_click.ogg.mp3',
    relatedSymbols: ['ǁ', 'ǃ', 'ʘ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 45,
    isCore: false
  },
  {
    id: 'implosive_voiced_bilabial',
    symbol: 'ɓ',
    unicode: 'U+0253',
    nameEnglish: 'Voiced bilabial implosive',
    nameJapanese: '有声両唇内破音',
    nameHungarian: 'Zöngés bilabiális implozíva',
    category: 'non-pulmonic',
    subcategory: 'implosive',
    description: {
      en: 'A voiced bilabial consonant produced by lowering the larynx to suck air inward.',
      ja: '喉頭を下げて陰圧を作り、息を吸い込むように両唇を開放する音。',
      hu: 'A gége lefelé mozgatásával képezett belső légáramú zárhang.'
    },
    articulatoryGuide: {
      en: 'Close lips, pull voice box downward while saying /b/ so air rushes inward upon release.',
      ja: '「b」の姿勢から喉仏を急速に下へ下げつつ唇を開きます。',
      hu: 'Zárd az ajkakat, húzd le a gégédet a /b/ ejtése közben.'
    },
    exampleWords: [
      { word: 'ɓaa', language: 'Hausa', languageCode: 'ha', transcription: '/ɓaa/', meaning: 'Give', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/23/Voiced_bilabial_implosive.ogg/Voiced_bilabial_implosive.ogg.mp3',
    relatedSymbols: ['b', 'ɗ', 'ɠ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 46,
    isCore: false
  },
  {
    id: 'ejective_p',
    symbol: 'p\'',
    unicode: 'U+0070 U+02BC',
    nameEnglish: 'Bilabial ejective',
    nameJapanese: '両唇放出音',
    nameHungarian: 'Bilabiális ejektíva',
    category: 'non-pulmonic',
    subcategory: 'ejective',
    description: {
      en: 'A sharp ejective stop produced by closing vocal folds and lips, raising larynx, and popping air out.',
      ja: '声門と唇を同時に閉じ、喉頭を持ち上げて圧力を高めて弾かせる放出音。',
      hu: 'Két ajakkal és zárt gégével képezett kilökődő zárhang.'
    },
    articulatoryGuide: {
      en: 'Close vocal cords and lips simultaneously, push larynx upward like swallowing, release lips with a pop.',
      ja: '息を止め、喉仏を持ち上げて唇から「ッパ！」と勢いよく弾きます。',
      hu: 'Zárd a hangszalagokat és az ajkakat, emeld fel a gégédet és pattintsd ki.'
    },
    exampleWords: [
      { word: 'p\'p\'a', language: 'Amharic', languageCode: 'am', transcription: '/p\'p\'a/', meaning: 'Bishop', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4c/Bilabial_ejective_plosive.ogg/Bilabial_ejective_plosive.ogg.mp3',
    relatedSymbols: ['p', 't\'', 'k\''],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 47,
    isCore: false
  }
];
