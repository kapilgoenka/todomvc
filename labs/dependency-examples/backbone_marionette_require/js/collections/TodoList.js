define([
  'models/Todo'
], function(Todo)
{
  return Backbone.Collection.extend(
  {
    model: Todo,

    localStorage: new Backbone.LocalStorage('todos-backbone'),

    getCompleted: function()
    {
      return this.filter(function(todo)
      {
        return todo.isCompleted();
      });
    },

    getActive: function()
    {
      return this.reject(function(todo)
      {
        return todo.isCompleted();
      });
    },

    comparator: function(todo)
    {
      return todo.created();
    }
  });
});
