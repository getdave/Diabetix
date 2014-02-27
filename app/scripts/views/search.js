/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.SearchView = Backbone.View.extend({
        className: 'app-search',
        template: JST['app/scripts/templates/search.ejs'],

        events: {
			"submit": "parseQuery",
			"click #resetbutton": "clearSearch"
		},

        initialize: function() {
			// Immediately render to page
			this.render();

			// Must be after render
        	this.$input 	= this.$('#search-text');
			this.$sbutton 	= this.$('#search-submit');
			this.$reset 	= this.$('#search-reset');

        },

        render: function() {
        	this.$el.html( this.template() );
        	$('.content').prepend(this.el);
			return this;
        },

        parseQuery: function(ev) {
        	ev.preventDefault();
        	var query = this.$input.val();
        	diabetix.Evt.trigger("search:query", query);
        },

    });

})();
