var View = Backbone.View.extend({

    template: JST['app/scripts/templates/fd-item-view.ejs'],

    tagName: 'div',

    el: '#fdbs-app-forms',

    id: '',

    className: '',

    events: {
        'click .save-btn': 'save'
    },

    save: function() {
        
    },

    initialize: function () {
        this.collection = new Collection();
        this.collection.on('add',this.render,this);
        console.log('item view loaded');
    },

    render: function () {
        // console.log('item view rendered',this.collection.toJSON()[0]);
        itemModel = this.collection.models[0];
        cachedItem = this.collection.toJSON()[0];
        console.log(JSON.stringify(cachedItem));
        this.$el.html(this.template(this.collection.toJSON()[0]));
    }

});



