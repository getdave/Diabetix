import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Foods Integration', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("All Foods routes exist", function() {
    expect(3);
    
    // Index
    visit('foods').then(function() {
      equal(currentRouteName(), 'foods.index');
    });

    // Search 
    visit('foods/search').then(function() {
      equal(currentRouteName(), 'foods.search');
    });

    // Search Query
    visit('foods/search/bread').then(function() {
      equal(currentRouteName(), 'foods.search.query');
    });
});