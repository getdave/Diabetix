Diabetix.MealsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('meal');
	}
});