if(Meteor.isClient) {
    Template.messageList.helpers({
        messages: function() {
            return Messages
                .find({}, {limit:10, sort:{date:-1}})
                .map(function(message) {
                    message.email = Meteor.users.findOne({_id:message.user_id}).emails[0].address;
                    return message;
                });
        }
    });
}
