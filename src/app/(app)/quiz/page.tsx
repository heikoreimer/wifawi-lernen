"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronRight, RotateCcw, Home, CheckCircle2, XCircle, Star, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import { getRandomQuestions } from "@/data/questions";
import type { QuizQuestion, QuizCategory } from "@/types";
import { getUserProgress, saveUserProgress } from "@/lib/db";
import { updateStreak, todayISO } from "@/lib/utils/streak";
import { getLevelFromXP } from "@/types";
import {
  pageVariants, staggerContainer, staggerItem,
  correctPulse, wrongShake, spring,
} from "@/lib/utils/animations";

const CATEGORIES: { id: QuizCategory | "all"; label: string; emoji: string }[] = [
  { id: "all",            label: "Alle Fächer",        emoji: "🎯" },
  { id: "rechnungswesen", label: "Rechnungswesen",     emoji: "📊" },
  { id: "recht",          label: "Recht & Steuer",     emoji: "⚖️" },
  { id: "bwl",            label: "VWL / BWL",          emoji: "🏭" },
  { id: "personal",       label: "Personalführung",    emoji: "👥" },
  { id: "marketing",      label: "Marketing",          emoji: "📣" },
  { id: "steuern",        label: "Steuern",            emoji: "🧾" },
];

const XP_PER_CORRECT = 10;
const XP_PER_WRONG   = 2;
const QUIZ_LENGTH    = 10;

type Phase = "select" | "quiz" | "result";

