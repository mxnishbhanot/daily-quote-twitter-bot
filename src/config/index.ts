import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Define the type for the Twitter API configuration
interface TwitterApiConfig {
  appKey: string;
  appSecret: string;
  accessToken: string;
  accessSecret: string;
}

// Read the environment variables
const config: TwitterApiConfig = {
  appKey: process.env.TWITTER_APP_KEY || '',
  appSecret: process.env.TWITTER_APP_SECRET || '',
  accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
  accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
};

// Create a new instance of the Twitter API client
const client = new TwitterApi(config);

// Access the readWrite property of the client
const rwClient = client.readWrite;

export = rwClient;
