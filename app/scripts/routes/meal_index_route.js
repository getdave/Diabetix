Diabetix.MealIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.modelFor("meal"); // required in order to give template correct Model data
	},
	renderTemplate: function(){
        this.render();

        this.render("edit-button", {
        	outlet: "header-right",
        	into: 'application'
        });
    },

    actions: {
    	edit: function() {
    		var model = this.get('model');
    		this.transitionTo('meal.edit');
    		//{{#link-to "meal.edit" this }}Edit{{/link-to}}
    	}
    }
});