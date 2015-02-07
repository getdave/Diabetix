import Ember from 'ember';
import FoodAdapter from '../../adapters/food';

export default Ember.Route.extend({
	model: function(params) {
		var query = decodeURIComponent(params.query);
		this.controllerFor("foods").set('searchQuery', query);	
		var adapter = FoodAdapter.create();

		return adapter.queryFoods(query);
	
	},
	serialize: function(query) {
		return {
			query: encodeURIComponent(query)
		};
	},
});




