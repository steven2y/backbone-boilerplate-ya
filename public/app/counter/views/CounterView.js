define([
    'backbone'
], function (Backbone) {
    return Backbone.View.extend({

        tagName: "div",

        className: "counter",

        template: _.template('<%=count%><button class="button start">start</button><button class="button stop">stop</button>'),

        events: {
            "click .button.start": "start",
            "click .button.stop": "stop"
        },

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },

        start: function(){
            this.model.start();
        },

        stop:function(){
            this.model.stop();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
});