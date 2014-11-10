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
        if($btn.hasClass('btn-load')) {
            $btn.button('loading'); 
            this.loadView(); //Entry point
        } else if($btn.hasClass('btn-save')) {
            this.save();
        }
    },

    save: function() {
        console.log('saved');
        var outputDiv = $('.json-output');
        outputDiv.html('<pre>' + JSON.stringify(cachedItem) + '</pre>');
        $('.section-wrap').fadeOut('fast');
        outputDiv.fadeIn('fast');
    }

});


