/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.FoodView = Backbone.View.extend({

        template: JST['app/scripts/templates/food.ejs'],

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

    });

})();
