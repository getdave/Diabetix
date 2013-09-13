/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.FoodView = Backbone.View.extend({

    	initialize: function() {
    	
    	},

    	tagName: 'li',
        className: 'list-group-item',

        template: JST['app/scripts/templates/food.ejs'],

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

    });

})();
