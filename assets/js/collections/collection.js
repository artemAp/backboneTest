define(['backbone'], function(Backbone){
  var TaskCollection = Backbone.Collection.extend({
    defaults: {
      title: '',
      description: '',
      date: ''
    }
  });

  return TaskCollection;
});