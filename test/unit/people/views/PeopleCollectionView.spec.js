define([
    'backbone',
    'app/people/people'

], function (Backbone, People) {

    describe('PeopleCollectionView', function() {
        var collection;
        beforeEach(function(){
            collection = new Backbone.Collection([
                {name: 'a', age: 3, profession: 'z'},
                {name: 'b', age: 2, profession: 'y'},
                {name: 'c', age: 1, profession: 'x'},
            ]);
        });

        afterEach(function() {

        });

        it('sort should update the relevant fields', function(){
            var view = new People.views.Peoples({collection: collection}),
                dataSpy = spyOn($.fn, 'data');

            expect(view.sortField).toBe('name');
            expect(view.sortAsc).toBe(true);

            dataSpy.and.returnValue('name');
            view.sort('something');
            expect(view.sortField).toBe('name');
            expect(view.sortAsc).toBe(false);

            dataSpy.and.returnValue('myNewField');
            view.sort('something');
            expect(view.sortField).toBe('myNewField');
            expect(view.sortAsc).toBe(true);

            dataSpy.and.returnValue('myNewField');
            view.sort('something');
            expect(view.sortField).toBe('myNewField');
            expect(view.sortAsc).toBe(false);

        })

        xit('should render correctly', function(){
            //wip
        })
    });
});