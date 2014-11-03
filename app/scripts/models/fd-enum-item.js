var EnumItemModel = Backbone.Model.extend({

    initialize: function() {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response.itemEnums;
    }
});

