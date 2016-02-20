$(function() {
    $.ajax({
            beforeSend: function(xhrObj){
                    xhrObj.setRequestHeader("Content-Type","application/vnd.api+json");
                    xhrObj.setRequestHeader("Accept","application/vnd.api+json");
            },
            type: "GET",
            url: "https://api.tnyu.org/v3/events?include=venue",
            dataType: "json",
            success: function(data){
                var events = data.data;
                var venues = data.included;

                var venueIdToVenue = {};
                venues.forEach(function(venue) {
                    venueIdToVenue[venue['id']] = venue;
                });
            }
    });
});