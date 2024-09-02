var pass = prompt("Enter your password.");
var regex = /^[^\d]+[a-zA-Z]+[0-9]+/;

if (regex.test(pass) && pass.length >= 8){
    console.log("Password is valid.");
}
else {
    alert("The user to enter a valid password. For character codes of a-z, A-Z & 0-9");
}