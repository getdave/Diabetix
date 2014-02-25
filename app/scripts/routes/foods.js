/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes:{
	        "": 			"index",
	       	"search/:query": 	"search",
	    },
	 
	    initialize:function () {
	        //$('#header').html(new HeaderView().render().el);
	        
	    },

	    index: function() {

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

	    search: function(query) {
	    	console.log("Searching for " + query);
	    },

	    foodDetail: function(id) {
	    
	    }
    });

})();
