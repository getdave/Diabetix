Diabetix.MealEditController = Ember.ObjectController.extend({
  	actions: {
  		updateMeal: function() {
			var _this = this;
			var meal = this.get('model');

			meal.setProperties({
				title: meal.get('title'),
				description: meal.get('description')
			});


			meal.save().then(function() {
				_this.transitionToRoute('meal', meal.get("id"));
			}, function() {

			});
  		}
	}
});