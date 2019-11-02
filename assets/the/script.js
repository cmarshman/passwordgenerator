var userChoice = "";
var number = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var howMany = parseInt(prompt("How many characters would you like in your password?"));

// if user selects 1-7 the receive noting back, if user selects 8-128 the user gets the ammount of characters they have selected
if (howMany >= 8 && howMany <=128) {
    
    var num = confirm("Would you like to include numbers in your password");
    if (num === true){
        userChoice += number;
    }
    console.log(userChoice)

    var spec = confirm("Would you like to include special characters in your password");
    if (spec === true){
        userChoice += special;
    }
    console.log(userChoice)

    var upper = confirm("Would you like to include upper case letters in your password");
    if (upper === true){
        userChoice += upperCase;
    }
    console.log(userChoice)

    var lower = confirm("Would you like to include lower case letters in your password");
    if (lower === true){
        userChoice += lowerCase;
    }
    console.log(userChoice)
}

else {
    confirm("Please enter numbers between 8 and 128.")
    document.location.reload()
}

function generate() {
    var answer = "";
    for (i = 1; i < howMany; i++) {
        answer = answer + userChoice.charAt(Math.floor(Math.random() * Math.floor(userChoice.length - 1)))
    }
    console.log(answer)
    document.getElementById("yourpassword").value = answer;
    
}

function copyPassword() {
    document.getElementById("yourpassword").select();
    document.execCommand("Copy");
    alert("Password is coppied to clipboard");
}


