/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.SearchView = Backbone.View.extend({
        className: 'app-search',
        template: JST['app/scripts/templates/search.ejs'],

        initialize: function() {
        	this.render();
        },

        render: function() {
        	this.$el.html( this.template() );
        	$('#main').prepend(this.el);
			return this;
        },

    });

})();
