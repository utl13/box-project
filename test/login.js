// if (Meteor.isClient) 
// {
//   Template.SignUp.events({
//     'submit #signUpForm': function(e, t) {
//       e.preventDefault();

//       var signUpForm = $(e.currentTarget),
//           email = trimInput(signUpForm.find('#signUpEmail').val().toLowerCase()),
//           password = signUpForm.find('#signUpPassword').val(),
//           passwordConfirm = signUpForm.find('#signUpPasswordConfirm').val();

//       if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {

//         Accounts.createUser({email: email, password: password}, function(err) {
//           if (err) {
//             if (err.message === 'Email already exists. [403]') {
//               console.log('We are sorry but this email is already used.');
//             } else {
//               console.log('We are sorry but something went wrong.');
//             }
//           } else {
//             console.log('Congrats new Box user, you\'re in!');
//             Router.onBeforeAction(function () {
//                 if (!Meteor.user() && !Meteor.loggingIn()) {
//                     this.redirect('/signin');
//                 } else {
//                     // required by Iron to process the route handler
//                     this.next();
//                 }
//             }, {
//                 except: ['SignIn']
//             });
//           }
//         });

//       }
//       return false;
//     },
//   });

//   Template.SignIn.events({
//     'submit #signInForm': function(e, t) {
//       e.preventDefault();

//       var signInForm = $(e.currentTarget),
//             email = trimInput(signInForm.find('.email').val().toLowerCase()),
//             password = signInForm.find('.password').val();

//       if (isNotEmpty(email) && isEmail(email) && isNotEmpty(password) && isValidPassword(password)) {

//         Meteor.loginWithPassword(email, password, function(err) {
//           if (err) {
//             console.log('These credentials are not valid.');
//           } 
//           else {
//             console.log('Welcome to Box!');
//             Router.onBeforeAction(function () {
//                 if (!Meteor.user() && !Meteor.loggingIn()) {
//                     this.redirect('/signin');
//                 } else {
//                     // required by Iron to process the route handler
//                     this.next();
//                     Router.to('/new-user');
//                 }
//             }, {
//                 except: ['SignIn']
//             });
//           }
//         });

//       }
//       return false;
//     },
//   });

//   Template.SignOut.events({
//   'click #signOut': function(e, t) {

//     Meteor.logout(function() {
//       console.log('Bye! Come back whenever you want!');
//     });

//     return false;
//   }
//   });

// }
