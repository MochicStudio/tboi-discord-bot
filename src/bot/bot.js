const { prefix, token } = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.start = () => {
	client.once('ready', () => { console.log('Ready!'); });
	client.on('message', message => {
		if(message.content == `${prefix}say`)
			message.channel.send('Hello there');
	});

	client.login(token);
};