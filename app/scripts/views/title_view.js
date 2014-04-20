var TitleView = Ember.View.extend({
  tagName: 'h1',
  classNames: ['title'],
  /* classNameBindings: ['isDefaultTitle'],
    isDefaultTitle: true */
});

Diabetix.TitleView = TitleView.create({
	templateName: 'title'
});