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
      	this.render('offersList');
    },

  	findOptions: function() {
    	return { sort: {createdAt: -1}};
  	},

  	waitOn: function() {
    	return Meteor.subscribe('allOffers', this.findOptions());
  	},
  	data: function(){
    	return { offers: Offers.find({}, this.findOptions()) };
  	}
});

SinglePostController = BaseController.extend({
	show: function () {
      this.render('offerPage');
    },
	  
	waitOn: function(){
		return Meteor.subscribe('singleOffer', this.params._id);
	},

	data: function() {
		return Offers.findOne(this.params._id);
	}
});
}
