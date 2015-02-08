import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import nutritionixJsonData from '../data/nutritionix-search';

var App;
var searchInput;
var searchSubmit;
var defaultXHR;

module('Foods Search Integration', {
    setup: function() {
        App = startApp();
        searchInput = 'input.food-search-input';
        searchSubmit = '.food-search-submit';

        // Mock API call
        Ember.$.mockjaxSettings.logging = false;
        defaultXHR = Ember.$.mockjax({
            url: "https://api.nutritionix.com/v1_1/search/*", // match against all queries to ensure XHR is never run
            dataType: 'json',
            responseText: nutritionixJsonData
        });

    },
    teardown: function() {
        Ember.run(App, App.destroy);
        Ember.$.mockjax.clear();
    }
});

test("It should use correct Routes for index and search", function() {
    expect(2);
    
    // Index
    visit('/foods');
    andThen(function() {
        equal(currentRouteName(), 'foods.index');        
    });

    // Search Query
    visit('/foods/search/taco');
    andThen(function() {
        equal(currentRouteName(), 'foods.search');        
    });
    
});


test("It should render search box with suitable placeholder text", function() {
    expect(2);
    
    // Index
    visit('/foods').then(function() {
        equal( exists('input.food-search-input'), true, "The navbar was rendered");
        equal( find('input.food-search-input', 'form.food-search-form').attr('placeholder'), 'Search for a Food...');   
    });
});


test("It should transition to Food Search Query route upon search submit", function() {
    expect(1);    
    
    visit('/foods');    
    fillIn(searchInput, 'Taco');
    click(searchSubmit);

    andThen(function() {
        equal(currentRouteName(), 'foods.search');        
    });
});

test("It should add correctly encoded and lowercased search string to correct Foods Search Query url upon search submit", function() {
    expect(1);
    
    visit('/foods');    
    fillIn(searchInput, 'Cheese & Biscuits');
    click(searchSubmit);

    andThen(function() {
        equal(currentURL(), '/foods/search/cheese & biscuits');
    });
});



test("It should return results when valid search is submitted ", function() {
    expect(3);
    
    visit("/foods/search/taco/");

    andThen(function() {
        var rows = find(".food-result-list .food-result-item").length;
        var foodTitles = find(".food-result-item__name");

        var foodOneTitle = foodTitles.eq(0).text();
        var foodTwoTitle = foodTitles.eq(1).text();

        equal(rows, 2, rows);

        equal(foodOneTitle, "Fast foods, taco with beef, cheese and lettuce, soft - 1 each taco");
        equal(foodTwoTitle, "Taco");
    });
});


test("It should show appropriate message when invalid search returns no results", function() {
    expect(1);

    // Setup Food that won't exist
    var nonExistentFoodQuery = "this-food-will-not-exist-because-i-just-made-it-up";

    // Clear default API call
    Ember.$.mockjax.clear(defaultXHR);

    // Define API call which will return no returns
    Ember.$.mockjax({
        url: "https://api.nutritionix.com/v1_1/search/" + nonExistentFoodQuery + "/",
        dataType: 'json',
        responseText: {
            "total_hits":0,
            "max_score":null,
            "hits":[]
        }
    });
    
    visit("/foods/search/" + nonExistentFoodQuery + "/");

    andThen(function() {
        var noResultsText = find(".food-result-list p").text();
        equal(noResultsText, "We didn't find any Foods matching your query. Please try an alternative keyword.");
    });
});




