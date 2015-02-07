import Ember from 'ember';


var customHelpers = function() {
    Ember.Test.registerHelper('exists', function(app, selector) {
        return !!find(selector).length;
    });


    Ember.Test.registerHelper('shouldHaveText', function(app, element, text) {
	    equal(Ember.$(element).text(), text);
	});

}();

export default customHelpers;