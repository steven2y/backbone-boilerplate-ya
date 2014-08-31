define([
    'backbone'
], function (Backbone) {
    return Backbone.View.extend({

        tagName: "tr",

        className: "people",

        template: _.template('<td><%=name%></td><td><%=age%></td><td><%=profession%></td>'),

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
});