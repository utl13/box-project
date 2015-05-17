Meteor.methods({
  submitKeeper: function(keeper) {
    
    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first!');

    var additionalParams = {
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(keeper, additionalParams);
    keeper._id = Keepers.insert(keeper);

    return keeper;
  }
});
