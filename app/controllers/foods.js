import Ember from 'ember';

export default Ember.ArrayController.extend({
	searchQuery: "",
	actions: {
		queryFoods: function() {
			var query = this.get('searchQuery').toLowerCase();
			this.set('searchQuery', ""); // set back to blank as we're transitioning away
		 	this.transitionToRoute('foods.search', query);
		}
	}
});

