//Diabetix.ApplicationAdapter = DS.FixtureAdapter;
Diabetix.ApplicationSerializer = DS.LSSerializer.extend();
Diabetix.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'LSDiabetix'
});

/**
 * Fix issue with relationship fields not being persisted on record save
 * see http://stackoverflow.com/questions/19093078/ember-data-saving-record-loses-has-many-relationships
 */
/* DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(record.constructor, relationship);

        if (relationshipType === 'manyToNone'
                || relationshipType === 'manyToMany'
                || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
}); */