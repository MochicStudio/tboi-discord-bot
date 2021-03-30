/* Load config */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { port } = require('../../config.json');
/* Everything else */
import net from 'net';
const HOST = '127.0.0.1';
const PORT = port;

export default class Server{
	constructor(){}

	start(){
		net.createServer(function(sock){
			sock.on('data', function(data){
				sock.write(data);
			});

			sock.close('close', function(data){
				console.log('Server Closed');
			});
		}).listen(HOST, PORT);
	}
}