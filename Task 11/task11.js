var num1 = prompt("Enter a number.");
var num2 = num1.split("");
var arr = [];
var add = 0;
for(var i=0; i < num2.length; i++){
    if(num2[i] >= 0){
        arr[i] = parseInt(num2[i]);
    }
}
for(var j=0; j < num2.length; j++){
    add = add + arr[j];
}
var mode = add/arr.length;
document.write(num1 + " = " + add + "/" + arr.length + " = " + mode);