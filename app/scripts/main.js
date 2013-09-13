/*global diabetix, $*/


window.diabetix = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var app = new diabetix.Routers.FoodsRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    diabetix.init();
});
