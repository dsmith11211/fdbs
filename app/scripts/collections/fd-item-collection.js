var Collection = Backbone.Collection.extend({

	model: Model,

    parse: function(response) {
    	console.log(response);
    	return response;
    },

    initialize: function() {
    	console.log('collection init');
    }

});




