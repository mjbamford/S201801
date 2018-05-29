// Reading the filesystem

const fs = require('fs')

fs.readFile('/etc/passwd', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
