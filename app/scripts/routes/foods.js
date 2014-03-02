/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes: {
	       	"search/:query" : "search",
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

	    defaultRoute: function(other) {
	    	console.log("Default fallback route. You attempted to reach " + other);
	    }
    });

})();
