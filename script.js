// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //These are the arrays I used, representing all the possibilities in a password.
  const low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const specChar = ['!','@','#','$','%','^','&','*'];

  const arrayLow = low.values();
  const arrayCaps = caps.values();
  const arraySpecChar = specChar.values();

  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let mixedArray = [];
  let mixedAllTypes = [];
  const password4 = mixedArray.values();

  //Function to help generate a password
  function generatePassword(random) {
    for (let i = 0; i < 26; i++) {
      let num = Math.floor(Math.random() * 8) + 1
      mixedArray.push(num);
    }
  }
  
  //Function to grab a random lower case letter.
  function generateLow(random) {
    for (const value of arrayLow) {
      const value = random[Math.floor(Math.random() * random.length)];
      mixedArray.push(value);
    }
    //Function to grab a random upper case letter.
    function generateCaps(random) {
      for (const value of arrayCaps) {
        const value = random[Math.floor(Math.random() * random.length)];
        mixedArray.push(value);
      }
     //Function to grab a random special character 
    function generateSpec(random) {
      for (const value of arraySpecChar) {
        const value = random[Math.floor(Math.random() * random.length)];
        mixedArray.push(value);
      }
    }  
    //Function to create the amount of characters needed for password
    function createArray(random) {
      for (const value of password4) {
        const value = random[Math.floor(Math.random() * random.length)];
        mixedAllTypes.push(value);
        window.passwithsemicolon = mixedAllTypes.slice(0, howManyNums)
      }
    }
    }
  }

}
//These are the questions that the user is asked
alert('Welcome to the Hooper Inc. Password Generator')
let caps = confirm('Will your password contain upper case letters?')
let low = confirm('Will your password contain lower case letters?')
let specChar = confirm('Will your password contain special characters?')
let numbers = confirm('Will your password contain numbers?')
let howManyNums = prompt('How many characters would you like your password to be?')
while (howManyNums > 128 || howManyNums < 7) {
  howManyNos = prompt('You must enter a number greater than 7 and less than 128.')
}
//One last question that the user is asked before proceeding to password
let letsGo = confirm("Ready?  Let's do this!")

//Based on the user responses, the specifics of the password will be determined
if (numbers === true) {
  generatePassword(numbers);
}
else {
  alert('This password will not have any numbers');
}
if (low === true) {
  generateLow(low);
}
else {
  alert('This password will not have any lower case letters');
}
if (caps === true) {
  generateCaps(caps);
}
else {
  alert('This password will not have any upper case letters');
}
if (specChar === true) {
  generateSpec(specChar);
}
else {
  alert('This passwored will not have any special characters');
}

//When the user selects "let's go", they will move on to the password stage
if (letsGo = true) {
  createArray(mixedAllTypes)
  let finalpass = passwithsemicolon.join('')
  let message = document.getElementById('generate')
  message.innerText = finalpass;
}
else {
  alert('Please let us know when you are ready to generate your password.');
}

//Added event listener for click button.

generateBtn.addEventListener('click', writePassword)