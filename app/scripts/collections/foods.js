/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.Foods = Backbone.Collection.extend({

        model: diabetix.Models.Food,

        url: "/scripts/data/foods-2011-10-03.json"

    });

})();
