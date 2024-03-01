// scripts.js

document.addEventListener("DOMContentLoaded", function() {
   // Get references to the input fields and button
   var usernameInput = document.getElementById("user");
   var passwordInput = document.querySelector("#password input");
   var signInButton = document.querySelector("#submit button");

   // Add an event listener to the button
   signInButton.addEventListener("click", function() {
       // Get the values from the input fields
       var username = usernameInput.value;
       var password = passwordInput.value;

       // Perform your authentication logic here
       // For demonstration purposes, we'll check if the password is "12345678"
       if (password === "12345678") {
           // Redirect to Google.com
           window.location.href = "C:\\Users\\sashr\\OneDrive\\Desktop\\devlopment\\web devlopment\\front end\\4. project-gaming\\project_rps\\index.html";
       } else {
           // If the password is incorrect, log the values to the console (you can replace this with your actual authentication logic)
           alert("Incorrect Username or Password");
       }

       // Reset the input fields to their original state
       usernameInput.value = "";
       passwordInput.value = "";
   });
});
