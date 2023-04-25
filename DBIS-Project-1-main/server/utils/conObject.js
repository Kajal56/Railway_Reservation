const fs = require('fs')
const resultBuffer = fs.readFileSync('config.txt');
const conObject= JSON.parse(resultBuffer.toString().trim());

module.exports = conObject