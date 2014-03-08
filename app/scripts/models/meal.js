/*global diabetix, Backbone*/

diabetix.Models = diabetix.Models || {};

(function () {
    'use strict';

    diabetix.Models.MealModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            name: "Untitled Meal"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
