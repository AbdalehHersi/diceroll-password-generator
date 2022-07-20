  //  notes

// generate random criteria using functions e.g random numbers and random letters
// link function to button so onclick prompt is displayed
// store user password length in a variable
// set limits on the password length
// recieve and store values from user criteria into variables
// fill out generatePassword function
// create an array to be called inside the generate function
// filter out the false values from the array
// create a random string from the true criteria
// make the result the same length as passwordLength
// return the result

// Assignment Code
//  global variables
var generateBtn = document.querySelector("#generate");
var lowercaseUser = false;
var symbolUser = false;
var numberUser = false;
var uppercaseUser = false;
var passwordLength;


function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97); //Random lowercase letter using charset
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65); //random uppercase from charset
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10) + 48); // random number from charset
}

function getRandomSymbol() {
  const symbols = '~`! @#$%^&*()_-+={[}]';
  return symbols[Math.floor(Math.random()*symbols.length)]; // random symbol from array
}



var randomFunction = [];

// Write password to the #password input
function writePassword() {
  userInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // same thing as document.getElementById connects it to the password ID
  passwordText.value = password;
}

function generatePassword(){
  var result = "";
  var pCriteria = uppercaseUser + lowercaseUser + numberUser + symbolUser;
  
  console.log("password criteria ", pCriteria);

  if (pCriteria === 0){
    return alert("You need to choose at least one");
  }
  console.log(randomFunction);

  if (uppercaseUser === true) {
    randomFunction.push(getRandomUpper);
  }
  if (lowercaseUser === true) {
    randomFunction.push(getRandomLower);
  }
  if (symbolUser === true) {
    randomFunction.push(getRandomSymbol);
  }
  if (numberUser === true) {
    randomFunction.push(getRandomUpper);
  }

  for(var i = 0; i < passwordLength; i++ ) {
    result += randomFunction[Math.floor(Math.random() * randomFunction.length)]();
  }

  
  console.log(randomFunction);
  
  console.log(uppercaseUser, lowercaseUser, numberUser, symbolUser);
   return result;
}


function userInput() {  
  passwordLength = prompt("How long do you want your password to be? (Minimum of 8 characters. Maximum of 128 characters)")
    // user inputs a password less than 8 e.g 2
  if ((passwordLength < 8)){
    alert("Your password needs to be at least 8 characters");
    return;
    // user inputs a password more than 128 e.g 1000
  } else if ((passwordLength > 128)){
    alert("Your password needs to be more than 128 characters");
    return;
    // user puts a password that isn't more than 8 and less than 128 
  } else if (!(passwordLength > 8)  &&  !(passwordLength < 128)){
    alert("Invalid input");
    return;
  }


    // user confirm windows gathering true or false information

  if (confirm("Would you like uppercase characters in your password?")){  // automatically returns a boolean value
    uppercaseUser = true; // changes the boolean value depending on the user answer
  }
  if (confirm("Would you like lowercase characters in your password?")){
    lowercaseUser = true;
  }
  if (confirm("Would you like numbers in your password?")){
    numberUser = true;
  }
  if (confirm("Would you like symbols in your password?")){
    symbolUser = true;
  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // pass a reference, not call the actual function
