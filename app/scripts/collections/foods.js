/*global diabetix, Backbone*/

diabetix.Collections = diabetix.Collections || {};

(function () {
    'use strict';

    diabetix.Collections.Foods = Backbone.Collection.extend({

        model: diabetix.Models.Food,

        url: "https://api.nutritionix.com/v1_1/search/taco?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=207894da&appKey=9ceaebe161080c356ff15eaf2be38533",

        parse: function (response) {
		    return response.hits;
		},
    	
    });

})();


