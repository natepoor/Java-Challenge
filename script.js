//script.js
// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Function to generate password 
function generatePassword() {

  // Password length 
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Use if to validate password length 
  if (isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number");
    return "";
  } else if (passwordLength < 8) {
    alert("Password length must be at least 8 characters.");
    return "";
  } else if (passwordLength > 128) {
    alert("Password length must be at most 128 characters.");
  }

  
  // lower case characters
  var includeLowercase = confirm("Include lowercase charcters?");
  
  // Upper case characters
  var IncludeUppercase = confirm("Include uppercase characters?");

  // Numeric characters
  var IncludeNumbers = confirm("Include numeric characters?");

  // Special characters
  var IncludeSpecialChars = confirm("Include special characters?");
 
  if (!includeLowercase && !IncludeUppercase && !IncludeNumbers && !IncludeSpecialChars) {
    alert("You must select at least one character type.");
    return "";
  }

// Return placeholder password
  return "GeneratedPassword123!";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
