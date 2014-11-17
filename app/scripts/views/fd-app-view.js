var AppView = Backbone.View.extend({

    el: "body",
    initialize: function() {

    },

    loadView: function() {
        var itemsView = new View();
    },

    events: {
        'click #state-btn': 'cta'
    },

    cta: function() {
        var $btn = $('#state-btn');
        if ($btn.hasClass('btn-load')) {
            $btn.button('loading');
            this.loadView(); //Entry point
        } else if ($btn.hasClass('btn-save')) {
            this.save();
        }
    },

    save: function() {
        this.saveForms();
       
    },

    saveForms: function() {
        itemModel.set({
            title: $("#item-title").val().trim(),
            description: $("#item-description").val().trim(),
            internal_notes: $("#item-notes").val().trim(),

        });

        var outputDiv = $('.json-output');
        outputDiv.html('<pre>' + JSON.stringify(itemModel) + '</pre>');
        $('.section-wrap').fadeOut('fast');
        outputDiv.fadeIn('fast');
        // console.log(itemModel);
    }

});