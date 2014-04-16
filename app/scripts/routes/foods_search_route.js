Diabetix.FoodsSearchRoute = Ember.Route.extend({
	model: function(params) {
		console.log(params);
		this.controllerFor("foods").set('searchQuery', params.query);
		return this.store.find('food');
	},
	serialize: function(query) {
		return {query: query};
	},


});
