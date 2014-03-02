/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.MealsCollection = Backbone.Collection.extend({

        model: diabetix.Models.MealsModel

    });

})();
