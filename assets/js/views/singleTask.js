define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

  var SingleTask = Backbone.View.extend({
    tagName: 'div',
    className: 'task-item',
    templateTasks: _.template('<div class="tasks">' +
      '<div class="task">' +
      '<h3 class="task-title"><%= title %></h3>' +
      '<p class="task-desk"><%= description %></p> </div> </div>'),

    render: function () {
      this.$el.html(this.templateTasks( this.model.toJSON() ));
      return this;
    }

  });

  return SingleTask;
});