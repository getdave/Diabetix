import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import nutritionixJsonData from '../../data/nutritionix-search';
import FoodAdapter from 'diabetix/adapters/food';

moduleFor('adapter:food', "Unit - Food Adapter");

test("it should use the correct api ID and Key", function(){
	var subject = this.subject();
	equal(subject.apiConfig.appId,"207894da", "AppId is set correctly");
	equal(subject.apiConfig.appKey,"9ceaebe161080c356ff15eaf2be38533", "AppKey is set correctly");
});

test("it should build correctly encoded API urls", function(){
	var url = this.subject().buildUrl("taco ");

	equal(url, "https://api.nutritionix.com/v1_1/search/taco%20/");	
});

test("it should parse response into Ember.Array of valid Food Ember.Object's", function(){
	var responseData = nutritionixJsonData;

	var result = this.subject().parseResponse( responseData );

	equal( Ember.typeOf(result), "array", "Result is valid Array");
	equal( result.length, 2, "Result has correct length value");

	equal( result[1].get('item_name'), "Taco", "Name of 2nd Model is set as expected");
});


