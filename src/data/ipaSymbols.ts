import type { IPASymbol, PlaceOfArticulation, MannerOfArticulation, Voicing, VowelHeight, VowelBackness, Roundness } from '../types/ipa';

const CONSONANT_CSV_DATA = [
  ["Voiceless bilabial nasal","m̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c3/Voiceless_Bilabial_Nasal.ogg/Voiceless_Bilabial_Nasal.ogg.mp3"],
  ["Voiced bilabial nasal","m","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a9/Bilabial_nasal.ogg/Bilabial_nasal.ogg.mp3"],
  ["Voiceless labiodental nasal","ɱ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/76/Voiceless_labiodental_nasal.ogg/Voiceless_labiodental_nasal.ogg.mp3"],
  ["Voiced labiodental nasal","ɱ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Labiodental_nasal.ogg/Labiodental_nasal.ogg.mp3"],
  ["Voiced linguolabial nasal","n̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/82/Linguolabial_nasal.ogg/Linguolabial_nasal.ogg.mp3"],
  ["Voiceless dental nasal","n̪̊",""],
  ["Voiced dental nasal","n̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Voiced_Dental_Nasal.ogg/Voiced_Dental_Nasal.ogg.mp3"],
  ["Voiceless alveolar nasal","n̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/82/Voiceless_Alveolar_Nasal.ogg/Voiceless_Alveolar_Nasal.ogg.mp3"],
  ["Voiced alveolar nasal","n","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Alveolar_nasal.ogg/Alveolar_nasal.ogg.mp3"],
  ["Voiceless postalveolar nasal","n̠̊",""],
  ["Voiced postalveolar nasal","n̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f3/Voiced_postalveolar_nasal.ogg/Voiced_postalveolar_nasal.ogg.mp3"],
  ["Voiceless retroflex nasal","ɳ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d0/Voiceless_retroflex_nasal.wav/Voiceless_retroflex_nasal.wav.mp3"],
  ["Voiced retroflex nasal","ɳ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/af/Retroflex_nasal.ogg/Retroflex_nasal.ogg.mp3"],
  ["Voiceless palatal nasal","ɲ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Voiceless_palatal_nasal.ogg/Voiceless_palatal_nasal.ogg.mp3"],
  ["Voiced palatal nasal","ɲ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/46/Palatal_nasal.ogg/Palatal_nasal.ogg.mp3"],
  ["Voiceless velar nasal","ŋ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c7/Voiceless_velar_nasal.wav/Voiceless_velar_nasal.wav.mp3"],
  ["Voiced velar nasal","ŋ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/39/Velar_nasal.ogg/Velar_nasal.ogg.mp3"],
  ["Voiceless uvular nasal","ɴ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f4/Voiceless_uvular_nasal.ogg/Voiceless_uvular_nasal.ogg.mp3"],
  ["Voiced uvular nasal","ɴ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3e/Uvular_nasal.ogg/Uvular_nasal.ogg.mp3"],
  ["Voiceless bilabial plosive","p","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/51/Voiceless_bilabial_plosive.ogg/Voiceless_bilabial_plosive.ogg.mp3"],
  ["Voiced bilabial plosive","b","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Voiced_bilabial_plosive.ogg/Voiced_bilabial_plosive.ogg.mp3"],
  ["Voiceless labiodental plosive","p̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Voiceless_labiodental_plosive.ogg/Voiceless_labiodental_plosive.ogg.mp3"],
  ["Voiced labiodental plosive","b̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6e/Voiced_labiodental_plosive.wav/Voiced_labiodental_plosive.wav.mp3"],
  ["Voiceless linguolabial plosive","t̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Voiceless_linguolabial_stop.ogg/Voiceless_linguolabial_stop.ogg.mp3"],
  ["Voiced linguolabial plosive","d̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/95/Voiced_linguolabial_stop.ogg/Voiced_linguolabial_stop.ogg.mp3"],
  ["Voiceless dental plosive","t̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/dc/Voiceless_dental_stop.ogg/Voiceless_dental_stop.ogg.mp3"],
  ["Voiced dental plosive","d̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1c/Voiced_dental_stop.ogg/Voiced_dental_stop.ogg.mp3"],
  ["Voiceless alveolar plosive","t","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/02/Voiceless_alveolar_plosive.ogg/Voiceless_alveolar_plosive.ogg.mp3"],
  ["Voiced alveolar plosive","d","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Voiced_alveolar_plosive.ogg/Voiced_alveolar_plosive.ogg.mp3"],
  ["Voiceless retroflex plosive","ʈ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b0/Voiceless_retroflex_stop.oga/Voiceless_retroflex_stop.oga.mp3"],
  ["Voiced retroflex plosive","ɖ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/27/Voiced_retroflex_stop.oga/Voiced_retroflex_stop.oga.mp3"],
  ["Voiceless palatal plosive","c","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5d/Voiceless_palatal_plosive.ogg/Voiceless_palatal_plosive.ogg.mp3"],
  ["Voiced palatal plosive","ɟ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1d/Voiced_palatal_plosive.ogg/Voiced_palatal_plosive.ogg.mp3"],
  ["Voiceless velar plosive","k","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Voiceless_velar_plosive.ogg/Voiceless_velar_plosive.ogg.mp3"],
  ["Voiced velar plosive","ɡ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/12/Voiced_velar_plosive_02.ogg/Voiced_velar_plosive_02.ogg.mp3"],
  ["Voiceless uvular plosive","q","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Voiceless_uvular_plosive.ogg/Voiceless_uvular_plosive.ogg.mp3"],
  ["Voiced uvular plosive","ɢ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/Voiced_uvular_stop.oga/Voiced_uvular_stop.oga.mp3"],
  ["Epiglottal plosive","ʡ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b2/Epiglottal_stop.ogg/Epiglottal_stop.ogg.mp3"],
  ["Glottal stop","ʔ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4d/Glottal_stop.ogg/Glottal_stop.ogg.mp3"],
  ["Voiceless dental sibilant affricate","t̪s̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/Voiceless_dental_sibilant_affricate.oga/Voiceless_dental_sibilant_affricate.oga.mp3"],
  ["Voiced dental sibilant affricate","d̪z̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/16/Voiced_dental_sibilant_affricate.oga/Voiced_dental_sibilant_affricate.oga.mp3"],
  ["Voiceless alveolar affricate","ts","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9d/Voiceless_alveolar_sibilant_affricate.oga/Voiceless_alveolar_sibilant_affricate.oga.mp3"],
  ["Voiced alveolar affricate","dz","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/Voiced_alveolar_sibilant_affricate.oga/Voiced_alveolar_sibilant_affricate.oga.mp3"],
  ["Voiceless postalveolar affricate","t̠ʃ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/97/Voiceless_palato-alveolar_affricate.ogg/Voiceless_palato-alveolar_affricate.ogg.mp3"],
  ["Voiced postalveolar affricate","d̠ʒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e6/Voiced_palato-alveolar_affricate.ogg/Voiced_palato-alveolar_affricate.ogg.mp3"],
  ["Voiceless retroflex affricate","tʂ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e9/Voiceless_retroflex_affricate.ogg/Voiceless_retroflex_affricate.ogg.mp3"],
  ["Voiced retroflex affricate","dʐ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/58/Voiced_retroflex_affricate.ogg/Voiced_retroflex_affricate.ogg.mp3"],
  ["Voiceless alveolo-palatal affricate","tɕ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Voiceless_alveolo-palatal_affricate.ogg/Voiceless_alveolo-palatal_affricate.ogg.mp3"],
  ["Voiced alveolo-palatal affricate","dʑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Voiced_alveolo-palatal_affricate.ogg/Voiced_alveolo-palatal_affricate.ogg.mp3"],
  ["Voiceless bilabial affricate","pɸ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4a/Voiceless_bilabial_affricate.ogg/Voiceless_bilabial_affricate.ogg.mp3"],
  ["Voiced bilabial affricate","bβ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b4/Voiced_bilabial_affricate.wav/Voiced_bilabial_affricate.wav.mp3"],
  ["Voiceless labiodental affricate","p̪f","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Voiceless_labiodental_affricate.ogg/Voiceless_labiodental_affricate.ogg.mp3"],
  ["Voiced labiodental affricate","b̪v","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Voiced_labiodental_affricate.ogg/Voiced_labiodental_affricate.ogg.mp3"],
  ["Voiceless dental affricate","t̪θ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/ba/Voiceless_dental_non-sibilant_affricate.oga/Voiceless_dental_non-sibilant_affricate.oga.mp3"],
  ["Voiced dental affricate","d̪ð","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/27/Voiced_dental_non-sibilant_affricate.oga/Voiced_dental_non-sibilant_affricate.oga.mp3"],
  ["Voiceless alveolar non-sibilant affricate","tɹ̝̊",""],
  ["Voiced alveolar non-sibilant affricate","dɹ̝",""],
  ["Voiceless postalveolar non-sibilant affricate","t̠ɹ̠̊˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f4/Voiceless_postalveolar_non-sibilant_affricate.ogg/Voiceless_postalveolar_non-sibilant_affricate.ogg.mp3"],
  ["Voiced postalveolar non-sibilant affricate","d̠ɹ̠˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d7/Voiced_postalveolar_non-sibilant_affricate.ogg/Voiced_postalveolar_non-sibilant_affricate.ogg.mp3"],
  ["Voiceless palatal affricate","cç","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fd/Voiceless_palatal_affricate.ogg/Voiceless_palatal_affricate.ogg.mp3"],
  ["Voiced palatal affricate","ɟʝ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/aa/Voiced_palatal_affricate.ogg/Voiced_palatal_affricate.ogg.mp3"],
  ["Voiceless velar affricate","kx","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e5/Voiceless_velar_affricate.ogg/Voiceless_velar_affricate.ogg.mp3"],
  ["Voiced velar affricate","ɡɣ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/75/Voiced_velar_affricate.ogg/Voiced_velar_affricate.ogg.mp3"],
  ["Voiceless uvular affricate","qχ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/Voiceless_uvular_affricate.ogg/Voiceless_uvular_affricate.ogg.mp3"],
  ["Voiced uvular affricate","ɢʁ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/35/Voiced_uvular_affricate.ogg/Voiced_uvular_affricate.ogg.mp3"],
  ["Voiceless epiglottal affricate","ʡʜ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Voiceless_epiglottal_affricate.ogg/Voiceless_epiglottal_affricate.ogg.mp3"],
  ["Voiced epiglottal affricate","ʡʢ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e4/Voiced_epiglottal_affricate.ogg/Voiced_epiglottal_affricate.ogg.mp3"],
  ["Voiceless glottal affricate","ʔh","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/44/Voiceless_glottal_affricate.ogg/Voiceless_glottal_affricate.ogg.mp3"],
  ["Voiceless dental sibilant fricative","s̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7d/Voiceless_dental_sibilant_fricative.ogg/Voiceless_dental_sibilant_fricative.ogg.mp3"],
  ["Voiced dental sibilant fricative","z̪",""],
  ["Voiceless alveolar fricative","s","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ac/Voiceless_alveolar_sibilant.ogg/Voiceless_alveolar_sibilant.ogg.mp3"],
  ["Voiced alveolar fricative","z","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Voiced_alveolar_sibilant.ogg/Voiced_alveolar_sibilant.ogg.mp3"],
  ["Voiceless postalveolar fricative","ʃ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Voiceless_palato-alveolar_sibilant.ogg/Voiceless_palato-alveolar_sibilant.ogg.mp3"],
  ["Voiced postalveolar fricative","ʒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/30/Voiced_palato-alveolar_sibilant.ogg/Voiced_palato-alveolar_sibilant.ogg.mp3"],
  ["Voiceless retroflex fricative","ʂ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b1/Voiceless_retroflex_sibilant.ogg/Voiceless_retroflex_sibilant.ogg.mp3"],
  ["Voiced retroflex fricative","ʐ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7f/Voiced_retroflex_sibilant.ogg/Voiced_retroflex_sibilant.ogg.mp3"],
  ["Voiceless alveolo-palatal fricative","ɕ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0b/Voiceless_alveolo-palatal_sibilant.ogg/Voiceless_alveolo-palatal_sibilant.ogg.mp3"],
  ["Voiced alveolo-palatal fricative","ʑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/15/Voiced_alveolo-palatal_sibilant.ogg/Voiced_alveolo-palatal_sibilant.ogg.mp3"],
  ["Voiceless bilabial fricative","ɸ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/41/Voiceless_bilabial_fricative.ogg/Voiceless_bilabial_fricative.ogg.mp3"],
  ["Voiced bilabial fricative","β","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/37/Voiced_bilabial_fricative.ogg/Voiced_bilabial_fricative.ogg.mp3"],
  ["Voiceless labiodental fricative","f","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c7/Voiceless_labio-dental_fricative.ogg/Voiceless_labio-dental_fricative.ogg.mp3"],
  ["Voiced labiodental fricative","v","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Voiced_labio-dental_fricative.ogg/Voiced_labio-dental_fricative.ogg.mp3"],
  ["Voiceless linguolabial fricative","θ̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Voiceless_linguolabial_fricative.ogg/Voiceless_linguolabial_fricative.ogg.mp3"],
  ["Voiced linguolabial fricative","ð̼","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7e/Voiced_linguolabial_fricative.wav/Voiced_linguolabial_fricative.wav.mp3"],
  ["Voiceless dental fricative","θ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/80/Voiceless_dental_fricative.ogg/Voiceless_dental_fricative.ogg.mp3"],
  ["Voiced dental fricative","ð","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6a/Voiced_dental_fricative.ogg/Voiced_dental_fricative.ogg.mp3"],
  ["Voiceless alveolar non-sibilant fricative","θ̠",""],
  ["Voiced alveolar non-sibilant fricative","ð̠",""],
  ["Voiceless postalveolar non-sibilant fricative","ɹ̠̊˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Voiceless_postalveolar_non-sibilant_fricative.ogg/Voiceless_postalveolar_non-sibilant_fricative.ogg.mp3"],
  ["Voiced postalveolar non-sibilant fricative","ɹ̠˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0a/Voiced_postalveolar_non-sibilant_fricative.ogg/Voiced_postalveolar_non-sibilant_fricative.ogg.mp3"],
  ["Voiceless retroflex non-sibilant fricative","ɻ̊˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/Voiceless_retroflex_non-sibilant_fricative.ogg/Voiceless_retroflex_non-sibilant_fricative.ogg.mp3"],
  ["Voiced retroflex non-sibilant fricative","ɻ˔","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/59/Voiced_retroflex_non-sibilant_fricative.ogg/Voiced_retroflex_non-sibilant_fricative.ogg.mp3"],
  ["Voiceless palatal fricative","ç","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ab/Voiceless_palatal_fricative.ogg/Voiceless_palatal_fricative.ogg.mp3"],
  ["Voiced palatal fricative","ʝ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ac/Voiced_palatal_fricative.ogg/Voiced_palatal_fricative.ogg.mp3"],
  ["Voiceless velar fricative","x","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Voiceless_velar_fricative.ogg/Voiceless_velar_fricative.ogg.mp3"],
  ["Voiced velar fricative","ɣ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/47/Voiced_velar_fricative.ogg/Voiced_velar_fricative.ogg.mp3"],
  ["Voiceless uvular fricative","χ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c8/Voiceless_uvular_fricative.ogg/Voiceless_uvular_fricative.ogg.mp3"],
  ["Voiced uvular fricative","ʁ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/af/Voiced_uvular_fricative.ogg/Voiced_uvular_fricative.ogg.mp3"],
  ["Voiceless pharyngeal fricative","ħ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b2/Voiceless_pharyngeal_fricative.ogg/Voiceless_pharyngeal_fricative.ogg.mp3"],
  ["Voiced pharyngeal fricative","ʕ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/Voiced_pharyngeal_fricative.ogg/Voiced_pharyngeal_fricative.ogg.mp3"],
  ["Voiceless glottal fricative","h","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/da/Voiceless_glottal_fricative.ogg/Voiceless_glottal_fricative.ogg.mp3"],
  ["Voiced glottal fricative","ɦ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e2/Voiced_glottal_fricative.ogg/Voiced_glottal_fricative.ogg.mp3"],
  ["Voiced bilabial approximant","β̞","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/11/Bilabial_approximant.ogg/Bilabial_approximant.ogg.mp3"],
  ["Voiced labiodental approximant","ʋ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ee/Labiodental_approximant.ogg/Labiodental_approximant.ogg.mp3"],
  ["Voiced dental approximant","ð̞",""],
  ["Voiced alveolar approximant","ɹ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Alveolar_approximant.ogg/Alveolar_approximant.ogg.mp3"],
  ["Voiced postalveolar approximant","ɹ̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Postalveolar_approximant.ogg/Postalveolar_approximant.ogg.mp3"],
  ["Voiced retroflex approximant","ɻ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/Retroflex_Approximant2.oga/Retroflex_Approximant2.oga.mp3"],
  ["Voiced palatal approximant","j","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Palatal_approximant.ogg/Palatal_approximant.ogg.mp3"],
  ["Voiced velar approximant","ɰ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5c/Voiced_velar_approximant.ogg/Voiced_velar_approximant.ogg.mp3"],
  ["Creaky-voiced glottal approximant","˷","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/99/Creaky-voiced_glottal_approximant.wav/Creaky-voiced_glottal_approximant.wav.mp3"],
  ["Voiced bilabial flap","ⱱ̟","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/Voiced_bilabial_flap.wav/Voiced_bilabial_flap.wav.mp3"],
  ["Voiced labiodental flap","ⱱ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Labiodental_flap.ogg/Labiodental_flap.ogg.mp3"],
  ["Voiceless alveolar tap","ɾ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cb/Voiceless_alveolar_tap.wav/Voiceless_alveolar_tap.wav.mp3"],
  ["Voiced alveolar tap or flap","ɾ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Alveolar_tap.ogg/Alveolar_tap.ogg.mp3"],
  ["Voiceless retroflex flap","ɽ̊",""],
  ["Voiced retroflex flap","ɽ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Retroflex_flap.ogg/Retroflex_flap.ogg.mp3"],
  ["Voiced uvular tap and flap","ɢ̆","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b7/Voiced_uvular_tap.wav/Voiced_uvular_tap.wav.mp3"],
  ["Voiced epiglottal tap","ʡ̆","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Epiglottal_flap.oga/Epiglottal_flap.oga.mp3"],
  ["Voiceless bilabial trill","ʙ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ec/Voiceless_bilabial_trill_with_aspiration.ogg/Voiceless_bilabial_trill_with_aspiration.ogg.mp3"],
  ["Voiced bilabial trill","ʙ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e7/Bilabial_trill.ogg/Bilabial_trill.ogg.mp3"],
  ["Voiceless alveolar trill","r̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1e/Voiceless_alveolar_trill.ogg/Voiceless_alveolar_trill.ogg.mp3"],
  ["Voiced alveolar trill","r","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Alveolar_trill.ogg/Alveolar_trill.ogg.mp3"],
  ["Voiced postalveolar trill","r̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/ae/Voiced_postalveolar_trill.ogg/Voiced_postalveolar_trill.ogg.mp3"],
  ["Voiceless retroflex trill","ɽ̊r̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Voiceless_retroflex_trill.ogg/Voiceless_retroflex_trill.ogg.mp3"],
  ["Voiced retroflex trill","ɽr","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Voiced_retroflex_trill.ogg/Voiced_retroflex_trill.ogg.mp3"],
  ["Voiceless uvular trill","ʀ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8d/Voiceless_uvular_trill.ogg/Voiceless_uvular_trill.ogg.mp3"],
  ["Voiced uvular trill","ʀ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cb/Uvular_trill.ogg/Uvular_trill.ogg.mp3"],
  ["Voiceless epiglottal trill","ʜ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7b/Voiceless_epiglottal_trill.ogg/Voiceless_epiglottal_trill.ogg.mp3"],
  ["Voiced epiglottal trill","ʢ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Voiced_epiglottal_trill_2.ogg/Voiced_epiglottal_trill_2.ogg.mp3"],
  ["Voiceless alveolar lateral affricate","tɬ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/Voiceless_alveolar_lateral_affricate.ogg/Voiceless_alveolar_lateral_affricate.ogg.mp3"],
  ["Voiced alveolar lateral affricate","dɮ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/31/Voiced_alveolar_lateral_affricate.ogg/Voiced_alveolar_lateral_affricate.ogg.mp3"],
  ["Voiceless retroflex lateral affricate","tꞎ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/db/Voiceless_retroflex_lateral_affricate.ogg/Voiceless_retroflex_lateral_affricate.ogg.mp3"],
  ["Voiced retroflex lateral affricate","d𝼅","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c5/Voiced_retroflex_lateral_affricate.ogg/Voiced_retroflex_lateral_affricate.ogg.mp3"],
  ["Voiceless palatal lateral affricate","c𝼆","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Voiceless_palatal_lateral_affricate.ogg/Voiceless_palatal_lateral_affricate.ogg.mp3"],
  ["Voiced palatal lateral affricate","ɟʎ̝","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e6/Voiced_palatal_lateral_affricate.ogg/Voiced_palatal_lateral_affricate.ogg.mp3"],
  ["Voiceless velar lateral affricate","k𝼄","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/02/Voiceless_velar_lateral_affricate.ogg/Voiceless_velar_lateral_affricate.ogg.mp3"],
  ["Voiced velar lateral affricate","ɡʟ̝","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/93/Voiced_velar_lateral_affricate.ogg/Voiced_velar_lateral_affricate.ogg.mp3"],
  ["Voiceless dental lateral fricative","ɬ̪",""],
  ["Voiceless alveolar lateral fricative","ɬ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Voiceless_alveolar_lateral_fricative.ogg/Voiceless_alveolar_lateral_fricative.ogg.mp3"],
  ["Voiced alveolar lateral fricative","ɮ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6f/Voiced_alveolar_lateral_fricative.ogg/Voiced_alveolar_lateral_fricative.ogg.mp3"],
  ["Voiceless retroflex lateral fricative","ꞎ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/54/Voiceless_retroflex_lateral_fricative.ogg/Voiceless_retroflex_lateral_fricative.ogg.mp3"],
  ["Voiced retroflex lateral fricative","𝼅","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Voiced_retroflex_lateral_fricative.wav/Voiced_retroflex_lateral_fricative.wav.mp3"],
  ["Voiceless palatal lateral fricative","𝼆","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fe/Voiceless_palatal_lateral_fricative.ogg/Voiceless_palatal_lateral_fricative.ogg.mp3"],
  ["Voiced palatal lateral fricative","ʎ̝","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/%CA%8E%CC%9D_IPA_sound.opus/%CA%8E%CC%9D_IPA_sound.opus.mp3"],
  ["Voiceless velar lateral fricative","𝼄","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/99/Voiceless_velar_lateral_fricative.ogg/Voiceless_velar_lateral_fricative.ogg.mp3"],
  ["Voiced velar lateral fricative","ʟ̝","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/24/Voiced_velar_lateral_fricative.ogg/Voiced_velar_lateral_fricative.ogg.mp3"],
  ["Voiced dental lateral approximant","l̪","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f8/Voiced_dental_lateral_approximant.ogg/Voiced_dental_lateral_approximant.ogg.mp3"],
  ["Voiceless alveolar lateral approximant","l̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e1/Voiceless_alveolar_lateral_approximant.ogg/Voiceless_alveolar_lateral_approximant.ogg.mp3"],
  ["Voiced alveolar lateral approximant","l","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Alveolar_lateral_approximant.ogg/Alveolar_lateral_approximant.ogg.mp3"],
  ["Voiced postalveolar lateral approximant","l̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5b/Voiced_postalveolar_lateral_approximant.ogg/Voiced_postalveolar_lateral_approximant.ogg.mp3"],
  ["Voiceless retroflex lateral approximant","ɭ̊",""],
  ["Voiced retroflex lateral approximant","ɭ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d1/Retroflex_lateral_approximant.ogg/Retroflex_lateral_approximant.ogg.mp3"],
  ["Voiceless palatal lateral approximant","ʎ̥",""],
  ["Voiced palatal lateral approximant","ʎ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Palatal_lateral_approximant.ogg/Palatal_lateral_approximant.ogg.mp3"],
  ["Voiceless velar lateral approximant","ʟ̥",""],
  ["Voiced velar lateral approximant","ʟ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d3/Velar_lateral_approximant.ogg/Velar_lateral_approximant.ogg.mp3"],
  ["Voiced uvular lateral approximant","ʟ̠","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/73/Uvular_lateral_approximant.ogg/Uvular_lateral_approximant.ogg.mp3"],
  ["Voiceless alveolar lateral flap","ɺ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4d/Voiceless_alveolar_lateral_flap.wav/Voiceless_alveolar_lateral_flap.wav.mp3"],
  ["Voiced alveolar lateral flap","ɺ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c9/Voiced_alveolar_lateral_flap.wav/Voiced_alveolar_lateral_flap.wav.mp3"],
  ["Voiceless retroflex lateral flap","𝼈̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/55/Voiceless_retroflex_lateral_flap.wav/Voiceless_retroflex_lateral_flap.wav.mp3"],
  ["Voiced retroflex lateral flap","𝼈","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/38/Voiced_retroflex_lateral_flap_%28correct%29.wav/Voiced_retroflex_lateral_flap_%28correct%29.wav.mp3"],
  ["Voiced palatal lateral flap","ʎ̆","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Voiced_palatal_lateral_flap.wav/Voiced_palatal_lateral_flap.wav.mp3"],
  ["Voiced velar lateral tap","ʟ̆","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5a/Voiced_velar_lateral_tap.wav/Voiced_velar_lateral_tap.wav.mp3"],
  ["Voiceless labial–alveolar plosive","t͡p","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bd/Voiceless_labial-alveolar_plosive.ogg/Voiceless_labial-alveolar_plosive.ogg.mp3"],
  ["Voiceless labial–velar plosive","k͡p","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5f/Voiceless_labial-velar_plosive.ogg/Voiceless_labial-velar_plosive.ogg.mp3"],
  ["Voiced labial–velar plosive","ɡ͡b","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Voiced_labial-velar_plosive.ogg/Voiced_labial-velar_plosive.ogg.mp3"],
  ["Voiceless labial–uvular plosive","q͡p","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/94/Voiceless_labial%E2%80%93uvular_plosive.ogg/Voiceless_labial%E2%80%93uvular_plosive.ogg.mp3"],
  ["Voiced labial–velar nasal","ŋ͡m","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/99/Labial-velar_nasal_stop.ogg/Labial-velar_nasal_stop.ogg.mp3"],
  ["Voiceless labial–velar fricative","ʍ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a7/Voiceless_labio-velar_fricative.ogg/Voiceless_labio-velar_fricative.ogg.mp3"],
  ["Voiced labial–velar approximant","w","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Voiced_labio-velar_approximant.ogg/Voiced_labio-velar_approximant.ogg.mp3"],
  ["Voiced labial–palatal approximant","ɥ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/32/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav.mp3"],
  ["Sj-sound","ɧ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/42/Voiceless_dorso-palatal_velar_fricative.ogg/Voiceless_dorso-palatal_velar_fricative.ogg.mp3"],
  ["Velarized alveolar lateral approximant","ɫ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d3/Velarized_alveolar_lateral_approximant.ogg/Velarized_alveolar_lateral_approximant.ogg.mp3"],
  ["Voiceless labial–velar implosive","ɠ̊͜ɓ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/36/Voiceless-labial%E2%80%93velar-implosive.ogg/Voiceless-labial%E2%80%93velar-implosive.ogg.mp3"],
  ["Voiced labial–velar implosive","ɠ͡ɓ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/37/Voiced-labial-velar-implosive.ogg/Voiced-labial-velar-implosive.ogg.mp3"],

  // NON-PULMONIC CONSONANTS: IMPLOSIVES, EJECTIVES & CLICKS
  ["Voiced bilabial implosive","ɓ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/31/Voiced_bilabial_implosive.ogg/Voiced_bilabial_implosive.ogg.mp3"],
  ["Voiced alveolar implosive","ɗ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c3/Voiced_alveolar_implosive.ogg/Voiced_alveolar_implosive.ogg.mp3"],
  ["Voiced retroflex implosive","ᶑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c8/Voiced-retroflex-implosive.ogg/Voiced-retroflex-implosive.ogg.mp3"],
  ["Voiced palatal implosive","ʄ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2c/Voiced_palatal_implosive.ogg/Voiced_palatal_implosive.ogg.mp3"],
  ["Voiced velar implosive","ɠ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a8/Voiced_velar_implosive.ogg/Voiced_velar_implosive.ogg.mp3"],
  ["Voiced uvular implosive","ʛ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/00/Voiced_uvular_implosive.ogg/Voiced_uvular_implosive.ogg.mp3"],
  ["Voiceless bilabial implosive","ɓ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Voiceless-bilabial-implosive.ogg/Voiceless-bilabial-implosive.ogg.mp3"],
  ["Voiceless alveolar implosive","ɗ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Voiceless-alveolar-implosive.ogg/Voiceless-alveolar-implosive.ogg.mp3"],
  ["Voiceless retroflex implosive","ᶑ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d2/Voiceless-retroflex-implosive.ogg/Voiceless-retroflex-implosive.ogg.mp3"],
  ["Voiceless palatal implosive","ʄ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fc/Voiceless_palatal_implosive.ogg/Voiceless_palatal_implosive.ogg.mp3"],
  ["Voiceless velar implosive","ɠ̊","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Voiceless-velar-implosive.ogg/Voiceless-velar-implosive.ogg.mp3"],
  ["Voiceless uvular implosive","ʛ̥","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/32/Voiceless-uvular-implosive.ogg/Voiceless-uvular-implosive.ogg.mp3"],
  ["Bilabial ejective stop","pʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/64/Bilabial_ejective_plosive.ogg/Bilabial_ejective_plosive.ogg.mp3"],
  ["Alveolar ejective stop","tʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d7/Alveolar_ejective_plosive.ogg/Alveolar_ejective_plosive.ogg.mp3"],
  ["Retroflex ejective stop","ʈʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bc/Retroflex_ejective.ogg/Retroflex_ejective.ogg.mp3"],
  ["Palatal ejective stop","cʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Palatal_ejective.ogg/Palatal_ejective.ogg.mp3"],
  ["Velar ejective stop","kʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a0/Velar_ejective_plosive.ogg/Velar_ejective_plosive.ogg.mp3"],
  ["Uvular ejective stop","qʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/08/Uvular_ejective_plosive.ogg/Uvular_ejective_plosive.ogg.mp3"],
  ["Labiodental ejective fricative","fʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/81/Labiodental_ejective_fricative.ogg/Labiodental_ejective_fricative.ogg.mp3"],
  ["Alveolar ejective fricative","sʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/Alveolar_ejective_fricative.ogg/Alveolar_ejective_fricative.ogg.mp3"],
  ["Retroflex ejective fricative","ʂʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Retroflex_ejective_fricative.ogg/Retroflex_ejective_fricative.ogg.mp3"],
  ["Alveolo-palatal ejective fricative","ɕʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/37/Alveolo-palatal_ejective_fricative.ogg/Alveolo-palatal_ejective_fricative.ogg.mp3"],
  ["Velar ejective fricative","xʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c6/Velar_ejective_fricative.ogg/Velar_ejective_fricative.ogg.mp3"],
  ["Uvular ejective fricative","χʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/69/Uvular_ejective_fricative.ogg/Uvular_ejective_fricative.ogg.mp3"],
  ["Bilabial ejective fricative","ɸʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/70/Bilabial_ejective_fricative.ogg/Bilabial_ejective_fricative.ogg.mp3"],
  ["Dental ejective fricative","θʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Dental_ejective_fricative.ogg/Dental_ejective_fricative.ogg.mp3"],
  ["Postalveolar ejective fricative","ʃʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/75/Palato-alveolar_ejective_fricative.ogg/Palato-alveolar_ejective_fricative.ogg.mp3"],
  ["Dental ejective affricate","t̪θʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cf/Dental_ejective_affricate.ogg/Dental_ejective_affricate.ogg.mp3"],
  ["Alveolar ejective affricate","tsʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/45/Alveolar_ejective_affricate.ogg/Alveolar_ejective_affricate.ogg.mp3"],
  ["Retroflex ejective affricate","ʈʂʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/09/Retroflex_ejective_affricate.ogg/Retroflex_ejective_affricate.ogg.mp3"],
  ["Postalveolar ejective affricate","t̠ʃʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/Palato-alveolar_ejective_affricate.ogg/Palato-alveolar_ejective_affricate.ogg.mp3"],
  ["Velar ejective affricate","kxʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bf/Velar_ejective_affricate.ogg/Velar_ejective_affricate.ogg.mp3"],
  ["Uvular ejective affricate","qχʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5b/Uvular_ejective_affricate.ogg/Uvular_ejective_affricate.ogg.mp3"],
  ["Alveolar lateral ejective fricative","ɬʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cf/Alveolar_lateral_ejective_fricative.ogg/Alveolar_lateral_ejective_fricative.ogg.mp3"],
  ["Alveolar lateral ejective affricate","tɬʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/Alveolar_lateral_ejective_affricate.ogg/Alveolar_lateral_ejective_affricate.ogg.mp3"],
  ["Palatal lateral ejective affricate","c𝼆ʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e0/Palatal_lateral_ejective_affricate.ogg/Palatal_lateral_ejective_affricate.ogg.mp3"],
  ["Velar lateral ejective affricate","k𝼄ʼ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e2/Velar_lateral_ejective_affricate.ogg/Velar_lateral_ejective_affricate.ogg.mp3"],
  ["Tenuis bilabial click","kʘ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/2b/Clic_bilabial_sourd.ogg/Clic_bilabial_sourd.ogg.mp3"],
  ["Tenuis dental click","kǀ","https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Dental_click.ogg/Dental_click.ogg.mp3"],
  ["Tenuis alveolar click","kǃ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3c/Postalveolar_click.ogg/Postalveolar_click.ogg.mp3"],
  ["Tenuis alveolar lateral click","kǁ","https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f4/Alveolar_lateral_click.ogg/Alveolar_lateral_click.ogg.mp3"],
  ["Tenuis retroflex click","k𝼊","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5a/Retrflx_click.wav/Retrflx_click.wav.mp3"],
  ["Tenuis palatal click","kǂ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/89/Palatoalveolar_click.ogg/Palatoalveolar_click.ogg.mp3"]
];

