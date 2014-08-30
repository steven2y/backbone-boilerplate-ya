define([
    'app/counter/models/CounterModel'
], function (CounterModel) {

    describe('CounterModel', function() {
        var model;
        beforeEach(function(){
            model = new CounterModel();
            jasmine.clock().install();
        });

        afterEach(function() {
            jasmine.clock().uninstall();
        });

        it('init', function(){
            expect(model.get('count')).toBe(0);
            expect(model.get('title')).toBe('a counter');
        })

        describe('should count', function(){
            it('should start counter and count every 1 second', function(){
                expect(model.get('count')).toBe(0);
                model.start();
                expect(model.get('count')).toBe(0);
                jasmine.clock().tick(1000);
                expect(model.get('count')).toBe(1);
                jasmine.clock().tick(5000);
                expect(model.get('count')).toBe(6);
            });

            it('should stop counter', function(){
                expect(model.get('count')).toBe(0);
                model.start();
                jasmine.clock().tick(1000);
                model.stop();
                jasmine.clock().tick(5000);
                expect(model.get('count')).toBe(1);
            });
        });
    });
});