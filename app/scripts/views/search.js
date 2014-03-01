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

        },

        render: function() {
        	this.$el.html( this.template() );
        	$('.bar-header-secondary').append(this.el);
			return this;
        },

        parseQuery: function(ev) {
        	ev.preventDefault();
        	var query = this.$input.val();
        	diabetix.Evt.trigger("search:query", query);
        },

    });

})();
