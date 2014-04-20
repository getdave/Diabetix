Diabetix.FoodsSearchRoute = Ember.Route.extend({
	model: function(params) {
		var query = decodeURIComponent(params.query);
		this.controllerFor("foods").set('searchQuery', query);
		return Diabetix.Food.queryFoods(query);
	},
	serialize: function(query) {
		return {query: encodeURIComponent(query)};
	},
});
