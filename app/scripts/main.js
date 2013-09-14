/*global diabetix, $*/


window.diabetix = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Evt: {},
    init: function () {
        'use strict';
        _.extend(diabetix.Evt, Backbone.Events);
        var app = new diabetix.Routers.FoodsRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    diabetix.init();
});
