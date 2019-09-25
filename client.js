const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.43.245',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write("Name: TDK");
  });


  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;