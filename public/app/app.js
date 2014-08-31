require([
    'backbone',
    'counter/counter',
    'people/people',
    'nav/nav'
], function (Backbone, Counter,People, Nav) {


    var NavAppView = Backbone.View.extend({
        el: $("#nav"),


        initialize: function () {
            var navCollection = new Nav.models.Navs([
                {label: 'Counter', href: '#/counter', active: true},
                {label: 'People', href: '#/people', active: false}
            ]);
            this.nav = new Nav.views.Navs({collection: navCollection});
        },

        setActive: function(label){
            this.nav.setActive(label);
        },

        render: function () {
            this.$el.html(this.nav.render().el);
        }

    });

    var CounterAppView = Backbone.View.extend({
        el: $("#main"),

        render: function () {
            var modelCounter = new Counter.models.Counter()
            this.counter = new Counter.views.Counter({model: modelCounter});
            this.$el.html(this.counter.render().el);
        }

    });


    var PeopleAppView = Backbone.View.extend({
        el: $("#main"),

        render: function () {
            var peopleCollection = new People.models.Peoples([
                {name: 'Dave', age: 30, profession: 'cleaner'},
                {name: 'James', age: 23, profession: 'student'},
                {name: 'Chris', age: 38, profession: 'nurse'},
                {name: 'Emma', age: 27, profession: 'teacher'},
                {name: 'Kevin', age: 65, profession: 'retired'},
                {name: 'Sarah', age: 65, profession: 'food technician'}
            ]);
            this.peoples = new People.views.Peoples({collection: peopleCollection});
            this.$el.html(this.peoples.render().el);
        }

    });


    var Main = Backbone.Router.extend({

        routes: {
            "counter": "showCounter",
            "people": "showPeople"
        },

        initialize: function () {
            this.navAppView  = new NavAppView();
            this.navAppView.render();

            this.counterAppView = new CounterAppView();
            this.peopleAppView = new PeopleAppView();
        },

        showCounter: function () {
            this.counterAppView.render();
            this.navAppView.setActive('Counter');
        },

        showPeople: function () {
            this.peopleAppView.render();
            this.navAppView.setActive('People');
        }

    });

    new Main();

    Backbone.history.start()
});