process.chdir(__dirname);
sails = require('sails');
rc = require('sails/accessible/rc');

sails.lift(rc('sails'));