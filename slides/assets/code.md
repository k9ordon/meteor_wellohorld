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














## message app

Messages = new Mongo.Collection('messages');


<template name="addForm">
    <form>
        <input id="addMessage" placeholder="add your message">
    </form>
</template>

Template.addForm.events({
    'submit form': function(e) {
        e.preventDefault();
        Messages.insert({
            text: e.target[0].value,
            date: new Date()
        });
        e.target[0].value = '';
    }
});





<template name="messageList">
    <div class="ui comments">
        {{#each messages}}
            <div class="comment">
                <div class="metadata">
                    <span class="date">{{ date }}</span>
                </div>
                <div class="text">{{ text }}</div>
            </div>
        {{/each}}
    </div>
</template>

Template.messageList.helpers({
    messages: function() {
        return Messages
            .find({}, {limit:10, sort:{date:-1}});
    }
});













## routes

Router.configure({
    layoutTemplate: 'layout'
});

<template name="layout">
    <h1>1 simple message app</h1>

    {{> nav}}
    <div class="main ui container">
        {{> yield}}
    </div>
</template>




Router.route('/', function() {
    this.render('Index', {data: {lol:5}});
});

Router.route('/messages', function() {
    this.render('messages', {});
});




<template name="layout">
    <h1>1 simple message app</h1>

    {{> nav}}
    <div class="main ui container">
        {{> yield}}
    </div>
</template>












# user

user_id: Meteor.userId()

.map(function(message) {
    var user = Meteor.users.findOne({_id:message.user_id});

    message.username = user.username || user.profile.name;
    return message;
})

{{username}}




# moment
momentjs:moment
message.moment = moment(message.date).fromNow();












# oauth

https://developers.facebook.com/apps/511549112354683/
511549112354683
4e35e7d2a708cfa013cf335f11fafb95


https://developers.facebook.com/apps/511549019021359/
511549019021359
03dc0e5051fa42ec3e4bcd0fc5a2353d










# animation

timmyg:wow

if (Meteor.isClient) {
    Template.messages.rendered = function () {
        new WOW().init()
    };
}

wow flipInX










# methods

meteor remove insecure

Meteor.methods({
  addTask: function (text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  }
});


Meteor.call("addTask", text);



# publish subscribe

meteor remove autopublish

if (Meteor.isServer) {
  Meteor.publish("tasks", function () {
    return Tasks.find();
  });
}


Meteor.subscribe("tasks");










# markdown


.markdown-preview hr {
    height:70%;
    //background:rgba(255,255,255,0.5);
}

.markdown-preview h1, .markdown-preview[data-use-github-style] h1, .markdown-preview h2, .markdown-preview[data-use-github-style] h2, .markdown-preview h3, .markdown-preview[data-use-github-style] h3, .markdown-preview h4, .markdown-preview[data-use-github-style] h4, .markdown-preview h5, .markdown-preview[data-use-github-style] h5, .markdown-preview h6, .markdown-preview[data-use-github-style] h6 {
    font-weight: normal;
    border-color:transparent;
}
