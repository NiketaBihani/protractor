var config = require('../additional files/base.conf.js');

config.multiCapabilities = [{
  browserName: 'chrome',
  chromeOptions: {
          args: [
              'disable-extensions'
          ]
      }
}];

module.exports.config = config;