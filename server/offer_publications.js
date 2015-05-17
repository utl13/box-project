if (Meteor.isServer) {
  Meteor.publish('allOffers', function(){
    return Offers.find();
//    return Offers.find({ userId: this.userId }); // for current user
  });

  Meteor.publish('singleOffer', function(id){
    return Offers.find(id);
  });
}
