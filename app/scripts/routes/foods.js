/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes: {
	       	"search/:query" : "search",
	       	"meals"			: "mealsList",
	        ""				: "index",
	        "*other"    	: "defaultRoute"
	    },

	    initialize:function () {

	    },

	    index: function() {
	    	diabetix.searchView = new diabetix.Views.SearchView();

	    },

	    search: function(query) {
	    	if (!diabetix.searchView) {
	    		diabetix.searchView = new diabetix.Views.SearchView();
	    	}

	    	// Model: Individual Food
	    	diabetix.food = new diabetix.Models.Food();

	    	// Colleciton: List of Foods
	        diabetix.foods = new diabetix.Collections.Foods(query);

	        // View: List of Foods
	        diabetix.foodListView = new diabetix.Views.FoodsListView({
	            collection: diabetix.foods
	        });
	    },


	    mealsList: function(id) {


	    	// Model: a Meal
	    	diabetix.meal = new diabetix.Models.MealModel();

	    	var boostrap = [
				{ id: 2, name: "First Meal" },
				{ id: 3, name: "Tasty Meal" },
				{ id: 4, name: "Disgusting Meal" },
				{ id: 5, name: "Bland Meal" },
	        ];

	    	// Colleciton: the list of available Meals
	        diabetix.meals = new diabetix.Collections.MealsCollection();

	        diabetix.meals.fetch();

	    	diabetix.addMealFormView = new diabetix.Views.AddMealFormView({
	            collection: diabetix.meals
	        });

	        diabetix.mealListView = new diabetix.Views.MealsListView({
	            collection: diabetix.meals
	        });

	       
	    },

	    

	    defaultRoute: function(other) {
	    	console.log("Default fallback route. You attempted to reach " + other);
	    }
    });

})();
