window.app ={};

window.testData = [
  {
    title: 'task1',
    description: 'task 1 description task description task description task description task description'
  },
  {
    title: 'task2',
    description: 'task 2 description task description task description task description task description'
  },
  {
    title: 'task3',
    description: 'task 3 description task description task description task description task description'
  },
  {
    title: 'task4',
    description: 'task 4 description task description task description task description task description'
  },
  {
    title: 'task5',
    description: 'task 5 description task description task description task description task description'
  },
  {
    title: 'task5',
    description: 'task 5 description task description task description task description task description'
  }
];

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
