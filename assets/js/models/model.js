define(['backbone'], function(Backbone){
  var TaskModel = Backbone.Model.extend({
    defaults: {
      title: 'тест',
      description: 'тест'
    }
  });

  return TaskModel;
});