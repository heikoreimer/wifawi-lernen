"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, Trophy, Zap, CreditCard, BookOpen, ChevronRight, Target } from "lucide-react";
import { PARETO_SUBJECTS, getCoreTopics } from "@/data/pareto";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserProgress } from "@/lib/db";
import { getLevelFromXP, getXPForNextLevel, type UserProgress } from "@/types";
import { staggerContainer, staggerItem, flameVariants, xpBump } from "@/lib/utils/animations";

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    getUserProgress().then(setProgress);
  }, []);

  if (!progress) {
    return <DashboardSkeleton />;
  }

  const currentLevel = getLevelFromXP(progress.xp);
  const next = getXPForNextLevel(progress.xp);
  const xpProgress = next
    ? ((progress.xp - (getLevelFromXP(progress.xp - 1)?.minXP ?? 0)) /
        (next.nextLevel.minXP - (getLevelFromXP(progress.xp - 1)?.minXP ?? 0))) *
      100
    : 100;
  const accuracy = progress.totalAnswered > 0
    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
    : 0;

  return (
    <motion.div
      className="px-4 pt-6 pb-4 space-y-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div variants={staggerItem} className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium" style={{ color: "var(--color-text-2)" }}>
            Guten Morgen 👋
          </p>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
            WiFaWi Lernen
          </h1>
        </div>
        <motion.div
          variants={flameVariants}
          animate="animate"
          className="flex flex-col items-center"
        >
          <Flame size={28} style={{ color: "#FF6B35" }} fill="#FF6B35" />
          <span className="text-xs font-bold" style={{ color: "#FF6B35" }}>
            {progress.streak}d
          </span>
        </motion.div>
      </motion.div>

      {/* Level Card */}
      <motion.div
        variants={staggerItem}
        className="rounded-2xl p-4"
        style={{
          background: "linear-gradient(135deg, var(--color-primary), #5E5CE6)",
          boxShadow: "0 8px 24px color-mix(in srgb, var(--color-primary) 30%, transparent)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs font-medium text-white/70">Level {currentLevel.level}</p>
            <p className="text-lg font-bold text-white">{currentLevel.title}</p>
          </div>
          <motion.div variants={xpBump} className="flex items-center gap-1">
            <Star size={16} className="text-yellow-300" fill="currentColor" />
            <span className="text-white font-bold text-lg">{progress.xp} XP</span>
          </motion.div>
        </div>
        {next && (
          <div>
            <div className="flex justify-between text-xs text-white/70 mb-1">
              <span>Nächstes Level: {next.nextLevel.title}</span>
              <span>{next.xpNeeded} XP fehlen</span>
            </div>
            <div className="h-2 rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Bento Stats Grid */}
      <motion.div variants={staggerItem} className="grid grid-cols-2 gap-3">
        <StatCard
          label="Gelernte Karten"
          value={progress.totalAnswered}
          icon={<CreditCard size={18} style={{ color: "var(--color-primary)" }} />}
        />
        <StatCard
          label="Genauigkeit"
          value={`${accuracy}%`}
          icon={<Trophy size={18} style={{ color: "var(--color-secondary)" }} />}
          accent="secondary"
        />
        <StatCard
          label="Tages-Streak"
          value={`${progress.streak} Tage`}
          icon={<Flame size={18} style={{ color: "#FF6B35" }} />}
          accent="danger"
          wide
        />
      </motion.div>

      {/* Pareto Preview */}
      <motion.div variants={staggerItem}>
        <Link href="/pareto">
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl p-4 active:opacity-80 transition-opacity"
            style={{
              background: "linear-gradient(135deg, color-mix(in srgb, #5E5CE6 12%, var(--color-surface)), var(--color-surface))",
              boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)",
              border: "1px solid color-mix(in srgb, #5E5CE6 20%, transparent)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target size={16} style={{ color: "#5E5CE6" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                  Prioritäts-Themen
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs" style={{ color: "#5E5CE6" }}>Pareto-Analyse</span>
                <ChevronRight size={14} style={{ color: "#5E5CE6" }} />
              </div>
            </div>
            {/* Mini preview: first 3 top topics across subjects */}
            <div className="space-y-1.5">
              {PARETO_SUBJECTS.slice(0, 3).map((subject) => {
                const top = getCoreTopics(subject)[0];
                return (
                  <div key={subject.id} className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
                      style={{
                        background: `color-mix(in srgb, ${subject.color} 15%, transparent)`,
                        color: subject.color,
                      }}
                    >
                      {subject.shortLabel}
                    </span>
                    <span className="text-xs truncate" style={{ color: "var(--color-text-2)" }}>
                      {top?.topic}
                    </span>
                  </div>
                );
              })}
              <p className="text-[10px] pt-1" style={{ color: "var(--color-text-3)" }}>
                6 Fächer · alle Prüfungsjahre seit 2015
              </p>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={staggerItem}>
        <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--color-text-2)" }}>
          Schnell starten
        </h2>
        <div className="space-y-3">
          <QuickAction
            href="/quiz"
            icon={<Zap size={20} style={{ color: "#FFF" }} />}
            title="Quick Quiz"
            subtitle="10 Fragen · ~5 Min"
            gradient="linear-gradient(135deg, #007AFF, #5E5CE6)"
          />
          <QuickAction
            href="/flashcards"
            icon={<CreditCard size={20} style={{ color: "#FFF" }} />}
            title="Deep Dive"
            subtitle="Karteikarten mit Spaced Repetition"
            gradient="linear-gradient(135deg, #30D158, #34C759)"
          />
          <QuickAction
            href="/cases"
            icon={<BookOpen size={20} style={{ color: "#FFF" }} />}
            title="Fallstudien"
            subtitle="Echte Prüfungsfragen üben"
            gradient="linear-gradient(135deg, #FF9F0A, #FF6B35)"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  icon,
  accent,
  wide,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: "secondary" | "danger";
  wide?: boolean;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className={`rounded-2xl p-4 ${wide ? "col-span-2" : ""}`}
      style={{
        background: "var(--color-surface)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-xs font-medium" style={{ color: "var(--color-text-2)" }}>
          {label}
        </span>
      </div>
      <p className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
        {value}
      </p>
    </motion.div>
  );
}

function QuickAction({
  href,
  icon,
  title,
  subtitle,
  gradient,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-4 rounded-2xl p-4 min-h-[64px] active:opacity-80 transition-opacity"
        style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-sm)" }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: gradient }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
            {title}
          </p>
          <p className="text-xs truncate" style={{ color: "var(--color-text-2)" }}>
            {subtitle}
          </p>
        </div>
        <ChevronRight size={16} style={{ color: "var(--color-text-3)" }} />
      </motion.div>
    </Link>
  );
}

function DashboardSkeleton() {
  return (
    <div className="px-4 pt-6 space-y-4 animate-pulse">
      <div className="h-8 w-40 rounded-lg" style={{ background: "var(--color-surface-2)" }} />
      <div className="h-28 rounded-2xl" style={{ background: "var(--color-surface-2)" }} />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-24 rounded-2xl" style={{ background: "var(--color-surface-2)" }} />
        <div className="h-24 rounded-2xl" style={{ background: "var(--color-surface-2)" }} />
        <div className="h-24 rounded-2xl col-span-2" style={{ background: "var(--color-surface-2)" }} />
      </div>
    </div>
  );
}
