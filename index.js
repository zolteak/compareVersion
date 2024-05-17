const compareVersion = require('./compareVersion')

console.log(compareVersion.compareVersion("0.1", "0.2"));// -1
console.log(compareVersion.compareVersion("0.2", "0.1"));// 1
console.log(compareVersion.compareVersion("4.2", "4.2"));// 0