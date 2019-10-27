const os = require('os');
const formatDate = require('./index.js');
const uptime = formatDate(120);

console.log(`Current uptime is ${uptime}`);
console.log(`Current uptime is ${formatDate(3601)}`);
console.log(`Current uptime is ${formatDate(3660)}`);
console.log(`Current uptime is ${formatDate(800000)}`);
console.log(`Current uptime is ${formatDate(15)}`);
console.log(`Current uptime is ${formatDate(61)}`);
console.log(`Current uptime is ${formatDate(0)}`);
