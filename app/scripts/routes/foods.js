/*global diabetix, Backbone*/

diabetix.Routers = diabetix.Routers || {};

(function () {
    'use strict';

    diabetix.Routers.FoodsRouter = Backbone.Router.extend({
    	routes:{
	        "": "index"
	       // "foods/:id":"foodDetails"
	    },
	 
	    initialize:function () {
	        //$('#header').html(new HeaderView().render().el);
	    },

	    index: function() {
	    	// Model: Individual Food
	    	diabetix.foodModel = new diabetix.Models.FoodModel();

	    	// Colleciton: List of Foods
	        diabetix.foodsCollection = new diabetix.Collections.FoodsCollection([
	            {
	            descForUi: "<span>Milk</span> whole 3.25% milkfat",
	            beanId: 1077
	            },
	            {
	            descForUi: "<span>Milk</span> reduced fat fluid 2% milkfat with added vitamin a",
	            beanId: 1079
	            },
	            {
	            descForUi: "<span>Milk</span> lowfat fluid 1% milkfat with added vitamin a",
	            beanId: 1082
	            },
	            {
	            descForUi: "<span>Milk</span> nonfat fluid with added vitamin a fat free or skim",
	            beanId: 1085
	            },
	            {
	            descForUi: "Cheese mozzarella whole <span>milk</span>",
	            beanId: 1026
	            },
	            {
	            descForUi: "Soy <span>milk</span> fluid",
	            beanId: 16120
	            },
	            {
	            descForUi: "Cheese mozzarella part skim <span>milk</span>",
	            beanId: 1028
	            },
	            {
	            descForUi: "Cheese ricotta whole <span>milk</span>",
	            beanId: 1036
	            },
	            {
	            descForUi: "<span>Milk</span> chocolate fluid commercial whole",
	            beanId: 1102
	            },
	            {
	            descForUi: "Cheese ricotta part skim <span>milk</span>",
	            beanId: 1037
	            },
	            {
	            descForUi: "<span>Milk</span> chocolate fluid commercial reduced fat",
	            beanId: 1103
	            },
	            {
	            descForUi: "<span>Milk</span> chocolate fluid commercial lowfat",
	            beanId: 1104
	            },
	            {
	            descForUi: "Soy <span>milk</span> fluid calcium fortified",
	            beanId: 16139
	            },
	            {
	            descForUi: "<span>Milk</span> buttermilk fluid cultured reduced fat",
	            beanId: 42189
	            },
	            {
	            descForUi: "Potatoes mashed home-prepared whole <span>milk</span> and margarine added",
	            beanId: 11371
	            }
	        ]);

	        // View: List of Foods
	        diabetix.foodListView = new diabetix.Views.FoodsListView({
	            collection: diabetix.foodsCollection
	        });


	        $('#main').append(diabetix.foodListView.render().el);
	    }
    });

})();
