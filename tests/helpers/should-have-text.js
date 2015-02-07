import Ember from 'ember';

export default Ember.Test.registerHelper('shouldHaveText', function(app, element, text) {
    return equal(Ember.$(element).text(), text);
});