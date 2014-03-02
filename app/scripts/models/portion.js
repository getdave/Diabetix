/*global diabetix, Backbone*/

diabetix.Models = diabetix.Models || {};

(function () {
    'use strict';

    diabetix.Models.PortionModel = Backbone.RelationalModel.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
