import Bot from './bot/bot.js';
import Server from './server/server.js';
const bot = new Bot();
const server = new Server();

bot.start();
server.start();