// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var Upper = Lower = Numbers = Special = "no";
function questions(){
  if (confirm('Do you want upper case letters?')) {
    Upper = "yes"
  }
  
  if (confirm("Do you want lower case letters?")) {
    Lower = "yes"
  }
  if (confirm("Do you want numeric values?")) {
    Numbers = "yes"
  }
  if (confirm("Do you want special characters?")) {
    Special = "yes"
  }
}

var emptyPass= '';
var Listofoptions = [];
const Capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const notCapital = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numeric = [0,1,2,3,4,5,6,7,8,9];
const specialchar = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"];

function genpass(){
  if (Upper = "yes"){
    Listofoptions.push(Capital);
    console.log(Listofoptions);
  }
  if (Lower = "yes"){
    Listofoptions.push(notCapital);
    console.log(Listofoptions);
  }
  if (Numbers = "yes"){
    Listofoptions.push(numeric);
    console.log(Listofoptions);
  }
  if (Special = "yes"){
    Listofoptions.push(specialchar);
    console.log(Listofoptions);
  }
  for i in passLength:
    // select random from array and append to emptyPass

}

questions();

// function question4() {
//   let Passlength = window.prompt("what is the length of the password you want? Please input number between 8 and 128");
//   if (PassLength >= 8 && Passlength <= 128) {
//     console.log(Passlength);
//   }
//   else {
//     alert("Please input number between 8 and 128")
//     question4();
//   }
// }

// question4();
