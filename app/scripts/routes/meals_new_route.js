Diabetix.MealsNewRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Untited Meal");
	}
});