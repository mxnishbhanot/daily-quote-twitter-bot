# Daily Quote Twitter Bot

The Daily Quote Twitter Bot is a TypeScript-based project that generates and tweets a random quote daily on Twitter. The bot fetches a quote from the quotable.io API, formats it, and then posts it to a Twitter account using the Twitter API.

## Prerequisites

Before running the bot, ensure you have the following installed:
- [Node.js](https://nodejs.org)
- npm: The Node.js package manager (usually comes with Node.js).

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/mxnishbhanot/daily-quote-twitter-bot.git
```

2. Navigate to the project directory:

```bash
cd daily-quote-twitter-bot
```

3. Install the project dependencies:

```bash
npm install
```

4. Set Up Twitter API Credentials:

To use the Twitter API, you need to create a Twitter Developer account and obtain API credentials:

- Create a [Twitter Developer account](https://developer.twitter.com/en/apply-for-access)
- Create a Twitter App to get the API Key, API Secret Key, Access Token, and Access Token Secret.

5. Configure Environment Variables:

Create a .env file in the project root and add your Twitter API credentials:

```bash
TWITTER_APP_KEY=your_twitter_api_key
TWITTER_APP_SECRET=your_twitter_api_secret_key
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_token_secret
```
Replace your_twitter_api_key, your_twitter_api_secret_key, your_twitter_access_token, and your_twitter_access_token_secret with your actual Twitter API credentials.

## Usage
```bash
npm start
```
The bot will fetch a random quote, format it, and post it to your Twitter account as a tweet.

## Contributing
If you'd like to contribute to the project, feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/mxnishbhanot/daily-quote-twitter-bot)

## License
This project is licensed under the MIT License.

## Acknowledgments
The [quotable.io](https://api.quotable.io) API for providing random quotes.
