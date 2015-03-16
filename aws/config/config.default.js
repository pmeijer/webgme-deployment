/*jshint node: true*/
/**
 * @author lattmann / https://github.com/lattmann
 */

var config = require('webgme/config/config.default');

config.server.port = 80;

//config.plugin.basePaths.push('./src/plugins/Test');
//config.plugin.basePaths = ['./src/plugins/Test']; //disable exposure of core-plugins

config.plugin.allowServerExecution = false;
config.executor.enable = false;
config.addOn.enable = false;

config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme';

module.exports = config;
