if (Meteor.isServer) {
  Meteor.publish('allOffers', function(){
    return Offers.find();
  });

  Meteor.publish('singleOffer', function(id){
    return Offers.find(id);
  });
}
