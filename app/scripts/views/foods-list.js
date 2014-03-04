/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.FoodsListView = Backbone.View.extend({


        initialize:function () {
            this.listenTo(this.collection,"reset",this.render);
        },

        tagName: 'ul',
        className: 'table-view',

        render: function() {

            var container = document.createDocumentFragment();

            this.$el.empty();

        	this.collection.each(function(food) {
        		var foodView = new diabetix.Views.FoodView({
        			model: food
        		});
        		container.appendChild(foodView.render().el);
        	},this);

            this.$el.append(container);

            $('#content-listing').empty().html(this.$el);
    		return this;
        }
    });

})();
