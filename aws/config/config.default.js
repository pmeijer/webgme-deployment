/*jshint node: true*/
/**
 * @author lattmann / https://github.com/lattmann
 */

var config = require('webgme/config/config.default'),
    os = require('os');

config.server.port = 8001;

config.authentication.enable = true;
config.authentication.allowGuests = true;
config.authentication.guestAccount = 'demo';
config.authentication.logOutUrl = 'http://' + os.hostname(); // FIXME: use config.server.https.enable to decide on protocol

config.rest.secure = true;

config.client.defaultProject.name = 'demo+SignalFlowSystem';
config.client.defaultProject.branch = 'master';
config.client.defaultProject.node = '/682825457'; //opens the FM Receiver

//config.plugin.basePaths.push('./src/plugins/Test');
//config.plugin.basePaths = ['./src/plugins/Test']; //disable exposure of core-plugins

config.plugin.allowServerExecution = false;
config.executor.enable = false;
config.addOn.enable = false;

config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme';

module.exports = config;
