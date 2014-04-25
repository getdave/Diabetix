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
				_this.transitionToRoute('meal', meal);
				meal.get("portions").pushObject(portion);
			}, function() {

			});


			//meal.get("portions").pushObject(portion);


			/* meal.save().then(function() {
			
							portion.save().then(function() {
								_this.transitionToRoute('meal', meal.get("id"));
								// Update view title
								Diabetix.TitleView.set('title', meal.get("title")); // force update here as Model hook is not triggered again (i think!)
							});
			
						}, function() {
			
						}); */


			/* var meal = this.get('model');

						meal.setProperties({
							title: meal.get('title'),
							description: meal.get('description')
						});


						meal.save().then(function() {
							_this.transitionToRoute('meal', meal.get("id"));

							// Update view title
							Diabetix.TitleView.set('title', meal.get("title")); // force update here as Model hook is not triggered again (i think!)
						}, function() {

						}); */
  		}
  	}
});