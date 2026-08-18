import test from 'node:test';
import assert from 'node:assert/strict';
import { ipaEntries } from '../src/data/ipa-data.js';
import { searchIPA } from '../src/domain/search.js';
import { gradeReview, progressStats } from '../src/domain/srs.js';

test('IPA inventory covers major app categories and symbols', () => {
  assert.ok(ipaEntries.length >= 115);
  assert.ok(ipaEntries.some((entry) => entry.symbol === 'ʃ' && entry.placeOfArticulation === 'postalveolar'));
  assert.ok(ipaEntries.some((entry) => entry.category === 'diacritic'));
  assert.ok(ipaEntries.some((entry) => entry.category === 'tone'));
});

test('search supports aliases and descriptive terminology', () => {
  assert.equal(searchIPA('sh')[0].symbol, 'ʃ');
  assert.ok(searchIPA('voiceless postalveolar fricative').some((entry) => entry.symbol === 'ʃ'));
  assert.ok(searchIPA('zöngés').length >= 0);
});

test('spaced review updates review state and progress stats', () => {
  const reviewed = gradeReview(undefined, 'good');
  assert.equal(reviewed.timesSeen, 1);
  assert.ok(reviewed.mastery > 0);
  assert.ok(reviewed.nextReview);
  const stats = progressStats(ipaEntries, { [ipaEntries[0].id]: reviewed });
  assert.equal(stats.seen, 1);
  assert.ok(stats.mastery > 0);
});
