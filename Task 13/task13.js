var date1 = new Date();
var date2 = new Date("Janruary 1 1970");
var timediff = date1.getTime() - date2.getTime();
var timeinday = 24 * 60 * 60 *1000;
var daydiff = timediff / timeinday;


document.write("Current Date: " + date1);
document.write("<br>Elapsed milliseconds since January 1, 1970: " + timediff);
document.write("<br>Elapsed minutes since January 1, 1970: " + daydiff);