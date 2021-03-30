/* Load config */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { prefix, token } = require('../../config.json');
/* Everything else */
import discord from 'discord.js';
const client = new discord.Client();

export default class Bot{
	constructor(){}

	start(){
		client.once('ready', () => { console.log('Ready!'); });
		client.on('message', message => {
			if(message.content == `${prefix}say`)
				message.channel.send('Hello there');
		});

		client.login(token);
	}
}