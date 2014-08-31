define([
    'backbone',
    'app/people/views/PeopleView'
], function (Backbone, PeopleView) {
    return Backbone.View.extend({

        tagName: "table",

        className: "peoples table table-condensed",

        events: {
            "click th.sort": "sort"
        },


        initialize: function (options) {
            this.sortField = 'name';
            this.sortAsc = true;
        },

        sort: function (event) {
            if (this.sortField == $(event.target).data('sort')) {
                //toggle asc
                this.sortAsc = !this.sortAsc;
            } else {
                this.sortField = $(event.target).data('sort');
                this.sortAsc = true;
            }

            this.render();
        },

        render: function () {
            var thead = $('<thead><th data-sort="name" class="sort">Name</th>' +
                    '             <th data-sort="age" class="sort">age</th>' +
                    '             <th data-sort="profession" class="sort">profession</th>' +
                    '      </thead>'),
                tbody = $('<tbody></tbody>'),
                displayData;


            this.$el.empty();

            displayData = this.collection.sortBy(this.sortField);
            thead.find('[data-sort=' + this.sortField + ']').addClass('sorted');

            if (!this.sortAsc) {
                displayData.reverse();
                thead.find('[data-sort=' + this.sortField + ']').addClass('asc');
            }

            _.each(displayData, function (people) {
                var personView = new PeopleView({model: people})
                tbody.append(personView.render().el);
            }.bind(this));


            this.$el.append(thead);
            this.$el.append(tbody);
            return this;
        }

    });
});