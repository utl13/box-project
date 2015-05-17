Router.configure({
	layoutTemplate: 'mainLayout',
 	loadingTemplate: 'loading',
  	notFoundTemplate: 'notFound',
  	menuUserTemplate: 'menuUser'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

// Routes for offers
Router.route('/new_offer', {
  name: 'newOffer'
});

Router.route('/offers', {
  name: 'allOffers',
  controller: 'AllOffersController'
});

Router.route('/offer/:_id', {
  name: 'singleOffer',
  controller: 'SingleOfferController'
});

// Routes for keepers
Router.route('/new_keeper', {
  name: 'newKeeper'
});

Router.route('/keepers', {
  name: 'allKeepers',
  controller: 'AllKeepersController'
});

Router.route('/keeper/:_id', {
  name: 'singleKeeper',
  controller: 'SingleKeeperController'
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
	}, {only: ['newOffer', 'newKeeper', 'root', 'allOffers', 'allKeepers']});
}
