(function() {
    window.firebase = window.firebase || {};
    window.appvars = window.appvars || {};
    window.appvars.auth =  window.appvars.auth  || {};
    window.appvars.profile =  window.appvars.profile  || [];
    (function(firebase, authVar, profileVar) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (user != null) {
                    authVar.displayName = user.displayName;
                    authVar.email = user.email;
                    authVar.photoUrl = user.photoURL;
                    authVar.uid = user.uid;
                    user.providerData.forEach(function (profile) {
                        profileVar.push({
                            provider: profile.providerId,
                            providerUID: profile.uid,
                            name: profile.displayName,
                            email: profile.email,
                            photoUrl: profile.photoURL
                        });
                    });
                }
            } else {
                // No user is signed in.
            }
        });        
    })(window.firebase, window.appvars.auth, window.appvars.profile);
})();



var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});


var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});


var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});


var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});


var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});


var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}, function(error) {
  // An error happened.
});


var user = firebase.auth().currentUser;
var credential;

// Prompt the user to re-provide their sign-in credentials

user.reauthenticate(credential).then(function() {
  // User re-authenticated.
}, function(error) {
  // An error happened.
});


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});