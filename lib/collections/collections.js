Offers = new Mongo.Collection('offers');
Offers.attachSchema(OfferSchema);

Keepers = new Mongo.Collection('keepers');
Keepers.attachSchema(KeeperSchema);
