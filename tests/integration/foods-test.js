import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Foods Search Integration', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("Can access Foods route", function() {
    expect(1);
    
    // Index
    visit('/foods').then(function() {
      equal(currentRouteName(), 'foods.index');
    });

 /*   // Search 
    visit('foods/search').then(function() {
      equal(currentRouteName(), 'foods.search');
    });

    // Search Query
    visit('foods/search/bread').then(function() {
      equal(currentRouteName(), 'foods.search.query');
    });*/
});


test("Search box exists with suitable placeholder text", function() {
    expect(2);
    
    // Index
    visit('/foods').then(function() {
        equal( find('form.food-search-form input.food-search-input').length, 1, "The navbar was rendered");
        equal( find('input.food-search-input', 'form.food-search-form').attr('placeholder'), 'Search for a Food...');   
    });
});

