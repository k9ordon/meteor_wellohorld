if(Meteor.isClient) {
    Template.messageList.helpers({
        messages: function() {
            return Messages.find({}, {limit:10, sort:{date:-1}});
        }
    });
}
