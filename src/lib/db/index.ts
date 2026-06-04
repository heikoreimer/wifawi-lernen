import { openDB, type IDBPDatabase } from "idb";
import type { UserProgress, FlashcardProgress } from "@/types";

const DB_NAME = "wifawi-learn";
const DB_VERSION = 1;

interface DBSchema {
  progress: {
    key: string;
    value: UserProgress;
  };
  flashcardProgress: {
    key: string;
    value: FlashcardProgress;
    indexes: { nextReview: string };
  };
  quizHistory: {
    key: number;
    value: {
      id?: number;
      questionId: string;
      correct: boolean;
      timestamp: number;
    };
  };
}

type AppDB = IDBPDatabase<DBSchema>;

let dbPromise: Promise<AppDB> | null = null;

export function getDB(): Promise<AppDB> {
  if (!dbPromise) {
    dbPromise = openDB<DBSchema>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("progress")) {
          db.createObjectStore("progress");
        }
        if (!db.objectStoreNames.contains("flashcardProgress")) {
          const store = db.createObjectStore("flashcardProgress", { keyPath: "cardId" });
          store.createIndex("nextReview", "nextReview");
        }
        if (!db.objectStoreNames.contains("quizHistory")) {
          db.createObjectStore("quizHistory", { autoIncrement: true });
        }
      },
    });
  }
  return dbPromise;
}

/* ─── Progress helpers ───────────────────────────────────────────────────── */

const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: "",
  totalAnswered: 0,
  totalCorrect: 0,
  achievements: [],
};

export async function getUserProgress(): Promise<UserProgress> {
  const db = await getDB();
  const progress = await db.get("progress", "user");
  return progress ?? DEFAULT_PROGRESS;
}

export async function saveUserProgress(progress: UserProgress): Promise<void> {
  const db = await getDB();
  await db.put("progress", progress, "user");
}

export async function addXP(amount: number): Promise<UserProgress> {
  const progress = await getUserProgress();
  const updated = { ...progress, xp: progress.xp + amount };
  await saveUserProgress(updated);
  return updated;
}

/* ─── Flashcard SRS ──────────────────────────────────────────────────────── */

export async function getDueFlashcards(limit = 20): Promise<FlashcardProgress[]> {
  const db = await getDB();
  const today = new Date().toISOString().slice(0, 10);
  const all = await db.getAll("flashcardProgress");
  return all
    .filter((fp) => fp.nextReview <= today)
    .sort((a, b) => a.nextReview.localeCompare(b.nextReview))
    .slice(0, limit);
}

export async function saveFlashcardProgress(fp: FlashcardProgress): Promise<void> {
  const db = await getDB();
  await db.put("flashcardProgress", fp);
}
