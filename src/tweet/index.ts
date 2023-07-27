import client from '../config';
import quote_generator from '../quote-generator';
import createFormattedQuote from '../utils';

/**
 * Function to post a tweet with a daily quote.
 */
const postTweet = async (): Promise<void> => {
  try {
    // Step 1: Generate a new quote.
    const quote = await quote_generator();

    // Step 2: Create a formatted quote string.
    const daily_quote = createFormattedQuote(
      quote.tags[0],
      quote.content,
      quote.author,
    );

    // Step 3: Tweet the formatted quote.
    const tweet = await client.v2.tweet({
      text: daily_quote,
    });

    // Step 4: Handle tweet response.
    if (tweet) {
      console.log('Tweet successfully posted.');
    }
  } catch (error: any) {
    console.log('Error:', error.message);
  }
};

export = postTweet;
