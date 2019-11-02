var userChoice = "";
var number = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var howMany = parseInt(prompt("How many characters would you like in your password?"));

// if user selects 1-7 the receive noting back, if user selects 8-128 the user gets the ammount of characters they have selected
if (howMany >= 8 && howMany <=128) {
    
    var number = confirm("Would you like to include numbers in your password");
    if (number === true){
        userChoice += number 
    }
    console.log(userChoice)

    var special = confirm("Would you like to include special characters in your password");
    if (special === true){
        userChoice += special
    }
    console.log(userChoice)

    var upperCase = confirm("Would you like to include upper case letters in your password");
    if (upperCase === true){
        userChoice += upperCase
    }
    console.log(userChoice)

    var lowerCase = confirm("Would you like to include lower case letters in your password");
    if (lowerCase === true){
        userChoices += lowercase
    }
    console.log(userChoice)
}