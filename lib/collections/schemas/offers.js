var offerFields = {
  title: {
    type: String,
    label: 'Title'
  },
  type: {
    type: String,
    label: 'Type/Category',
    optional: true
  },
  maxTime: {
    type: String,
    optional: true,
    label: 'Maximum time to borrow'
  },
  qrCode: {
    type: String,
    optional: true,
    label: 'QR code'
  }, 
  keeper: {
    type: String,
    optional: true,
    label: 'Choose keeper',
    autoform: {
      type: "select",
      options: function () {
        Meteor.subscribe('allKeepers');
        return Keepers.find().map(function (c) {
          return {label: c.title, value: c._id};
        });
      }
    }
  },
  _id: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  userId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  pictures: {
    type: String,
    optional: true,
    label: 'Pictures',
    autoform: {
      afFieldInput: {
        type: "image"
      }
    }
  },
  createdAt: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    }
  },
  type: {
    type: Boolean,
    defaultValue: false,
    label: "Identification check?"
  },
};

OfferSchema = new SimpleSchema(offerFields);