const VOWEL_CSV_DATA = [
  ["Close front unrounded vowel","i","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/Close_front_unrounded_vowel.ogg/Close_front_unrounded_vowel.ogg.mp3"],
  ["Close front rounded vowel","y","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ea/Close_front_rounded_vowel.ogg/Close_front_rounded_vowel.ogg.mp3"],
  ["Close central unrounded vowel","ɨ","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/53/Close_central_unrounded_vowel.ogg/Close_central_unrounded_vowel.ogg.mp3"],
  ["Close central rounded vowel","ʉ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/66/Close_central_rounded_vowel.ogg/Close_central_rounded_vowel.ogg.mp3"],
  ["Close back unrounded vowel","ɯ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e8/Close_back_unrounded_vowel.ogg/Close_back_unrounded_vowel.ogg.mp3"],
  ["Close back rounded vowel","u","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/5d/Close_back_rounded_vowel.ogg/Close_back_rounded_vowel.ogg.mp3"],
  ["Near-close near-front unrounded vowel","ɪ","https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4c/Near-close_near-front_unrounded_vowel.ogg/Near-close_near-front_unrounded_vowel.ogg.mp3"],
  ["Near-close near-front rounded vowel","ʏ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e3/Near-close_near-front_rounded_vowel.ogg/Near-close_near-front_rounded_vowel.ogg.mp3"],
  ["Near-close near-back rounded vowel","ʊ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d5/Near-close_near-back_rounded_vowel.ogg/Near-close_near-back_rounded_vowel.ogg.mp3"],
  ["Close-mid front unrounded vowel","e","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/Close-mid_front_unrounded_vowel.ogg/Close-mid_front_unrounded_vowel.ogg.mp3"],
  ["Close-mid front rounded vowel","ø","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/53/Close-mid_front_rounded_vowel.ogg/Close-mid_front_rounded_vowel.ogg.mp3"],
  ["Close-mid central unrounded vowel","ɘ","https://upload.wikimedia.org/wikipedia/commons/transcoded/6/60/Close-mid_central_unrounded_vowel.ogg/Close-mid_central_unrounded_vowel.ogg.mp3"],
  ["Close-mid central rounded vowel","ɵ","https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/Close-mid_central_rounded_vowel.ogg/Close-mid_central_rounded_vowel.ogg.mp3"],
  ["Close-mid back unrounded vowel","ɤ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/26/Close-mid_back_unrounded_vowel.ogg/Close-mid_back_unrounded_vowel.ogg.mp3"],
  ["Close-mid back rounded vowel","o","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/84/Close-mid_back_rounded_vowel.ogg/Close-mid_back_rounded_vowel.ogg.mp3"],
  ["Mid front unrounded vowel","e̞","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e0/Mid_front_unrounded_vowel.ogg/Mid_front_unrounded_vowel.ogg.mp3"],
  ["Mid front rounded vowel","ø̞","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ee/Mid_front_rounded_vowel.ogg/Mid_front_rounded_vowel.ogg.mp3"],
  ["Mid central vowel","ə","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Mid-central_vowel.ogg/Mid-central_vowel.ogg.mp3"],
  ["Mid back unrounded vowel","ɤ̞","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d8/%C9%A4%CC%9E_IPA_sound.opus/%C9%A4%CC%9E_IPA_sound.opus.mp3"],
  ["Mid back rounded vowel","o̞","https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a6/Mid_back_rounded_vowel.ogg/Mid_back_rounded_vowel.ogg.mp3"],
  ["Open-mid front unrounded vowel","ɛ","https://upload.wikimedia.org/wikipedia/commons/transcoded/7/71/Open-mid_front_unrounded_vowel.ogg/Open-mid_front_unrounded_vowel.ogg.mp3"],
  ["Open-mid front rounded vowel","œ","https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9f/Open-mid_front_rounded_vowel_%282%29.ogg/Open-mid_front_rounded_vowel_%282%29.ogg.mp3"],
  ["Open-mid central unrounded vowel","ɜ","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/01/Open-mid_central_unrounded_vowel.ogg/Open-mid_central_unrounded_vowel.ogg.mp3"],
  ["Open-mid central rounded vowel","ɞ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d9/Open-mid_central_rounded_vowel.ogg/Open-mid_central_rounded_vowel.ogg.mp3"],
  ["Open-mid back unrounded vowel","ʌ","https://upload.wikimedia.org/wikipedia/commons/transcoded/8/80/PR-open-mid_back_unrounded_vowel2.ogg/PR-open-mid_back_unrounded_vowel2.ogg.mp3"],
  ["Open-mid back rounded vowel","ɔ","https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d0/PR-open-mid_back_rounded_vowel.ogg/PR-open-mid_back_rounded_vowel.ogg.mp3"],
  ["Near-open front unrounded vowel","æ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c9/Near-open_front_unrounded_vowel.ogg/Near-open_front_unrounded_vowel.ogg.mp3"],
  ["Near-open central vowel","ɐ","https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Near-open_central_unrounded_vowel.ogg/Near-open_central_unrounded_vowel.ogg.mp3"],
  ["Open front unrounded vowel","a","https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/PR-open_front_unrounded_vowel.ogg/PR-open_front_unrounded_vowel.ogg.mp3"],
  ["Open front rounded vowel","ɶ","https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c1/Open_front_rounded_vowel.ogg/Open_front_rounded_vowel.ogg.mp3"],
  ["Open central unrounded vowel","ä","https://upload.wikimedia.org/wikipedia/commons/transcoded/5/50/Open_central_unrounded_vowel.ogg/Open_central_unrounded_vowel.ogg.mp3"],
  ["Open back unrounded vowel","ɑ","https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e5/Open_back_unrounded_vowel.ogg/Open_back_unrounded_vowel.ogg.mp3"],
  ["Open back rounded vowel","ɒ","https://upload.wikimedia.org/wikipedia/commons/transcoded/3/31/PR-open_back_rounded_vowel.ogg/PR-open_back_rounded_vowel.ogg.mp3"]
];

