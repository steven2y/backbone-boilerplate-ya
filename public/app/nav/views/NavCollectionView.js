define([
    'backbone',
    'app/nav/views/NavView'
], function (Backbone, NavView) {
    return Backbone.View.extend({

        tagName: "ul",

        className: "nav nav-tabs",

        initialize: function () {
        },

        setActive: function (label) {
            this.collection.each(function (navModel) {
                var active = false;

                if(navModel.get('label') == label){
                    active = true;
                }
                navModel.set('active', active);
            });

        },

        render: function () {
            this.$el.empty();
            this.collection.each(function (navModel) {
                var view = new NavView({model: navModel})
                this.$el.append(view.render().el);
            }.bind(this));

            return this;
        }

    });
});