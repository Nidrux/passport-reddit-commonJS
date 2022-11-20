# Passport-Reddit-commonJS

This is a rework of the [original package](https://github.com/Slotos/passport-reddit) to use commonJS modules instead of ES6. All credits to them for making this strategy possible!
This fork is not activly maintained, but will recieve an update when I need to make changes for my own projects aswell.

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Reddit](http://reddit.com/) using the OAuth 2.0 API.

This module lets you authenticate using Reddit in your Node.js applications.
By plugging into Passport, Reddit authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-reddit-commonjs

## Usage

#### Configure Strategy

The Reddit authentication strategy authenticates users using a Reddit
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```javascript

const RedditStrategy = require("passport-reddit-commonjs").Strategy

passport.use(new RedditStrategy({
    clientID: REDDIT_CONSUMER_KEY,
    clientSecret: REDDIT_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/reddit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ redditId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'reddit'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/reddit', function(req, res, next){
  passport.authenticate('reddit', {
    duration: 'permanent',
  })(req, res, next);
});

app.get('/auth/reddit/callback', function(req, res, next){
  passport.authenticate('reddit', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next);
});
```

##### `duration` option on authenticate call

This strategy supports`duration` option on authenticate call, to request an indefinite authorization as opposed to 1 hour default.  
Possible values: `permanent` and `temporary` (1 hour).

Defined in the official [Reddit OAuth spec](https://github.com/reddit/reddit/wiki/OAuth2#authorization-parameters)

## Credits

  - [Original repo](https://github.com/Slotos/passport-reddit)
  - [Jared Hanson](http://github.com/jaredhanson)
  - [Dmytro Soltys](http://github.com/slotos)
  - [Brian Partridge](http://github.com/bpartridge83)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Original work Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

Modified work Copyright (c) 2013 Dmytro Soltys <[http://slotos.net/](http://slotos.net/)>

Modified work Copyright (c) 2013 Brian Partridge <[http://brianpartridge.com/](http://brianpartridge.com/)>
