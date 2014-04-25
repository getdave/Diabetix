Diabetix.Portion = DS.Model.extend({
  foodName: DS.attr("string"),
  CHO: DS.attr("number"),
  createdAt: DS.attr('string', {
      defaultValue: function() { return new Date(); }
  }),
  meal: DS.belongsTo('meal')
});



Diabetix.Portion.FIXTURES = [
 {
   id: 1,
   foodName: "Toast",
   CHO: 23,
   meal: 1
 
 },
 {
   id: 2,
   foodName: "Cheese",
   CHO: 66,
   meal: 1
 
 },
 {
   id: 3,
   foodName: "Haggis",
   CHO: 41,
   meal: 2
 
 },
 {
   id: 4,
   foodName: "Grit",
   CHO: 75,
   meal: 3
 
 },
 {
   id: 5,
   foodName: "Bile",
   CHO: 11,
   meal: 3
 
 },
 {
   id: 6,
   foodName: "Yorkie Bar",
   CHO: 29,
   meal: 3 
 },
];