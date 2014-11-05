var EnumItemCollection = Backbone.Collection.extend({

	model: EnumItemModel,

	localStorage: new Backbone.LocalStorage("EnumLocalCollection"),

	fetch: function(options) {
		// check if localStorage for this collection exists
		// (if needed, also check whether it's empty)
		if (!localStorage.getItem("EnumLocalCollection")) {
			var self = this;
			// fetch from server once
			$.ajax({
				url: '../../data/enums.json'
			}).done(function(response) {
				self.create(response.itemEnums);
			});
		} else {
			options.silent = false;
			return Backbone.Collection.prototype.fetch.call(this, options);
		}
	},

	// url: '../../data/enums.json',

	refreshFromServer: function(options) {
		return Backbone.ajaxSync.apply('read', this, options);
	},

	parse: function(response) {
		return response;
	},

	initialize: function(data) {
		console.log('collection init');
		// var self = this;

		localStorage.clear();


		// this.refreshFromServer({success: function(newData) {
		//     this.reset(newData);
		//     this.each(function(model) {
		//         model.save();
		//         console.log('model saved',model);
		//     });
		// }});

		this.fetch({ 
			reset: true,
			success: function(data) {
				console.log(data);
			}

		 });
			
	}
});


