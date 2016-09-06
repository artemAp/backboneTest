define(['jquery', 'underscore', 'backbone', 'models/model', 'collections/collection', 'views/singleTask'], function($, _, Backbone, TaskModel, Collection, SingleTask){

  var IndexView = Backbone.View.extend({

    el: 'body',
    templateMenu: _.template('<ul class="menu"><li data-url="" class="js-nav">Home</li><li data-url="tasks"' +
      ' class="js-nav">Task List</li></ul>'),
    templateTasks: _.template('<div class="tasks">' +
      '<div class="task">' +
      '<h3 class="task-title"><%= title %></h3>' +
      '<p class="task-desk"><%= description %></p> </div> </div>'),

    initialize: function(){
      this.collection = new Collection(testData);
      this.render();
    },

    events: {
      'click .js-nav': 'goToPage'
    },

    goToPage: function(e){
      app.router.navigate('tasks', true, true);
    },

    render: function(){
      var that = this;
      _.each(this.collection.models, function (item) {
        that.renderContact(item);
      }, this);
      this.$el.prepend(this.templateMenu);
      return this;
    },

    renderContact: function(item){
      var singleTask = new SingleTask({
        model: item
      });
      this.$el.append(singleTask.render().el);
    }
  });

  return IndexView;
});