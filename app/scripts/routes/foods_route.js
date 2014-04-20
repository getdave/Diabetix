Diabetix.FoodsRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Foods");
	}
});