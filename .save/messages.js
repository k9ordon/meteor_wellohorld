if (Meteor.isClient) {
    Template.messages.rendered = function () {
        new WOW().init()
    };
}
