Diabetix.Meal = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
});



Diabetix.Meal.FIXTURES = [
 {
   id: 1,
   title: "David's breakfast",
   description: "Lots of bran in this one. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!"
 },
 {
   id: 2,
   title: "Charlotte's lunch",
   description: "Bloody tasty lunch this one! Aadipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!"
 },
  {
   id: 3,
   title: "Simple Lunch",
   description: "A bit basic but tasty. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!"
 },
  {
   id: 4,
   title: "Roast Dinner",
   description: "The full works! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque corporis vitae dolor fugiat maxime sint dicta laborum nulla ratione! Illo in similique itaque perferendis. Dolorem, labore necessitatibus tenetur quisquam!"
 },
];