var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {

        $.getJSON('../../data/item.json',function(data){
            var items = new Collection(data.result);
            var itemsView = new View({
                model: items
            });
            itemsView.render(items.models[0].attributes.item);
        })

        // var items = new Collection();


        // When profiles have been successfully grabbed,
        // display them using profile template
        // items.bind('reset', function() {
        //     itemsView.render();
        // });
        // items.listenTo(items, 'change', itemsView.render);


        // items.fetch();

        // itemsView.render(items.models[0]);
    }
});


