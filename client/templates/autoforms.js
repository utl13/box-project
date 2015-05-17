if (Meteor.isClient) {
	AutoForm.hooks({
	  submitOfferForm: {
	    onSuccess: function(operation, offer) {
	      Router.go('singleOffer', offer);
	    }
	  },
	  submitKeeperForm: {
	    onSuccess: function(operation, keeper) {
	      Router.go('singleKeeper', keeper);
	    }
	  }
	});
}
