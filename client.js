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
    console.log('Successfully connected to game server');
    conn.write("Name: TDK");


  });
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 150);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 200);
  //   //conn.write("Move: up");
  //   //conn.write("Name: TDK");
  //   console.log("Here");

  // });



  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;