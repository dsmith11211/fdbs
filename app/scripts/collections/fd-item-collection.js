var Collection = Backbone.Collection.extend({

	model: Model,

	url: 'http://54.173.60.3:8888/result', //Hosted API

    parse: function(response) {
    	return response;
    },

    initialize: function() {
    	console.log('collection init');
    	this.fetch();
    }

});




