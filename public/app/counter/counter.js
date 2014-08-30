define([
        'counter/models/CounterModel',
        'counter/views/CounterView'
       ],
    function () {
        //just namespacing
        var Counter = {
            models: {},
            views: {}
        }

        Counter.models.Counter = require('counter/models/CounterModel');
        Counter.views.Counter = require('counter/views/CounterView');

        return Counter;
    });