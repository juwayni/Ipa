/**
 * IPAEntry schema used by the app.
 * id, symbol, unicode, names.{en,ja,hu}.{name,description}, category, subcategory, type,
 * voicing, placeOfArticulation, mannerOfArticulation, vowelHeight, vowelBackness, rounded,
 * description, howToProduce, exampleWords, exampleLanguages, audioSources, audioFiles,
 * relatedSymbols, commonConfusions, difficulty, lessonOrder, isCore, isExtended, notes, references, searchAliases.
 */
export const categories = ['pulmonic-consonant', 'non-pulmonic-consonant', 'vowel', 'diacritic', 'suprasegmental', 'tone', 'other'];
export const consonantPlaces = ['bilabial', 'labiodental', 'dental', 'alveolar', 'postalveolar', 'retroflex', 'palatal', 'velar', 'uvular', 'pharyngeal', 'glottal'];
export const consonantManners = ['plosive', 'nasal', 'trill', 'tap/flap', 'fricative', 'lateral fricative', 'approximant', 'lateral approximant'];
export const references = {
  ipaChart: { title: 'International Phonetic Association IPA chart', url: 'https://www.internationalphoneticassociation.org/content/ipa-chart' },
  unicode: { title: 'Unicode code charts for IPA Extensions and combining marks', url: 'https://www.unicode.org/charts/' },
  handbook: { title: 'Handbook of the International Phonetic Association', url: 'https://www.cambridge.org/core/books/handbook-of-the-international-phonetic-association/720F3D87B3A6C6A19A4D26D74EEB6E1E' }
};
export const referenceOnlyAudio = {
  kind: 'reference',
  url: references.ipaChart.url,
  creator: 'International Phonetic Association',
  license: 'reference only; audio not bundled',
  licenseUrl: 'https://www.internationalphoneticassociation.org/',
  attributionRequired: false,
  commercialUseAllowed: false,
  modificationAllowed: false,
  redistributionAllowed: false,
  notes: 'The app intentionally does not bundle third-party recordings until each file has explicit creator, license, commercial-use, modification, and redistribution metadata.'
};
