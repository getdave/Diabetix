/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealsListView = Backbone.View.extend({

        tagName: 'ul',
        className: 'table-view',

        events: {
            "click .delete": "remove"
        },

        initialize:function () {
            this.collection.on("reset", this.render, this);
            this.collection.on("add", this.addOne, this);

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

            this.$el.prepend(mealView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        },

        remove: function(e) {
            console.log(e);
            var id = $(e.currentTarget).parent().data("meal-id");
            this.collection.remove({
                id: id
            });

        }
    });

})();
