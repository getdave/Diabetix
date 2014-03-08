/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.SearchView = Backbone.View.extend({
        className: 'app-search',
        template: JST['app/scripts/templates/search.ejs'],

        events: {
			"submit": "processQuery"
		},

        initialize: function() {
			// Immediately render to page
			this.render();

			// Must be after render
        	this.$input 	= this.$('#search-text');
			this.$sbutton 	= this.$('#search-submit');

        },

        render: function(query) {
        	this.$el.html( this.template() );
        	$('.bar-header-secondary').empty().append(this.el);
			return this;
        },

        /**
         * Process a search query and trigger app navigation
         */
        processQuery: function(e) {
        	e.preventDefault();
        	var query = this.$input.val();

            // Navigate to the "search" route passing the search
            // query as the :param in the route url
            diabetix.foodsRouter.navigate("search/" + query, {trigger: true});
        },

    });

})();
