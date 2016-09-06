define(['backbone', 'models/model'], function(Backbone, TaskModel){
  var TaskCollection = Backbone.Collection.extend({
    model: TaskModel,

    initialize: function(data){

    }
  });

  return TaskCollection;
});