var Collection = Backbone.Collection.extend({

	model: Model,

	url: '../../data/item.json',

    parse: function(response) {
    	return response;
    },

    initialize: function() {
    	console.log('collection init');
    	this.fetch();
    }

});




