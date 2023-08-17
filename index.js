/* eslint-disable no-undef */

import 'dotenv/config';
import { ApiClient } from '@twurple/api';
import { AppTokenAuthProvider } from '@twurple/auth';

import pkg from 'twilio';
const { Twilio } = pkg;

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

const apiClient = new ApiClient({ authProvider });
await apiClient.games
  .getGamesByIgdbIds([process.env.IGDB_ID])
  .then(async (games) => {
    games.forEach(async (item) => {
      await item.getStreams().then(async (gameStreams) => {
        if (gameStreams.data.length < 1) {
          const noStreams = `No ${item.name} Streams found\nCheck Back Later\nCheers.`;
          console.log(noStreams);
          sendMessage(noStreams);
        }
        gameStreams.data.forEach(async (stream) => {
          var body = '';
          const user = await stream.getUser();

          apiClient.chat.getSettings(user.id).then((settings) => {
            const twitchUrl = `Twitch URL: twitch://open?stream=${user.name}\n`;
            body += twitchUrl;
            console.log(twitchUrl);

            if (stream.language !== 'en') {
              const language = `language: ${stream.language}\n`;
              body += language;
              console.log(language);
            }

            const followerModeEnabled = settings.followerOnlyModeEnabled;
            if (followerModeEnabled) {
              const delay = settings.followerOnlyModeDelay ?? 'none';
              const followerDelay = `Followers Only - Delay: ${delay} minutes\n`;
              body += followerDelay;
              console.log(followerDelay);
            }
            
            sendMessage(body);
            console.log(body);
            console.log('---');
          });
        });
      });
    });
  });

function sendMessage(body) {
  client.messages
    .create({
      body: body,
      to: `+${process.env.TWILIO_TO_NUMBER}`,
      from: `+${process.env.TWILIO_FROM_NUMBER}`,
    })
    .then((message) => console.log(message.sid));
}