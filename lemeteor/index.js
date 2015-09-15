Messages = new Mongo.Collection('messages');

Router.configure({
    layoutTemplate: 'layout'
})

Router.route('/', function() {
    this.render('Index', {data: {lol:5}});
});

Router.route('/messages', function() {
    this.render('messages', {});
});
