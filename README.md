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
### Reasons Why?

[Kickstarter that started it all](https://www.kickstarter.com/projects/1451486150/choice-chamber)

I donated 25$

[Choice Chamber - First Game Built for Twitch](https://blog.twitch.tv/en/2015/07/16/choice-chamber-the-first-game-built-for-twitch-a41079621906/)


### [Backer Powers](http://choicechamber.com/powers/)

Command | Effect
|-|-|
|+hellfire|Flames drop from the sky and burn enemies that pass through them.|
|Hoarfrost|+hoarfrost|Encases all spawned enemies on the level in an ice cube|

### [Sub Powers](https://choicechamber.com/sub/)
If you subscribe to [OneMrBean on Twitch](https://www.twitch.tv/onemrbean/subscribe) you receive a number of commands.

| Command | Effect |
|-|-|
| beanbot | Gizmo shaped like a head, it shoots 30 beans at enemies, and then explodes.| 
|buff| Makes the user stronger for a while.|
|platinum| Drops a coin that is worth 100 store credits.|
|nerf| Makes the user weaker for a while.|
|rose| Makes the user luckier for a while.|
|pogo| Makes the user to pogo jump in this room.|
|rainbow*| Drops a rainbow heart|
|snow| Makes the next floor icy|
|balloon| Gives the player a ballon that slows their descents|

<sub>_*can slow down an older machine, or streams, and compress weirdly._



