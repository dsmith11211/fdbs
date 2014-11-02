var View = Backbone.View.extend({

    template: JST['app/scripts/templates/fd-item-view.ejs'],

    tagName: 'div',

    el: '#fdbs-app',

    id: '',

    className: '',

    events: {},

    initialize: function () {
        // this.listenTo(this.model, 'change', this.render);
        // this.collection.fetch({reset: true});
        // this.collection.bind('reset', function(data) {console.log(data)});
        // console.log(returnData);
        // this.render();
        console.log('view loaded');
    },

    render: function (eventName) {
        console.log('view rendered');
        // var compiled = this.template(this.data);
        // console.log(eventName);
        this.$el.html(this.template(eventName));
    }

});



