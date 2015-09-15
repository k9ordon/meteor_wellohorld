if(Meteor.isClient) {
    Template.messageList.helpers({
        messages: function() {
            return Messages
                .find({}, {limit:10, sort:{date:-1}})
                .map(function(message) {
                    var user = Meteor.users.findOne({_id:message.user_id});

                    message.username = user.username || user.profile.name;
                    message.moment = moment(message.date).fromNow();
                    return message;
                });
        }
    });
}
