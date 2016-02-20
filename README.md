# Tech@NYU Infrastructure team challenge

Hello! This is the Tech@NYU Infrastructure team challenge. If you're more interested in learning about the Infrastructure team - read our medium article [here](https://blog.techatnyu.org/tech-nyu-s-internal-infrastructure-team-868c365cd496#.1ssukbte0). We recommend that you do!

Through this challenge you will be making a web application! This will test your ability to write code! We will be testing your ability:

- to build front-end applications
- to build modularized code
- to interact with REST APIs and our API
- to make sense of data and be able to play with it

If you're familiar with REST APIs and have worked with frontend before -- this problem should not take you more than a couple hours. The idea behind the problem is that we want you to get data from our API, make sense of it, and make a simple visualization using the library of your choice.

## Getting Started

Clone this repository:

```
git clone git@github.com:TechAtNYU/infrastructure-interview.git
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

Our API runs on the URL: `https://api.tnyu.org`. It is currently running on version 3, and so the base for the API we will be using is `https://api.tnyu.org/v3/`. Our API uses the [JSON API](http://jsonapi.org/) spec. So if you're interested in learning more about it then you can use their library as a resource.

Now we have to talk about resources. A resource is a predescribed format, and each resource can be seen as a class or a model. Examples of resources would be events, people, venues, teams, etc. We have a large amount of resources in our API, and you will be dealing with the events and the venues resource. You might not be allowed to get data from every single resource as some require API permissions. To access a particular resource you can navigate to `https://api.tnyu.org/v3/events`. Here replacing events with any other resource name would return some output.

If you navigate to the `/js/app.js` file you should see that we have provided you with a method that gets events from our API. Try and open this [URL](https://api.tnyu.org/v3/events) in your browser. If you don't have a JSON Viewer on your browser you can download one for [Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) or [Firefox](https://addons.mozilla.org/en-us/firefox/addon/jsonview/).
