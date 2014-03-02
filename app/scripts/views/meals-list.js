/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealsListView = Backbone.View.extend({

        tagName: 'ul',
        className: 'table-view',

        initialize:function () {
            this.collection.on("reset", this.render, this);
            this.collection.on("add", this.addOne, this);
            this.collection.on("all", this.render, this);

            this.render();
        },

        render: function() {
            this.$el.html('');

            this.addAll();
            $('#content-listing').html(this.el);
    		return this;
        },

        addOne: function(meal) {
            var mealView = new diabetix.Views.MealListItemView({
                model: meal
            });

            this.$el.append(mealView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        },
    });

})();
