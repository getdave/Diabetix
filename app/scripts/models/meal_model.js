Diabetix.Meal = DS.Model.extend({
  title: DS.attr('string', {
      defaultValue: "Untitled Meal"
  }),
  description: DS.attr('string', {
      defaultValue: "No description provided."
  }),
  portions: DS.hasMany('portion', {async: true }),
  portionsCount: function() {
      return this.get('portions.length');
  }.property('portions.@each'),
  totalCHO: function() {
    var portions = this.get("portions");
    var ret = 0;
    
    portions.forEach(function(portion){
        ret += portion.get("CHO");
    });
    return ret;
  }.property("portions.@each.CHO")
});



Diabetix.Meal.FIXTURES = [
 {
   id: 1,
   title: "David's breakfast",
   description: "Lots of bran in this one. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",
   portions: [1,2]
 },
 {
   id: 2,
   title: "Charlotte's lunch",
   description: "Bloody tasty lunch this one! Aadipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",
   portions: [3]
 },
  {
   id: 3,
   title: "Simple Lunch",
   description: "A bit basic but tasty. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",
   portions: [4,5,6]
 },
  {
   id: 4,
   title: "Roast Dinner",
   description: "The full works! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!",
 },
];