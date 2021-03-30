/* Load config file */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require('../config.json');
import Bot from './bot/bot.js';
import Server from './server/server.js';

if(!config.port || !config.prefix || !config.token)
	throw new Error("Configuration File is not complete");

const bot = new Bot(config.prefix, config.token);
const server = new Server(config.port);

bot.start();
server.start();