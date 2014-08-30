define([
    'backbone',
    'app/counter/models/CounterModel',
    'app/counter/views/CounterView'
], function (Backbone, CounterModel, CounterView) {

    describe('CounterView', function() {
        var model;
        beforeEach(function(){
            model = new CounterModel();
        });

        afterEach(function() {

        });

        it('start/stop should call model start/stop', function(){
            var view = new CounterView({model: model});

            spyOn(model, 'start');
            spyOn(model, 'stop');

            view.start();

            expect(model.start).toHaveBeenCalled();
            expect(model.stop).not.toHaveBeenCalled();
            view.stop();
            expect(model.stop).toHaveBeenCalled();
        })


    });
});