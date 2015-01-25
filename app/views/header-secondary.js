import Ember from 'ember';

export default Ember.View.extend({
	layoutName: 'layouts/header-secondary',
	classNames: ["bar", "bar-standard", "bar-header-secondary"],
	
	didInsertElement: function(){
		this.$().focus();
	}	

});
