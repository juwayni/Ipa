export interface LessonLevel {
  level: number;
  title: {
    en: string;
    ja: string;
    hu: string;
  };
  description: {
    en: string;
    ja: string;
    hu: string;
  };
  symbolIds: string[];
}

export const CURRICULUM_LEVELS: LessonLevel[] = [
  {
    level: 1,
    title: {
      en: "Level 1: IPA Foundations & Plosives",
      ja: "レベル1: IPA基礎と破裂音",
      hu: "1. Szint: IPA Alapok és Zárhangok (Plosivák)",
    },
    description: {
      en: "Learn how stops/plosives stop airflow and pop open. Master /p/, /b/, /t/, /d/, /k/, /g/.",
      ja: "破裂音の基本である /p/, /b/, /t/, /d/, /k/, /g/ の発音と記号を学びます。",
      hu: "Ismerkedj meg a p, b, t, d, k, g zárhangok képzésével és jelölésével.",
    },
    symbolIds: ['p', 'b', 't', 'd', 'k', 'g'],
  },
  {
    level: 2,
    title: {
      en: "Level 2: Nasal Sounds",
      ja: "レベル2: 鼻音（ナザル）",
      hu: "2. Szint: Orrhangok (Nazálisok)",
    },
    description: {
      en: "Discover how lowering the velum directs sound through the nose. Learn /m/, /n/, /ŋ/, /ɲ/.",
      ja: "息を鼻に抜いて出す鼻音 /m/, /n/, /ŋ/, /ɲ/ をマスターします。",
      hu: "Tanuld meg az m, n, ŋ (ng) és ɲ (ny) orrhangok pontos megkülönböztetését.",
    },
    symbolIds: ['m', 'n', 'ng', 'ny'],
  },
  {
    level: 3,
    title: {
      en: "Level 3: Common Fricatives",
      ja: "レベル3: 基本の摩擦音",
      hu: "3. Szint: Alapvető Réshangok (Frikatívák)",
    },
    description: {
      en: "Master turbulent air friction sounds /f/, /v/, /s/, /z/, /h/.",
      ja: "息を摩擦させて出す基本的な音 /f/, /v/, /s/, /z/, /h/ を修得します。",
      hu: "Sajátítsd el az f, v, s (sz), z, h réshangok képzését.",
    },
    symbolIds: ['f', 'v', 's', 'z', 'h'],
  },
  {
    level: 4,
    title: {
      en: "Level 4: Sibilants & Dental Fricatives",
      ja: "レベル4: 歯茎後音と歯摩擦音",
      hu: "4. Szint: Sziszegő és Fog-réshangok",
    },
    description: {
      en: "Learn /ʃ/ (sh), /ʒ/ (zh), /θ/ (th-think), /ð/ (th-this), and /x/.",
      ja: "/ʃ/（シュ）、/ʒ/（ジュ）、/θ/（th無声）、/ð/（th有声）、/x/（ハッ）を比較学習します。",
      hu: "Ismerd meg a ʃ (s), ʒ (zs), θ (angol th), ð, és x (ch) réshangokat.",
    },
    symbolIds: ['esh', 'ezh', 'theta', 'eth', 'x', 'gh'],
  },
  {
    level: 5,
    title: {
      en: "Level 5: Core Vowels",
      ja: "レベル5: 基本の母音",
      hu: "5. Szint: Alapvető Magánhangzók",
    },
    description: {
      en: "Explore high, mid, and low primary vowels /i/, /e/, /a/, /u/, /o/.",
      ja: "主要な母音位置 /i/, /e/, /a/, /u/, /o/ の口の形と舌の高さを学びます。",
      hu: "Tanuld meg az i, e, a, u, o alapvető magánhangzó-pozíciókat.",
    },
    symbolIds: ['i', 'e', 'a', 'u', 'o'],
  },
  {
    level: 6,
    title: {
      en: "Level 6: Extended Vowels & Schwa",
      ja: "レベル6: 発展母音とシュワー",
      hu: "6. Szint: Bővített Magánhangzók és Schwa",
    },
    description: {
      en: "Master /ɛ/, /æ/, /ə/ (schwa), /ɔ/, /y/, /ɑ/, and /ɒ/.",
      ja: "ニュアンスの異なる母音 /ɛ/, /æ/, /ə/, /ɔ/, /y/, /ɑ/, /ɒ/ を区別します。",
      hu: "Ismerd meg az ɛ (e), æ, ə (schwa), ɔ (o), y (ü), ɑ és ɒ (magyar a) hangokat.",
    },
    symbolIds: ['epsilon', 'ash', 'schwa', 'open_o', 'y', 'script_a', 'turned_script_a'],
  },
  {
    level: 7,
    title: {
      en: "Level 7: Approximants, Taps & Trills",
      ja: "レベル7: 接近音・はじき音・ふるえ音",
      hu: "7. Szint: Megközelítő hangok, Legyintők és Pergetettek",
    },
    description: {
      en: "Master liquids and glides: /l/, /ɾ/ (tap), /r/ (trill), /j/ (y), /w/.",
      ja: "流音・滑音の /l/, /ɾ/（1回はじき）, /r/（巻き舌）, /j/（ヤ行）, /w/（ワ行）を学びます。",
      hu: "Sajátítsd el az l, ɾ (pattintott r), r (pergetett r), j, w hangokat.",
    },
    symbolIds: ['l', 'r_tap', 'r_trill', 'j', 'w'],
  },
  {
    level: 8,
    title: {
      en: "Level 8: Non-Pulmonic Consonants",
      ja: "レベル8: 非肺息音（クリック・吸気音・放出音）",
      hu: "8. Szint: Nem Tüdővel Képzett Hangok",
    },
    description: {
      en: "Explore rare world language sounds: Clicks /ʘ/, /ǀ/, Implosives /ɓ/, Ejectives /p'/.",
      ja: "世界言語の特殊な音：吸気音（クリック）/ʘ/, /ǀ/、内破音 /ɓ/、放出音 /p'/ を体験します。",
      hu: "Próbáld ki a csettintő /ʘ/, /ǀ/, implozív /ɓ/ és ejektív /p'/ hangokat.",
    },
    symbolIds: ['click_bilabial', 'click_dental', 'implosive_voiced_bilabial', 'ejective_p'],
  },
  {
    level: 9,
    title: {
      en: "Level 9: Diacritics & Suprasegmentals",
      ja: "レベル9: 補助記号と超分節素",
      hu: "9. Szint: Mellékjelek és Szupraszegmentumok",
    },
    description: {
      en: "Understand aspiration /ʰ/, syllabicity /̩/, stress /ˈ/, and vowel length /ː/.",
      ja: "有気音 /ʰ/、音節化 /̩/、アクセント /ˈ/、長音 /ː/ の表記ルールを網羅します。",
      hu: "Aspiráció /ʰ/, szótagmag-jelölés /̩/, főhangsúly /ˈ/ és hosszúságjel /ː/.",
    },
    symbolIds: ['diacritic_aspirated', 'diacritic_syllabic', 'stress_primary', 'length_mark'],
  },
];
