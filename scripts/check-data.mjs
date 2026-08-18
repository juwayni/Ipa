import { ipaEntries } from '../src/data/ipa-data.js';
const required = ['id','symbol','unicode','names','category','subcategory','type','description','howToProduce','audioSources','difficulty','lessonOrder','isCore','references','searchAliases'];
const errors = [];
const ids = new Set();
for (const entry of ipaEntries) {
  for (const key of required) if (!(key in entry)) errors.push(`${entry.symbol} missing ${key}`);
  for (const lang of ['en','ja','hu']) if (!entry.names?.[lang]?.description) errors.push(`${entry.symbol} missing ${lang} label`);
  if (ids.has(entry.id)) errors.push(`duplicate id ${entry.id}`);
  ids.add(entry.id);
  for (const source of entry.audioSources) {
    for (const key of ['kind','url','creator','license','licenseUrl','attributionRequired','commercialUseAllowed','modificationAllowed','redistributionAllowed','notes']) if (!(key in source)) errors.push(`${entry.symbol} audio source missing ${key}`);
  }
}
const categories = new Set(ipaEntries.map((entry) => entry.category));
for (const category of ['pulmonic-consonant','non-pulmonic-consonant','vowel','diacritic','suprasegmental','tone']) if (!categories.has(category)) errors.push(`missing category ${category}`);
if (ipaEntries.length < 115) errors.push(`expected at least 115 entries, got ${ipaEntries.length}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated ${ipaEntries.length} IPA entries across ${categories.size} categories.`);
