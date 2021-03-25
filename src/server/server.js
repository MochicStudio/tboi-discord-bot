const { port } = require('../../config.json');
const net = require('net');
const HOST = '127.0.0.1';
const PORT = port;

exports.start = () => {
	net.createServer(function(sock){
		sock.on('data', function(data){
			sock.write(data);
		});

		sock.close('close', function(data){
			console.log('Server Closed');
		});
	}).listen(HOST, PORT);
};