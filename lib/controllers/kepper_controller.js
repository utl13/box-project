if (Meteor.isClient) 
{
AllKeepersController = BaseController.extend({
  	action: function () {
      	this.render('keepersList');
    },

  	findOptions: function() {
    	return { sort: {createdAt: -1}};
  	},

  	waitOn: function() {
    	return Meteor.subscribe('allKeepers', this.findOptions());
  	},
  	data: function(){
    	return { keepers: Keepers.find({}, this.findOptions()) };
  	}
});

SingleKeeperController = BaseController.extend({
	action: function () {
      	this.render('keeperPage');
  },
  
	waitOn: function(){
		return Meteor.subscribe('singleKeeper', this.params._id);
	},

	data: function() {
		return Keepers.findOne(this.params._id);
	}
});
}
