!function(){window.Diabetix=Ember.Application.create()}(),function(){Diabetix.FoodController=Ember.ObjectController.extend({needs:["meals","mealsIndex"],portionWeight:null,allMeals:function(){return console.log(this.get("controllers.meals.content")),this.get("controllers.meals.content")}.property(),portionCHO:function(){var a=this.get("nf_total_carbohydrate"),b=this.get("nf_serving_weight_grams"),c=this.get("portionWeight");return Math.round(a/b*c)}.property("portionWeight"),selectedMeal:null,actions:{addPortionToMeal:function(){var a=this,b=this.get("selectedMeal"),c=this.store.createRecord("portion",{foodName:this.get("item_name"),CHO:this.get("portionCHO"),meal:this.get("selectedMeal")});c.save().then(function(){b.get("portions").pushObject(c),b.save().then(function(){a.transitionToRoute("meal",b)})},function(){})}}})}(),function(){Diabetix.FoodsController=Ember.ArrayController.extend({searchQuery:"",actions:{queryFoods:function(){var a=this.get("searchQuery");this.set("searchQuery",""),this.transitionToRoute("foods.search",a)}}})}(),function(){Diabetix.FoodsSearchController=Ember.ArrayController.extend({})}(),function(){Diabetix.MealController=Ember.ObjectController.extend({})}(),function(){Diabetix.MealEditController=Ember.ObjectController.extend({actions:{updateMeal:function(){var a=this,b=this.get("model");b.setProperties({title:b.get("title"),description:b.get("description")}),b.save().then(function(){a.transitionToRoute("meal",b.get("id")),Diabetix.TitleView.set("title",b.get("title"))},function(){})}}})}(),function(){Diabetix.MealsController=Ember.ArrayController.extend({sortProperties:["createdAt"],sortAscending:!1})}(),function(){Diabetix.MealsIndexController=Ember.ArrayController.extend({})}(),function(){Diabetix.MealsNewController=Ember.ObjectController.extend({title:"",description:"",actions:{createMeal:function(){var a=this,b=this.store.createRecord("meal",{title:this.get("title"),description:this.get("description")});b.save().then(function(){a.setProperties({title:"",description:""}),a.transitionToRoute("meal",b)},function(){})}}})}(),function(){Diabetix.ApplicationSerializer=DS.LSSerializer.extend(),Diabetix.ApplicationAdapter=DS.LSAdapter.extend({namespace:"LSDiabetix"})}(),function(){Diabetix.Food=Ember.Object.extend({}),Diabetix.Food.reopenClass({queryFoods:function(a){return $.ajax({type:"GET",url:"https://api.nutritionix.com/v1_1/search/"+a+"/",data:{appId:"207894da",appKey:"9ceaebe161080c356ff15eaf2be38533",filters:{item_type:3},sort:{field:"nf_total_carbohydrate",order:"asc"},limit:100,fields:"item_id,item_name,item_description,nf_total_carbohydrate,brand_name,nf_servings_per_container,nf_serving_size_qty,nf_serving_size_unit,nf_serving_weight_grams"}}).then(function(a){var b=[];return a.hits.forEach(function(a){b.push(Diabetix.Food.create(a))}),b})},getFood:function(a){return $.ajax({type:"GET",url:"https://api.nutritionix.com/v1_1/item/",data:{appId:"207894da",appKey:"9ceaebe161080c356ff15eaf2be38533",id:a,fields:"item_id,item_name,item_description,nf_total_carbohydrate,brand_name,nf_servings_per_container,nf_serving_size_qty,nf_serving_size_unit,nf_serving_weight_grams"}}).then(function(a){return Diabetix.Food.create(a)})}})}(),function(){Diabetix.Meal=DS.Model.extend({title:DS.attr("string",{defaultValue:"Untitled Meal"}),description:DS.attr("string",{defaultValue:"No description provided."}),createdAt:DS.attr("string",{defaultValue:function(){return new Date}}),portions:DS.hasMany("portion",{async:!0}),portionsCount:function(){return this.get("portions.length")}.property("portions.@each"),totalCHO:function(){var a=this.get("portions"),b=0;return a.forEach(function(a){b+=a.get("CHO")}),b}.property("portions.@each.CHO")}),Diabetix.Meal.FIXTURES=[{id:1,title:"David's breakfast",description:"Lots of bran in this one. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",portions:[1,2]},{id:2,title:"Charlotte's lunch",description:"Bloody tasty lunch this one! Aadipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",portions:[3]},{id:3,title:"Simple Lunch",description:"A bit basic but tasty. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",portions:[4,5,6]},{id:4,title:"Roast Dinner",description:"The full works! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!"}]}(),function(){Diabetix.Portion=DS.Model.extend({foodName:DS.attr("string"),CHO:DS.attr("number"),createdAt:DS.attr("string",{defaultValue:function(){return new Date}}),meal:DS.belongsTo("meal")}),Diabetix.Portion.FIXTURES=[{id:1,foodName:"Toast",CHO:23,meal:1},{id:2,foodName:"Cheese",CHO:66,meal:1},{id:3,foodName:"Haggis",CHO:41,meal:2},{id:4,foodName:"Grit",CHO:75,meal:3},{id:5,foodName:"Bile",CHO:11,meal:3},{id:6,foodName:"Yorkie Bar",CHO:29,meal:3}]}(),function(){Diabetix.ApplicationRoute=Ember.Route.extend({model:function(){},afterModel:function(){Diabetix.TitleView.set("title","Diabetix")},setupController:function(a,b){this._super(a,b);var c=this.controllerFor("meals");a.get("store").find("meal").then(function(a){c.set("content",a)})}})}(),function(){Diabetix.FoodRoute=Ember.Route.extend({model:function(a){var b=a.food_id;return Diabetix.Food.getFood(b)},afterModel:function(a){var b=a.get("item_name");Diabetix.TitleView.set("title",b)}})}(),function(){Diabetix.FoodsRoute=Ember.Route.extend({afterModel:function(){Diabetix.TitleView.set("title","Foods")},renderTemplate:function(){this.render(),this.render("_searchbox",{outlet:"header-secondary",into:"application"})}})}(),function(){Diabetix.FoodsSearchRoute=Ember.Route.extend({model:function(a){var b=decodeURIComponent(a.query);return this.controllerFor("foods").set("searchQuery",b),Diabetix.Food.queryFoods(b)},serialize:function(a){return{query:encodeURIComponent(a)}},afterModel:function(){Diabetix.TitleView.set("title","Food Results")}})}(),function(){Diabetix.IndexRoute=Ember.Route.extend({afterModel:function(){Diabetix.TitleView.set("title","Diabetix")}})}(),function(){Diabetix.MealEditRoute=Ember.Route.extend({model:function(){return this.modelFor("meal")},renderTemplate:function(){this.render(),this.render("cancel-link",{outlet:"header-left",into:"application"})}})}(),function(){Diabetix.MealIndexRoute=Ember.Route.extend({model:function(){return this.modelFor("meal")},renderTemplate:function(){this.render(),this.render("edit-button",{outlet:"header-right",into:"application"})},actions:{edit:function(){this.get("model");this.transitionTo("meal.edit")}}})}(),function(){Diabetix.MealRoute=Ember.Route.extend({afterModel:function(a){var b=a.get("title");Diabetix.TitleView.set("title",b)}})}(),function(){Diabetix.MealsIndexRoute=Ember.Route.extend({model:function(){return this.modelFor("meals")},afterModel:function(){Diabetix.TitleView.set("title","Meals")}})}(),function(){Diabetix.MealsNewRoute=Ember.Route.extend({afterModel:function(){Diabetix.TitleView.set("title","Untited Meal")},renderTemplate:function(){this.render(),this.render("cancel-link",{outlet:"header-right",into:"application"})}})}(),function(){Diabetix.MealsIndexRoute=Ember.Route.extend({model:function(){return this.store.find("meal")},afterModel:function(){Diabetix.TitleView.set("title","Meals")},renderTemplate:function(){this.render(),this.render("new-button",{outlet:"header-right",into:"application"})},actions:{createNew:function(){this.transitionTo("meals.new")}}})}(),function(){Diabetix.HeaderSecondaryView=Ember.View.extend({layoutName:"layouts/header-secondary",classNames:["bar","bar-standard","bar-header-secondary"]})}(),function(){Diabetix.TitleView=Ember.View.create({tagName:"h1",classNames:["title"],templateName:"title"})}(),function(){Diabetix.Router.map(function(){this.resource("foods",function(){this.route("search",{path:"/search/:query"})}),this.resource("food",{path:"/food/:food_id"}),this.resource("meals",function(){this.resource("meal",{path:"/:meal_id"},function(){this.route("edit")}),this.route("new")})})}();