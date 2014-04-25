Diabetix.MealsNewController = Ember.ObjectController.extend({
	title: "",
	description: "",

  	actions: {
  		createMeal: function() {
			var _this = this;

			// TODO: Add in Ember Validation - https://github.com/dockyard/ember-validations
			var meal = this.store.createRecord('meal', {
				title: this.get("title"),
				description: this.get("description")
			});


			meal.save().then(function() {
				_this.setProperties({
					title: "",
					description: ""
				});
				_this.transitionToRoute('meal', meal);

			}, function() {

			});
  		}
	}
});