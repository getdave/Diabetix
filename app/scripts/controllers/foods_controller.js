Diabetix.FoodsController = Ember.ArrayController.extend({
/* 	sortProperties: ['title'],
  	sortAscending: true, */
  	searchQuery: "",
  	actions: {
	    queryFoods: function() {

	    	var query = this.get('searchQuery');
	    		    	this.set('searchQuery', ""); // set back to blank as we're transitioning away
	    		     	//this.transitionTo("foods.search", query);
	     	this.transitionToRoute('foods.search', query);
	     	
	    }
	}



});