angular.module('ezr.services', [])

.service('authService', [function () {
    var authService = {};

    function _updateUserProfile(profileObj) {
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.updateProfile(profileObj).then(function () {
                // Update successful.
            }, function (error) {
                // An error happened.
            });
        }
    }

    function _updateUserEmail(email) {
        var user = firebase.auth().currentUser;
        user.updateEmail(email).then(function () {
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

    function _updatePassword(newPassword) {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(function () {
            // Update successful.
        }, function (error) {
            // An error happened.
        });
    }

    function _sendPasswordResetMail(emailAddress) {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
        }, function (error) {
            // An error happened.
        });
    }

    function _reauthenticateUser(credential) {
        var user = firebase.auth().currentUser;
        user.reauthenticate(credential).then(function () {
            // User re-authenticated.
        }, function (error) {
            // An error happened.
        });
    }

    function _createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    function _signInUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    function _signOut() {
        firebase.auth().signOut().then(function () {
        }, function (error) {
        });
    }

    function _googleSignIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        return firebase.auth().getRedirectResult().then(function (result) {
            return result;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    function _facebookSignIn() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        return firebase.auth().getRedirectResult().then(function (result) {
            return result;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }


    authService.create = _createUser;
    authService.reauth = _reauthenticateUser;
    authService.resetPassword = _sendPasswordResetMail;
    authService.updatePassword = _updatePassword;
    authService.verifyMail = _sendVerificationMail;
    authService.updateEmail = _updateUserEmail;
    authService.updateProfile = _updateUserProfile;
    authService.signIn = _signInUser;
    authService.signOut = _signOut;
    authService.googleSignIn = _googleSignIn;
    authService.facebookSignIn = _facebookSignIn;

    return authService;
}]);