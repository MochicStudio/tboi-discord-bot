import discord from 'discord.js';
const client = new discord.Client();

export default class Bot{
	constructor(prefix, token){
		this.prefix = prefix;
		this.token = token;
	}

	start(){
		client.once('ready', () => { console.log('Bot Ready!'); });
		client.on('message', message => {
			if(message.content == `${this.prefix}say`)
				message.channel.send('Hello there');
		});

		client.login(this.token);
	}
}