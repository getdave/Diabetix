/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes: {
	       	"search/:query" : "searchFoods",
	        "": 				"index",
	        "*other"    : "defaultRoute"
	    },
	 
	    initialize:function () {
	    	console.log("ROUTER RUNNING");
	        //$('#header').html(new HeaderView().render().el);
	        
	    },

	    index: function() {
	    	diabetix.searchView = new diabetix.Views.SearchView();
	    	
	    },

	    searchFoods: function(query) {
	    	console.log("SEARCH ROUTE running");
	    	diabetix.searchView = new diabetix.Views.SearchView();

	    	// Model: Individual Food
	    	diabetix.food = new diabetix.Models.Food();

	    	// Colleciton: List of Foods
	        diabetix.foods = new diabetix.Collections.Foods();
	      
	        // View: List of Foods
	        diabetix.foodListView = new diabetix.Views.FoodsListView({
	            collection: diabetix.foods
	        });

	        diabetix.foods.update();
	    },

	    defaultRoute: function(other) {
	    	console.log("Default fallback route. You attempted to reach " + other);
	    	//Backbone.history.start
	    }
    });

})();
