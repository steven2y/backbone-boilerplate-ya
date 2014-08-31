define([
        'people/models/PeopleModel',
        'people/models/PeopleCollection',
        'people/views/PeopleView',
        'people/views/PeopleCollectionView'
    ],
    function () {
        //just namespacing
        var People = {
            models: {},
            views: {}
        }

        People.models.People = require('people/models/PeopleModel');
        People.models.Peoples = require('people/models/PeopleCollection');
        People.views.People = require('people/views/PeopleView');
        People.views.Peoples = require('people/views/PeopleCollectionView');

        return People;
    });