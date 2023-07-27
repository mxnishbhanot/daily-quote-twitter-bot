import axios, { AxiosResponse } from 'axios';

// Defined the type for the Quote object
interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  length: number;
}

/**
 * Function to generate a random quote using the quotable.io API.
 *
 * @returns {Promise<Quote>} A Promise that resolves with the generated quote.
 */
const quote_generator = async (): Promise<Quote> => {
  try {
    const url = 'https://api.quotable.io/random';
    const response: AxiosResponse<Quote> = await axios.get(url);
    const quote: Quote = response.data;

    return quote;
  } catch (error: any) {
    throw new Error(error);
  }
};

export = quote_generator;
