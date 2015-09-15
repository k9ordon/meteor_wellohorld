if(Meteor.isClient) {
    Template.messageList.helpers({
        messages: function() {
            return Messages.find({});
        }
    });
}
