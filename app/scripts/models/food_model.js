/* Diabetix.Food = DS.Model.extend({
  title: DS.attr('string'),
  CHO: DS.attr('number')
});


Diabetix.Food.FIXTURES = [
 {
   id: 1,
   title: 'Bread',
   CHO: 16
 },
 {
   id: 2,
   title: 'Corn',
   CHO: 32
 },
  {
   id: 3,
   title: 'Cheese',
   CHO: 99
 },
]; */

Diabetix.Food = Ember.Object.extend({});

Diabetix.Food.reopenClass({
  queryFoods: function(query){
    // use regular AJAX / Promises calls
    return $.ajax({
      type: "GET",
      url: "https://api.nutritionix.com/v1_1/search/" + query + "/",
      data: {
        "appId": "207894da",
        "appKey": "9ceaebe161080c356ff15eaf2be38533",

        "filters":{
          "item_type":3
        },
        "sort":{
          "field":"nf_total_carbohydrate",
          "order":"asc"
        },
        "limit":100,
        //"fields":["item_id","item_name","item_description","nf_sodium","item_type"],
        "fields" : "item_id,item_name,item_description,nf_total_carbohydrate,brand_name,nf_servings_per_container,nf_serving_size_qty,nf_serving_size_unit,nf_serving_weight_grams"
      },
      //dataType: "json"
    }).then(function(response) {
      var results = [];


      // creates new Ember objects and store them into the results Array
      response.hits.forEach(function(food){
        results.push( Diabetix.Food.create(food) );
      });
      // finally returns the array full of Ember Objects
      return results;

    });
  }
});

/* https://api.nutritionix.com/v1_1/search/" + this.searchQuery + "/?" + $.param(_.defaults(this.params, this.defaultParams));

$.ajax({
  type: "GET",
  url: "https://api.nutritionix.com/v1_1/" + this.searchQuery + "/",
  data: {
    "appId": "207894da",
    "appKey": "9ceaebe161080c356ff15eaf2be38533",
    "fields" : "*"//"item_id,item_name,item_description,nf_total_carbohydrate"
  },
  dataType: "json"
}); */
