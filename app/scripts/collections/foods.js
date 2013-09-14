/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.Foods = Backbone.Collection.extend({

    	initialize: function(options) {
    		this.searchQuery = "";
    		diabetix.Evt.bind("search:query", this.update, this);
    		
    	},
        
        model: diabetix.Models.Food,
        
        defaultParams: {
        	"appId": "207894da", 
        	"appKey": "9ceaebe161080c356ff15eaf2be38533",
        	"fields" : "*"//"item_id,item_name,item_description,nf_total_carbohydrate"
        },
        
    	params: {},
    	url: function() {
			return "https://api.nutritionix.com/v1_1/search/" + this.searchQuery + "/?" + $.param(_.defaults(this.params, this.defaultParams));
		},
        /* url: "https://api.nutritionix.com/v1_1/search/taco?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id", */

        parse: function (response) {
		    return response.hits;
		},

		update: function(query) {
			var query = $.trim(query);
        	if (query !== '') {
				this.searchQuery = query;
				this.fetch({
					data: {},
	    			processData: true,
	    			reset: true
				});
			}
		}
    	
    });

})();


