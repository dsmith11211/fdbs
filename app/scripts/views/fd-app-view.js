var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {
        
        function loadView() {
        	var enumsModel = new EnumItemModel();
            var enumView = new EnumView({model:enumsModel}); //"Bootstrap" of enums JSON
            var itemsView = new View();
        }

        loadView(); //Entry point
    }
});


