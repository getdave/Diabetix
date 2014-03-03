/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealListItemView = Backbone.View.extend({

        template: JST['app/scripts/templates/meal-list-item.ejs'],

    	tagName: 'li',
        className: 'table-view-cell',


        initialize: function() {
    	    this.listenTo(this.model, 'destroy', this.remove);
    	},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

    });

})();
