define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        defaults:{
            title: "a counter",
            count: 0
        },

        start: function(){
            this.interval = setInterval(function () {
                this.set('count', this.get('count') + 1);
            }.bind(this), 1000);
        },

        stop: function() {
            clearInterval(this.interval);
        }
    });
});