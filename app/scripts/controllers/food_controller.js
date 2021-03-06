Diabetix.FoodController = Ember.ObjectController.extend({
	needs: ['meals', 'mealsIndex'],
  	portionWeight: null,
  	allMeals: function() {
  		return this.get('controllers.meals.content');
  	}.property(),
  	portionCHO: function() {
  		var totalCarbs = this.get("nf_total_carbohydrate");
  		var servingWeight = this.get("nf_serving_weight_grams");
  		var pw = this.get('portionWeight');
  		return Math.round( (totalCarbs/servingWeight) * pw );
  	}.property('portionWeight'),
  	selectedMeal: null,
  	actions: {
  		addPortionToMeal: function() {
			var _this = this;

			var meal = this.get("selectedMeal");

			// TODO: Add in Ember Validation - https://github.com/dockyard/ember-validations
			var portion = this.store.createRecord('portion', {
				foodName: this.get("item_name"),
				CHO: this.get("portionCHO"),
				meal: this.get("selectedMeal")
			});


			portion.save().then(function() {
				meal.get("portions").pushObject(portion);
				meal.save().then(function() {
					_this.transitionToRoute('meal', meal);
				}); // requires save of meal
			}, function() {

			});
  		}
  	}
});