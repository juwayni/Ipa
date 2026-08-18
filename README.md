# IPA Learner

IPA Learner is a dependency-free, mobile-first web application for daily International Phonetic Alphabet study. It is designed for phones first, then adapts to tablets and desktop. It combines a structured IPA chart, vowel quadrilateral, symbol detail sheets, multilingual labels, flashcards, spaced review, progress tracking, search, a mobile IPA keyboard, local notes, favorites, difficult-symbol review, offline caching, and a legally cautious audio attribution model.

## Technology choices

- **Vanilla ES modules, HTML, and CSS:** chosen to avoid registry/dependency failures and keep the mobile bundle small.
- **Static web app:** easy to host anywhere and install through browser PWA flows.
- **Local storage persistence:** private by default and compatible with future cloud-sync migration.
- **Node built-in tests:** no external test framework is required.

## Run, test, and build

```bash
npm run dev
npm test
npm run check
npm run build
```

`npm run dev` starts a Python static server on port `5173`.

## File structure

- `index.html` — SEO/mobile metadata and app mount.
- `src/app.js` — app shell, navigation, views, symbol detail sheet, practice, settings, and event handling.
- `src/styles.css` — mobile-first design system, dark mode, high contrast, reduced motion, chart layouts, bottom navigation.
- `src/data/schema.js` — documented data schema, chart axes, references, and audio metadata template.
- `src/data/ipa-data.js` — structured IPA dataset generated from explicit consonant, vowel, notation, diacritic, suprasegmental, and tone rows.
- `src/domain/search.js` — tolerant search and related-symbol logic.
- `src/domain/srs.js` — spaced-repetition-inspired review and progress calculations.
- `src/services/storage.js` — local persistence, export, and default app state.
- `src/i18n/translations.js` — English, Japanese, and Hungarian UI strings.
- `public/sw.js` and `public/manifest.webmanifest` — offline caching and install metadata.
- `tests/domain.test.mjs` and `scripts/check-data.mjs` — automated QA for data, search, and learning logic.

## Data model

Each IPA entry supports symbol identity, Unicode, multilingual names/descriptions, category/subcategory, consonant or vowel classification, articulatory explanation, examples, audio source metadata, related/confusable symbols, difficulty, lesson order, core/extended flags, notes, references, and search aliases. See `src/data/schema.js` for the documented schema and `src/data/ipa-data.js` for entry construction.

## Audio licensing strategy

The app does **not** bundle Wikipedia/Wikimedia or other third-party audio by default. Every audio source must include source URL, creator, license, license URL, attribution requirement, commercial-use permission, modification permission, redistribution permission, and notes before being enabled as a playable file or remote source. Until then, entries expose reference-only metadata and user-facing unavailable-audio states.

## Learning algorithm

The review model is inspired by general spaced-repetition principles, not a proprietary algorithm. Again/Hard/Good/Easy grades update times seen, correctness, streak, confidence, mastery, difficulty, last reviewed, and next review. Due reviews prioritize unseen, overdue, and difficult symbols.

## Adding a new IPA symbol

Add a row to `consonantRows`, `vowelRows`, or `notationRows` in `src/data/ipa-data.js`, or construct a `baseEntry` with the documented fields. Then run:

```bash
npm run check
npm test
```

## Adding a new language

Add the language label to `languages`, UI strings to `dictionary`, and per-symbol terminology generation or explicit labels in `src/data/ipa-data.js`.

## Adding audio

Only add audio when licensing has been audited. Add a source object with all required license fields, set `kind` to `file` or `remote`, and provide the URL. Do not bundle or link directly to assets with unknown redistribution/commercial/modification terms.

## Deployment

Run `npm run build` and deploy the `dist/` directory to any static web host. The app stores progress locally, requires no account, and remains usable offline after the service worker caches core files.

## Known limitations

The app intentionally ships without bundled third-party audio recordings until each recording is individually license-audited. Japanese and Hungarian specialized symbol labels use conservative technical terminology rather than unsourced colloquial symbol names.
