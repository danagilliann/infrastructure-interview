$(function() {
    $.get( "https://api.tnyu.org/v3/events?include=venue", function(data) {
        var events = data.data;
        var venues = data.included;

        console.log(events);
        console.log(venues);
    });
});