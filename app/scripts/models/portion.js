/*global diabetix, Backbone*/

diabetix.Models = diabetix.Models || {};

(function () {
    'use strict';

    diabetix.Models.PortionModel = Backbone.RelationalModel.extend({

        initialize: function() {
        },

        defaults: {
            weight: 100
        },

        validate: function(attrs, options) {

        }
    });

})();
