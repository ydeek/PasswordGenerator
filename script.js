// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  //create the user prompt for selecting password length and type of character
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button

//generate random password 
function generatePassword() {
  //passLength is length of password as given by user. I need to validate its value is between 8 and 128
  var randomPassword = "";
  var randomcharacter = "";
  var arrayofUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arrayofLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var arrayofNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var arrayofsepecialcharcters = ["!", "#", "$", "%", "&", "'", "()", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\""];
  
  var passLength = parseInt(prompt("How long would you like your pass word to be? The password has to be equal or greater than 8 and equal or less than 128 characters."));
  var randomPassword = "";
  if (passLength >= 8 & passLength <= 128 & (isUpperCase !== 0 || isLowerCase !== 0 || isNumeric !== 0 || isSpecial !== 0)) {
    //executed when length is acceptable. This is where I actually generate the password
    
    // while (passLength < 8 || passLength > 128 || typeof (passLength) != "number" || passLength === NaN || passwordLength === null) {
    //   alert("Please choose a number that is more than 8 and less than 128 characters");
    //   passLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
    // }
    var isLowerCase = confirm ("do you want lower case?");
    var isUpperCase = confirm ("do you want upper case?");
    var isNumeric = confirm ("do you want to add numbers?");
    var isSpecial = confirm ("do you want to add any special charchters?")
    
    
    //first figure out which of the 4 array types we are able to pick elements from
    //Take the acceptable arrays and combine them into one array
    var combinedArray = [];
    if (isUpperCase !== false ) {
      combinedArray = combinedArray.concat(arrayofUppercase);
    }
    if (isLowerCase !==false) {
      combinedArray = combinedArray.concat(arrayofLowercase);
    }
    if (isNumeric !==false) {
      combinedArray = combinedArray.concat(arrayofNumbers);
    }
    if (isSpecial !==false) {
      combinedArray = combinedArray.concat(arrayofspecialcharacters);
    }
    for (i = 0; i < passLength - 1; i++) {
      
      //Pick a random element from that combined array
      var randomIndex = Math.floor(Math.random() * (combinedArray.length) + 1); //generate random position within combinedArray
      var randomcharacter = combinedArray[randomIndex]; //generate random character from combinedArray
      randomPassword = randomPassword + randomcharacter;
    }
    return randomPassword;
  }
  else { alert("The length you entered is not between 8 and 128 please try again");}
  
  // } 
  // else {
  //   //bad situations. There's three posssible bad situations (ex: passLength=200 and user chose 1 character type)
  //   if (passLength<8 || passLength>128 & (isUpperCase!==0||isLoweCase!==0||isNumeric!==0||isSpecial!==0)){
  //     //executed when user gives bad length (less than 8 or greater than 128) and chooses at least one type of character
  //     alert("The length you entered is not between 8 and 128 please try again");}
  //     elseif(passLength >=8 & passLength<=128 & (isUpperCase==0&isLoweCase==0&isNumeric==0&isSpecial==0)){
  //       //executed when user gives good length but chooses no type of character
  //       alert("You did not choose any type of character for your password")
  //     }
  //     elseif(passLength <8 || passLength>128 &(isUpperCase==0&isLoweCase==0&isNumeric==0&isSpecial==0)){
  //       //executed when user gives bad length and chooses no type of characters
  //       alert("You didn't choose the right length nor any type of charchter")
  //     }
  
  //   }
  
  
}

generateBtn.addEventListener("click", writePassword);
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}


// (passLength>=8 & passLength<=128 & (isUpperCase!==0||isLoweCase!==0||isNumeric!==0||isSpecial!==0) )
