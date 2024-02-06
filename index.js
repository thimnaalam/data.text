

const fs = require('fs');
fs.writeFile('data.txt', 'First content = thimna', (err) => {
  if (err) throw err;
  console.log('First content in the file data.txt');
});

fs.writeFile('data.txt', 'Second content = Proctor\n\n', (err) => {
  if (err) throw err;
  console.log('Second content written to data.txt');
});
fs.appendFile('data.txt', 'Third content = alam', (err) => {
  if (err) throw err;
  console.log('New content appended to data.txt');
});