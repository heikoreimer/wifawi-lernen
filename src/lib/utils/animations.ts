import type { Variants } from "framer-motion";

/* ─── Spring Presets (Apple-feel) ────────────────────────────────────────── */

export const spring = {
  snappy:  { type: "spring", stiffness: 500, damping: 35 },
  bouncy:  { type: "spring", stiffness: 400, damping: 25 },
  smooth:  { type: "spring", stiffness: 300, damping: 30 },
  gentle:  { type: "spring", stiffness: 200, damping: 30 },
  modal:   { type: "spring", stiffness: 350, damping: 30, mass: 0.8 },
} as const;

/* ─── Page Transitions ───────────────────────────────────────────────────── */

export const pageVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

/* ─── Card Flip (Flashcards) ─────────────────────────────────────────────── */

export const flipFront: Variants = {
  initial: { rotateY: 0 },
  flipped: { rotateY: -180, transition: spring.smooth },
};

export const flipBack: Variants = {
  initial: { rotateY: 180 },
  flipped: { rotateY: 0, transition: spring.smooth },
};

/* ─── Answer Feedback ────────────────────────────────────────────────────── */

export const correctPulse: Variants = {
  initial: { scale: 1, backgroundColor: "var(--color-surface)" },
  correct: {
    scale: [1, 1.03, 1],
    backgroundColor: ["var(--color-surface)", "#30D15820", "var(--color-surface)"],
    transition: { duration: 0.4, times: [0, 0.4, 1] },
  },
};

export const wrongShake: Variants = {
  initial: { x: 0 },
  wrong: {
    x: [-6, 6, -5, 5, -3, 3, 0],
    transition: { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1] },
  },
};

/* ─── Stagger Container ──────────────────────────────────────────────────── */

export const staggerContainer: Variants = {
  initial: {},
  animate: {},
};

export const staggerItem: Variants = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Streak Flame ───────────────────────────────────────────────────────── */

export const flameVariants: Variants = {
  animate: {
    scale: [1, 1.08, 0.96, 1.04, 1],
    rotate: [-2, 2, -1, 1, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};

/* ─── XP Counter Bump ────────────────────────────────────────────────────── */

export const xpBump: Variants = {
  initial: { scale: 1, y: 0 },
  bump: {
    scale: [1, 1.15, 1],
    y: [0, -4, 0],
    transition: spring.bouncy,
  },
};

/* ─── Modal / Sheet ──────────────────────────────────────────────────────── */

export const sheetVariants: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: spring.modal },
  exit:    { y: "100%", opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};
