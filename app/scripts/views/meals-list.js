/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealsListView = Backbone.View.extend({

        tagName: 'ul',
        className: 'table-view',



        initialize:function () {
            this.listenTo(this.collection,"reset",this.render);
            this.listenTo(this.collection,"add",this.addOne);

            this.render();
        },

        render: function() {
            this.$el.empty();

            this.addAll();
            $('#content-listing').html(this.el);
    		return this;
        },

        addOne: function(meal) {
            var mealView = new diabetix.Views.MealListItemView({
                model: meal
            });

            this.$el.prepend(mealView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });

})();
