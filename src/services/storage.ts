import type {AppState,ReviewState} from '../data/types';
const key='ipa-pro-state-v1';
export const emptyReview=():ReviewState=>({timesSeen:0,timesCorrect:0,timesIncorrect:0,streak:0,difficulty:1,confidence:0,mastery:0,favorite:false,difficult:false,notes:''});
export const defaultState:AppState={language:'en',theme:'system',dailyGoal:10,largeText:false,highContrast:false,reducedMotion:false,onboarded:false,review:{},quizHistory:[],recent:[],streak:0,longestStreak:0};
export function loadState():AppState{try{return {...defaultState,...JSON.parse(localStorage.getItem(key)||'{}')}}catch{return defaultState}}
export function saveState(s:AppState){localStorage.setItem(key,JSON.stringify(s))}
