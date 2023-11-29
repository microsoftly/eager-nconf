/*
* nconf.js: Top-level include for the nconf module
*
* (C) 2011, Charlie Robbins and the Contributors.
*
*/

var Provider = require('./nconf/provider').Provider
var common = require('./nconf/common')

//
// `nconf` is by default an instance of `nconf.Provider`.
//
var nconf = module.exports = new Provider();

//
// Expose the version from the package.json
//
nconf.version = require('../package.json').version;

var _argV=require('./nconf/stores/argv').Argv;
//
// Setup all stores as lazy-loaded getters.
//
nconf.__defineGetter__('Argv', function () {
    return _argV;
});

var _env = require('./nconf/stores/env').Env;
nconf.__defineGetter__('Env', function () {
    return _env
});

var _file = require('./nconf/stores/file').File;
nconf.__defineGetter__('File', function () {
    return _file
});

var _literal = require('./nconf/stores/literal').Literal;
nconf.__defineGetter__('Literal', function () {
    return _literal
});

var _memory = require('./nconf/stores/memory').Memory;
nconf.__defineGetter__('Memory', function () {
    return _memory;
});

//
// Expose the various components included with nconf
//
nconf.key           = common.key;
nconf.path          = common.path;
nconf.loadFiles     = common.loadFiles;
nconf.loadFilesSync = common.loadFilesSync;
nconf.formats       = require('./nconf/formats');
nconf.Provider      = Provider;
