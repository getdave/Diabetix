var TitleView = Ember.View.extend({
	tagName: 'h1',
	classNames: ['title'],
});

Diabetix.TitleView = TitleView.create({
	templateName: 'title'
});