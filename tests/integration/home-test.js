import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Homepage Integration', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("Displays welcome content", function() {
    expect(3);
    
    // Index
    visit('/');
	andThen(function() {
		equal(find('.homepage-welcome h2').text(), 'Welcome to Diabetix');
		equal(find('.homepage-welcome p').text(), 'Powered by the Nutritionix API.');
		equal(find('.homepage-welcome a').text(), 'Search for a Food');
	});
});





