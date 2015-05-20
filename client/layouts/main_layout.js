if (Meteor.isClient) {

Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('profileEdit');
    }
});
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'Name',
        fieldLabel: 'Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'Address',
        fieldLabel: 'Address',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        validate: function(value, errorFunction){
          if (value != 'true') {
            errorFunction("You must accept the terms and conditions.");
            return false;
          } else {
            return true;
          }
        },
        saveToProfile: false
    }],
	passwordSignupFields: "USERNAME_AND_EMAIL",
});
accountsUIBootstrap3.setCustomSignupOptions = function() {
    return {
        referrerId: Session.get('referrerId') // Or whatever
    }
}
accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('indexPage');
}
Accounts.ui.config({
    forceEmailLowercase: true,
    forceUsernameLowercase: true,
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}