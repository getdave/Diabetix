Diabetix.MealsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('meal');
	},
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Meals");
	},
	renderTemplate: function(){
        this.render();
        this.render("new-button", {
        	outlet: "header-right",
        	into: 'application'
        });
        
    },
    actions: {
		createNew: function() {
			this.transitionTo('meals.new');
		}
	}
});