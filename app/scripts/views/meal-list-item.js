/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealListItemView = Backbone.View.extend({

        template: JST['app/scripts/templates/meal-list-item.ejs'],

    	tagName: 'li',
        className: 'table-view-cell',

        events: {
            "click .delete": "removeMealModel"
        },


        initialize: function() {

            // Listen for "Destroy" event on Model and then fire $.remove() on this View
    	    this.listenTo(this.model, 'destroy', this.remove);
    	},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

        removeMealModel: function(meal) {
           
            var bDelete = confirm("This will permenently delete " +  this.model.get("name") + " from your Meal list.");
            if (bDelete === true) {
                this.model.destroy();
            }
        }

    });

})();
