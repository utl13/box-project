if (Meteor.isClient) {
	AutoForm.hooks({
	  submitPostForm: {
	    onSuccess: function(operation, offer) {
	      Router.go('singleOffer', offer);
	    }
	  }
	});
}
