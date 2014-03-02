/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.FoodsListView = Backbone.View.extend({


        initialize:function () {
            this.collection.bind("reset", this.render, this);
        },

        tagName: 'ul',
        className: 'table-view',

        render: function() {
            this.$el.html('');
        	this.collection.each(function(food) {
        		var foodView = new diabetix.Views.FoodView({
        			model: food
        		});
        		this.$el.append(foodView.render().el);
        	},this);

            $('#content-listing').html(this.el);
    		return this;
        }
    });

})();
