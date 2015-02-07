import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;
var searchInput;
var searchSubmit;

module('Foods Search Integration', {
    setup: function() {
        App = startApp();
        searchInput = 'input.food-search-input';
        searchSubmit = '.food-search-submit';

    },
    teardown: function() {
        Ember.run(App, App.destroy);
        $.mockjax.clear();
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

    Ember.$.mockjaxSettings.logging = false;

    Ember.$.mockjax({
        url: "https://api.nutritionix.com/v1_1/search/taco/",
        dataType: 'json',
        responseText: {
            "total_hits": 4594,
            "max_score": 11.992755,
            "hits": [
                {
                    "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
                    "_type": "item",
                    "_id": "513fceb775b8dbbc2100306a",
                    "_score": 11.992755,
                    "fields": {
                        "item_id": "513fceb775b8dbbc2100306a",
                        "item_name": "Cheese Taco",
                        "brand_name": "USDA",
                        "item_description": null,
                        "nf_total_carbohydrate": 20.64,
                        "nf_servings_per_container": null,
                        "nf_serving_size_qty": 1,
                        "nf_serving_size_unit": "each taco",
                        "nf_serving_weight_grams": 102
                    }
                },
                {
                    "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
                    "_type": "item",
                    "_id": "513fc9cb673c4fbc2600536a",
                    "_score": 4.0412245,
                    "fields": {
                        "item_id": "513fc9cb673c4fbc2600536a",
                        "item_name": "Taco",
                        "brand_name": "Taco Inn",
                        "item_description": "Taco",
                        "nf_total_carbohydrate": 33.25,
                        "nf_servings_per_container": null,
                        "nf_serving_size_qty": 1,
                        "nf_serving_size_unit": "taco",
                        "nf_serving_weight_grams": null
                    }
                }
            ]
        }
    });
    
    visit("/foods/search/taco/");

    andThen(function() {
        var rows = find(".food-result-list .food-result-item").length;
        var foodTitles = find(".food-result-item__name");

        var foodOneTitle = foodTitles.eq(0).text();
        var foodTwoTitle = foodTitles.eq(1).text();

        equal(rows, 2, rows);

        equal(foodOneTitle, "Cheese Taco");
        equal(foodTwoTitle, "Taco");
    });
});
