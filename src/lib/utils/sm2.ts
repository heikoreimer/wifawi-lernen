import type { FlashcardProgress, SRSRating } from "@/types";

/**
 * SM-2 Spaced Repetition Algorithm
 * Rating: 0=Again, 1=Hard, 2=Good, 3=Easy
 */
export function calculateNextReview(
  card: FlashcardProgress,
  rating: SRSRating
): FlashcardProgress {
  let { interval, easeFactor, repetitions } = card;

  if (rating < 2) {
    // Failed: reset
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);

    repetitions += 1;
  }

  // Adjust ease factor (SM-2 formula)
  easeFactor = Math.max(
    1.3,
    easeFactor + 0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02)
  );

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    interval,
    easeFactor,
    repetitions,
    lastRating: rating,
    nextReview: nextReview.toISOString().slice(0, 10),
  };
}

export function createInitialFlashcardProgress(cardId: string): FlashcardProgress {
  return {
    cardId,
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date().toISOString().slice(0, 10),
    lastRating: 2,
  };
}
