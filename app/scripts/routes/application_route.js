Diabetix.ApplicationRoute = Ember.Route.extend({
    model: function () {

    },

	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Diabetix");
	}
});



