define([
  'templates',
  'views/ActiveCount'
], function (templates, ActiveCount)
{
  return Marionette.Layout.extend(
  {
    template: templates.footer,

    regions:
    {
      count: '#todo-count strong'
    },

    events:
    {
      'click #clear-completed': 'clearCompletedClick'
    },

    onRender: function()
    {
      this.count.show(new ActiveCount({collection: this.collection}));
    },

    clearCompletedClick: function()
    {
      NotificationCenter.trigger('todoList:clear:completed');
    }
  });
});
