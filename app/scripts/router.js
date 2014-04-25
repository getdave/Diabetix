Diabetix.Router.map(function () {
  this.resource('foods', function() {
   	this.route('search', { path: '/search/:query' });
  });

  this.resource('food', { path: '/food/:food_id' });

  this.resource('meals',function() {
  	this.resource('meal', { path: '/:meal_id'}, function() {
    	this.route('edit');
    });
  });

  
});
