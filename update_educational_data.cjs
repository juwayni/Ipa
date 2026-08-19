const fs = require('fs');

const file = 'src/data/ipaSymbols.ts';
let code = fs.readFileSync(file, 'utf8');

const educationalMaps = `
// Educational Maps for Examples, Related Symbols, and Common Confusions
const EXAMPLE_WORDS_MAP: Record<string, Array<{ word: string; language: string; ipa: string; targetHighlight?: string; languageCode?: string }>> = {
  'p': [{ word: 'pen', language: 'English', ipa: '/pɛn/', targetHighlight: 'p', languageCode: 'en' }, { word: 'パン', language: 'Japanese', ipa: '/paɴ/', targetHighlight: 'パ', languageCode: 'ja' }, { word: 'apa', language: 'Hungarian', ipa: '/ɒpɒ/', targetHighlight: 'p', languageCode: 'hu' }],
  'b': [{ word: 'bed', language: 'English', ipa: '/bɛd/', targetHighlight: 'b', languageCode: 'en' }, { word: 'バス', language: 'Japanese', ipa: '/basu/', targetHighlight: 'バ', languageCode: 'ja' }, { word: 'bor', language: 'Hungarian', ipa: '/bor/', targetHighlight: 'b', languageCode: 'hu' }],
  't': [{ word: 'top', language: 'English', ipa: '/tɑp/', targetHighlight: 't', languageCode: 'en' }, { word: 'tam', language: 'Hungarian', ipa: '/tɒm/', targetHighlight: 't', languageCode: 'hu' }],
  'd': [{ word: 'dog', language: 'English', ipa: '/dɔɡ/', targetHighlight: 'd', languageCode: 'en' }, { word: 'díj', language: 'Hungarian', ipa: '/diːj/', targetHighlight: 'd', languageCode: 'hu' }],
  'k': [{ word: 'cat', language: 'English', ipa: '/kæt/', targetHighlight: 'c', languageCode: 'en' }, { word: 'kép', language: 'Hungarian', ipa: '/keːp/', targetHighlight: 'k', languageCode: 'hu' }],
  'g': [{ word: 'go', language: 'English', ipa: '/ɡoʊ/', targetHighlight: 'g', languageCode: 'en' }, { word: 'golyó', language: 'Hungarian', ipa: '/ɡojoː/', targetHighlight: 'g', languageCode: 'hu' }],
  'm': [{ word: 'man', language: 'English', ipa: '/mæn/', targetHighlight: 'm', languageCode: 'en' }, { word: 'ma', language: 'Hungarian', ipa: '/mɒ/', targetHighlight: 'm', languageCode: 'hu' }],
  'n': [{ word: 'net', language: 'English', ipa: '/nɛt/', targetHighlight: 'n', languageCode: 'en' }, { word: 'nap', language: 'Hungarian', ipa: '/nɒp/', targetHighlight: 'n', languageCode: 'hu' }],
  'ng': [{ word: 'sing', language: 'English', ipa: '/sɪŋ/', targetHighlight: 'ng', languageCode: 'en' }],
  'ny': [{ word: 'nyár', language: 'Hungarian', ipa: '/ɲaːr/', targetHighlight: 'ny', languageCode: 'hu' }],
  'f': [{ word: 'fish', language: 'English', ipa: '/fɪʃ/', targetHighlight: 'f', languageCode: 'en' }, { word: 'fa', language: 'Hungarian', ipa: '/fɒ/', targetHighlight: 'f', languageCode: 'hu' }],
  'v': [{ word: 'van', language: 'English', ipa: '/væn/', targetHighlight: 'v', languageCode: 'en' }, { word: 'víz', language: 'Hungarian', ipa: '/viːz/', targetHighlight: 'v', languageCode: 'hu' }],
  's': [{ word: 'sun', language: 'English', ipa: '/sʌn/', targetHighlight: 's', languageCode: 'en' }],
  'z': [{ word: 'zoo', language: 'English', ipa: '/zuː/', targetHighlight: 'z', languageCode: 'en' }],
  'esh': [{ word: 'shoe', language: 'English', ipa: '/ʃuː/', targetHighlight: 'sh', languageCode: 'en' }, { word: 'só', language: 'Hungarian', ipa: '/ʃoː/', targetHighlight: 's', languageCode: 'hu' }],
  'ezh': [{ word: 'measure', language: 'English', ipa: '/ˈmɛʒər/', targetHighlight: 's', languageCode: 'en' }],
  'theta': [{ word: 'think', language: 'English', ipa: '/θɪŋk/', targetHighlight: 'th', languageCode: 'en' }],
  'eth': [{ word: 'this', language: 'English', ipa: '/ðɪs/', targetHighlight: 'th', languageCode: 'en' }],
  'x': [{ word: 'Bach', language: 'German', ipa: '/baχ/', targetHighlight: 'ch', languageCode: 'de' }, { word: 'lough', language: 'Gaelic', ipa: '/lɔx/', targetHighlight: 'gh', languageCode: 'gd' }],
  'i': [{ word: 'see', language: 'English', ipa: '/siː/', targetHighlight: 'ee', languageCode: 'en' }, { word: 'így', language: 'Hungarian', ipa: '/iːɟ/', targetHighlight: 'í', languageCode: 'hu' }],
  'u': [{ word: 'too', language: 'English', ipa: '/tuː/', targetHighlight: 'oo', languageCode: 'en' }, { word: 'úgy', language: 'Hungarian', ipa: '/uːɟ/', targetHighlight: 'ú', languageCode: 'hu' }],
  'a': [{ word: 'father', language: 'English', ipa: '/ˈfɑːðər/', targetHighlight: 'a', languageCode: 'en' }],
  'e': [{ word: 'bed', language: 'English', ipa: '/bɛd/', targetHighlight: 'e', languageCode: 'en' }],
  'o': [{ word: 'go', language: 'English', ipa: '/ɡoʊ/', targetHighlight: 'o', languageCode: 'en' }]
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

const CONFUSIONS_MAP: Record<string, Array<{ symbol: string; explanation: string }>> = {
  'theta': [{ symbol: 's', explanation: 'Th-fronting: confusing the dental fricative /θ/ with alveolar /s/.' }],
  'eth': [{ symbol: 'v', explanation: 'Replacing dental /ð/ with labiodental /v/ in informal speech.' }],
  'esh': [{ symbol: 's', explanation: 'Replacing postalveolar /ʃ/ with alveolar /s/.' }],
  'ezh': [{ symbol: 'z', explanation: 'Confusing voiced postalveolar /ʒ/ with alveolar /z/.' }],
  'ng': [{ symbol: 'n', explanation: 'Failing to retract the tongue to the velum for /ŋ/.' }],
  'i': [{ symbol: 'I', explanation: 'Confusing tense /i/ with lax /ɪ/.' }],
  'u': [{ symbol: 'U', explanation: 'Confusing tense /u/ with lax /ʊ/.' }]
};
`;

// Insert educationalMaps right after CANONICAL_ID_MAP
code = code.replace(/const CANONICAL_ID_MAP: Record<string, string> = \{[\s\S]*?\};/, (match) => {
  return match + '\n' + educationalMaps;
});

// Update parsedConsonants return object
code = code.replace(/exampleWords: \[\],/g, (match, offset) => {
  return `exampleWords: EXAMPLE_WORDS_MAP[canonicalId] || [],
    relatedSymbols: RELATED_SYMBOLS_MAP[canonicalId] || [],
    commonConfusions: CONFUSIONS_MAP[canonicalId] || [],`;
});

fs.writeFileSync(file, code);
console.log('Successfully injected educational maps into src/data/ipaSymbols.ts');
