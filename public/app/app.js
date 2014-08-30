require([
    'backbone',
    'counter/counter'
], function(Backbone, Counter) {





    var CounterAppView = Backbone.View.extend({
        el: $("#main"),

        render: function() {
            var modelCounter = new Counter.models.Counter()
            this.counter = new Counter.views.Counter({model: modelCounter});
            this.$el.html(this.counter.render().el);
        }

    });


    var Main = Backbone.Router.extend({

        routes: {
            "counter":  "showCounter"
        },

        initialize :function(){
            this.counterAppView = new CounterAppView();
        },

        showCounter: function() {
            this.counterAppView.render();
        }

    });

    new Main();

    Backbone.history.start()
});