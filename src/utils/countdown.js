// Unlock date: 26 August 2026 at 12:00 AM (local time)
export const UNLOCK_DATE = new Date(2026, 7, 26, 0, 0, 0); // Month is 0-indexed (7 = August)

/**
 * Check if the website should be unlocked
 * @returns {boolean} true if current time >= unlock time
 */
export const isUnlocked = () => {
  const now = new Date();
  return now >= UNLOCK_DATE;
};

/**
 * Calculate remaining time until unlock
 * @returns {Object} Object with days, hours, minutes, seconds
 */
export const getTimeRemaining = () => {
  const now = new Date();
  const total = UNLOCK_DATE - now;
  
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }
  
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return { days, hours, minutes, seconds, total };
};
