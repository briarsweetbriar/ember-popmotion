
/* jshint node: true */
'use strict';

function getParentApp(app) {
  if (typeof app.import !== 'function' && app.app) {
    return getParentApp(app.app);
  } else {
    return app;
  }
}

module.exports = {
  name: 'ember-popmotion',

  included: function(app) {
    this._super.included(app);

    app = getParentApp(app);

    app.import('vendor/popmotion.min.js');
  },

  safeIncluded: function(app, parent) {
    this.included(app, parent);
  }
};
