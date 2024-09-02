var str = "<p><strong><em>Only Print this</em></strong></p>";
document.write("Before: " + str);
var constr = str.replace(/(<([^>]+)>)/ig, "");
document.write("After: <br><br>" + constr);