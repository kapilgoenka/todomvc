require.config(
{
  paths:
  {
    underscore : 'libs/underscore',
    backbone   : 'libs/backbone',
    backbone_localstorage   : 'libs/backbone-localStorage',
    marionette : 'libs/backbone.marionette',
    jquery     : '../../../../assets/jquery.min',
    tpl        : 'libs/tpl'
  }
});

require(['jquery', 'underscore'], function()
{
  require(['backbone'], function()
  {
    require(['marionette', 'backbone_localstorage'], function()
    {
      window.Marionette = Backbone.Marionette;

      require(['app', 'routers/index', 'controllers/index'], function(App, Router, Controller)
      {
        App.start();

        new Router(
        {
          controller: Controller
        });

        Backbone.history.start();
      });  
    });
  });
});
