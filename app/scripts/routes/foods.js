/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes:{
	        "": 			"index",
	       	"foods/:id": 	"foodDetail"
	    },
	 
	    initialize:function () {
	        //$('#header').html(new HeaderView().render().el);
	        
	    },

	    index: function() {
	    	// Model: Individual Food
	    	diabetix.food = new diabetix.Models.Food();

	    	// Colleciton: List of Foods
	        diabetix.foods = new diabetix.Collections.Foods();
	      
	        // View: List of Foods
	        diabetix.foodListView = new diabetix.Views.FoodsListView({
	            collection: diabetix.foods
	        });

	        diabetix.foods.fetch({reset:true});
	       



	    },

	    foodDetail: function(id) {
	    
	    }
    });

})();
