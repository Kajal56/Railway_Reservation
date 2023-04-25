const Pool = require('pg').Pool;
const conObject = require('./conObject')
const pool = new Pool(conObject)

module.exports = pool