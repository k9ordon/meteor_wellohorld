if(Meteor.isClient) {
    Template.messageList.helpers({
        messages: function() {
            return Messages
                .find({}, {limit:10, sort:{date:-1}})
                .map(function(message) {
                    message.user = Meteor.users.findOne({_id:message.user_id});
                    return message;
                });
        }
    });
}
