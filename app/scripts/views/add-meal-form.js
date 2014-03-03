/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.AddMealFormView = Backbone.View.extend({

    	el: ".bar-header-secondary",
        template: JST['app/scripts/templates/add-meal-form.ejs'],
        events: {
			"submit #add-meal-form": "addMeal"
		},

        initialize:function () {
            this.render();

            //
            this.$input     = $('#meal-name');

            return this;
        },

        render: function() {
			this.$el.html(this.template());
		},

		addMeal: function(e) {
			e.preventDefault();

            var form                = $(e.currentTarget);
            var field_mealName      = form.find('#meal-name');

        	this.collection.create({
                name: field_mealName.val()
            });

        	// Reset the form
        	field_mealName.val("");
		}
    });

})();
