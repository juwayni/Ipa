const key = 'ipa-learner-state-v2';
export const defaultState = { language:'en', theme:'system', dailyGoal:10, largeText:false, highContrast:false, reducedMotion:false, onboarded:false, goal:'Learn IPA from scratch', level:'Complete beginner', review:{}, quizHistory:[], recent:[], customCollections:{}, streak:0, longestStreak:0 };
export function emptyReview() { return { timesSeen:0, timesCorrect:0, timesIncorrect:0, lastReviewed:null, nextReview:null, streak:0, difficulty:1, confidence:0, mastery:0, favorite:false, difficult:false, notes:'' }; }
export function loadState() { try { return { ...defaultState, ...JSON.parse(localStorage.getItem(key) || '{}') }; } catch { return { ...defaultState }; } }
export function saveState(state) { localStorage.setItem(key, JSON.stringify(state)); }
export function exportState(state) { return JSON.stringify({ exportedAt:new Date().toISOString(), state }, null, 2); }
