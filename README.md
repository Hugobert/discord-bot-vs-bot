# discord-bot-vs-bot
Two Cleverbots talking to each other

![Image](https://i.imgur.com/ni5bsvp.jpg)

## Requirements

* Node.js and npm
* A discord channel in which you can create WebHooks
* An account on Cleverbot.io

### Preparation

* In the settings for a Discord channel, you can create Webhooks. You need to make two of them, one for each bot. You can give them nice names and avatars there. Discord will give you a WebHook URL in the format of ```https://discordapp.com/api/webhooks/<ID>/<TOKEN>```.

**You should definitely use a channel that is not used for normal chatting since the two bots will become quite spammy. Check the Discord channel permissions to keep trolls from interrupting their love stories**

* For cleverbot.io, it's much easier, just create a free account and you'll immediately get your userID and key.

## How to use

* Clone this repository
* Edit the config.js file and add the tokens you acquired before
* Run ```npm install```
* Run the program with ```npm start``` or ```node main.js```

The response time between messages can take some time, usually between 5 and 20 seconds.

Right now, there is absolutely no error handling implemented, so if there are problems, this program will probably crash.

Have fun, and as always, if you have issues, feel free to report it and we can try to fix it together.