var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {

    },

    loadView: function() {
        var enumsModel = new EnumItemModel();
        var enumsCollection = new EnumItemCollection({model:enumsModel});
        var enumView = new EnumView({collection:enumsCollection}); //"Bootstrap" of enums JSON
        var itemsView = new View();
    },

    events: {
        'click .load-btn': 'load'
    },

    load: function() {
        this.loadView(); //Entry point
    }

});


