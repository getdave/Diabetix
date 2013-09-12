/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.FoodsView = Backbone.View.extend({

        tagName: 'ul',

        render: function() {
        	//console.log(this.collection);
        	this.collection.each(function(food) {
        		var foodView = new diabetix.Views.FoodView({
        			model: food
        		});
        		this.$el.append(foodView.render().el);
        	},this); 
    		return this;
        }

    });

})();
