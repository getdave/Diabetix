Diabetix.FoodController = Ember.ObjectController.extend({
  	portionWeight: null,
  	portionCHO: function() {
  		var totalCarbs = this.get("nf_total_carbohydrate");
  		var pw = this.get('portionWeight');

  		return Math.round( (totalCarbs/100) * pw );
  	}.property('portionWeight'),

  	actions: {

	}
});