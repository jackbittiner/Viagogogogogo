$(document).ready(function() {
  var eventListing = new EventListing(-10,10,-10,10);
  showEvents();

  function showEvents() {
    eventListing.listings.forEach(function(event){
      var x = ((event.coordinates[0] + 10) * 30)
      var y = 600 - ((event.coordinates[1] + 10) * 30)
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      drawAxis(ctx)
      ctx.stroke();
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(x,y,25,25);
    });
  };

  function drawAxis(ctx) {
    ctx.moveTo(312.25,0);
    ctx.lineTo(312.25,625);
    ctx.moveTo(0,312.25);
    ctx.lineTo(625.25,312.25);
  }

  $('#enter-coordinates').submit(function(event) {
    event.preventDefault();
    var x = $('#xcoordinate').val();
    var y = $('#ycoordinate').val();
    x = parseInt(x)
    y = parseInt(y)
    var person = new Person(x,y,eventListing)
    drawUser(x,y)
    $("#enter-coordinates").hide();
    showEventInformation(person);
  });

  function drawUser(x,y) {
    x = (x + 10) * 30
    y = 600 - (y + 10) * 30
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(x,y,25,25);
  };

  function showEventInformation(person) {
    $('#user-coordinates').text('Closest Events to: ' + person.coordinates[0] + ', ' + person.coordinates[1]);
    $('#closest-event1').text('Event ' + person.nearestEvents[0].uniqueID + ' - $' + person.nearestEvents[0].cheapestTicket.price + ', Distance ' + person.nearestEvents[0].distance);
    $('#closest-event2').text('Event ' + person.nearestEvents[1].uniqueID + ' - $' + person.nearestEvents[1].cheapestTicket.price + ', Distance ' + person.nearestEvents[1].distance);
    $('#closest-event3').text('Event ' + person.nearestEvents[2].uniqueID + ' - $' + person.nearestEvents[2].cheapestTicket.price + ', Distance ' + person.nearestEvents[2].distance);
    $('#closest-event4').text('Event ' + person.nearestEvents[3].uniqueID + ' - $' + person.nearestEvents[3].cheapestTicket.price + ', Distance ' + person.nearestEvents[3].distance);
    $('#closest-event5').text('Event ' + person.nearestEvents[4].uniqueID + ' - $' + person.nearestEvents[4].cheapestTicket.price + ', Distance ' + person.nearestEvents[4].distance);
  };
});
