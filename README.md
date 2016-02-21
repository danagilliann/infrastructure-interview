# Tech@NYU Infrastructure team challenge

Hello! This is the Tech@NYU Infrastructure team challenge. If you're more interested in learning about the Infrastructure team - read our medium article [here](https://blog.techatnyu.org/tech-nyu-s-internal-infrastructure-team-868c365cd496#.1ssukbte0). We recommend that you do!

Through this challenge you will be making a web application! This will test your ability to write code! We will be testing your ability:

- to build front-end applications
- to build modularized code
- to interact with REST APIs and our API
- to make sense of data and be able to play with it

If you're familiar with REST APIs and have worked with frontend before -- this problem should not take you more than a couple hours. The idea behind the problem is that we want you to get data from our API, make sense of it, and make a simple visualization using the library of your choice.

If you run into issues with the challenge please feel free to create an issue through the [Github interface](https://github.com/TechAtNYU/infrastructure-interview/issues) (preferred) OR if important email ycp217 at nyu.edu.

**The deadline is 26th February 2016 at 9:00 PM.** The instructions on how to submit are at the bottom.

## Getting Started

Clone this repository (please don't fork it!):

```
git clone https://github.com/TechAtNYU/infrastructure-interview.git
cd infrastructure-interview
```

Then run `npm install` (Install it [here](https://www.npmjs.com/)):

```
npm install
```

Now to run the web application you should be able to run the command:

```
npm start
```

And it will be running on port 3000. You should be able to navigate to it [here](http://localhost:3000/).

We have included some things for you already! The entire web app is inside the `app` folder. The main HTML file is `index.html`, and it is what loads when you run `npm start`, and navigate to port 3000. We have imported jQuery for you already, and setup some initial lines to help you get data from our API.

Our API runs on the URL: `https://api.tnyu.org`. It is currently running on version 3, and so the base for the API we will be using is `https://api.tnyu.org/v3/`. Our API uses the [JSON API](http://jsonapi.org/) spec. So if you're interested in learning more about it then you can use their website as a resource.

Now we have to talk about resources. A resource is a predescribed format, and each resource can be seen as a class or a model. Examples of resources would be events, people, venues, teams, etc. We have a large amount of resources in our API, and you will be dealing with the events and the venues resource. You might not be allowed to get data from every single resource as some require API permissions. To access a particular resource you can navigate to `https://api.tnyu.org/v3/events`. Here replacing events with any other resource name would return some output.

If you navigate to the `/js/app.js` file in this tutorial you should see that we have provided you with a method that gets events from our API. Try and open this [URL](https://api.tnyu.org/v3/events) in your browser. If you don't have a JSON Viewer on your browser you can download one for [Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) or [Firefox](https://addons.mozilla.org/en-us/firefox/addon/jsonview/).

Now open [this](https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d) up in your browser. This is a sample event. We'll help you understand the structure below. If you use this Javascript function it will give you a single instance of an event.

```js
$.get( "https://api.tnyu.org/v3/events", function(data) {
    var events = data.data;
    console.log(events[0]);
});
```

A single event will look something like:

```json
{
    "id": "56c696e49a0f0429c502f14d",
    "type": "events",
    "attributes": {
        "title": "Tech@NYU After Hours #4 (Spring '16)",
        "level": "Beginner",
        "shortTitle": "After Hours #4",
        "description": "It's time to meet, mix and make.",
        "details": "It's time to meet, mix and make new products, friends and collegiate bonds. Also come with projects and an open mind. Pizza will be served! Make sure to RSVP!",
        "status": "announced",
        "endDateTime": "2016-03-03T01:00:00.000Z",
        "startDateTime": "2016-03-02T23:00:00.000Z",
        "modified": "2016-02-19T04:17:31.055Z",
        "created": "2016-02-19T04:15:31.519Z",
        "isInternal": false,
        "alternateRsvpUrls": ["http://rsvp.techatnyu.org/"],
        "aims": ["Learn New Skills"],
        "categories": ["socializing"],
        "bodyPlain": "It's time to meet, mix and make.\n\nIt's time to meet, mix and make new products, friends and collegiate bonds. Also come with projects and an open mind. Pizza will be served! Make sure to RSVP!\n\nAll Tech@NYU events are covered by a strict anti-harassment policy: http://techatnyu.org/anti-harassment",
        "body": "<p>It's time to meet, mix and make.</p>It's time to meet, mix and make new products, friends and collegiate bonds. Also come with projects and an open mind. Pizza will be served! Make sure to RSVP!<p>All Tech@NYU events are covered by a strict <a href=\"http://techatnyu.org/anti-harassment\">anti-harassment policy</a>.</p>"
    },
    "links": {
        "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d"
    },
    "relationships": {
        "venue": {
            "data": {
                "type": "venues",
                "id": "5538889821b6808dd493bede"
            },
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/venue",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/venue"
            }
        },
        "teams": {
            "data": [{
                "type": "teams",
                "id": "53f54dd98d1e62ff12539dc2"
            }],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/teams",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/teams"
            }
        },
        "coorganizers": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/coorganizers",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/coorganizers"
            }
        },
        "presenters": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/presenters",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/presenters"
            }
        },
        "attendees": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/attendees",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/attendees"
            }
        },
        "rsvps": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/rsvps",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/rsvps"
            }
        },
        "teaches": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/teaches",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/teaches"
            }
        },
        "addedBy": {
            "data": {
                "type": "people",
                "id": "5632592fd28b5c1c59dba8b9"
            },
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/addedBy",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/addedBy"
            }
        },
        "survey": {
            "data": null,
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/survey",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/survey"
            }
        },
        "feedback": {
            "data": [],
            "links": {
                "related": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/feedback",
                "self": "https://api.tnyu.org/v3/events/56c696e49a0f0429c502f14d/relationships/feedback"
            }
        }
    }
}
```

To access a particular property would would have to do:

```js
$.get("https://api.tnyu.org/v3/events", function(data) {
    var events = data.data;
    var singleEvent = events[0];
    console.log(singleEvent.attributes.title);
});
```

If you look at `/js/app.js` you're going to see that we used extra parameters `?include=venue`. Those basically include venue data as well. So there will be two keys inside the `data` object: `data` and `included`. Data is the core data for each event, and `included` is other resources that have been included. In this case we have included the `venues` resource. You should be able to get a single venue by going [here](https://api.tnyu.org/v3/venues/5538889821b6808dd493bede). Most events are associated with a particular venue. To get the venue ID of an event you can do:

```js
$.get("https://api.tnyu.org/v3/events?include=venue", function(data) {
    var events = data.data;
    var venues = data.included;

    var venueIdToVenue = {};
    venues.forEach(function(venue) {
        venueIdToVenue[venue['id']] = venue;
    });

    var singleEvent = events[0];
    console.log(singleEvent.relationships.venue.data.id);
    console.log(venueIdToVenue[singleEvent.relationships.venue.data.id]);
});
```

What we're doing here is that we have events data and venue data. Then we're using a hash map to map a venue ID key to a venue.

Okay great! So you have all the items now. **What we want you to do is to create a graph (of your choosing using a library of your choosing as well) that shows how many times each venue has been used. You can be creative about how to show this data.** Extra points for some cool data science stuff.

## Submit

To submit either create a **private** repository on Github with this code (extra points) and email it to us at **ycp217 at nyu.edu** OR zip up the app folder as `<lastname>_<firstname>.zip`, and email it to **ycp217 at nyu.edu**. 

If the repository is private on Github please add `ycp217` as a collaborator. You can create a free private repository using the Github Student Developer Pack.
