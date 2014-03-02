/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.AddMealFormView = Backbone.View.extend({

    	el: ".bar-header-secondary",
        template: JST['app/scripts/templates/add-meal-form.ejs'],
        events: {
			"submit": "formSubmit"
		},

        initialize:function () {
        	this.$input 	= this.$('#meal-name');
        	console.log(this.$input);
            this.render();
            return this;
        },

        render: function() {
			this.$el.html(this.template());     
		},

		formSubmit: function(e) {
			e.preventDefault();
        	var mealName = this.$input.val();

        	
        	this.collection.add({
        		name: mealName
        	});

        	// Clear the form
        	this.$input.val("");
		}
    });

})();
