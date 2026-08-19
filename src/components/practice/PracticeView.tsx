import type { UserSettings, UserProgress, QuizMode, QuizQuestion } from '../../types/ipa';
import type { SRSRating } from '../../services/srsEngine';
import React, { useState, useEffect } from 'react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { audioService } from '../../services/audioService';
import { srsEngine } from '../../services/srsEngine';
import { getTranslation } from '../../i18n';
import { Brain, Volume2, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeViewProps {
  settings: UserSettings;
  progress: UserProgress;
  onProgressChange: (newProgress: UserProgress) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  settings,
  progress,
  onProgressChange,
}) => {
  const t = getTranslation(settings.language);
  const [activeSubTab, setActiveSubTab] = useState<'flashcards' | 'quiz'>('flashcards');

  // FLASHCARD STATE
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const dueSymbolIds = srsEngine.getDueSymbols(IPA_SYMBOLS.map((s) => s.id), progress);
  const currentFlashcardSymbol = IPA_SYMBOLS.find((s) => s.id === (dueSymbolIds[cardIndex] || IPA_SYMBOLS[0].id)) || IPA_SYMBOLS[0];

  // QUIZ STATE
  const [quizMode, setQuizMode] = useState<QuizMode>('four-choice');
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  // Generate a new quiz question
  const generateQuestion = (mode: QuizMode): QuizQuestion => {
    const targetSymbol = IPA_SYMBOLS[Math.floor(Math.random() * IPA_SYMBOLS.length)];
    const distractors = IPA_SYMBOLS.filter((s) => s.id !== targetSymbol.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allOptions = [targetSymbol, ...distractors].sort(() => 0.5 - Math.random());

    let promptText = '';
    if (mode === 'symbol-to-sound' || mode === 'four-choice') {
      promptText = `Which sound or description corresponds to symbol /${targetSymbol.symbol}/?`;
    } else if (mode === 'classification') {
      const classStr = targetSymbol.category === 'vowels'
        ? `${targetSymbol.vowelHeight || ''} ${targetSymbol.vowelBackness || ''} vowel`
        : `${targetSymbol.voicing || ''} ${targetSymbol.placeOfArticulation || ''} ${targetSymbol.mannerOfArticulation || ''}`;
      promptText = `Select the symbol that matches classification: "${classStr.trim() || targetSymbol.nameEnglish}"`;
    } else if (mode === 'reverse-description') {
      const articulatoryGuide = targetSymbol.articulatoryGuide?.[settings.language] || targetSymbol.nameEnglish;
      promptText = `Identify symbol for: "${articulatoryGuide}"`;
    } else {
      promptText = `Identify the target symbol /${targetSymbol.symbol}/:`;
    }

    return {
      id: Math.random().toString(),
      mode,
      targetSymbol,
      promptText,
      options: allOptions.map((opt) => ({
        id: opt.id,
        text: mode === 'reverse-description' || mode === 'four-choice' ? `/${opt.symbol}/` : opt.nameEnglish,
        symbol: opt.symbol,
        isCorrect: opt.id === targetSymbol.id,
        explanation: opt.description[settings.language],
      })),
    };
  };

  useEffect(() => {
    if (activeSubTab === 'quiz') {
      setCurrentQuestion(generateQuestion(quizMode));
      setSelectedOptionId(null);
      setIsAnswered(false);
    }
  }, [quizMode, activeSubTab]);

  const handleFlashcardRating = (rating: SRSRating) => {
    const updated = srsEngine.processReview(currentFlashcardSymbol.id, rating, progress);
    onProgressChange(updated);
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % (dueSymbolIds.length || 1));
  };

  const handleOptionSelect = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }

    setQuestionCount((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(generateQuestion(quizMode));
    setSelectedOptionId(null);
    setIsAnswered(false);
  };

  return (
    <div className="space-y-4">
      {/* Sub Tabs */}
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
        <button
          onClick={() => setActiveSubTab('flashcards')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
            activeSubTab === 'flashcards'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-500'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{t.practice.flashcards}</span>
        </button>
        <button
          onClick={() => setActiveSubTab('quiz')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
            activeSubTab === 'quiz'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-500'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>{t.practice.quizzes}</span>
        </button>
      </div>

      {/* FLASHCARDS SECTION */}
      {activeSubTab === 'flashcards' && (
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-center min-h-[280px] flex flex-col items-center justify-between relative overflow-hidden">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Due Today: {dueSymbolIds.length} symbols
            </span>

            {/* Flashcard Front/Back */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="my-auto cursor-pointer p-4 w-full flex flex-col items-center space-y-3"
            >
              <div className="text-7xl font-serif font-bold text-slate-900 dark:text-slate-100">
                {currentFlashcardSymbol.symbol}
              </div>

              {isFlipped ? (
                <div className="space-y-2 animate-in fade-in duration-200">
                  <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400">
                    {currentFlashcardSymbol.nameEnglish}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                    {currentFlashcardSymbol.articulatoryGuide[settings.language]}
                  </p>
                </div>
              ) : (
                <span className="text-xs text-slate-400 font-medium">Tap card to reveal answer</span>
              )}
            </div>

            <button
              onClick={() => audioService.playSymbolAudio(currentFlashcardSymbol, { speed: settings.playbackSpeed, volume: settings.audioVolume })}
              className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform"
              aria-label="Play sound"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* SRS Rating Buttons */}
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleFlashcardRating('again')}
              className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors"
            >
              {t.practice.ratingAgain}
            </button>
            <button
              onClick={() => handleFlashcardRating('hard')}
              className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold text-xs hover:bg-amber-100 transition-colors"
            >
              {t.practice.ratingHard}
            </button>
            <button
              onClick={() => handleFlashcardRating('good')}
              className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold text-xs hover:bg-indigo-100 transition-colors"
            >
              {t.practice.ratingGood}
            </button>
            <button
              onClick={() => handleFlashcardRating('easy')}
              className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold text-xs hover:bg-emerald-100 transition-colors"
            >
              {t.practice.ratingEasy}
            </button>
          </div>
        </div>
      )}

      {/* QUIZ SECTION */}
      {activeSubTab === 'quiz' && currentQuestion && (
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span>{t.practice.score}: {score} / {questionCount}</span>
              <div className="flex space-x-1">
                {(['four-choice', 'reverse-description', 'classification'] as QuizMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setQuizMode(m)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold capitalize ${
                      quizMode === m ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    {m.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Prompt */}
            <div className="text-center space-y-3 py-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                {currentQuestion.promptText}
              </h3>
              <button
                onClick={() => audioService.playSymbolAudio(currentQuestion.targetSymbol, { speed: settings.playbackSpeed, volume: settings.audioVolume })}
                className="p-3 rounded-full bg-indigo-600 text-white shadow-md hover:scale-105 transition-transform"
                aria-label="Play sound prompt"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-2.5">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(opt.id, opt.isCorrect)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border font-bold text-lg transition-all flex flex-col items-center justify-center space-y-1 ${btnStyle}`}
                  >
                    <span className="font-serif text-2xl">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Next Question CTA */}
            {isAnswered && (
              <button
                onClick={handleNextQuestion}
                className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all mt-2"
              >
                {t.practice.nextQuestion}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
