import Ember from 'ember';

export default Ember.Test.registerHelper('exists', function(app, selector) {
    return !!find(selector).length;
});