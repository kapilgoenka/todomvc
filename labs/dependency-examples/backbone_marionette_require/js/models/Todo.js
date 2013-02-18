define(function()
{
  return Backbone.Model.extend(
  {
    defaults:
    {
      title: '',
      created: 0,
      completed: false
    },

    localStorage: new Backbone.LocalStorage('todos-backbone'),

    initialize: function()
    {
      if (this.isNew())
        this.set('created', Date.now());
    },

    isCompleted: function()
    {
      return this.get('completed');
    },

    created: function()
    {
      return this.get('created');
    },

    toggle: function()
    {
      return this.set('completed', !this.get('completed'));
    }
  });
});
