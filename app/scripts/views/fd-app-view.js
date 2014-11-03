var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {
        
        function loadView() {
            var enumView = new EnumView(); //"Bootstrap" of enums JSON
            var itemsView = new View();
        }

        loadView(); //Entry point
    }
});


