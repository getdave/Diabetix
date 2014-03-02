/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.Foods = Backbone.Collection.extend({

    	initialize: function(query) {

    		this.searchQuery = query || "";

            // Update Collection on "search" event
    		diabetix.Evt.on("search:update", this.update, this);

            // Automatically fetch on initialisation
            this.update(this.searchQuery);
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


