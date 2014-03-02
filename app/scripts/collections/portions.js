/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.PortionsCollection = Backbone.Collection.extend({

        model: diabetix.Models.PortionModel

    });

})();
