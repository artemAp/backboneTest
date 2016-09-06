define(['backbone'], function(Backbone){
  var taskList = Backbone.View.extend({
    initialize: function(){
      console.log('task list');
    }
  });

  return taskList;
});