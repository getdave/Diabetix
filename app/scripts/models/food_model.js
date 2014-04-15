Diabetix.Food = DS.Model.extend({
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
];