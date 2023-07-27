/**
 * Function to create a formatted quote string.
 *
 * @param {string} type - The type of the quote (e.g., "quote of the day", "inspirational", etc.).
 * @param {string} quoteText - The text of the quote.
 * @param {string} author - The author of the quote.
 * @returns {string} The formatted quote string with a greeting and proper formatting.
 */
function createFormattedQuote(
  type: string,
  quoteText: string,
  author: string,
): string {
  const greeting = `🌞 Good morning! 🌞\n\nToday's ${type}:`;
  const formattedQuote = `${greeting}\n\n📜 "${quoteText}"\n— ${author}\n\n#TwitterBot #QuoteOfTheDay #QuoteGenerator #TechProject`;

  return formattedQuote;
}

export = createFormattedQuote;
