describe('Person', function() {

  beforeEach(function() {
    person = new Person(0,0, new EventListing(-10,10,-10,10))
  });

  describe('initialize', function() {
    it('initialized with coordinates', function() {
      expect(person.coordinates).toEqual([0,0]);
    });
  });

  describe('findNearestEvents', function() {
    it('finds the closest 5 events', function() {
      expect(person.nearestEvents.length).toEqual(5);
    });

    it('finds the closest 5 events', function() {
      distance1 = person.nearestEvents[4].distance;
      array = person.eventListing.listings.sort(function(a,b){return a.distance - b.distance})
      expect(distance1).not.toBeGreaterThan(array[5].distance);
    });
  });
});
