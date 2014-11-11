var EnumItemModel = Backbone.Model.extend({

    initialize: function() {
        this.set({
            selectedMat: cachedItem.material.description,
            selectedCondition: cachedItem.condition.description
        });
    },

    defaults: {
        unitType : 'in', //default selected val
        disabled : true,
        shapeType : '' ,
        selectedMat : '',
        selectedCondition : ''
    },

    Enum: function (data) {
    	var self = this;

    	self.condition = {
    		description: data.condition.description
    	};
    	self.material = data.material;
    	self.measurement = {
    		shape: data.measurement.shape,
    		unit: {
    			cm: data.measurement.unit.cm,
    			in: data.measurement.unit.in
    		}
    	}

    	return self;
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
    	var self = this,
    		enumModel = {};

    	_.each(response, function(item){
    	    enumModel = new self.Enum(item);
    	})

    	self.set(enumModel);
    }
});

