# IPA Learner

A mobile-first React/Vite web application for learning the International Phonetic Alphabet. It combines an interactive chart, symbol detail sheets, multilingual labels (English, Japanese, Hungarian), local progress, flashcards, search, a mobile IPA keyboard, and legally cautious audio attribution metadata.

## Run

```bash
npm install
npm run dev
npm run build
npm test
```

## Architecture

- `src/data`: typed IPA symbol database, chart dimensions, references, and audio licensing metadata.
- `src/i18n`: UI translations independent from IPA data.
- `src/domain`: search and spaced-repetition learning logic.
- `src/services`: local persistence abstraction for settings, progress, notes, favorites, and review scheduling.
- `src/main.tsx`: app shell and reusable UI components for chart, details, practice, progress, settings, and keyboard.

## Data model

Each `IPAEntry` includes symbol, Unicode, multilingual names/descriptions, classification, articulatory explanation, examples, audio source/license metadata, related symbols, difficulty, lesson order, notes, and references. Add entries in `src/data/ipa.ts` using the `IPAEntry` type in `src/data/types.ts`.

## Audio strategy

No third-party audio is bundled by default. Audio records must include source URL, creator, license, license URL, attribution requirement, and explicit commercial/modification/redistribution flags before a file or remote recording is enabled. This avoids assuming that a recording is reusable merely because it appears on a public website.

## Add a language

Add a language code to `Lang`, provide UI strings in `src/i18n/index.ts`, and add per-symbol labels under `names` for that language.

## Deploy

Build with `npm run build` and host the generated `dist` directory on any static host. The app stores user data locally and does not require an account.
