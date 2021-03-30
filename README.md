# The Binding of Isaac Discord Bot

This fork aims to add more functionality.

The discord bot (and TCP server) used to interact with the DiscordTBOA mod!
[Get Cient Here](https://github.com/MochicStudio/tboi-discord-client)

## Features
- Connect to a "The Binding of Isaac" game - ran either by you or a friend
- Execute debug commands from discord
- Let your server members make game decisions instead of you via polls! Let them:
	- Pick one out of four items from the item room
	- Pick which items you buy from the shop
	- Pick where you go after the womb

## Getting Started
### Requirements
- See `package.json`
- [Discord Bot Token](https://discordpy.readthedocs.io/en/latest/discord.html)

```sh
npm install
```

Create a file called `config.json` in your root directory. Populate as follow:

```js
{
	"token": "Your token",
	"prefix": "isaac!",
	"port": 25090
}
```

```sh
npm run start
```

## License
[Apache 2.0](https://github.com/MochicStudio/tboi-discord-bot/blob/master/LICENSE)
