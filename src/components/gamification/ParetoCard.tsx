"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Target, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { type ParetoSubject, getCoreTopics } from "@/data/pareto";
import { staggerContainer, staggerItem } from "@/lib/utils/animations";

interface ParetoCardProps {
  subject: ParetoSubject;
  defaultExpanded?: boolean;
}

export function ParetoCard({ subject, defaultExpanded = false }: ParetoCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const coreTopics = getCoreTopics(subject);
  const allTopics = subject.topics;
  const displayTopics = expanded ? allTopics : coreTopics;

  return (
    <motion.div
      layout
      variants={staggerItem}
      className="rounded-2xl overflow-hidden"
      style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-sm)" }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-3 p-4 min-h-[56px] active:opacity-70 transition-opacity text-left"
        aria-expanded={expanded}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `color-mix(in srgb, ${subject.color} 15%, transparent)` }}
        >
          <Target size={16} style={{ color: subject.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>
              {subject.label}
            </span>
            <span
              className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: `color-mix(in srgb, ${subject.color} 15%, transparent)`,
                color: subject.color,
              }}
            >
              {subject.exam}
            </span>
          </div>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-2)" }}>
            Top {coreTopics.length} Themen · {coreTopics[coreTopics.length - 1]?.cumulativeShare ?? 0}% der Prüfungspunkte
          </p>
        </div>
        <div style={{ color: "var(--color-text-3)" }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Topic List */}
      <AnimatePresence initial={false}>
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="px-4 pb-4 space-y-2"
        >
          {displayTopics.map((topic, i) => {
            const isCore = topic.cumulativeShare <= 80;
            const barWidth = Math.min(
              100,
              i === 0
                ? topic.cumulativeShare
                : topic.cumulativeShare - (displayTopics[i - 1]?.cumulativeShare ?? 0)
            );
            // Show relative weight as bar
            const maxPoints = allTopics[0].totalPoints;
            const relativeWidth = Math.round((topic.totalPoints / maxPoints) * 100);

            return (
              <div key={topic.rank} className="space-y-1">
                <div className="flex items-start gap-2">
                  {/* Rank badge */}
                  <span
                    className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: isCore
                        ? `color-mix(in srgb, ${subject.color} 20%, transparent)`
                        : "var(--color-surface-2)",
                      color: isCore ? subject.color : "var(--color-text-3)",
                    }}
                  >
                    {topic.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-medium leading-snug"
                      style={{ color: isCore ? "var(--color-text)" : "var(--color-text-2)" }}
                    >
                      {topic.topic}
                    </p>
                    <p className="text-[10px] mt-0.5 leading-snug line-clamp-1"
                      style={{ color: "var(--color-text-3)" }}>
                      {topic.exampleContent}
                    </p>
                    {/* Weight bar */}
                    <div
                      className="mt-1.5 h-1 rounded-full overflow-hidden"
                      style={{ background: "var(--color-surface-2)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${relativeWidth}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                        style={{
                          background: isCore
                            ? subject.color
                            : `color-mix(in srgb, ${subject.color} 40%, var(--color-text-3))`,
                        }}
                      />
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-medium shrink-0 mt-0.5"
                    style={{ color: isCore ? subject.color : "var(--color-text-3)" }}
                  >
                    {topic.cumulativeShare}%
                  </span>
                </div>
              </div>
            );
          })}

          {/* "Show more / less" hint */}
          {!expanded && allTopics.length > coreTopics.length && (
            <p className="text-[10px] text-center pt-1" style={{ color: "var(--color-text-3)" }}>
              +{allTopics.length - coreTopics.length} weitere Themen anzeigen
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
