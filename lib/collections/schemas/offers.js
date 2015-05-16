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
  identCheck: {
    type: String,
    optional: false,
    label: 'Identification check',
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
    label: 'Choose keeper'
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
  },
  createdAt: {
    type: Date,
    optional: true,
    autoform: {
      omit: true
    }
  }
};

OfferSchema = new SimpleSchema(offerFields);
