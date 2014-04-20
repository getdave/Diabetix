Diabetix.IndexRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Diabetix");
	}
});