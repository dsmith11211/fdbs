/*global FdbsQuiz, $*/


window.FdbsQuiz = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');

        var App = new AppView;
    }
};

$(document).ready(function () {
    'use strict';
    FdbsQuiz.init();
   
});
