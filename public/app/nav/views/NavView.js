define([
    'backbone'
], function (Backbone) {
    return Backbone.View.extend({

        tagName: "li",

        template: _.template('<a href="<%=href%>" ><%=label%></a>'),

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            if(this.model.get('active')){
                this.$el.addClass('active');
            } else {
                this.$el.removeClass('active');
            }
            return this;
        }

    });
});