Diabetix.FoodView = Ember.View.extend({

    willAnimateIn : function () {
    	this.$().css("position", 'relative');
        this.$().css("left", '-9999');
    },

    animateIn : function (done) {
    	this.$().css("position", 'relative');
		this.$().animate({
			left: "0"
		}, 2000);
		done();
    },

    animateOut : function (done) {
    	this.$().css("position", 'relative');
        this.$().animate({
			left: "-9999"
		}, 2000);
		done();
    }
});