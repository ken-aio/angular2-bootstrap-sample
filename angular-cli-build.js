/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'moment/moment.js',
      'ng2-bootstrap/**/*.js',
      'bootstrap/dist/css/bootstrap.min.css'
    ]
  });
  return app.toTree();
};
