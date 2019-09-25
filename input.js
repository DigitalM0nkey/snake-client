const handleUserInput = (data) => {
  if (data === '\x62') {
    process.stdout.write('\x07');
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.handleUserInput();
  return stdin;
};

module.exports = { setupInput };