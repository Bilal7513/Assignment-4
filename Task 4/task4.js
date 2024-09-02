var email = prompt("Enter your email.");
var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

if (regex.test(email)){
    console.log("Email is valid.");
}
else {
    console.log("Invalid email.");
}