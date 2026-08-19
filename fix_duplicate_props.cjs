const fs = require('fs');
let code = fs.readFileSync('src/data/ipaSymbols.ts', 'utf8');

// Fix duplicate relatedSymbols and commonConfusions in parsedConsonants
code = code.replace(
  /exampleWords: EXAMPLE_WORDS_MAP\[canonicalId\] \|\| \[\],\s*relatedSymbols: RELATED_SYMBOLS_MAP\[canonicalId\] \|\| \[\],\s*commonConfusions: CONFUSIONS_MAP\[canonicalId\] \|\| \[\],[\s\S]*?relatedSymbols: \[\],\s*commonConfusions: \[\],/g,
  `exampleWords: EXAMPLE_WORDS_MAP[canonicalId] || [],
    relatedSymbols: RELATED_SYMBOLS_MAP[canonicalId] || [],
    commonConfusions: CONFUSIONS_MAP[canonicalId] || [],`
);

fs.writeFileSync('src/data/ipaSymbols.ts', code);
console.log('Cleaned duplicate property declarations.');
