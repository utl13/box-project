Offers = new Mongo.Collection('offers');
Offers.attachSchema(OfferSchema);

Offers.initEasySearch('title', {
       'use' : 'mongo-db'
});

Keepers = new Mongo.Collection('keepers');
Keepers.attachSchema(KeeperSchema);
