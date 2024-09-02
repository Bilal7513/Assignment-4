var date = parseInt(prompt("Enter the date."));
if(date < 16){
    document.write("First fifteen days of the month");
}
else if(date < 32){
    document.write("Last days of the month.")
}
else{
    document.write("Enter correct date.");
}