// Map canonical IDs for key phonemes referenced across UI
const CANONICAL_ID_MAP: Record<string, string> = {
  'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'ɡ': 'g', 'ʔ': 'glottal_stop',
  'm': 'm', 'n': 'n', 'ŋ': 'ng', 'ɲ': 'ny',
  'ts': 'affricate_ts', 'dz': 'affricate_dz', 't̠ʃ': 'affricate_tsh', 'd̠ʒ': 'affricate_dzh',
  'f': 'f', 'v': 'v', 'θ': 'theta', 'ð': 'eth', 's': 's', 'z': 'z', 'ʃ': 'esh', 'ʒ': 'ezh', 'x': 'x', 'ɣ': 'gh', 'h': 'h',
  'l': 'l', 'ɾ': 'r_tap', 'r': 'r_trill', 'j': 'j', 'w': 'w',
  'i': 'i', 'y': 'y', 'e': 'e', 'ɛ': 'epsilon', 'æ': 'ash', 'a': 'a', 'ə': 'schwa', 'u': 'u', 'o': 'o', 'ɔ': 'open_o', 'ɑ': 'script_a', 'ɒ': 'turned_script_a',
  'ʘ': 'click_bilabial', 'ǀ': 'click_dental', 'ɓ': 'implosive_voiced_bilabial', 'pʼ': 'ejective_p'
};

