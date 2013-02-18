define(function()
{
  return Marionette.AppRouter.extend(
  {
    appRoutes:
    {
      '*filter': 'setFilter'
    }
  });
});
