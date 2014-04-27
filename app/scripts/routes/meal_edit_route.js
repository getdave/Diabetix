Diabetix.MealEditRoute = Ember.Route.extend({
	model: function(params) {
		return this.modelFor("meal"); // required in order to give template correct Model data
	},
	renderTemplate: function(){
        this.render();
        this.render("cancel-link", {
	    	outlet: "header-left",
	    	into: 'application'
	    });
    },
	
});