define([
    'backbone',
    'app/people/models/PeopleModel'
], function (Backbone, People) {
    return Backbone.Collection.extend({
        model: People,
        comparator: 'name',
    });
});