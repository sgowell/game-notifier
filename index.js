/* eslint-disable no-undef */

import 'dotenv/config';
import { ApiClient } from '@twurple/api';
import { AppTokenAuthProvider } from '@twurple/auth';

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// twitch://open?stream=<channel name>

const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

const apiClient = new ApiClient({ authProvider });
await apiClient.games
  .getGamesByIgdbIds([process.env.IGDB_ID])
  .then(async (games) => {
    games.forEach(async (item) => {
      await item.getStreams().then(async (gameStreams) => {
        gameStreams.data.forEach(async (stream) => {
          const user = await stream.getUser();

          apiClient.chat.getSettings(user.id).then((settings) => {
            console.log(`Twitch URL: twitch://open?stream=${user.name}`);

            if (stream.language !== 'en') {
              console.log(`language: ${stream.language}`);
            }

            const followerModeEnabled = settings.followerOnlyModeEnabled;
            if (followerModeEnabled) {
              const delay = settings.followerOnlyModeDelay ?? 'none';
              console.log(`Follower Only - Delay: ${delay}`);
            }
            console.log('---');
          });
        });
      });
    });
  });
