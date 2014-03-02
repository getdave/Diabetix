/*global diabetix, Backbone, JST*/

diabetix.Views = diabetix.Views || {};

(function () {
    'use strict';

    diabetix.Views.MealsListView = Backbone.View.extend({

        initialize:function () {
            this.collection.bind("reset", this.render, this);
            this.render();
        },

        tagName: 'ul',
        className: 'table-view',

        render: function() {
            this.$el.html('');
        	this.collection.each(function(meal) {
        		console.log(meal);
        	},this);

            //$('#results').html(this.el);
    		return this;
        }
    });

})();
