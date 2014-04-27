Diabetix.ApplicationRoute = Ember.Route.extend({
    model: function () {

    },

	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Diabetix");
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		var mealsController = this.controllerFor("meals");

		controller.get('store').find('meal').then(function(data){
			mealsController.set('content',data);
		});

	}
});



