Diabetix.FoodsRoute = Ember.Route.extend({
	afterModel: function(model, transition) {
		Diabetix.TitleView.set('title', "Foods");
	},
	renderTemplate: function(){
        this.render();
        this.render("_searchbox", {
        	outlet: "header-secondary",
        	into: 'application'
        });
    },
});