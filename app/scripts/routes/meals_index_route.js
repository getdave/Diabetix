Diabetix.MealsIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('meals');
	},
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Meals");
	}
});