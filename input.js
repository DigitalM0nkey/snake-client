let connection;



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (data) => {
  const moves = 4;
  const delay = 30;
  if (data === '\u0003') {
    process.stdout.write('\x07');
    process.exit();
  } else if (data === 'i') {
    connection.write("Move: up");
  } else if (data === 'j') {
    connection.write("Move: left");
  } else if (data === 'l') {
    connection.write("Move: right");
  } else if (data === 'k') {
    connection.write("Move: down");
  } else if (data === 'u') {
    connection.write("Say: Outta My Way!!");
  } else if (data === 'o') {
    connection.write("Say: Go on..... GET!!!");
  } else if (data === 'I') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: up');
      }, i * delay);
    }
  } else if (data === 'J') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: left');
      }, i * delay);
    }
  } else if (data === 'L') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: right');
      }, i * delay);
    }
  } else if (data === 'K') {
    for (let i = 0; i < moves; i++) {
      setTimeout(() => {
        connection.write('Move: down');
      }, i * delay);
    }
  }
};



module.exports = { setupInput };