describe('Person', function() {

  beforeEach(function() {
    person = new Person(0,0)
  });

  describe('initialize', function() {
    it('initialized with coordinates', function() {
      expect(person.coordinates).toEqual([0,0]);
    });
  });
});
