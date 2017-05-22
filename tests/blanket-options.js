/* eslint-env node */
/* globals blanket */

let options = {
  modulePrefix: 'ember-material-lite',
  filter: '//.*ember-material-lite/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
