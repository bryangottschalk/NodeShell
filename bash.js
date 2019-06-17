// process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
//   const cmd = data;
//   toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  console.log('cmd :', cmd);
  if (cmd === 'pwd') {
    console.log('line 16');
    console.log(`Current directory: ${process.cwd()}`);
    process.stdout.write(process.cwd());
  }
  console.log('line 18');

  // process.stdout.write(dir);
  process.stdout.write('\nprompt > ');
});
