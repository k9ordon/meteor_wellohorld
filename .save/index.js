Messages = new Mongo.Collection('messages');

if(Meteor.isClient) {
        
    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_ONLY'
    });
}

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('Index', {data: {lol:5}});
});

Router.route('/messages', function() {
    this.render('messages', {});
});
