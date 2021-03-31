import net from 'net';
const HOST = '127.0.0.1';
const PORT = '25090';

export default class Server{
	constructor(port, address){
		this.port = port || PORT;
		this.address = address || HOST;

		this.init();
	}

	init(){
		let server = this;

		let onClientConnected = (sock) => {
			let clientName = `${sock.remoteAddress}:${sock.remotePort}`;
			console.log(`New client connected: ${clientName}`);

			sock.on('data', (data) => {
				console.log(`${clientName} Says: ${data}`);
				sock.write(data);
				sock.write('exit');
			});

			sock.on('close', () => {
				console.log(`Connection from ${clientName} closed`);
			});
			
			sock.on('error', (error) => {
				console.log(`Connection ${clientName} error: ${error.message}`);
			});
		}

		server.connection = net.createServer(onClientConnected);

		server.connection.listen(this.port, this.host, function(){
			console.log(`Server started at: ${this.host}:${this.port}`);
		});
	}
}