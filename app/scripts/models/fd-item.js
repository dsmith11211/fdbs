var Model = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
        id : '',
        title : 'test'
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        console.log('model',response);
        return response;
    }
});


