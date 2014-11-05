var EnumView = Backbone.View.extend({

    template: JST['app/scripts/templates/enum-view.ejs'],

    tagName: 'div',

    el: '#fdbs-app-enums',

    className: '',

    events: {
        'click .dropdown-menu li': "materialSelected",
        'click #hazard-check' : "hazardSelected",
        'click #shape-radio-btn' : "shapeSelected",
        'click #unit-radio-btn' : "unitSelected"
    },

    unitSelected: function(unit) {
        var $target = $(unit.currentTarget);
        var unit = $target.val();
        this.toggleUnit(unit);
    },

    toggleUnit: function(unit) {
        this.model.set({
            unitType: unit
        })
        this.model.save('unitType', {patch : true});
        console.log(this.model.get('unitType'));
    },

    shapeSelected: function(shape) {
        var $target = $(shape.currentTarget);
        console.log($target.val());

    },

    hazardSelected: function(bool) {
        var $target = $(bool.currentTarget);
        console.log($target.prop('checked'));
    },

    materialSelected: function(item) {
        var $target = $(item.currentTarget);
        $target.closest('.dropdown-wrap')
            .find('[data-bind="label"]').text($target.text())
            .end()
            .children('.dropdown-toggle').dropdown('toggle');

        return false;
    },

    unitChange: function(model, val, options) {
        console.log(model.get("unitInches"))
    },

    initialize: function() {
        this.collection = new EnumItemCollection();
        this.collection.on('add', this.render, this);
        this.collection.on('reset', this.render, this);
        this.listenTo(this.model, 'change', this.render);
        
    },
    render: function() {
        console.log('enum view rendered', this.collection.toJSON()[0]);
        this.$el.html(this.template(this.collection.toJSON()[0]));
    }

});