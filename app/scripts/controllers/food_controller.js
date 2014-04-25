Diabetix.FoodController = Ember.ObjectController.extend({
	needs: ['meals', 'mealsIndex'],
  	portionWeight: null,
  	allMeals: function() {
  		console.log(this.get('controllers.meals.content'));
  		return this.get('controllers.meals.content');
  	}.property(),
  	portionCHO: function() {
  		
  		
  		
  		var totalCarbs = this.get("nf_total_carbohydrate");
  		var pw = this.get('portionWeight');

  		return Math.round( (totalCarbs/100) * pw );
  	}.property('portionWeight')
});