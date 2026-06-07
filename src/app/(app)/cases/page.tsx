"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, ArrowLeft, CheckCircle2, Eye, EyeOff, Star, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CASE_STUDIES, type CaseStudy, type CaseTask } from "@/data/cases";
import { pageVariants, staggerContainer, staggerItem, spring } from "@/lib/utils/animations";

type Phase = "list" | "case" | "done";

export default function CasesPage() {
  const [phase,    setPhase]    = useState<Phase>("list");
  const [caseData, setCaseData] = useState<CaseStudy | null>(null);
  const [taskIdx,  setTaskIdx]  = useState(0);
  const [answers,  setAnswers]  = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [checked,  setChecked]  = useState<Record<string, boolean>>({});

  const startCase = (c: CaseStudy) => {
    setCaseData(c);
    setTaskIdx(0);
    setAnswers({});
    setRevealed({});
    setChecked({});
    setPhase("case");
  };

  if (phase === "list") return <ListScreen onSelect={startCase} />;
  if (phase === "done" && caseData) return <DoneScreen caseData={caseData} onBack={() => setPhase("list")} />;

  const c = caseData!;
  const task = c.tasks[taskIdx];
  const isLastTask = taskIdx === c.tasks.length - 1;
  const isRevealed = !!revealed[task.id];
  const isChecked  = !!checked[task.id];

  const handleNext = () => {
    if (isLastTask) setPhase("done");
    else setTaskIdx((i) => i + 1);
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="flex flex-col min-h-[calc(100dvh-80px)] px-4 pt-5 pb-4">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setPhase("list")} className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-xl active:opacity-60"
          style={{ background: "var(--color-surface-2)" }}>
          <ArrowLeft size={18} style={{ color: "var(--color-text-2)" }} />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium truncate" style={{ color: "var(--color-text-2)" }}>{c.title}</p>
          <p className="text-[10px]" style={{ color: "var(--color-text-3)" }}>
            Aufgabe {taskIdx + 1} / {c.tasks.length} · {task.points} Punkte
          </p>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full"
          style={{ background: `color-mix(in srgb, ${c.subjectColor} 15%, transparent)`, color: c.subjectColor }}>
          {c.subject}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 rounded-full mb-4 overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
        <motion.div className="h-full rounded-full"
          style={{ background: c.subjectColor }}
          animate={{ width: `${((taskIdx) / c.tasks.length) * 100}%` }}
          transition={spring.smooth} />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pb-2">
        {/* Scenario (only first task) */}
        {taskIdx === 0 && (
          <div className="rounded-2xl p-4"
            style={{ background: "var(--color-surface)", boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[10px] font-bold uppercase tracking-wider mb-2"
              style={{ color: c.subjectColor }}>Sachverhalt</p>
            <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: "var(--color-text)" }}>
              {c.scenario}
            </p>
          </div>
        )}

        {/* Task */}
        <div className="rounded-2xl p-4"
          style={{ background: "var(--color-surface)", boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: "var(--color-text-3)" }}>Aufgabe {taskIdx + 1}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
              style={{ background: `color-mix(in srgb, ${c.subjectColor} 15%, transparent)`, color: c.subjectColor }}>
              {task.points} Pkt.
            </span>
          </div>
          <p className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
            {task.question}
          </p>
        </div>

        {/* Answer input */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: "var(--color-surface)", boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[10px] font-bold uppercase tracking-wider px-4 pt-4 pb-2"
            style={{ color: "var(--color-text-2)" }}>Deine Antwort</p>
          <textarea
            className="w-full px-4 pb-4 text-sm leading-relaxed resize-none outline-none"
            style={{ background: "transparent", color: "var(--color-text)", minHeight: 120 }}
            placeholder="Schreibe deine Antwort hier…"
            value={answers[task.id] ?? ""}
            onChange={(e) => setAnswers((prev) => ({ ...prev, [task.id]: e.target.value }))}
          />
        </div>

        {/* Reveal sample answer */}
        <motion.button whileTap={{ scale: 0.97 }}
          onClick={() => setRevealed((prev) => ({ ...prev, [task.id]: !prev[task.id] }))}
          className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[48px] font-semibold text-sm active:opacity-80"
          style={{
            background: isRevealed
              ? `color-mix(in srgb, ${c.subjectColor} 12%, var(--color-surface))`
              : "var(--color-surface-2)",
            color: isRevealed ? c.subjectColor : "var(--color-text-2)",
          }}>
          {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
          {isRevealed ? "Musterlösung ausblenden" : "Musterlösung anzeigen"}
        </motion.button>

        {/* Sample answer */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
              <div className="rounded-2xl p-4 space-y-3"
                style={{ background: `color-mix(in srgb, ${c.subjectColor} 8%, var(--color-surface))`,
                         border: `1px solid color-mix(in srgb, ${c.subjectColor} 20%, transparent)` }}>
                <p className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: c.subjectColor }}>Musterlösung</p>
                <p className="text-xs leading-relaxed font-mono whitespace-pre-line"
                  style={{ color: "var(--color-text)" }}>{task.sampleAnswer}</p>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-text-3)" }}>Schlüsselpunkte</p>
                  {task.keyPoints.map((kp, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: c.subjectColor }} />
                      <span className="text-xs" style={{ color: "var(--color-text)" }}>{kp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Next button */}
      <motion.button whileTap={{ scale: 0.97 }} onClick={handleNext}
        className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold text-white mt-4 active:opacity-90"
        style={{ background: c.subjectColor }}>
        {isLastTask ? "Fallstudie abschließen" : "Nächste Aufgabe"}
        <ChevronRight size={18} />
      </motion.button>
    </motion.div>
  );
}

