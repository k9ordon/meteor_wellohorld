
***

![meteor.js](assets/meteor.jpg)

***

Klemens Gordon

- @thisisgordon
- working at karriere.at
- loves se javascript

***

## what is meteor.js

- fullstack javascript app framework 💪
- rapid prototyping (insecure first)
- realtime default
- awesome dev experience (cli)

***



## what is inside

- pure javascript 😻😻😍
- [good documentation](http://docs.meteor.com/#/full/)
- [ddp](https://www.meteor.com/ddp) "rest for websockets"
- mongodb [livequery](https://www.meteor.com/livequery)
- painless mobile builds
- [blaze](https://www.meteor.com/blaze) - reactive template rendering
- [atmosphere](http://atmospherejs.com)
- core [supports](http://stackoverflow.com/questions/10127211/what-web-browsers-are-supported-by-meteor-web-framework) ie6+


***

## architecture

![](assets/meteor-platform.png)

***

## install

- ```$ curl https://install.meteor.com/ | sh```
- then we haz `$ meteor`

> thats all - all you need is meteor

***

## create & run 🏃

- `$ meteor create leproject`
- `$ meteor`

=>

- nodejs server [client](http://localhost:3000)
- mongodb
- hot code push

***

## app structure

- `/client`
- `/server`
- `/public`
- `/private`
- `lib`

`if(Meteor.isClient)` `if(Meteor.isServer)` `if(Meteor.isCordova)`

[docs.meteor.com](http://docs.meteor.com/#/full/structuringyourapp)

***

## load order

- deepest
- `lib`
- by filename
- `main.*` last

[docs.meteor.com](http://docs.meteor.com/#/full/fileloadorder)

***

## views

- [blaze](https://www.meteor.com/blaze) engine
- [spacebars](https://atmospherejs.com/meteor/spacebars) template language
- simple - no logic in templates
- compile to js

***

## 👉 ui interaction

- helpers
- events

***

## less

`$ meteor add less`

- sourcemap support
- watcher

coffeescript, sass, ...

***

## deploy 😳

`$ meteor deploy yoloyolo1`

(soon) meteor in the [galaxy](http://techcrunch.com/2015/05/19/meteor-raises-20m-to-build-the-one-javascript-stack-to-rule-them-all/#.ii0ymm:uQ6F)

***

## ios

- `$ meteor add-platform ios`
- `$ meteor run ios`
- `$ meteor run ios-device`

xcode nd stuff: ["running on mobile"](https://www.meteor.com/tutorials/blaze/running-on-mobile)

***

## collections

`Yo = new Mongo.Collection('yos');`

- `insert`,`update`&`remove` from client & server
- [optimistic ui](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation) with minimongo
- autopublish & insecure default

***


## security

> Q: how to make meteor secure?

> A: remove the insecure package

- publish & subscribe
- methods
- allow/deny

***

## message app

- add form
- messages list

***

## mvc with:  [iron:router](https://github.com/iron-meteor/iron-router) ✨

`$ meteor add iron:router`

```js
Router.route('/', function () {
  this.render('Home', {data: {title: 'My Title'}});
});
```

***

## users accounts

`$ meteor add accounts-ui accounts-password`

- fast way: `{{> loginButtons}}`
- {{#if currentUser}}


***

## user relation

#### add message

`user_id: Meteor.userId()`

#### get message

`msgs.map => msg.user = Meteor.users.findOne({_id: msg.user_id})`

***

## oauth 😱

`$ meteor add accounts-facebook`

- Meteor.loginWithFacebook()

***

## seo ... 😡

`$ meteor add spiderable`
> uses the [AJAX Crawling](https://developers.google.com/webmasters/ajax-crawling/docs/learn-more) specification published by Google to serve HTML to compatible spiders (Google, Bing, Yandex, and more).

=> `?_escaped_fragment_=`

***

## made with meteor

[jssolutionsdev.com Meteor examples](http://www.jssolutionsdev.com/blog/Meteor-Apps-Source-Example/?utm_campaign=answers&utm_medium=community&utm_source=quora)

[Which-startups-use-Meteor-in-production](http://www.quora.com/Which-startups-use-Meteor-in-production)

- http://blonk.co
- http://www.telescopeapp.org/
- https://workpop.com/




***


# the end

# 🚬

***
