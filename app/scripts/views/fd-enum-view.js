var EnumView = Backbone.View.extend({

    template: JST['app/scripts/templates/enum-view.ejs'],

    tagName: 'div',

    el: '#fdbs-app-enums',

    className: '',

    events: {
        'click .dropdown-menu li': "materialSelected",
        'click #hazard-check' : "hazardSelected"
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

    initialize: function() {
        this.collection = new EnumItemCollection();
        this.collection.on('add', this.render, this);
    },

    render: function() {
        console.log('enum view rendered', this.collection.toJSON()[0]);
        this.$el.html(this.template(this.collection.toJSON()[0]));
    }

});