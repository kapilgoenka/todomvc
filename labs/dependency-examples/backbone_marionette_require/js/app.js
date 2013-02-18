define([
  'views/Header',
  'views/Footer',
  'views/TodoListCompositeView',
  'collections/TodoList'
], function(Header, Footer, TodoListCompositeView, TodoList)
{
  var App = new Marionette.Application();
  var todoList = new TodoList();

  App.addRegions(
  {
    header: '#header',
    main: '#main',
    footer: '#footer'
  });

  App.addInitializer(function()
  {
    window.NotificationCenter = new Marionette.EventAggregator();
  });

  App.addInitializer(function()
  {
    todoList.fetch();
  });

  App.addInitializer(function()
  {
    var viewOptions = { collection: todoList };
    App.header.show(new Header(viewOptions));
    App.main.show(new TodoListCompositeView(viewOptions));
    App.footer.show(new Footer(viewOptions));
  });

  App.addInitializer(function()
  {
    NotificationCenter.on('todoList:clear:completed',function()
    {
      function destroy(todo)
      {
        todo.destroy();
      }
      todoList.getCompleted().forEach(destroy);
    });
  });

  App.addInitializer(function()
  {
    App.bindTo(todoList, 'all', function()
    {
      if (todoList.length === 0)
      {
        App.main.$el.hide();
        App.footer.$el.hide();
      }
      else
      {
        App.main.$el.show();
        App.footer.$el.show();
      }
    });
  });

  return App;
});
