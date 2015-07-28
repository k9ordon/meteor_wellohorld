Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.history.helpers({
    messages: function () {
      return Messages.find({}, {limit: 2, sort: {date: -1}}).map(function(message) {
          message.user = Meteor.users.findOne({_id: message.user_id});
          return message;
      });
    }
  });


  Template.addform.events({
    'submit form': function (e) {
        e.preventDefault();
        Messages.insert({
            text: $('input').val(),
            user_id: Meteor.userId(),
            date: new Date(),
        });
        $('input').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
