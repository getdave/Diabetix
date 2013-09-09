/*global diabetix, $*/


window.diabetix = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        // Create our global collection of **Todos**.
        diabetix.Foods = new diabetix.Collections.FoodsCollection();
    }
};

$(document).ready(function () {
    'use strict';
    diabetix.init();
});