/* ─── List Screen ────────────────────────────────────────────────────────── */

function ListScreen({ onSelect }: { onSelect: (c: CaseStudy) => void }) {
  const stars = (d: 1 | 2 | 3) => "★".repeat(d) + "☆".repeat(3 - d);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate"
      className="px-4 pt-6 pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "color-mix(in srgb, #FF9F0A 15%, transparent)" }}>
          <BookOpen size={20} style={{ color: "#FF9F0A" }} />
        </div>
        <div>
          <h1 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>Fallstudien</h1>
          <p className="text-xs" style={{ color: "var(--color-text-2)" }}>Prüfungsnahe Komplexaufgaben</p>
        </div>
      </div>

      <motion.div className="space-y-3" variants={staggerContainer} initial="initial" animate="animate">
        {CASE_STUDIES.map((c) => (
          <motion.button key={c.id} variants={staggerItem} whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(c)}
            className="w-full text-left rounded-2xl p-4 active:opacity-80"
            style={{ background: "var(--color-surface)", boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: `color-mix(in srgb, ${c.subjectColor} 15%, transparent)`,
                             color: c.subjectColor }}>
                    {c.subject}
                  </span>
                  <span className="text-[10px]" style={{ color: "#FF9F0A" }}>
                    {stars(c.difficulty)}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
                  {c.title}
                </p>
                <p className="text-[10px] mt-1" style={{ color: c.subjectColor }}>
                  {c.examHint}
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--color-text-2)" }}>
                  {c.tasks.length} Aufgaben · {c.tasks.reduce((s, t) => s + t.points, 0)} Punkte
                </p>
              </div>
              <ChevronRight size={18} style={{ color: "var(--color-text-3)", marginTop: 2 }} />
            </div>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Done Screen ────────────────────────────────────────────────────────── */

function DoneScreen({ caseData, onBack }: { caseData: CaseStudy; onBack: () => void }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate"
      className="px-4 pt-10 pb-4 flex flex-col items-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring.bouncy}
        className="text-6xl mb-4">✅</motion.div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>Fallstudie abgeschlossen!</h2>
      <p className="text-sm mb-2 text-center" style={{ color: "var(--color-text-2)" }}>
        {caseData.title}
      </p>
      <p className="text-xs text-center mb-8" style={{ color: "var(--color-text-3)" }}>
        Vergleiche deine Antworten mit der Musterlösung und notiere Lücken.
      </p>
      <div className="w-full space-y-3">
        <motion.button whileTap={{ scale: 0.97 }} onClick={onBack}
          className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold text-white"
          style={{ background: caseData.subjectColor }}>
          <BookOpen size={18} /> Weitere Fälle
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
