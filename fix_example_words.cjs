const fs = require('fs');
let code = fs.readFileSync('src/data/ipaSymbols.ts', 'utf8');

// Replace ExampleWord map definitions with full fields required by ExampleWord interface
code = code.replace(/const EXAMPLE_WORDS_MAP:[\s\S]*?;\n\nconst RELATED_SYMBOLS_MAP/s, `const EXAMPLE_WORDS_MAP: Record<string, Array<{ word: string; language: string; languageCode: string; transcription: string; meaning: string; audioUrl?: string }>> = {
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

const RELATED_SYMBOLS_MAP`);

fs.writeFileSync('src/data/ipaSymbols.ts', code);
console.log('Fixed ExampleWord map fields.');
