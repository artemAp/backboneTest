window.app ={};

require.config({
  paths: {
    'jquery'     : 'jquery',
    'underscore' : 'underscore',
    'backbone'   : 'backbone'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    waitSeconds: 15
  }
});
require(['routers/router'], function (Router) {
  app.router = new Router;
  Backbone.history.start();
});
