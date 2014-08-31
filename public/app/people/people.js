define([
        'app/people/models/PeopleModel',
        'app/people/models/PeopleCollection',
        'app/people/views/PeopleView',
        'app/people/views/PeopleCollectionView'
    ],
    function () {
        //just namespacing
        var People = {
            models: {},
            views: {}
        }

        People.models.People = require('app/people/models/PeopleModel');
        People.models.Peoples = require('app/people/models/PeopleCollection');
        People.views.People = require('app/people/views/PeopleView');
        People.views.Peoples = require('app/people/views/PeopleCollectionView');

        return People;
    });