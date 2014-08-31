define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        defaults:{
            name: 'a name',
            age: 30,
            profession: 'cleaner'
        }
    });
});