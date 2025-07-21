export interface SplitTitle {
  main: string;
  highlight: string;
}

/**
 * Split a title into main and highlight parts.
 *
 * Rules:
 * - If the word "Máy" is present and is not the last word, the part after
 *   "Máy" becomes the highlight and everything before (including "Máy")
 *   becomes the main.
 * - Otherwise, split after the first word: the first word is main and the
 *   remaining words form the highlight.
 */
export function splitTitle(title: string): SplitTitle {
  const normalized = title.trim().replace(/\s+/g, ' ');
  const words = normalized.split(' ');

  if (words.length <= 1) {
    return { main: normalized, highlight: '' };
  }

  const mayIndex = words.indexOf('Máy');
  if (mayIndex !== -1 && mayIndex < words.length - 1) {
    const main = words.slice(0, mayIndex + 1).join(' ');
    const highlight = words.slice(mayIndex + 1).join(' ');
    return { main, highlight };
  }

  const main = words[0];
  const highlight = words.slice(1).join(' ');
  return { main, highlight };
}