const fs = require('fs');

module.exports = function() {
  // console.log("it's running");
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdin.on('data', data => {
        const ls = data.toString().trim();
        if (ls === 'ls') {
          process.stdout.write(files.join('\n'));
          process.stdout.write('\nprompt > ');
        }
      });
    }
  });
};
