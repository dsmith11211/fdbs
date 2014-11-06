var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {
        
        function loadView() {
        	var enumsModel = new EnumItemModel();
        	var enumsCollection = new EnumItemCollection({model:enumsModel});
            var enumView = new EnumView({collection:enumsCollection}); //"Bootstrap" of enums JSON
            var itemsView = new View();
        }

        loadView(); //Entry point
    }
});


