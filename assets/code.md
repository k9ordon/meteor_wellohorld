mongodb
127.0.0.1:3001








## helper & events

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
        return 2;
    }
  });

  Template.hello.events({
    'click button': function () {
        alert('yo');
    }
  });
}














## read insert

<template name="addform">
    <form>
        <input id="text"><button>go</button>
    </form>
</template>



Messages = new Mongo.Collection('messages');

Template.addform.events({
  'submit form': function (e) {
      e.preventDefault();
      Messages.insert({text: 'yolo'});
  }
});



Template.addform.events({
  'submit form': function (e) {
      e.preventDefault();
      Messages.insert({
          data: new Date(),
          text: $('input').val()
      });
      $('input').val('');
  }
});




<template name="history">
    History:
    {{#each messages}}
        <li>{{text}}</li>
    {{/each}}
</template>

Template.history.helpers({
  messages: function () {
    return Messages.find({});
  }
});

Messages.find({}, {limit: 2, sort: {date: -1}})













## routes


Router.route('/', function () {
  this.render('Home');
});

Router.route('/messages', function () {
  this.render('Messages');
});

<template name="messages">
      {{> history}}
      {{> addform}}
</template>



<template name="layout">
  <header>
    <h1>yo</h1>
    <a href="/">yolo</a>
    <a href="/messages">messages</a>
  </header>
  <div>
    {{> yield}}
    </div>
</template>

Router.configure({
  layoutTemplate: 'layout'
});












# map

messages: function () {
  return Messages.find({}).map(function(message) {
      message.user = Meteor.users.findOne({_id: message.user_id});
      return message;
  });
}















# oauth

https://developers.facebook.com/apps/888486161228394/dashboard/
888486161228394
46fa76e2e980a0c11493528eb68145a0











# animation

timmyg:wow

if (Meteor.isClient) {
    Template.messages.rendered = function () {
        new WOW().init()
    };
}

wow flipInX







.markdown-preview hr {
    height:70%;
    //background:rgba(255,255,255,0.5);
}

.markdown-preview h1, .markdown-preview[data-use-github-style] h1, .markdown-preview h2, .markdown-preview[data-use-github-style] h2, .markdown-preview h3, .markdown-preview[data-use-github-style] h3, .markdown-preview h4, .markdown-preview[data-use-github-style] h4, .markdown-preview h5, .markdown-preview[data-use-github-style] h5, .markdown-preview h6, .markdown-preview[data-use-github-style] h6 {
    font-weight: normal;
    border-color:transparent;
}
