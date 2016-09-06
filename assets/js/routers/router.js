define([
  'backbone',
  'models/model',
  'views/index',
  'views/taskList'
], function(Backbone, TaskModel, IndexView, TaskList){

  var Router = Backbone.Router.extend({
    routes: {
      '': 'indexPage',
      'tasks': 'taskList',
      'task:id': 'singleTask'
    },

    indexPage: function(){
      app.taskModel = new TaskModel();
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