export default function QuizPage() {
  const [phase,        setPhase]        = useState<Phase>("select");
  const [category,     setCategory]     = useState<QuizCategory | "all">("all");
  const [questions,    setQuestions]    = useState<QuizQuestion[]>([]);
  const [currentIdx,   setCurrentIdx]   = useState(0);
  const [selected,     setSelected]     = useState<number | null>(null);
  const [answered,     setAnswered]     = useState(false);
  const [results,      setResults]      = useState<boolean[]>([]);
  const [earnedXP,     setEarnedXP]     = useState(0);
  const [feedbackAnim, setFeedbackAnim] = useState<"correct" | "wrong" | "idle">("idle");

  const startQuiz = useCallback(() => {
    const qs = getRandomQuestions(QUIZ_LENGTH, category);
    setQuestions(qs);
    setCurrentIdx(0);
    setSelected(null);
    setAnswered(false);
    setResults([]);
    setEarnedXP(0);
    setPhase("quiz");
  }, [category]);

  const handleAnswer = useCallback(async (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === questions[currentIdx].correctIndex;
    setFeedbackAnim(correct ? "correct" : "wrong");
    const xp = correct ? XP_PER_CORRECT : XP_PER_WRONG;
    setEarnedXP((prev) => prev + xp);
    setResults((prev) => [...prev, correct]);

    // Persist XP + streak
    const progress = await getUserProgress();
    const newStreak = updateStreak(progress.streak, progress.lastActiveDate);
    await saveUserProgress({
      ...progress,
      xp: progress.xp + xp,
      level: getLevelFromXP(progress.xp + xp).level,
      streak: newStreak,
      lastActiveDate: todayISO(),
      totalAnswered: progress.totalAnswered + 1,
      totalCorrect: progress.totalCorrect + (correct ? 1 : 0),
    });
  }, [answered, currentIdx, questions]);

  const handleNext = useCallback(() => {
    setFeedbackAnim("idle");
    if (currentIdx + 1 >= questions.length) {
      setPhase("result");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [currentIdx, questions.length]);

  if (phase === "select") return <SelectScreen category={category} onSelect={setCategory} onStart={startQuiz} />;
  if (phase === "result") return <ResultScreen results={results} earnedXP={earnedXP} onRestart={() => setPhase("select")} />;

  const q = questions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="flex flex-col min-h-[calc(100dvh-80px)] px-4 pt-5 pb-4">

      {/* Progress bar + counter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium" style={{ color: "var(--color-text-2)" }}>
            Frage {currentIdx + 1} / {questions.length}
          </span>
          <span className="text-xs font-bold" style={{ color: "var(--color-primary)" }}>
            +{earnedXP} XP
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
          <motion.div className="h-full rounded-full" style={{ background: "var(--color-primary)" }}
            animate={{ width: `${progress}%` }} transition={{ ...spring.smooth }} />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={currentIdx}
          initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -32 }}
          transition={spring.smooth}
          className="rounded-2xl p-5 mb-4"
          style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-md)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block"
            style={{ color: "var(--color-primary)" }}>
            {CATEGORIES.find(c => c.id === q.category)?.emoji} {CATEGORIES.find(c => c.id === q.category)?.label}
          </span>
          <p className="text-base font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
            {q.question}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Answer options */}
      <div key={`opts-${currentIdx}`} className="space-y-3 flex-1">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect  = i === q.correctIndex;
          const showResult = answered;

          let bg     = "var(--color-surface)";
          let border = "var(--color-border)";

          if (showResult && isCorrect) {
            bg = "color-mix(in srgb, #30D158 15%, var(--color-surface))";
            border = "#30D158";
          } else if (showResult && isSelected && !isCorrect) {
            bg = "color-mix(in srgb, #FF453A 15%, var(--color-surface))";
            border = "#FF453A";
          }

          return (
            <motion.button
              key={i}
              {...(feedbackAnim === "wrong" && isSelected ? wrongShake : {})}
              animate={feedbackAnim === "wrong" && isSelected ? "wrong" : undefined}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className="w-full text-left rounded-2xl p-4 min-h-[56px] flex items-center gap-3 active:scale-[0.98] transition-colors duration-150"
              style={{ background: bg, border: `1.5px solid ${border}`, boxShadow: "var(--shadow-sm)" }}
            >
              <span className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0"
                style={{
                  background: showResult && isCorrect ? "#30D158" : showResult && isSelected ? "#FF453A" : "var(--color-surface-2)",
                  color: showResult && (isCorrect || isSelected) ? "#fff" : "var(--color-text-2)"
                }}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm leading-snug flex-1" style={{ color: "var(--color-text)" }}>{opt}</span>
              {showResult && isCorrect  && <CheckCircle2 size={18} style={{ color: "#30D158", flexShrink: 0 }} />}
              {showResult && isSelected && !isCorrect && <XCircle size={18} style={{ color: "#FF453A", flexShrink: 0 }} />}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      <AnimatePresence>
        {answered && (
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} transition={spring.smooth} className="mt-4 space-y-3">

            {/* Explanation box */}
            <div className="rounded-2xl p-4"
              style={{
                background: selected === q.correctIndex
                  ? "color-mix(in srgb, #30D158 10%, var(--color-surface))"
                  : "color-mix(in srgb, #FF453A 10%, var(--color-surface))",
                border: `1px solid ${selected === q.correctIndex ? "#30D15840" : "#FF453A40"}`,
              }}>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={14} style={{ color: selected === q.correctIndex ? "#30D158" : "#FF453A" }} />
                <span className="text-xs font-bold"
                  style={{ color: selected === q.correctIndex ? "#30D158" : "#FF453A" }}>
                  {selected === q.correctIndex ? "Richtig! 🎉" : "Nicht ganz – hier die Erklärung:"}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text)" }}>
                {q.explanation}
              </p>
            </div>

            <motion.button whileTap={{ scale: 0.97 }} onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold text-white active:opacity-90"
              style={{ background: "var(--color-primary)" }}>
              {currentIdx + 1 >= questions.length ? "Ergebnis anzeigen" : "Nächste Frage"}
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Select Screen ──────────────────────────────────────────────────────── */

function SelectScreen({ category, onSelect, onStart }: {
  category: QuizCategory | "all";
  onSelect: (c: QuizCategory | "all") => void;
  onStart: () => void;
}) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate"
      className="px-4 pt-6 pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }}>
          <Zap size={20} style={{ color: "var(--color-primary)" }} />
        </div>
        <div>
          <h1 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>Quick Quiz</h1>
          <p className="text-xs" style={{ color: "var(--color-text-2)" }}>{QUIZ_LENGTH} Fragen · ~5 Min</p>
        </div>
      </div>

      <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text-2)" }}>Fach wählen</p>

      <div className="grid grid-cols-2 gap-2 mb-6">
        {CATEGORIES.map((cat) => {
          const isActive = category === cat.id;
          return (
            <button key={cat.id}
              onClick={() => onSelect(cat.id as QuizCategory | "all")}
              className={`rounded-2xl p-3 text-left min-h-[64px] flex flex-col justify-between active:scale-95 transition-transform duration-100 ${cat.id === "all" ? "col-span-2" : ""}`}
              style={{
                background: isActive
                  ? "color-mix(in srgb, var(--color-primary) 18%, var(--color-surface))"
                  : "var(--color-surface)",
                border: `1.5px solid ${isActive ? "var(--color-primary)" : "rgba(255,255,255,0.12)"}`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}>
              <span className="text-xl">{cat.emoji}</span>
              <span className="text-xs font-semibold" style={{
                color: isActive ? "var(--color-primary)" : "var(--color-text)" }}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <motion.button whileTap={{ scale: 0.97 }} onClick={onStart}
        className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[56px] font-bold text-white text-base active:opacity-90"
        style={{ background: "linear-gradient(135deg, var(--color-primary), #5E5CE6)" }}>
        <Zap size={20} />
        Quiz starten
      </motion.button>
    </motion.div>
  );
}

/* ─── Result Screen ──────────────────────────────────────────────────────── */

function ResultScreen({ results, earnedXP, onRestart }: {
  results: boolean[];
  earnedXP: number;
  onRestart: () => void;
}) {
  const correct = results.filter(Boolean).length;
  const pct     = Math.round((correct / results.length) * 100);
  const grade   = pct >= 80 ? "🏆 Excellent!" : pct >= 60 ? "👍 Gut gemacht!" : "💪 Weiterüben!";

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate"
      className="px-4 pt-10 pb-4 flex flex-col items-center">

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring.bouncy}
        className="text-6xl mb-4">{grade.split(" ")[0]}</motion.div>

      <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--color-text)" }}>{grade.slice(2)}</h2>
      <p className="text-sm mb-8" style={{ color: "var(--color-text-2)" }}>
        {correct} von {results.length} Fragen richtig
      </p>

      {/* Score ring */}
      <div className="relative w-32 h-32 mb-6">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-surface-2)" strokeWidth="12" />
          <motion.circle cx="60" cy="60" r="50" fill="none"
            stroke={pct >= 80 ? "#30D158" : pct >= 60 ? "#FF9F0A" : "#FF453A"}
            strokeWidth="12" strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 50}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - pct / 100) }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>{pct}%</span>
        </div>
      </div>

      {/* XP earned */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 rounded-2xl px-5 py-3 mb-8"
        style={{ background: "color-mix(in srgb, var(--color-secondary) 15%, var(--color-surface))" }}>
        <Star size={18} style={{ color: "var(--color-secondary)" }} fill="currentColor" />
        <span className="font-bold" style={{ color: "var(--color-text)" }}>+{earnedXP} XP verdient</span>
      </motion.div>

      {/* Result list */}
      <div className="w-full flex gap-1.5 mb-8">
        {results.map((r, i) => (
          <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ delay: 0.1 + i * 0.05, ...spring.snappy }}
            className="flex-1 h-2 rounded-full"
            style={{ background: r ? "#30D158" : "#FF453A", transformOrigin: "bottom" }} />
        ))}
      </div>

      <div className="w-full space-y-3">
        <motion.button whileTap={{ scale: 0.97 }} onClick={onRestart}
          className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold text-white"
          style={{ background: "var(--color-primary)" }}>
          <RotateCcw size={18} /> Nochmal spielen
        </motion.button>
        <Link href="/dashboard" className="block">
          <motion.div whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold"
            style={{ background: "var(--color-surface)", color: "var(--color-text-2)", boxShadow: "var(--shadow-xs)" }}>
            <Home size={18} /> Dashboard
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
