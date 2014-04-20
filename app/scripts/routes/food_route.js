Diabetix.FoodRoute = Ember.Route.extend({
	model: function(params) {
		var food_id = params.food_id;
		return Diabetix.Food.getFood(food_id);
	},
	afterModel: function(model, transition) {
		var name = model.get("item_name");
		Diabetix.TitleView.set('title', name);
	}
});