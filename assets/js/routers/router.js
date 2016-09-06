define([
  'backbone',
  'views/index',
  'views/taskList'
], function(Backbone, IndexView, TaskList){

  var Router = Backbone.Router.extend({
    routes: {
      '': 'indexPage',
      'tasks': 'taskList',
      'task:id': 'singleTask'
    },

    indexPage: function(){
      console.log('index page');
      app.homeView = new IndexView();
    },
    taskList: function(){
      console.log('all task page');
      app.tasksView = new TaskList();
    },
    singleTask: function(){
      console.log('task page');
    }
  });

  return Router;

});