/*global FdbsQuiz, $*/


window.FdbsQuiz = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    FdbsQuiz.init();

    _.templateSettings.variable = "ic";

    var item_template = _.template(
        $( "script.item-template" ).html()
    );



});