function helperInferPlace(name: string): PlaceOfArticulation | undefined {
  const n = name.toLowerCase();
  if (n.includes('bilabial')) return 'bilabial';
  if (n.includes('labiodental')) return 'labiodental';
  if (n.includes('dental')) return 'dental';
  if (n.includes('postalveolar')) return 'postalveolar';
  if (n.includes('alveolar')) return 'alveolar';
  if (n.includes('retroflex')) return 'retroflex';
  if (n.includes('palatal')) return 'palatal';
  if (n.includes('velar')) return 'velar';
  if (n.includes('uvular')) return 'uvular';
  if (n.includes('pharyngeal')) return 'pharyngeal';
  if (n.includes('glottal')) return 'glottal';
  if (n.includes('epiglottal')) return 'epiglottal';
  return undefined;
}

function helperInferManner(name: string): MannerOfArticulation | undefined {
  const n = name.toLowerCase();
  if (n.includes('affricate')) return 'affricate';
  if (n.includes('plosive') || n.includes('stop')) return 'plosive';
  if (n.includes('nasal')) return 'nasal';
  if (n.includes('trill')) return 'trill';
  if (n.includes('tap') || n.includes('flap')) return 'tap-flap';
  if (n.includes('lateral fricative')) return 'lateral-fricative';
  if (n.includes('fricative')) return 'fricative';
  if (n.includes('lateral approximant')) return 'lateral-approximant';
  if (n.includes('approximant')) return 'approximant';
  return undefined;
}

