/*global diabetix, Backbone*/

diabetix.Models = diabetix.Models || {};

(function () {
    'use strict';

    diabetix.Models.Food = Backbone.RelationalModel.extend({
    	idAttribute: "_id"
    });

})();