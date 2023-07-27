import cron from 'node-cron';
import postTweet from './tweet';

// Schedule time for the cron job (5 AM in local time - Asia/Kolkata)
const scheduleTime = '0 5 * * *';

/**
 * Function to be executed as the cron job.
 * It tries to post a tweet and handles any errors that might occur during the process.
 */
const startCronJob = async () => {
  try {
    await postTweet();
    console.log('Tweet posted successfully.');
  } catch (error: any) {
    console.error('Error occurred while posting the tweet:', error.message);
  }
};

// Scheduled the cron job to run daily at 5 AM IST (in local time)
const cron_job = cron.schedule(scheduleTime, startCronJob, {
  scheduled: true,
  timezone: 'Asia/Kolkata',
});

// Log a message when the cron job starts
console.log('Cron job started. Waiting for 5 AM IST...');

// Ensure the cron job is stopped when the Node.js process exits
process.on('SIGINT', () => {
  cron_job.stop();
  console.log('Cron job stopped.');
  process.exit();
});
