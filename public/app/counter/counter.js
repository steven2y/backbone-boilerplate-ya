define([
        'app/counter/models/CounterModel',
        'app/counter/views/CounterView'
       ],
    function () {
        //just namespacing
        var Counter = {
            models: {},
            views: {}
        }

        Counter.models.Counter = require('app/counter/models/CounterModel');
        Counter.views.Counter = require('app/counter/views/CounterView');

        return Counter;
    });