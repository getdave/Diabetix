Diabetix.MealRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		var title = model.get("title");
		Diabetix.TitleView.set('title', title);
	}
});