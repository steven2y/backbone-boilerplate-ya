define([
    'backbone',
    'app/nav/models/NavModel'
], function (Backbone, Nav) {
    return Backbone.Collection.extend({
        model: Nav
    });
});