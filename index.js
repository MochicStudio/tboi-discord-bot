const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

client.once('ready', () => { console.log('Ready!'); });
client.on('message', message => {
    if(message.content == '!saymeme') message.channel.send('Hello there');
});

client.login(token);
