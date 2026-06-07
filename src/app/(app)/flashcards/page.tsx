"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { CreditCard, RotateCw, ChevronRight, Check, X, Minus, CheckCheck, Home } from "lucide-react";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import { FLASHCARDS } from "@/data/flashcards";
import type { Flashcard, FlashcardProgress, SRSRating } from "@/types";
import { saveFlashcardProgress } from "@/lib/db";
import { calculateNextReview, createInitialFlashcardProgress } from "@/lib/utils/sm2";
import { spring, pageVariants, staggerContainer, staggerItem } from "@/lib/utils/animations";

const RATING_BUTTONS: { rating: SRSRating; label: string; sublabel: string; color: string; icon: React.ReactNode }[] = [
  { rating: 0, label: "Nochmal",  sublabel: "< 1 Min",  color: "#FF453A", icon: <X size={16} /> },
  { rating: 1, label: "Schwer",   sublabel: "< 10 Min", color: "#FF9F0A", icon: <Minus size={16} /> },
  { rating: 2, label: "Gut",      sublabel: "4 Tage",   color: "#007AFF", icon: <Check size={16} /> },
  { rating: 3, label: "Leicht",   sublabel: "7+ Tage",  color: "#30D158", icon: <CheckCheck size={16} /> },
];

type Phase = "study" | "done";

