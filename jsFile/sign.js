// Get references to the email and password inputs, and the sign in and sign up buttons
var email = document.getElementById("email");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
// var signUpButton = document.getElementById("signUpButton");
console.log(email, password, signInButton, signUpButton);
// Add event listeners to the sign in and sign up buttons
signInButton.addEventListener("click", function() {
  // Sign in the user using Firebase's signInWithEmailAndPassword method
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/protected-resources.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});

signUpButton.addEventListener("click", function() {
  // Sign up the user using Firebase's createUserWithEmailAndPassword method
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/protected-resources.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});