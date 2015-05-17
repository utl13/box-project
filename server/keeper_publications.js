if (Meteor.isServer) {
	Meteor.publish('allKeepers', function(){
		return Keepers.find();
	});

	Meteor.publish('singleKeeper', function(id){
    	return Keepers.find(id);
	});
}