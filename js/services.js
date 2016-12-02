angular.module('ezr.services', [])

.service('authService', [function () {
    var authService = {};

    function _updateUserProfile() {
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.updateProfile({
                displayName: "Jane Q. User",
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(function () {
                // Update successful.
            }, function (error) {
                // An error happened.
            });
        }
    }

    function _updateUserEmail() {
        var user = firebase.auth().currentUser;
        user.updateEmail("user@example.com").then(function () {
            // Update successful.
        }, function (error) {
            // An error happened.
        });
    }

    function _sendVerificationMail() {


        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
        }, function (error) {
            // An error happened.
        });


    }

    function _updatePassword() {

        var user = firebase.auth().currentUser;
        var newPassword = getASecureRandomPassword();

        user.updatePassword(newPassword).then(function () {
            // Update successful.
        }, function (error) {
            // An error happened.
        });
    }

    function _sendPasswordResetMail() {
        var auth = firebase.auth();
        var emailAddress = "user@example.com";

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
        }, function (error) {
            // An error happened.
        });
    }

    function _reauthenticateUser() {
        var user = firebase.auth().currentUser;
        var credential;

        // Prompt the user to re-provide their sign-in credentials

        user.reauthenticate(credential).then(function () {
            // User re-authenticated.
        }, function (error) {
            // An error happened.
        });


    }

    function _createUser() {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

}]);