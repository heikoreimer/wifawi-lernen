/* ─── User Progress ─────────────────────────────────────────────────────── */

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string; // ISO date string YYYY-MM-DD
  totalAnswered: number;
  totalCorrect: number;
  achievements: string[];
}

/* ─── Quiz ──────────────────────────────────────────────────────────────── */

export type QuizCategory =
  | "rechnungswesen"
  | "bwl"
  | "recht"
  | "personal"
  | "marketing"
  | "steuern";

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
  sourceFile?: string;
}

/* ─── Flashcards (Spaced Repetition) ───────────────────────────────────── */

export type SRSRating = 0 | 1 | 2 | 3; // Again / Hard / Good / Easy

export interface Flashcard {
  id: string;
  category: QuizCategory;
  front: string;
  back: string;
  formula?: string; // LaTeX-like string for formulas
  example?: string;
  tags: string[];
  sourceFile?: string;
}

export interface FlashcardProgress {
  cardId: string;
  interval: number;   // days until next review
  easeFactor: number; // SM-2 ease factor (starts at 2.5)
  repetitions: number;
  nextReview: string; // ISO date string
  lastRating: SRSRating;
}

/* ─── Case Studies ──────────────────────────────────────────────────────── */

export interface CaseStudy {
  id: string;
  category: QuizCategory;
  title: string;
  scenario: string;        // the case description
  tasks: CaseStudyTask[];
  difficulty: 1 | 2 | 3;
}

export interface CaseStudyTask {
  id: string;
  question: string;
  sampleAnswer: string;
  keyPoints: string[];
  maxPoints: number;
}

/* ─── Gamification ──────────────────────────────────────────────────────── */

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;         // Lucide icon name
  xpReward: number;
  condition: (progress: UserProgress) => boolean;
}

export const LEVELS = [
  { level: 1, title: "Azubi",         minXP: 0 },
  { level: 2, title: "Praktikant",    minXP: 100 },
  { level: 3, title: "Sachbearbeiter",minXP: 300 },
  { level: 4, title: "Teamleiter",    minXP: 600 },
  { level: 5, title: "Abteilungsleiter", minXP: 1000 },
  { level: 6, title: "Prokurist",     minXP: 1500 },
  { level: 7, title: "Direktor",      minXP: 2200 },
  { level: 8, title: "Wirtschaftsfachwirt", minXP: 3000 },
] as const;

export function getLevelFromXP(xp: number) {
  const sorted = [...LEVELS].reverse();
  return sorted.find((l) => xp >= l.minXP) ?? LEVELS[0];
}

export function getXPForNextLevel(xp: number) {
  const currentLevel = getLevelFromXP(xp);
  const nextLevel = LEVELS.find((l) => l.level === currentLevel.level + 1);
  return nextLevel ? { nextLevel, xpNeeded: nextLevel.minXP - xp } : null;
}
