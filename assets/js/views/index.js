define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

  var IndexView = Backbone.View.extend({

    el: 'body',

    initialize: function(){
      console.log('indexView');
      this.render();
    },

    events: {
      'click .js-nav': 'navigate1'
    },

    navigate1: function(e){
      var $this = e.currentTarget;
      console.log($this);
      var url = $.data($this, 'url');
      app.router.navigate('tasks', true, true);
    },

    render: function(){
      console.log(this.$el);
      this.$el.prepend('<ul class="menu"><li data-url="" class="js-nav">Home</li><li data-url="tasks"' +
        ' class="js-nav">Task List</li></ul>');
    }
  });

  return IndexView;
});