/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.HeaderView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/header/header.ejs'],

        initialize: function() {
            alert("Header render");
        }
    });

})();


