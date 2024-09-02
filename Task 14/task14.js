var date = new Date();
document.write("Current date: " + date);
var hour = date.getHours();
date.setHours(hour - 1);
document.write("<br>1 hour age, it was " + date);