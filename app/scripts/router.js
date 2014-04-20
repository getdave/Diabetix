Diabetix.Router.map(function () {
  this.resource('foods', function() {
   	this.route('search', { path: '/search/:query' });
  });

  this.resource('meals');
});
