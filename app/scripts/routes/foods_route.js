Diabetix.FoodsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('food');
	}
});
