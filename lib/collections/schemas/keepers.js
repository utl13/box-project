var keeperFields = {
	title: {
    	type: String,
    	label: 'Title'
  	},
	address: {
  	type: String,
    optional: false,
  	label: 'Address'
	},
  freeTimes: {
  	type: String,
    optional: true,
  	label: 'Free times'
	},
	timesToExchange: {
  	type: String,
    optional: true,
  	label: 'Times to exchange'
	},
	price: {
  	type: Number,
    optional: true,
  	label: 'Price per item(or by size|kg)'
	},
	sizeWeight: {
  	type: String,
    optional: true,
  	label: 'Max item size and weight'
	},
	keepingTime: {
  	type: String,
    optional: true,
  	label: 'Max keeping time'
	},
	createdAt: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    },   
	},
	userId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
	},  
  type: {
    type: Boolean,
    defaultValue: false,
    label: "Private keeper?"
  },
}

KeeperSchema = new SimpleSchema(keeperFields);
