var str = "The quick brown fox jumps over the lazy dog.";
var lowstr = str.toLowerCase();
var splstr = lowstr.split(" ");
var word = "the";
var a=0;
for(var i=0; i<splstr.length; i++){
    if(splstr[i] === word){
        a++;
    }
}
document.write(str);
document.write("<br>There are " + a + " occurrence(s) of word " + '\"' + word + '\"'); 