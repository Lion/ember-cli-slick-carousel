/* jshint node: true */
'use strict';

var FASTBOOT_ENV_KEY      = 'EMBER_CLI_FASTBOOT';

module.exports = {
  name: 'ember-cli-slick-carousel',

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'slick-carousel', target: '1.5.8' }
    ]);
  },

  included: function(app) {
    this._super.included(app);

    if (!isFastBoot()) {
      app.import(app.bowerDirectory + '/slick-carousel/slick/slick.js');
      app.import(app.bowerDirectory + '/slick-carousel/slick/slick.css');
      app.import(app.bowerDirectory + '/slick-carousel/slick/slick-theme.css');
      app.import(app.bowerDirectory + '/slick-carousel/slick/ajax-loader.gif', {
        destDir: 'assets'
      });
      app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.eot', {
        destDir: 'assets/fonts'
      });
      app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.svg', {
        destDir: 'assets/fonts'
      });
      app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.ttf', {
        destDir: 'assets/fonts'
      });
      app.import(app.bowerDirectory + '/slick-carousel/slick/fonts/slick.woff', {
        destDir: 'assets/fonts'
      });
    }

  }
};

function isFastBoot() {
  return process.env[FASTBOOT_ENV_KEY];
}
