var Collection = Backbone.Collection.extend({

	model: Model,

	url: 'http://54.173.60.3:8888/result', //Hosted API

    parse: function(response) {
    	return response;
    },

    initialize: function() {
    	console.log('collection init');
    	this.fetch(
		{ 
			success: function() {
    			var enumsModel = new EnumItemModel(),
    			    enumsCollection = new EnumItemCollection({model:enumsModel}),
    			    enumView = new EnumView({collection:enumsCollection}), //"Bootstrap" of enums JSON
    			    $btn = $('#state-btn');

    			$btn.removeClass('btn-load btn-primary').addClass('btn-save btn-success');
    			$btn.button('save'); 
			}
		});
    }

});




