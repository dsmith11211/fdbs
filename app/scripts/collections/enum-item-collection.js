var EnumItemCollection = Backbone.Collection.extend({

	model: EnumItemModel,

	url: '../../data/enums.json',

	parse: function(response) {
		return response;
	},

	initialize: function(data) {
		console.log('collection init');
		this.fetch();
	}
});


