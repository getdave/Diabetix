import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  // Foods
  this.resource('foods', function() {
    this.route('search', { path: '/search/:query' });
  });

  // Food (Single)
  this.resource('food', {
      path: '/food/:food_id'
  });

  // Meals
  this.resource('meals', function() {

      // Meal (Single)
      this.resource('meal', {
          path: '/:meal_id'
      }, function() {
          this.route('edit');
      });

      // New Meal
      this.route('new');
  });

});

export default Router;