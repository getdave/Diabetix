Diabetix.MealRoute = Ember.Route.extend({

	activate: function() {
		console.log(this.get("title"));
		Diabetix.TitleView.set('title', "Meal");
	},
});