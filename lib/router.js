Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  menuTempalte: 'Menu',
  menuUserTemplate: 'MenuUser'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/new_offer', {
  name: 'newOffer',
  controller: 'BaseController'
});

Router.route('/:_id', {
  name: 'singleOffer',
  controller: 'SingleOfferController',
  action: 'show'
});

if (Meteor.isClient) 
{
	Router.onBeforeAction(function() {
	  if (!Meteor.user()) {
	    if (Meteor.loggingIn()) {
	      this.render(this.loadingTemplate);
	    } else {
	      this.render('accessDenied');
	    }
	  } else {
	    this.next();
	  }
	}, {only: 'newOffer'});
}