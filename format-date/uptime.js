const os = require('os');
const formatDate = require('./index.js');
const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);
console.log(`Current uptime is ${formatDate(7200)}`);
