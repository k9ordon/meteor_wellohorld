Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/messages', function () {
  this.render('Messages');
});
