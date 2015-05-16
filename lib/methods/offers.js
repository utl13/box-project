Meteor.methods({
  submitOffer: function(offer) {
    
    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first!');

    var additionalParams = {
      author: 'Author',
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(offer, additionalParams);
    offer._id = Offers.insert(offer);

    return offer;
  }
});