export default function FlashcardsPage() {
  const [cards]       = useState<Flashcard[]>(() => [...FLASHCARDS].sort(() => Math.random() - 0.5));
  const [index,        setIndex]        = useState(0);
  const [flipped,      setFlipped]      = useState(false);
  const [phase,        setPhase]        = useState<Phase>("study");
  const [ratings,      setRatings]      = useState<SRSRating[]>([]);
  const [swipeDir,     setSwipeDir]     = useState<"left" | "right" | null>(null);

  const x       = useMotionValue(0);
  const rotate  = useTransform(x, [-200, 0, 200], [-18, 0, 18]);
  const opacity = useTransform(x, [-200, -80, 0, 80, 200], [0, 1, 1, 1, 0]);
  const controls = useAnimation();

  const card = cards[index];
  const progress = Math.round((index / cards.length) * 100);

  const handleRate = useCallback(async (rating: SRSRating) => {
    const initial = createInitialFlashcardProgress(card.id);
    const updated = calculateNextReview(initial, rating);
    await saveFlashcardProgress(updated);

    setRatings((prev) => [...prev, rating]);

    // animate card out
    const dir = rating >= 2 ? 1 : -1;
    setSwipeDir(rating >= 2 ? "right" : "left");
    await controls.start({ x: dir * 400, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } });

    if (index + 1 >= cards.length) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setFlipped(false);
      controls.set({ x: 0, opacity: 1 });
    }
    setSwipeDir(null);
  }, [card, index, cards.length, controls]);

  // swipe gesture
  const dragEnd = useCallback((_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 120;
    if (info.offset.x > threshold || info.velocity.x > 500) {
      handleRate(flipped ? 2 : 2); // swipe right = Gut
    } else if (info.offset.x < -threshold || info.velocity.x < -500) {
      handleRate(flipped ? 0 : 0); // swipe left = Nochmal
    } else {
      controls.start({ x: 0, transition: spring.snappy });
    }
  }, [flipped, handleRate, controls]);

  if (phase === "done") return <DoneScreen ratings={ratings} total={cards.length} />;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="flex flex-col min-h-[calc(100dvh-80px)] px-4 pt-5 pb-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CreditCard size={18} style={{ color: "var(--color-primary)" }} />
          <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>Deep Dive</span>
        </div>
        <span className="text-xs font-medium" style={{ color: "var(--color-text-2)" }}>
          {index + 1} / {cards.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 rounded-full mb-6 overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
        <motion.div className="h-full rounded-full" style={{ background: "var(--color-primary)" }}
          animate={{ width: `${progress}%` }} transition={spring.smooth} />
      </div>

      {/* Swipe hint */}
      <div className="flex justify-between text-[10px] mb-2 px-2" style={{ color: "var(--color-text-3)" }}>
        <span>← Nochmal</span>
        <span>Gut →</span>
      </div>

      {/* Flashcard */}
      <div className="flex-1 flex items-center justify-center" style={{ perspective: 1000 }}>
        <motion.div
          drag="x" dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={dragEnd}
          animate={controls}
          style={{ x, rotate, opacity, width: "100%", cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div
            style={{ position: "relative", transformStyle: "preserve-3d",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              minHeight: 280 }}
          >
            {/* Front */}
            <motion.div
              onClick={() => setFlipped(true)}
              className="absolute inset-0 rounded-3xl p-6 flex flex-col"
              style={{
                background: "var(--color-surface)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.10)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                minHeight: 280,
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-primary)" }}>
                {card.category.toUpperCase()} · {card.tags[0]}
              </span>
              <p className="text-base font-semibold flex-1 leading-relaxed whitespace-pre-line"
                style={{ color: "var(--color-text)" }}>{card.front}</p>
              <div className="flex items-center justify-center gap-1 mt-4"
                style={{ color: "var(--color-text-3)" }}>
                <RotateCw size={14} />
                <span className="text-xs">Tippen zum Umdrehen</span>
              </div>
            </motion.div>

            {/* Back */}
            <motion.div
              className="absolute inset-0 rounded-3xl p-6 flex flex-col"
              style={{
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-lg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                minHeight: 280,
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#30D158" }}>Antwort</span>
              <div className="flex-1 overflow-y-auto">
                <p className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "var(--color-text)" }}>{card.back}</p>
                {card.formula && (
                  <div className="mt-3 rounded-xl p-3"
                    style={{ background: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}>
                    <p className="text-xs font-mono font-bold" style={{ color: "var(--color-primary)" }}>
                      📐 {card.formula}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Rating buttons (only shown after flip) */}
      <AnimatePresence>
        {flipped && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} transition={spring.smooth}
            className="mt-4 grid grid-cols-4 gap-2">
            {RATING_BUTTONS.map(({ rating, label, sublabel, color, icon }) => (
              <motion.button key={rating} whileTap={{ scale: 0.92 }}
                onClick={() => handleRate(rating)}
                className="flex flex-col items-center rounded-2xl py-3 gap-1 min-h-[64px] active:opacity-80"
                style={{ background: `color-mix(in srgb, ${color} 12%, var(--color-surface))`,
                         border: `1.5px solid color-mix(in srgb, ${color} 30%, transparent)` }}>
                <span style={{ color }}>{icon}</span>
                <span className="text-[11px] font-semibold" style={{ color }}>{label}</span>
                <span className="text-[9px]" style={{ color: "var(--color-text-3)" }}>{sublabel}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip if not yet flipped */}
      {!flipped && (
        <div className="mt-4 text-center">
          <p className="text-xs" style={{ color: "var(--color-text-3)" }}>
            Swipe → Gut &nbsp;·&nbsp; Swipe ← Nochmal
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Done Screen ────────────────────────────────────────────────────────── */

function DoneScreen({ ratings, total }: { ratings: SRSRating[]; total: number }) {
  const easy  = ratings.filter((r) => r >= 2).length;
  const hard  = ratings.filter((r) => r < 2).length;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate"
      className="px-4 pt-10 pb-4 flex flex-col items-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring.bouncy}
        className="text-6xl mb-4">🎓</motion.div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>Session abgeschlossen!</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "var(--color-text-2)" }}>
        {total} Karten durchgearbeitet
      </p>

      <div className="w-full grid grid-cols-2 gap-3 mb-8">
        {[
          { label: "Gewusst",    value: easy, color: "#30D158" },
          { label: "Wiederholen", value: hard, color: "#FF453A" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-2xl p-4 text-center"
            style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-sm)" }}>
            <p className="text-3xl font-bold" style={{ color }}>{value}</p>
            <p className="text-xs mt-1" style={{ color: "var(--color-text-2)" }}>{label}</p>
          </div>
        ))}
      </div>

      <div className="w-full space-y-3">
        <Link href="/flashcards" className="block">
          <motion.div whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 rounded-2xl min-h-[52px] font-semibold text-white"
            style={{ background: "var(--color-primary)" }}>
            <RotateCw size={18} /> Nochmal lernen
          </motion.div>
        </Link>
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
