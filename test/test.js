if (Meteor.isClient)
{
	Template.Test.helpers({		

	values:	function () {
		Meteor.subscribe('allKeepers');
		var myArray = Keepers.find().fetch();
		var distinctArray = _.uniq(myArray, false, function(d) {return [d.title, d._id]});
    	return distinctArray
  	} 
  	
	});
}
