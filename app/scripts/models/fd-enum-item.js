var EnumItemModel = Backbone.Model.extend({

    initialize: function(options) {
    	
    },

    defaults: {
    	unitType : 'in',
    	disabled : true //Measurement Controls
    },

    silent: {

    },

	Enum: function(data) {
		var self = this;

		self.condition = {
			description: data.condition.description
		};
		self.material = data.material;
		self.measurement = {
			shape: data.measurement.shape,
			unit: {
				cm: {
					type: data.measurement.unit.cm,
					checked: false
				},
				in : {
					type: data.measurement.unit.in,
					checked: true
				}
			}
		}

		return self;
	},
    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
    	var self = this,
    		enumModel = {};

    	// _.each(response, function(item){
    	//     enumModel = new self.Enum(item);
    	// })

    	return response;
    }
});

