if (Meteor.isClient) 
{
AllOffersController = BaseController.extend({
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

SingleOfferController = BaseController.extend({
	action: function () {
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
