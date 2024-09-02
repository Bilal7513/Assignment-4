var num = Number(prompt("Enter a positive number."));
var rodnum = Math.round(num);
var flrnum = Math.floor(num);
var celnum = Math.ceil(num);

document.write("Number: " + num);
document.write("<br>Round off value: " +rodnum);
document.write("<br>Floor value: " +flrnum);
document.write("<br>Ceil value: " +celnum);
