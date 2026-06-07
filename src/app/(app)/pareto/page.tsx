"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PARETO_SUBJECTS, WBQ_SUBJECTS, HSQ_SUBJECTS } from "@/data/pareto";
import { ParetoCard } from "@/components/gamification/ParetoCard";
import { pageVariants, staggerContainer, staggerItem } from "@/lib/utils/animations";

type Tab = "all" | "WBQ" | "HSQ";

export default function ParetoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const subjects =
    activeTab === "WBQ" ? WBQ_SUBJECTS :
    activeTab === "HSQ" ? HSQ_SUBJECTS :
    PARETO_SUBJECTS;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-4 pt-5 pb-4"
    >
      {/* Back + Header */}
      <div className="flex items-center gap-3 mb-5">
        <Link href="/dashboard">
          <motion.div
            whileTap={{ scale: 0.92 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center active:opacity-70"
            style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-xs)" }}
          >
            <ArrowLeft size={18} style={{ color: "var(--color-text-2)" }} />
          </motion.div>
        </Link>
        <div>
          <h1 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
            Pareto-Analyse
          </h1>
          <p className="text-xs" style={{ color: "var(--color-text-2)" }}>
            20 % der Themen → 80 % der Prüfungspunkte
          </p>
        </div>
        <div className="ml-auto">
          <Target size={22} style={{ color: "var(--color-primary)" }} />
        </div>
      </div>

      {/* Info Banner */}
      <motion.div
        variants={staggerItem}
        className="rounded-2xl p-3 mb-4 flex gap-3 items-start"
        style={{
          background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
        }}
      >
        <span className="text-lg">💡</span>
        <p className="text-xs leading-relaxed" style={{ color: "var(--color-text)" }}>
          Die Pareto-Analyse wertet alle Prüfungsaufgaben seit 2015 aus.
          Die <strong>farbig markierten Themen</strong> (≤ 80 % kumulativ) sind dein Kern –
          hier sitzt der größte Hebel für deine Prüfungsvorbereitung.
        </p>
      </motion.div>

      {/* Tab Filter */}
      <div
        className="flex gap-1 p-1 rounded-xl mb-4"
        style={{ background: "var(--color-surface-2)" }}
      >
        {(["all", "WBQ", "HSQ"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-150 active:scale-95"
            style={
              activeTab === tab
                ? { background: "var(--color-surface)", color: "var(--color-text)", boxShadow: "var(--shadow-xs)" }
                : { background: "transparent", color: "var(--color-text-2)" }
            }
          >
            {tab === "all" ? "Alle" : tab}
          </button>
        ))}
      </div>

      {/* Subject Cards */}
      <motion.div
        className="space-y-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        key={activeTab}
      >
        {subjects.map((subject, i) => (
          <ParetoCard key={subject.id} subject={subject} defaultExpanded={i === 0} />
        ))}
      </motion.div>
    </motion.div>
  );
}
