import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Toolbar Nav Integration', {
    setup: function() {
        App = startApp();
        visit('/');
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test('Has expected number of navigation links', function() {
    expect(1);
    
    equal(find('a', '.toolbar-nav').length, 4, 'The toolbar nav should have 4 nav links');
});

test('Shows correct link text', function() {
    expect(4);
    
	equal(find('a:nth-child(1) .tab-label', '.toolbar-nav').text(), 'Dashboard');
	equal(find('a:nth-child(2) .tab-label', '.toolbar-nav').text(), 'Foods');
	equal(find('a:nth-child(3) .tab-label', '.toolbar-nav').text(), 'Meals');
	equal(find('a:nth-child(4) .tab-label', '.toolbar-nav').text(), 'Settings');
});





