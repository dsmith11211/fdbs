var Model = Backbone.Model.extend({

    initialize: function() {
    },

    Item : function(data) {
        var self = this;
        self.id = data.id;
        self.title = data.title;
        self.description = data.description;
        self.internal_notes = data.dealerInternalNotes;
        self.material = {
            description : data.material.description,
            restricted : data.material.restricted
        };
        self.measurement = {
            unit : data.measurement.unit,
            shape : data.measurement.shape,
            length : data.measurement.length,
            depth : data.measurement.depth,
            height : data.measurement.height
        };
        self.condition = {
            description : data.condition.description
        }

        return self;
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        var self = this,
            itemModel = {};

        _.each(response.result, function(item){
            itemModel = new self.Item(item);
        })
        self.set(itemModel);
    }
});


