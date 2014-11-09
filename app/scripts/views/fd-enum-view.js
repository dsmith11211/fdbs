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
        // console.log(this.model.toJSON());
    },

    toggleUnit: function(unit) {
        this.model = this.collection.models[0];
        this.model.set({
            unitType: unit
        });
        // console.log(this.model);
        this.changeRender(this.model);
    },

    shapeSelected: function(shape) {
        this.model = this.collection.models[0];
        var $target = $(shape.currentTarget),
            type = $target.val();

        this.model.set({
            disabled : false,
            shapeType : type
        });

        this.changeRender(this.model);
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

        // console.log($target.text());
        return false;
    },

    changeRender : function(model) {

        this.collection.remove(this.collection.at(0));
        this.collection.add(model,{at:0});
    },  

    // unitChange: function(model, val, options) {
    //     console.log(this.model.get("unitInches"));
    //     // console.log(model,val,options);
    //     var newModel = this.model.clone();


    //     // this.collection.refresh(this.collection.models);
    //     // model.save();
    //     this.render();
    // },

    initialize: function() {
        this.model = this.collection.models[0];
        this.collection.on('add', this.render, this);
        // this.model.on('change:unitInches', this.unitChange, this);
        // this.model.on('change', this.render, this);
        // if(this.model) {
        //     this.model.on('change',this.render,this);
        // }
    },

    render: function() {
        console.log('enum view rendered', this.collection.toJSON()[0]);
        this.$el.html(this.template(this.collection.toJSON()[0]));
    }

});