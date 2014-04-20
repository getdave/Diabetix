Diabetix.MealsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('meal');
	},
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Meals");
	}
});