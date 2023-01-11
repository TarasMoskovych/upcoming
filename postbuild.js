const fs = require('fs');

fs.copyFile('./www/index.html', './www/404.html', (err) => {
  if (err) throw err;
  console.log('./www/404.html was created');
});