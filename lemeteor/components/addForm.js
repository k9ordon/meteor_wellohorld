if(Meteor.isClient) {
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
}
