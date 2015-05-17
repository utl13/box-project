if (Meteor.isClient)
{
BaseController = RouteController.extend({
	layoutTemplate: 'mainLayout',

	onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },
    
	action: function () {
  		console.log('this should be overridden!');
	}
});

MainPageController = BaseController.extend({
  	action: function () {
      	this.render('indexPage');
    }
});
}
