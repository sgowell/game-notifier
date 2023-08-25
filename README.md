# game-notifier

Configuration: 
Please rename `.env.template` to `.env` and update the fields with your respective keys.  

API Keys needed:  
- Twilio - to send SMS messages with the [Twilio API](https://www.twilio.com/docs/sms)  
- Twitch - to connect to the [Twitch API](https://dev.twitch.tv/docs/api/) to request streams playing your selected game(s).  
- Translate - to connect with your preferred Translation API (e.g [Google Translation AI](https://cloud.google.com/translate))  

Translation is using the [`translate` library](https://www.npmjs.com/package/translate).  
Your translation engine options are: `"google", "yandex", "libre", "deepl"`

To run: `node index.js`

Example Output
```
Twitch URL: twitch://open?stream=chastudios
language: es
Follower Only - Delay: 0
```
---
## Reasons Why?

Right now Twitch doesn't have a specific feature to notify a potential viewer of when a particular game is being streamed. Not just who you are following or subscribed to.

### Choice Chamber:
1. [Kickstarter that started it all](https://www.kickstarter.com/projects/1451486150/choice-chamber)
2. [Choice Chamber - First Game Built for Twitch](https://blog.twitch.tv/en/2015/07/16/choice-chamber-the-first-game-built-for-twitch-a41079621906/)

I donated 25$ and received [backer powers](CHOICE_CHAMBER.md)

