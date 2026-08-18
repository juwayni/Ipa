import type { IPASymbol } from '../types/ipa';

export const IPA_SYMBOLS: IPASymbol[] = [
  // ==========================================
  // PULMONIC CONSONANTS
  // ==========================================

  // --- PLOSIVES ---
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_bilabial_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['b', 'm', 'p\''],
    commonConfusions: [
      {
        symbolId: 'b',
        reason: {
          en: '/p/ is voiceless, whereas /b/ is voiced.',
          ja: '/p/は無声音で、/b/は有声音です。',
          hu: 'A /p/ zöngétlen, míg a /b/ zöngés.'
        }
      }
    ],
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
      hu: 'Zöngés bilabiális zárhang, amelyet a két ajak összezárásával és a hangszalagok rezgetésével képezünk.'
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_bilabial_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_alveolar_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_alveolar_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
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
      en: 'A voiceless plosive produced with the back of the tongue against the soft palate (velum).',
      ja: '舌後部を軟口蓋（口の奥の柔らかい部分）に押し当てて息を止め、急に開放する無声音。',
      hu: 'Zöngétlen ínyvitorlai (veláris) zárhang.'
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_velar_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_velar_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['k', 'ŋ', 'ɟ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 6,
    isCore: true
  },

  // --- NASALS ---
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
      en: 'A voiced nasal consonant made with closed lips while air flows through the nose.',
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Bilabial_nasal.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bilabial_nasal.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['p', 'b', 'ɱ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 7,
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
      en: 'A voiced nasal consonant produced with the tongue against the alveolar ridge while air escapes through the nose.',
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Alveolar_nasal.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alveolar_nasal.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['m', 'ŋ', 'ɲ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 8,
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
      en: 'A voiced nasal produced with the back of the tongue against the soft palate while air flows through the nose.',
      ja: '舌の奥を軟口蓋につけ、息を鼻から抜いて出す音（英語の-ngの音）。',
      hu: 'Zöngés veláris orrhang.'
    },
    articulatoryGuide: {
      en: 'Place the back of your tongue against the soft palate (as if saying /k/ or /g/), but allow air to escape through your nose while voicing.',
      ja: '「k」や「g」を言う位置（舌奥と軟口蓋）を保ったまま、息を鼻から出して声を出します。',
      hu: 'Tartsd a nyelv hátsó részét a lágy szájpadlásnál, és engedd ki a levegőt az orron át.'
    },
    exampleWords: [
      { word: 'sing', language: 'English', languageCode: 'en', transcription: '/sɪŋ/', meaning: 'Vocalize music', targetSoundIndex: 3 },
      { word: '案外', language: 'Japanese', languageCode: 'ja', transcription: '/aŋɡai/', meaning: 'Unexpectedly', targetSoundIndex: 1 },
      { word: 'harang', language: 'Hungarian', languageCode: 'hu', transcription: '/hɒrɒŋɡ/', meaning: 'Bell (before k/g)', targetSoundIndex: 4 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Velar_nasal.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['n', 'ɲ', 'g'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 9,
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
      en: 'A voiced palatal nasal produced with the tongue blade pressed against the hard palate.',
      ja: '舌面を硬口蓋（口の天井の硬い部分）に押し当てて出す鼻音（スペイン語のñ、ハンガリー語のny）。',
      hu: 'Zöngés palatális orrhang (a magyar ny hang).'
    },
    articulatoryGuide: {
      en: 'Press the flat middle body of your tongue against the roof of your mouth while producing a nasal tone.',
      ja: '舌の表面を口の天井の硬い場所に広く押し当て、鼻から音を出します。',
      hu: 'Nyomd a nyelvtestet a kemény szájpadláshoz, miközben a levegő az orrodon át távozik.'
    },
    exampleWords: [
      { word: 'nyár', language: 'Hungarian', languageCode: 'hu', transcription: '/ɲaːr/', meaning: 'Summer', targetSoundIndex: 0 },
      { word: 'señor', language: 'Spanish', languageCode: 'es', transcription: '/seˈɲor/', meaning: 'Sir/Mr.', targetSoundIndex: 2 },
      { word: 'こんにゃく', language: 'Japanese', languageCode: 'ja', transcription: '/koɲɲaku/', meaning: 'Konjac', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Palatal_nasal.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Palatal_nasal.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['n', 'ŋ', 'j'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 10,
    isCore: true
  },

  // --- FRICATIVES ---
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
      hu: 'Zöngétlen ajak-fog hang (réshang).'
    },
    articulatoryGuide: {
      en: 'Touch upper teeth gently onto inner lower lip, push air through without vocal cord vibration.',
      ja: '上の歯を下唇の内側に軽くのせ、その隙間から息を強く吹き出します。',
      hu: 'Enyhén érintsd a felső fogsorodat az alsó ajkadhoz, és fújd át a levegőt zöngétlenül.'
    },
    exampleWords: [
      { word: 'fish', language: 'English', languageCode: 'en', transcription: '/fɪʃ/', meaning: 'Aquatic animal', targetSoundIndex: 0 },
      { word: 'fa', language: 'Hungarian', languageCode: 'hu', transcription: '/fɒ/', meaning: 'Tree', targetSoundIndex: 0 },
      { word: '富士山', language: 'Japanese (approx)', languageCode: 'ja', transcription: '/ɸɯʑisaɴ/', meaning: 'Mt Fuji (uses ɸ)', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Voiceless_labiodental_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_labiodental_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['v', 'ɸ', 'θ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 11,
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
      { word: 'víz', language: 'Hungarian', languageCode: 'hu', transcription: '/viːz/', meaning: 'Water', targetSoundIndex: 0 },
      { word: 'ヴァイオリン', language: 'Japanese', languageCode: 'ja', transcription: '/vaiorʲiɴ/', meaning: 'Violin', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Voiced_labiodental_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_labiodental_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['f', 'β', 'ð'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 12,
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
      en: 'A voiceless sibilant fricative produced by forcing air through a narrow channel along the tongue to the alveolar ridge.',
      ja: '舌先を歯茎に近づけて狭い隙間を作り、そこへ息を通して出す歯切れの良い摩擦音。',
      hu: 'Zöngétlen fogmedri szibiláns (sziszegő) réshang (a magyar sz hang).'
    },
    articulatoryGuide: {
      en: 'Form a narrow groove along tongue center near alveolar ridge, blow air sharply without voicing.',
      ja: '舌の中央に狭い溝を作り、歯茎に向かって強い息を吹き出します。',
      hu: 'Képezz keskeny rést a nyelved közepén a fogmedernél, és fújj át rajta zöngétlenül levegőt.'
    },
    exampleWords: [
      { word: 'sun', language: 'English', languageCode: 'en', transcription: '/sʌn/', meaning: 'Star', targetSoundIndex: 0 },
      { word: 'szép', language: 'Hungarian', languageCode: 'hu', transcription: '/seːp/', meaning: 'Beautiful', targetSoundIndex: 0 },
      { word: '桜', language: 'Japanese', languageCode: 'ja', transcription: '/sakura/', meaning: 'Cherry blossom', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_alveolar_sibilant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['z', 'ʃ', 'θ'],
    commonConfusions: [
      {
        symbolId: 'ʃ',
        reason: {
          en: '/s/ is alveolar (hissing), while /ʃ/ is postalveolar (shushing).',
          ja: '/s/は歯茎音（ス）、/ʃ/は後歯茎音（シュ）です。',
          hu: 'A /s/ a magyar "sz" hang, míg a /ʃ/ a magyar "s" hang.'
        }
      }
    ],
    difficulty: 'beginner',
    lessonOrder: 13,
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
      en: 'A voiced sibilant fricative produced at the alveolar ridge.',
      ja: '声帯を振るわせながら、舌先と歯茎の隙間から息を出す有声摩擦音。',
      hu: 'Zöngés fogmedri sziszegő réshang (a magyar z hang).'
    },
    articulatoryGuide: {
      en: 'Make an /s/ shape with your tongue, but vibrate your vocal cords to create a buzzing sound.',
      ja: '「ス」の舌の形を保ちながら、声を「ズー」と出します。',
      hu: 'Képezz "sz" alakot a nyelveddel, de rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'zoo', language: 'English', languageCode: 'en', transcription: '/zuː/', meaning: 'Animal park', targetSoundIndex: 0 },
      { word: 'zöld', language: 'Hungarian', languageCode: 'hu', transcription: '/zøld/', meaning: 'Green', targetSoundIndex: 0 },
      { word: '象', language: 'Japanese', languageCode: 'ja', transcription: '/zoː/', meaning: 'Elephant', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_alveolar_sibilant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['s', 'ʒ', 'ð'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 14,
    isCore: true
  },
  {
    id: 'esh',
    symbol: 'ʃ',
    unicode: 'U+0283',
    nameEnglish: 'Voiceless postalveolar fricative (esh)',
    nameJapanese: '無声後歯茎摩擦音',
    nameHungarian: 'Zöngétlen posztalveoláris frikatíva (magyar s)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless postalveolar fricative sound (sh sound in English "shoe", magyar "s").',
      ja: '舌を歯茎の後ろ（後歯茎）に近づけて息を吹き出す無声摩擦音（日本語の「シュ」の音）。',
      hu: 'Zöngétlen posztalveoláris réshang (a magyar s hang).'
    },
    articulatoryGuide: {
      en: 'Raise the front of your tongue toward the area right behind the alveolar ridge, slightly rounding your lips, push air out without voice.',
      ja: '舌前部を歯茎の少し後ろへ盛り上げ、唇をやや丸めて息を通します。',
      hu: 'Emeld a nyelv elülső részét a fogmeder mögötti részhez, enyhén kerekítsd az ajkad, és fújj levegőt.'
    },
    exampleWords: [
      { word: 'she', language: 'English', languageCode: 'en', transcription: '/ʃiː/', meaning: 'Female pronoun', targetSoundIndex: 0 },
      { word: 'só', language: 'Hungarian', languageCode: 'hu', transcription: '/ʃoː/', meaning: 'Salt', targetSoundIndex: 0 },
      { word: '白', language: 'Japanese', languageCode: 'ja', transcription: '/ʃiro/', meaning: 'White', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_palato-alveolar_sibilant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ʒ', 's', 'ɕ'],
    commonConfusions: [
      {
        symbolId: 's',
        reason: {
          en: '/ʃ/ is articulated further back (postalveolar) than /s/ (alveolar).',
          ja: '/ʃ/は/s/より少し口の奥（後歯茎）で発音します。',
          hu: 'A /ʃ/ a magyar "s", míg a /s/ a magyar "sz".'
        }
      }
    ],
    difficulty: 'beginner',
    lessonOrder: 15,
    isCore: true
  },
  {
    id: 'ezh',
    symbol: 'ʒ',
    unicode: 'U+0292',
    nameEnglish: 'Voiced postalveolar fricative (ezh)',
    nameJapanese: '有声後歯茎摩擦音',
    nameHungarian: 'Zöngés posztalveoláris frikatíva (magyar zs)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'postalveolar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced postalveolar fricative (sound in English "measure", magyar "zs").',
      ja: '声帯を振動させながら後歯茎で息を摩擦させる音。',
      hu: 'Zöngés posztalveoláris réshang (a magyar zs hang).'
    },
    articulatoryGuide: {
      en: 'Form the same tongue position as /ʃ/ ("sh"), but vibrate your vocal cords.',
      ja: '「シュ」と同じ舌の位置で、声帯を振るわせて「ジュ」と発声します。',
      hu: 'Képezz "s" pozíciót a nyelveddel, de rezgesd a hangszalagokat (mint a magyar zs-ben).'
    },
    exampleWords: [
      { word: 'vision', language: 'English', languageCode: 'en', transcription: '/ˈvɪʒ.ən/', meaning: 'Sight', targetSoundIndex: 2 },
      { word: 'zseb', language: 'Hungarian', languageCode: 'hu', transcription: '/ʒɛb/', meaning: 'Pocket', targetSoundIndex: 0 },
      { word: 'ジャム', language: 'Japanese (approx)', languageCode: 'ja', transcription: '/ʒamɯ/', meaning: 'Jam', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_palato-alveolar_sibilant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ʃ', 'z', 'ʑ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 16,
    isCore: true
  },
  {
    id: 'theta',
    symbol: 'θ',
    unicode: 'U+03B8',
    nameEnglish: 'Voiceless dental fricative (theta)',
    nameJapanese: '無声歯摩擦音',
    nameHungarian: 'Zöngétlen dentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'dental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless dental fricative sound as in English "think".',
      ja: '舌先を上下の歯の間に軽く挟むか裏側に当てて息を吹き出す音（英語のthの無声本）。',
      hu: 'Zöngétlen fogi réshang (mint az angol "think"-ben).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip between or just behind front upper teeth, blow air gently without vocal chord vibration.',
      ja: '舌先を上の前歯の先端（または間）に軽く触れさせ、隙間から「ス」と息を吹き出します。',
      hu: 'Tedd a nyelvhegyet a felső metszőfogak közé vagy mögé, és fújj át levegőt.'
    },
    exampleWords: [
      { word: 'think', language: 'English', languageCode: 'en', transcription: '/θɪŋk/', meaning: 'Ponder', targetSoundIndex: 0 },
      { word: 'θάρρος', language: 'Greek', languageCode: 'el', transcription: '/ˈθaros/', meaning: 'Courage', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_dental_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ð', 'f', 's'],
    commonConfusions: [
      {
        symbolId: 'f',
        reason: {
          en: '/θ/ uses tongue against teeth, whereas /f/ uses lower lip against upper teeth.',
          ja: '/θ/は舌と歯、/f/は下唇と上の歯を使います。',
          hu: 'A /θ/ esetében a nyelv ér a foghoz, a /f/ esetében az alsó ajak.'
        }
      }
    ],
    difficulty: 'intermediate',
    lessonOrder: 17,
    isCore: true
  },
  {
    id: 'eth',
    symbol: 'ð',
    unicode: 'U+00F0',
    nameEnglish: 'Voiced dental fricative (eth)',
    nameJapanese: '有声歯摩擦音',
    nameHungarian: 'Zöngés dentális frikatíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'dental',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced dental fricative sound as in English "this".',
      ja: '舌先を前歯に触れさせ、声帯を振るわせて息を摩擦させる音（英語のthの有声音）。',
      hu: 'Zöngés fogi réshang (mint az angol "this"-ben).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against upper front teeth, push air while vibrating vocal cords.',
      ja: '舌先を前歯につけ、声を出しながら「ズー」と息を隙間から通します。',
      hu: 'Tedd a nyelvhegyet a metszőfogakhoz, és rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'this', language: 'English', languageCode: 'en', transcription: '/ðɪs/', meaning: 'Demonstrative', targetSoundIndex: 0 },
      { word: 'δέντρο', language: 'Greek', languageCode: 'el', transcription: '/ˈðendro/', meaning: 'Tree', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_dental_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['θ', 'v', 'z'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 18,
    isCore: true
  },
  {
    id: 'x',
    symbol: 'x',
    unicode: 'U+0078',
    nameEnglish: 'Voiceless velar fricative',
    nameJapanese: '無声軟口蓋摩擦音',
    nameHungarian: 'Zöngétlen veláris frikatíva (magyar ch a \'pech\'-ben)',
    category: 'pulmonic',
    voicing: 'voiceless',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiceless velar fricative sound (German "ach", Scottish "loch", Spanish "j").',
      ja: '舌の奥を軟口蓋に近づけて隙間を作り、強い息を通す無声摩擦音。',
      hu: 'Zöngétlen veláris réshang (a magyar "pech" vagy "düh" végén).'
    },
    articulatoryGuide: {
      en: 'Raise the back of your tongue toward the soft palate (near /k/ position) without blocking completely, blow air to create a rasping friction.',
      ja: '「k」の位置で舌奥を完全に閉じず、狭い隙間を残して息を強く「ハッ」とこすり出します。',
      hu: 'Emeld a nyelv hátsó részét a lágy szájpadláshoz, de ne zárd el teljesen, fújd át a levegőt.'
    },
    exampleWords: [
      { word: 'Loch', language: 'Scottish English / Gaelic', languageCode: 'gd', transcription: '/lɒx/', meaning: 'Lake', targetSoundIndex: 2 },
      { word: 'Bach', language: 'German', languageCode: 'de', transcription: '/baχ~bax/', meaning: 'Stream', targetSoundIndex: 2 },
      { word: 'pech', language: 'Hungarian', languageCode: 'hu', transcription: '/pɛx/', meaning: 'Bad luck', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_velar_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɣ', 'χ', 'h'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 19,
    isCore: true
  },
  {
    id: 'gh',
    symbol: 'ɣ',
    unicode: 'U+0263',
    nameEnglish: 'Voiced velar fricative (gamma)',
    nameJapanese: '有声軟口蓋摩擦音',
    nameHungarian: 'Zöngés veláris frikatíva',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'velar',
    mannerOfArticulation: 'fricative',
    description: {
      en: 'A voiced velar fricative sound (Spanish "fuego" /g/ between vowels, Modern Greek "γ").',
      ja: '軟口蓋で喉奥を鳴らしながら息をこすり出す有声摩擦音。',
      hu: 'Zöngés veláris réshang.'
    },
    articulatoryGuide: {
      en: 'Hold the back of tongue near soft palate (like /x/), but add vocal cord vibration.',
      ja: '/x/と同じ口の形で、声を「ガー」とうならせるように出します。',
      hu: 'Tartsd a nyelved a lágy szájpadlás közelében (mint az /x/-nél), és rezgesd a hangszalagjaidat.'
    },
    exampleWords: [
      { word: 'fuego', language: 'Spanish', languageCode: 'es', transcription: '/ˈfweɣo/', meaning: 'Fire', targetSoundIndex: 3 },
      { word: 'γάλα', language: 'Greek', languageCode: 'el', transcription: '/ˈɣala/', meaning: 'Milk', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Voiced_velar_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_velar_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['x', 'ɡ', 'ʁ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 20,
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
      en: 'A voiceless glottal fricative sound produced by air friction at the vocal folds.',
      ja: '声門（声帯の隙間）を開いて息をそのまま通過させる摩擦音（日本語の「ハ」行の基礎）。',
      hu: 'Zöngétlen gégehang (réshang, a magyar h).'
    },
    articulatoryGuide: {
      en: 'Exhale breath through open vocal folds without shaping tongue heavily.',
      ja: '口を自然に開け、声帯を開いたまま息を「ハー」と吐き出します。',
      hu: 'Lélegezz ki nyitott hangszalagok mellett.'
    },
    exampleWords: [
      { word: 'house', language: 'English', languageCode: 'en', transcription: '/haʊs/', meaning: 'Home', targetSoundIndex: 0 },
      { word: 'ház', language: 'Hungarian', languageCode: 'hu', transcription: '/haːz/', meaning: 'House', targetSoundIndex: 0 },
      { word: '花', language: 'Japanese', languageCode: 'ja', transcription: '/hana/', meaning: 'Flower', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiceless_glottal_fricative.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɦ', 'x', 'ç'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 21,
    isCore: true
  },

  // --- APPROXIMANTS & LATERALS ---
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
      en: 'A voiced lateral approximant made with tongue tip on alveolar ridge while air flows around the sides.',
      ja: '舌先を歯茎につけ、舌の両脇から息と声を逃がす音。',
      hu: 'Zöngés fogmedri oldalsó megközelítő hang (a magyar l).'
    },
    articulatoryGuide: {
      en: 'Place tongue tip against upper teeth ridge, lower sides of tongue to let voiced air pass through.',
      ja: '舌先を歯茎に固定し、舌の側面を開けて声を滑らかに出します。',
      hu: 'Érintsd a nyelvhegyedet a fogmederhez, engedd le a nyelv oldalait a levegő kiáramlásához.'
    },
    exampleWords: [
      { word: 'love', language: 'English', languageCode: 'en', transcription: '/lʌv/', meaning: 'Affection', targetSoundIndex: 0 },
      { word: 'ló', language: 'Hungarian', languageCode: 'hu', transcription: '/loː/', meaning: 'Horse', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alveolar_lateral_approximant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['r', 'ʎ', 'ɫ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 22,
    isCore: true
  },
  {
    id: 'r_tap',
    symbol: 'ɾ',
    unicode: 'U+027E',
    nameEnglish: 'Voiced alveolar tap/flap',
    nameJapanese: '有声歯茎はじき音',
    nameHungarian: 'Zöngés alveoláris legyintőhang (magyar r egy érintéssel, spanyol r)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'tap-flap',
    description: {
      en: 'A quick single tap of tongue against the alveolar ridge (Spanish single "r", American English "butter").',
      ja: '舌先で歯茎を軽く1回だけ「ポン」とはじく音（日本語の「ラ」行の音）。',
      hu: 'A nyelvhegy egyetlen gyors érintése a fogmedren (mint a magyar r rövid ejtésben, spanyol "pero").'
    },
    articulatoryGuide: {
      en: 'Flick tongue tip rapidly against the alveolar ridge once while voicing.',
      ja: '舌先をリラックスさせ、歯茎を一瞬だけ1回はじくように当てます。',
      hu: 'Pattintsd a nyelvhegyet gyorsan a fogmederhez egyszer.'
    },
    exampleWords: [
      { word: 'pero', language: 'Spanish', languageCode: 'es', transcription: '/ˈpeɾo/', meaning: 'But', targetSoundIndex: 2 },
      { word: 'ラーメン', language: 'Japanese', languageCode: 'ja', transcription: '/ɾaːmeɴ/', meaning: 'Ramen', targetSoundIndex: 0 },
      { word: 'butter', language: 'American English', languageCode: 'en-US', transcription: '/ˈbʌɾɚ/', meaning: 'Dairy spread', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Alveolar_tap.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alveolar_tap.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['r', 'r_trill', 'l'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 23,
    isCore: true
  },
  {
    id: 'r_trill',
    symbol: 'r',
    unicode: 'U+0072',
    nameEnglish: 'Voiced alveolar trill',
    nameJapanese: '有声歯茎ふるえ音',
    nameHungarian: 'Zöngés alveoláris pergetett r (magyar r pergetve)',
    category: 'pulmonic',
    voicing: 'voiced',
    placeOfArticulation: 'alveolar',
    mannerOfArticulation: 'trill',
    description: {
      en: 'A rolling trill sound made by rapid repeated vibrations of tongue tip against alveolar ridge.',
      ja: '舌先を歯茎で幾度も震わせる巻き舌の音（スペイン語のrr、ハンガリー語のr）。',
      hu: 'Zöngés pergetett r hang (a magyar r többszöri pergetéssel).'
    },
    articulatoryGuide: {
      en: 'Relax tongue tip near alveolar ridge, pass a strong airstream to vibrate it repeatedly.',
      ja: '舌先を脱力して歯茎近辺に置き、強い息を通してブルルッと震わせます。',
      hu: 'Lazítsd el a nyelvhegyet a fogmedernél, és fújj erős levegőt a pergetéshez.'
    },
    exampleWords: [
      { word: 'perro', language: 'Spanish', languageCode: 'es', transcription: '/ˈpero/', meaning: 'Dog', targetSoundIndex: 2 },
      { word: 'róka', language: 'Hungarian', languageCode: 'hu', transcription: '/roːkɒ/', meaning: 'Fox', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alveolar_trill.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɾ', 'ʀ', 'ʁ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 24,
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
      en: 'Raise middle body of tongue toward roof of mouth (palate) and transition smoothly into following vowel.',
      ja: '舌の中央部を口の天井に近づけ、摩擦を起こさず滑らかに「イ〜ヤ」と発声します。',
      hu: 'Emeld a nyelv középső részét a szájpadláshoz, és lágyan siklass át a következő magánhangzóra.'
    },
    exampleWords: [
      { word: 'yes', language: 'English', languageCode: 'en', transcription: '/jɛs/', meaning: 'Affirmative', targetSoundIndex: 0 },
      { word: 'jó', language: 'Hungarian', languageCode: 'hu', transcription: '/joː/', meaning: 'Good', targetSoundIndex: 0 },
      { word: '山', language: 'Japanese', languageCode: 'ja', transcription: '/jama/', meaning: 'Mountain', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Palatal_approximant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['i', 'ɥ', 'ç'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 25,
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
      en: 'A rounded glide produced by rounding lips while raising the back of tongue toward soft palate.',
      ja: '唇を丸めつつ舌の奥を軟口蓋に近づけて出す滑音（ワ行の音、英語のw）。',
      hu: 'Ajakkerekítéssel és a nyelv hátuljának emelésével képezett siklóhang.'
    },
    articulatoryGuide: {
      en: 'Pucker lips tightly, raise back of tongue toward velum, and release quickly into vowel with voice.',
      ja: '唇をしっかり丸め、舌の奥を持ち上げながら声を瞬時に解き放ちます。',
      hu: 'Kerekítsd az ajkaidat, emeld a nyelv hátulját, és engedd át a hangot.'
    },
    exampleWords: [
      { word: 'water', language: 'English', languageCode: 'en', transcription: '/ˈwɔːtər/', meaning: 'Liquid H2O', targetSoundIndex: 0 },
      { word: '私', language: 'Japanese', languageCode: 'ja', transcription: '/wataʃi/', meaning: 'I/Me', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labial-velar_approximant.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_labial-velar_approximant.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['u', 'v', 'ʍ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 26,
    isCore: true
  },

  // ==========================================
  // VOWELS
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
      ja: '舌を極限まで前上方に引き上げ、唇を丸めずに広げて出す高母音（イの音）。',
      hu: 'Zárt, elülső képezésű ajakréses magánhangzó (a magyar i és í).'
    },
    articulatoryGuide: {
      en: 'Raise the front of your tongue high toward the hard palate without causing friction, spread lips widely.',
      ja: '舌の前部を高く口の天井に近づけ、唇を横にひいて「イー」と発音します。',
      hu: 'Emeld a nyelv elülső részét magasra a szájpadláshoz, és húzd szélesre az ajkaidat.'
    },
    exampleWords: [
      { word: 'see', language: 'English', languageCode: 'en', transcription: '/siː/', meaning: 'Perceive with eyes', targetSoundIndex: 1 },
      { word: 'így', language: 'Hungarian', languageCode: 'hu', transcription: '/iːɟ/', meaning: 'Like this', targetSoundIndex: 0 },
      { word: '犬', language: 'Japanese', languageCode: 'ja', transcription: '/inu/', meaning: 'Dog', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Close_front_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Close_front_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['y', 'ɪ', 'e'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 27,
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
      ja: '舌の位置は「イ」のまま、唇を丸めて出す母音（フランス語のu、ドイツ語のü）。',
      hu: 'Zárt elülső magánhangzó ajakkerekítéssel (a magyar ü és ű).'
    },
    articulatoryGuide: {
      en: 'Hold tongue position for /i/ ("ee"), but round your lips tightly like /u/ ("oo").',
      ja: '「イー」と言う舌の形のまま、唇だけを「ウー」のように丸めます。',
      hu: 'Formázz "i" pozíciót a nyelveddel, de kerekítsd az ajkaidat mint az "u"-nál.'
    },
    exampleWords: [
      { word: 'üveg', language: 'Hungarian', languageCode: 'hu', transcription: '/yvɛɡ/', meaning: 'Glass/Bottle', targetSoundIndex: 0 },
      { word: 'über', language: 'German', languageCode: 'de', transcription: '/ˈyːbɐ/', meaning: 'Over/Above', targetSoundIndex: 0 },
      { word: 'tu', language: 'French', languageCode: 'fr', transcription: '/ty/', meaning: 'You', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Close_front_rounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['i', 'u', 'ʏ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 28,
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
      en: 'A close-mid front unrounded vowel (as in French "été", Spanish "e", magyar "é").',
      ja: '「イ」と「エ」の中間よりやや高めの前舌母音。',
      hu: 'Középső-zárt elülső magánhangzó (a magyar é hanghoz közel).'
    },
    articulatoryGuide: {
      en: 'Position tongue in front, slightly lower than /i/, lips unrounded.',
      ja: '「イ」の位置からほんの少し顎を下げ、唇を開いて「エー」と発声します。',
      hu: 'Tedd a nyelved előre, kissé alacsonyabban mint az /i/-nél, kerekítés nélkül.'
    },
    exampleWords: [
      { word: 'év', language: 'Hungarian', languageCode: 'hu', transcription: '/eːv/', meaning: 'Year', targetSoundIndex: 0 },
      { word: 'été', language: 'French', languageCode: 'fr', transcription: '/ete/', meaning: 'Summer', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Close-mid_front_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Close-mid_front_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['i', 'ɛ', 'ø'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 29,
    isCore: true
  },
  {
    id: 'epsilon',
    symbol: 'ɛ',
    unicode: 'U+025B',
    nameEnglish: 'Open-mid front unrounded vowel (epsilon)',
    nameJapanese: '非円唇前舌半広母音',
    nameHungarian: 'Középső-nyílt elülső ajakréses magánhangzó (magyar e)',
    category: 'vowels',
    vowelHeight: 'open-mid',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'An open-mid front vowel (English "bed", magyar short "e").',
      ja: '口を大きめに開けて発声する前舌のエの音。',
      hu: 'Középső-nyílt elülső ajakréses magánhangzó (a magyar rövid e hang).'
    },
    articulatoryGuide: {
      en: 'Lower mouth slightly lower than /e/, open lips comfortably into a relaxed front vowel.',
      ja: '「エ」より少し口を縦に広く開けて発音します。',
      hu: 'Nyisd a szád kissé tágabbra mint az /e/-nél, ejtsd a magyar rövid "e" hangot.'
    },
    exampleWords: [
      { word: 'bed', language: 'English', languageCode: 'en', transcription: '/bɛd/', meaning: 'Sleeping furniture', targetSoundIndex: 1 },
      { word: 'ember', language: 'Hungarian', languageCode: 'hu', transcription: '/ɛmbɛr/', meaning: 'Human/Person', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Open-mid_front_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Open-mid_front_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['e', 'æ', 'œ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 30,
    isCore: true
  },
  {
    id: 'ash',
    symbol: 'æ',
    unicode: 'U+00E6',
    nameEnglish: 'Near-open front unrounded vowel (ash)',
    nameJapanese: '非円唇前舌近広母音',
    nameHungarian: 'Majdnem nyílt elülső ajakréses magánhangzó (angol cat)',
    category: 'vowels',
    vowelHeight: 'near-open',
    vowelBackness: 'front',
    roundness: 'unrounded',
    description: {
      en: 'A broad open front unrounded vowel as in English "cat", "flat".',
      ja: '「ア」と「エ」の中間のような広く開けた前舌音（英語のcatのア）。',
      hu: 'Szélesen nyitott elülső magánhangzó (mint az angol "cat"-ben).'
    },
    articulatoryGuide: {
      en: 'Drop your jaw wide while keeping tongue body forward and flat, unrounded lips.',
      ja: '顎を大きく下げ、舌を前方に保ちながら「ア」と「エ」の間の音を出します。',
      hu: 'Engedd le az álladat tágra, tartsd a nyelved előre tolva.'
    },
    exampleWords: [
      { word: 'cat', language: 'English', languageCode: 'en', transcription: '/kæt/', meaning: 'Feline', targetSoundIndex: 1 },
      { word: 'flat', language: 'English', languageCode: 'en', transcription: '/flæt/', meaning: 'Level/Apartment', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Near-open_front_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɛ', 'a', 'ʌ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 31,
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
      en: 'An open front vowel (Spanish/Italian "a", magyar "á", Japanese "あ").',
      ja: '口を大きく開けて舌の位置を前に置いた明るいアの音。',
      hu: 'Teljesen nyitott elülső ajakréses magánhangzó (a magyar á hang).'
    },
    articulatoryGuide: {
      en: 'Open mouth wide, rest tongue low and forward, pronounce clear clear open "a".',
      ja: '口を大きく開き、舌を低い位置の前寄りに置いて「アー」と声を張り上げます。',
      hu: 'Nyisd ki a szád tágra, a nyelv laposan pihen elöl.'
    },
    exampleWords: [
      { word: 'ágy', language: 'Hungarian', languageCode: 'hu', transcription: '/aːɟ/', meaning: 'Bed', targetSoundIndex: 0 },
      { word: '朝', language: 'Japanese', languageCode: 'ja', transcription: '/asa/', meaning: 'Morning', targetSoundIndex: 0 },
      { word: 'padre', language: 'Spanish', languageCode: 'es', transcription: '/ˈpadɾe/', meaning: 'Father', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Open_front_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Open_front_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['æ', 'ɑ', 'ɒ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 32,
    isCore: true
  },
  {
    id: 'schwa',
    symbol: 'ə',
    unicode: 'U+0259',
    nameEnglish: 'Mid central vowel (schwa)',
    nameJapanese: '中舌中央母音（シュワー）',
    nameHungarian: 'Középső középső magánhangzó (schwa / svá)',
    category: 'vowels',
    vowelHeight: 'mid',
    vowelBackness: 'central',
    roundness: 'unrounded',
    description: {
      en: 'The neutral central unstressed vowel sound in English ("about", "sofa").',
      ja: '口や舌に力を入れずに曖昧に出す中性的な母音（シュワー）。',
      hu: 'A semleges, hanglejtés nélküli központi magánhangzó (schwa).'
    },
    articulatoryGuide: {
      en: 'Relax tongue and mouth completely in center position, make a short, unstressed vocal sound.',
      ja: '口も舌も完全にリラックスさせ、力を抜いた「ア」と「エ」のあいのこを軽く短く発声します。',
      hu: 'Lazítsd el a nyelved és a szádat teljesen középen, hozz létre egy rövid, laza hangot.'
    },
    exampleWords: [
      { word: 'about', language: 'English', languageCode: 'en', transcription: '/əˈbaʊt/', meaning: 'Regarding', targetSoundIndex: 0 },
      { word: 'sofa', language: 'English', languageCode: 'en', transcription: '/ˈsoʊ.fə/', meaning: 'Couch', targetSoundIndex: 3 },
      { word: 'bitte', language: 'German', languageCode: 'de', transcription: '/ˈbɪtə/', meaning: 'Please', targetSoundIndex: 4 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mid-central_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ʌ', 'ɜ', 'a'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 33,
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
      hu: 'Zárt, hátsó ajakkerekítéses magánhangzó (a magyar u és ú).'
    },
    articulatoryGuide: {
      en: 'Pull tongue back and high toward soft palate, purse lips into a tight small circle.',
      ja: '舌奥を軟口蓋に向けて高く引き上げ、唇を小さく丸めて「ウー」と出します。',
      hu: 'Húzd a nyelved hátra és fel, kerekítsd az ajkaidat szoros kis körre.'
    },
    exampleWords: [
      { word: 'boot', language: 'English', languageCode: 'en', transcription: '/buːt/', meaning: 'Footwear', targetSoundIndex: 1 },
      { word: 'út', language: 'Hungarian', languageCode: 'hu', transcription: '/uːt/', meaning: 'Road/Way', targetSoundIndex: 0 },
      { word: '海', language: 'Japanese (approx)', languageCode: 'ja', transcription: '/ɯmi/', meaning: 'Sea (uses ɯ)', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Close_back_rounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Close_back_rounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɯ', 'ʊ', 'o'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 34,
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
      en: 'A close-mid back rounded vowel (Spanish "o", French "eau", magyar "ó").',
      ja: '唇を丸め、舌の奥を中高の位置に置いて出すオーの音。',
      hu: 'Középső-zárt hátsó ajakkerekítéses magánhangzó (a magyar ó hang).'
    },
    articulatoryGuide: {
      en: 'Position tongue back, slightly lower than /u/, lips rounded into medium circle.',
      ja: '/u/よりも少し口を開け、唇を丸めたままオの音を出します。',
      hu: 'Helyezd a nyelved hátra, kissé alacsonyabban mint az /u/-nál, közepes ajakkerekítéssel.'
    },
    exampleWords: [
      { word: 'ófa', language: 'Hungarian', languageCode: 'hu', transcription: '/oːfɒ/', meaning: 'Old tree', targetSoundIndex: 0 },
      { word: '男', language: 'Japanese', languageCode: 'ja', transcription: '/otoko/', meaning: 'Man', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Close-mid_back_rounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['u', 'ɔ', 'oː'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 35,
    isCore: true
  },
  {
    id: 'open_o',
    symbol: 'ɔ',
    unicode: 'U+0254',
    nameEnglish: 'Open-mid back rounded vowel (open o)',
    nameJapanese: '円唇後舌半広母音',
    nameHungarian: 'Középső-nyílt hátsó ajakkerekítéses magánhangzó (magyar o)',
    category: 'vowels',
    vowelHeight: 'open-mid',
    vowelBackness: 'back',
    roundness: 'rounded',
    description: {
      en: 'An open-mid back rounded vowel (British "thought", magyar short "o").',
      ja: '口をより大きめに開けて発声する丸みのあるオの音。',
      hu: 'Középső-nyílt hátsó magánhangzó (a magyar rövid o hang).'
    },
    articulatoryGuide: {
      en: 'Open mouth wider than /o/, rounded lips, back of tongue lowered slightly.',
      ja: '「オ」より顎を開いて口の奥を広げ、唇を丸めて発声します。',
      hu: 'Nyisd ki a szád tágabbra mint az /o/-nál, ejtsd a magyar rövid "o" hangot.'
    },
    exampleWords: [
      { word: 'orvos', language: 'Hungarian', languageCode: 'hu', transcription: '/ɔrvɔʃ/', meaning: 'Doctor', targetSoundIndex: 0 },
      { word: 'thought', language: 'British English', languageCode: 'en-GB', transcription: '/θɔːt/', meaning: 'Idea', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Open-mid_back_rounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['o', 'ɒ', 'ʌ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 36,
    isCore: true
  },
  {
    id: 'script_a',
    symbol: 'ɑ',
    unicode: 'U+0251',
    nameEnglish: 'Open back unrounded vowel (script a)',
    nameJapanese: '非円唇後舌広母音',
    nameHungarian: 'Nyílt hátsó ajakréses magánhangzó (amerikai "father")',
    category: 'vowels',
    vowelHeight: 'open',
    vowelBackness: 'back',
    roundness: 'unrounded',
    description: {
      en: 'An open back unrounded vowel (English "father", "spa").',
      ja: '口を一番大きく開け、舌を奥に低く引く非円唇の深みのあるア。',
      hu: 'Teljesen nyitott hátsó ajakréses magánhangzó (mint az amerikai "father"-ben).'
    },
    articulatoryGuide: {
      en: 'Drop lower jaw wide, draw tongue low into back of mouth without rounding lips.',
      ja: '喉奥を開くように顎を下ろして口を全開にし、唇を丸めずに「アー」と出します。',
      hu: 'Engedd le a torkodat és az álladat tágra, a nyelv hátul alacsonyan van.'
    },
    exampleWords: [
      { word: 'father', language: 'English', languageCode: 'en', transcription: '/ˈfɑːðər/', meaning: 'Male parent', targetSoundIndex: 1 },
      { word: 'spa', language: 'English', languageCode: 'en', transcription: '/spɑː/', meaning: 'Health resort', targetSoundIndex: 2 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Open_back_unrounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['a', 'ɒ', 'ʌ'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 37,
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
      en: 'An open back rounded vowel sound (magyar short "a", British English "lot").',
      ja: '口を大きく開けて舌を奥にし、唇にわずかに丸みをつけるア/オの中間音。',
      hu: 'Teljesen nyitott hátsó ajakkerekítéses magánhangzó (a magyar a hang).'
    },
    articulatoryGuide: {
      en: 'Form an open /ɑ/ shape at the back of mouth, but round your lips slightly (as in Hungarian "a").',
      ja: '口を奥広く開け、唇を軽く丸めて深みのある「ア/オ」を出します。',
      hu: 'Nyisd tágra a szád mélyen hátul, és adj hozzá enyhe ajakkerekítést (magyar "a").'
    },
    exampleWords: [
      { word: 'alma', language: 'Hungarian', languageCode: 'hu', transcription: '/ɒlmɒ/', meaning: 'Apple', targetSoundIndex: 0 },
      { word: 'lot', language: 'British English', languageCode: 'en-GB', transcription: '/lɒt/', meaning: 'Quantity', targetSoundIndex: 1 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Open_back_rounded_vowel.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Open_back_rounded_vowel.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ɑ', 'ɔ', 'a'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 38,
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Bilabial_click.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bilabial_click.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ǀ', 'ǃ', 'ǂ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 39,
    isCore: false
  },
  {
    id: 'click_dental',
    symbol: 'ǀ',
    unicode: 'U+01C0',
    nameEnglish: 'Dental click',
    nameJapanese: '歯吸気音（「チッチッ」という音）',
    nameHungarian: 'Dentális csettintőhang (tsk-tsk)',
    category: 'non-pulmonic',
    subcategory: 'click',
    description: {
      en: 'A dental click produced by snapping tongue off front teeth (the "tsk-tsk" or "tut-tut" disapproving sound).',
      ja: '舌先を上の前歯から引っ張って「チッチッ」と鳴らす音。',
      hu: 'A fogak mögött képezett csettintés ("tsk-tsk" helytelenítő hang).'
    },
    articulatoryGuide: {
      en: 'Press tongue tip against upper front teeth, create suction, and pull down sharply.',
      ja: '舌先を前歯の裏につけて吸着させ、パチンと下へ引っ張ります。',
      hu: 'Nyomd a nyelvhegyedet a felső metszőfogakhoz, majd rántsd le.'
    },
    exampleWords: [
      { word: 'Xhosa', language: 'Xhosa', languageCode: 'xh', transcription: '/ˈkǁʰoːsa/ (uses ǀ in name)', meaning: 'Xhosa language', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dental_click.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dental_click.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['ǁ', 'ǃ', 'ʘ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 40,
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
      en: 'A voiced bilabial consonant produced by lowering the larynx to suck air inward while releasing closed lips.',
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Voiced_bilabial_implosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Voiced_bilabial_implosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['b', 'ɗ', 'ɠ'],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 41,
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
      en: 'A sharp ejective stop produced by closing vocal folds and lips, raising larynx, and popping air out compressed.',
      ja: '声門と唇を同時に閉じ、喉頭を持ち上げて圧力を高めて「ッパ！」と弾かせる放出音。',
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
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bilabial_ejective_plosive.ogg',
    audioAttribution: {
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bilabial_ejective_plosive.ogg',
      creator: 'Peter Isotalo',
      license: 'CC BY-SA 3.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true
    },
    relatedSymbols: ['p', 't\'', 'k\''],
    commonConfusions: [],
    difficulty: 'advanced',
    lessonOrder: 42,
    isCore: false
  },

  // ==========================================
  // DIACRITICS & SUPRASEGMENTALS
  // ==========================================

  {
    id: 'diacritic_aspirated',
    symbol: 'ʰ',
    unicode: 'U+02B0',
    nameEnglish: 'Aspirated diacritic',
    nameJapanese: '有気記号',
    nameHungarian: 'Heves kilégzés (aspiráció) mellékjel',
    category: 'diacritics',
    diacriticPlacement: 'after',
    description: {
      en: 'Indicates a strong puff of air (aspiration) following a plosive (e.g., English "p" in "pin" [pʰɪn]).',
      ja: '破裂音の直後に息が激しく吹き出す（有気音）ことを示します。',
      hu: 'Azt jelzi, hogy a zárhangot erős levegőkiáramlás (aspiráció) követi.'
    },
    articulatoryGuide: {
      en: 'Release the plosive stop followed immediately by a noticeable burst of breath before the vowel.',
      ja: '破裂させた直後に「ハッ」と息を吐き出しながら次の音へつなげます。',
      hu: 'Kipattintás után azonnal fújj ki egy érezhető levegőlöketet.'
    },
    exampleWords: [
      { word: 'pin', language: 'English', languageCode: 'en', transcription: '[pʰɪn]', meaning: 'Fastener', targetSoundIndex: 0 }
    ],
    audioSource: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg',
    relatedSymbols: ['p', 't', 'k'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 43,
    isCore: true
  },
  {
    id: 'diacritic_syllabic',
    symbol: '̩',
    unicode: 'U+0329',
    nameEnglish: 'Syllabic diacritic',
    nameJapanese: '音節主音化記号',
    nameHungarian: 'Szótagképző mellékjel',
    category: 'diacritics',
    diacriticPlacement: 'below',
    description: {
      en: 'Placed below a consonant to show it functions as the core nucleus of a syllable without a vowel (e.g. English "button" [bʌtn̩]).',
      ja: '子音記号の下に付し、その子音が母音なしで単独で音節の核（音節主音）となることを示します。',
      hu: 'Azt jelzi, hogy a mássalhangzó magánhangzó nélkül képez szótagmagot.'
    },
    articulatoryGuide: {
      en: 'Hold the consonant with sufficient duration and resonance to form a full syllable.',
      ja: '母音を挟まずに、その子音自体を響かせて1音節を作ります。',
      hu: 'Tartsd a mássalhangzót elegendő ideig ahhoz, hogy önálló szótagot alkosson.'
    },
    exampleWords: [
      { word: 'button', language: 'English', languageCode: 'en', transcription: '[ˈbʌt.n̩]', meaning: 'Fastener', targetSoundIndex: 4 }
    ],
    relatedSymbols: ['n', 'm', 'l'],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 44,
    isCore: true
  },
  {
    id: 'stress_primary',
    symbol: 'ˈ',
    unicode: 'U+02C8',
    nameEnglish: 'Primary stress mark',
    nameJapanese: '第一アクセント（主応力記号）',
    nameHungarian: 'Főhangsúly jel',
    category: 'suprasegmentals',
    description: {
      en: 'Placed before the syllable that receives the main emphasis and pitch change in a word.',
      ja: '単語の中で最も強く高いピッチで発音される音節の直前に置きます。',
      hu: 'A szó legfőbb hangsúlyt kapó szótagja elé helyezendő jel.'
    },
    articulatoryGuide: {
      en: 'Say the following syllable louder, slightly longer, and with higher pitch contour.',
      ja: 'この記号の直後の音節を、より強く、長く、高めの音調で発声します。',
      hu: 'Ejtsd a rákövetkező szótagot hangosabban, hosszabban és magasabb hangmagassággal.'
    },
    exampleWords: [
      { word: 'about', language: 'English', languageCode: 'en', transcription: '/əˈbaʊt/', meaning: 'Regarding', targetSoundIndex: 1 }
    ],
    relatedSymbols: ['ˌ', 'ː'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 45,
    isCore: true
  },
  {
    id: 'length_mark',
    symbol: 'ː',
    unicode: 'U+02D0',
    nameEnglish: 'Triangular colon / Long vowel diacritic',
    nameJapanese: '長音記号',
    nameHungarian: 'Hosszúságjel (hosszú magánhangzó vagy mássalhangzó)',
    category: 'suprasegmentals',
    description: {
      en: 'Indicates that the preceding vowel or consonant is held longer in duration.',
      ja: '直前の音（母音または子音）を長く引き伸ばして発音することを示します。',
      hu: 'Azt jelzi, hogy az előtte álló magánhangzó vagy mássalhangzó hosszabb időtartamú.'
    },
    articulatoryGuide: {
      en: 'Sustain the vocalic or consonantal articulation for roughly double the normal duration.',
      ja: '直前の音の口の形を崩さず、通常の約2倍の長さに維持します。',
      hu: 'Tartsd meg az előző hangot nagyjából kétszer olyan hosszan.'
    },
    exampleWords: [
      { word: 'víz', language: 'Hungarian', languageCode: 'hu', transcription: '/viːz/', meaning: 'Water', targetSoundIndex: 1 },
      { word: 'see', language: 'English', languageCode: 'en', transcription: '/siː/', meaning: 'Perceive', targetSoundIndex: 1 }
    ],
    relatedSymbols: ['ˈ', 'ˑ'],
    commonConfusions: [],
    difficulty: 'beginner',
    lessonOrder: 46,
    isCore: true
  }
];
