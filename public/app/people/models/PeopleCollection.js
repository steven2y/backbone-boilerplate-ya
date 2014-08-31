define([
    'backbone',
    'people/models/PeopleModel'
], function (Backbone, People) {
    return Backbone.Collection.extend({
        model: People,

        comparator: 'name',

        defaults:{
            name: 'a name',
            age: 30,
            profession: 'cleaner'
        }
    });
});