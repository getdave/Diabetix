Diabetix.MealsNewRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Untited Meal");
	},
	renderTemplate: function(){
        this.render();
        this.render("cancel-link", {
        	outlet: "header-right",
        	into: 'application'
        });
    },
});