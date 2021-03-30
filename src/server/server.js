import net from 'net';
const HOST = '127.0.0.1';

export default class Server{
	constructor(port){
		this.port = port;
	}

	start(){
		net.createServer(function(sock){
			sock.on('data', function(data){
				sock.write(data);
			});

			sock.close('close', function(data){
				console.log('Server Closed');
			});
		}).listen(HOST, this.port);
		console.log("Server Ready!");
	}
}