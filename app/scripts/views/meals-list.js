/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealsListView = Backbone.View.extend({

        initialize:function () {
            this.collection.bind("reset", this.render, this);
            this.render();
        },

        tagName: 'ul',
        className: 'table-view',

        render: function() {
            this.$el.html('');
        	this.collection.each(function(meal) {
        		var mealView = new diabetix.Views.MealListItemView({
        			model: meal
        		});
        		this.$el.append(mealView.render().el);
        	},this);

            $('#content-listing').html(this.el);
    		return this;
        }
    });

})();
