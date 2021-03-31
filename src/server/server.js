import net from 'net';
const HOST = '127.0.0.1';

export default class Server{
	constructor(port){
		this.port = port;
	}

	start(){
		net.createServer(function(sock){
			console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

			sock.on('data', function(data){
				console.log('DATA ' + sock.remoteAddress + ': ' + data);
			});

			sock.close('close', function(data){
				console.log('Server Closed');
			});
		}).listen(HOST, this.port);
		console.log("Server Ready!");
	}
}