function helperInferVoicing(name: string): Voicing | undefined {
  const n = name.toLowerCase();
  if (n.startsWith('voiced')) return 'voiced';
  if (n.startsWith('voiceless')) return 'voiceless';
  return undefined;
}

function helperInferVowelHeight(name: string): VowelHeight | undefined {
  const n = name.toLowerCase();
  if (n.includes('close-mid')) return 'close-mid';
  if (n.includes('open-mid')) return 'open-mid';
  if (n.includes('near-close')) return 'near-close';
  if (n.includes('near-open')) return 'near-open';
  if (n.includes('close')) return 'close';
  if (n.includes('open')) return 'open';
  if (n.includes('mid')) return 'mid';
  return undefined;
}

function helperInferVowelBackness(name: string): VowelBackness | undefined {
  const n = name.toLowerCase();
  if (n.includes('near-front')) return 'near-front';
  if (n.includes('near-back')) return 'near-back';
  if (n.includes('front')) return 'front';
  if (n.includes('central')) return 'central';
  if (n.includes('back')) return 'back';
  return undefined;
}

function helperInferRoundness(name: string): Roundness | undefined {
  const n = name.toLowerCase();
  if (n.includes('unrounded')) return 'unrounded';
  if (n.includes('rounded')) return 'rounded';
  return undefined;
}

