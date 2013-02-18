define([
  'templates'
], function(templates)
{
  return Marionette.ItemView.extend(
  {
    template: templates.header,

    ui:
    {
      input: '#new-todo'
    },

    events:
    {
      'keypress #new-todo':	'onCreateKeypress'
    },

    onCreateKeypress: function(evt)
    {
      var ENTER_KEY = 13;
      var todoText = this.ui.input.val().trim();

      if ( evt.which === ENTER_KEY && todoText )
      {
        this.collection.create(
        {
          title: todoText
        });

        this.ui.input.val('');
      }
    }
  });
});
