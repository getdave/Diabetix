/*global diabetix, $*/


window.diabetix = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        // Create our global collection of **Todos**.
        //diabetix.Foods = new diabetix.Collections.FoodsCollection();
        window.foodModel = new diabetix.Models.FoodModel({
            name: "Bread"
        });
        
        window.foodView = new diabetix.Views.FoodView({model: foodModel});
    }
};

$(document).ready(function () {
    'use strict';
    diabetix.init();
});
