export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function updateStreak(currentStreak: number, lastActiveDate: string): number {
  const today = todayISO();
  const yesterday = yesterdayISO();

  if (lastActiveDate === today) return currentStreak;        // already active today
  if (lastActiveDate === yesterday) return currentStreak + 1; // continued streak
  return 1;                                                   // streak reset
}
