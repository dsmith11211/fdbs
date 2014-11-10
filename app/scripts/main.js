/*global FdbsQuiz, $*/

var cachedItem = null;

window.FdbsQuiz = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        var App = new AppView();
    }
};

$(document).ready(function () {
    'use strict';

    FdbsQuiz.init();
   
});
