var num = parseInt(prompt("Enter a number."));
var result = "";

var under20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

if (num < 20) {
    result = under20[num];
} 
else if (num < 100) {
    result = tens[Math.floor(num / 10)];
    if (num % 10 !== 0) {
        result += " " + under20[num % 10];
    }
}
else if (num < 1000) {
    result = under20[Math.floor(num / 100)] + " Hundred";
    if (num % 100 !== 0) {
        result += " and ";
        var remainder = num % 100;
        if (remainder < 20) {
            result += under20[remainder];
        } else {
            result += tens[Math.floor(remainder / 10)];
            if (remainder % 10 !== 0) {
                result += " " + under20[remainder % 10];
            }
        }
    }
}
document.write(result);



// if(chkLenght > 1){
//     if(num > 19){
//         num = num.split('');
//         let num0 = num[0];
//         let firstWord = tens[num0]
//         let secondNumber = num[1]
//         secondNumber = under20[secondNumber]
//         console.log(firstWord+secondNumber)
//     }
    
// }