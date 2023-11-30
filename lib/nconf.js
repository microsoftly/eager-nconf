/*
* nconf.js: Top-level include for the nconf module
*
* (C) 2011, Charlie Robbins and the Contributors.
*
*/

var getNconf = require('./entrypoint').getNconf

//
// `nconf` is by default an instance of `nconf.Provider`.
//
module.exports = getNconf()