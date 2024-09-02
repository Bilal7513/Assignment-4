var age = parseInt(prompt("Enter your age."));
document.write("Your age is " + age);
var year = new Date(); 
var birth = age - year.getFullYear();
document.write("<br>Your birth year is " + birth);