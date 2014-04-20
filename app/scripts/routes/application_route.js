Diabetix.ApplicationRoute = Ember.Route.extend({
    model: function () {

    },
    activate: function() {
		Diabetix.TitleView.set('title', "Diabetix");
	},
});



