import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Meals Integration', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("All Meals routes exist", function() {
    expect(1);
    
    // All Meals
    visit('meals').then(function() {
      equal(currentRouteName(), 'meals.index');
    });    
});