const parsedConsonants: IPASymbol[] = CONSONANT_CSV_DATA.map((row, idx) => {
  const [nameEnglish, symbol, audioUrl] = row;
  const canonicalId = CANONICAL_ID_MAP[symbol] || `consonant_${idx}_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;

  const isNonPulmonic = nameEnglish.toLowerCase().includes('click') || nameEnglish.toLowerCase().includes('implosive') || nameEnglish.toLowerCase().includes('ejective');

  return {
    id: canonicalId,
    symbol,
    unicode: `U+${symbol.codePointAt(0)?.toString(16).toUpperCase() || '0000'}`,
    nameEnglish,
    nameJapanese: nameEnglish,
    nameHungarian: nameEnglish,
    category: isNonPulmonic ? 'non-pulmonic' : 'pulmonic',
    voicing: helperInferVoicing(nameEnglish),
    placeOfArticulation: helperInferPlace(nameEnglish),
    mannerOfArticulation: helperInferManner(nameEnglish),
    description: { en: nameEnglish, ja: nameEnglish, hu: nameEnglish },
    articulatoryGuide: {
      en: `Articulatory position for ${nameEnglish}: place ${helperInferPlace(nameEnglish) || 'unspecified'}, manner ${helperInferManner(nameEnglish) || 'unspecified'}.`,
      ja: `${nameEnglish} の発音。`,
      hu: `${nameEnglish} képzése.`,
    },
    exampleWords: [],
    audioSource: audioUrl || undefined,
    audioAttribution: audioUrl ? {
      source: 'Wikimedia Commons',
      sourceUrl: audioUrl,
      creator: 'Wikimedia Phonetics',
      license: 'CC BY-SA 3.0 / 4.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
    } : undefined,
    relatedSymbols: [],
    commonConfusions: [],
    difficulty: idx < 30 ? 'beginner' : idx < 80 ? 'intermediate' : 'advanced',
    lessonOrder: idx + 1,
    isCore: idx < 40,
  };
});

const parsedVowels: IPASymbol[] = VOWEL_CSV_DATA.map((row, idx) => {
  const [nameEnglish, symbol, audioUrl] = row;
  const canonicalId = CANONICAL_ID_MAP[symbol] || `vowel_${idx}_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;

  return {
    id: canonicalId,
    symbol,
    unicode: `U+${symbol.codePointAt(0)?.toString(16).toUpperCase() || '0000'}`,
    nameEnglish,
    nameJapanese: nameEnglish,
    nameHungarian: nameEnglish,
    category: 'vowels',
    vowelHeight: helperInferVowelHeight(nameEnglish),
    vowelBackness: helperInferVowelBackness(nameEnglish),
    roundness: helperInferRoundness(nameEnglish),
    description: { en: nameEnglish, ja: nameEnglish, hu: nameEnglish },
    articulatoryGuide: {
      en: `Vowel position for ${nameEnglish}: height ${helperInferVowelHeight(nameEnglish) || 'unspecified'}, backness ${helperInferVowelBackness(nameEnglish) || 'unspecified'}, ${helperInferRoundness(nameEnglish) || 'unrounded'}.`,
      ja: `${nameEnglish} の発音。`,
      hu: `${nameEnglish} képzése.`,
    },
    exampleWords: [],
    audioSource: audioUrl || undefined,
    audioAttribution: audioUrl ? {
      source: 'Wikimedia Commons',
      sourceUrl: audioUrl,
      creator: 'Wikimedia Phonetics',
      license: 'CC BY-SA 3.0 / 4.0',
      attributionRequired: true,
      commercialUseAllowed: true,
      modificationAllowed: true,
      redistributionAllowed: true,
    } : undefined,
    relatedSymbols: [],
    commonConfusions: [],
    difficulty: 'intermediate',
    lessonOrder: 200 + idx,
    isCore: true,
  };
});

// Deduplicate dataset by symbol/ID
const rawAll = [...parsedConsonants, ...parsedVowels];
const uniqueMap = new Map<string, IPASymbol>();

for (const sym of rawAll) {
  if (!uniqueMap.has(sym.id)) {
    uniqueMap.set(sym.id, sym);
  }
}

export const IPA_SYMBOLS: IPASymbol[] = Array.from(uniqueMap.values());
