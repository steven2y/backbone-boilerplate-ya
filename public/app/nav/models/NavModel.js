define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        defaults:{
            label: 'a label',
            href: '#',
            active: 'false'
        }
    });
});