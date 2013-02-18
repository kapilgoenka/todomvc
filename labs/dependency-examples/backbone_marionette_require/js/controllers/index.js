define(function()
{
  return {
    setFilter: function(param)
    {
      NotificationCenter.trigger('todoList:filter', param.trim() || '');
    }
  };
});
