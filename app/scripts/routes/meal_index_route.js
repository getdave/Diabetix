Diabetix.MealIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.modelFor("meal"); // required in order to give template correct Model data
	}
});