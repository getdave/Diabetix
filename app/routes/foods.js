import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate: function(){
        this.render();
        this.render("food-search-form", {
        	outlet: "header-secondary",
        	into: 'application'
        });
    },
});


