/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.FoodsCollection = Backbone.Collection.extend({

        model: diabetix.Models.FoodModel

    });

})();