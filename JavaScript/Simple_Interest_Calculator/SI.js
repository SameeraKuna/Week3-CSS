// Simple Interest Calculator 
// Input: Principal, Rate, Time 
// Formula: 
// SI = (P × R × T) / 100 
// Total Amount = P + SI 
let Principal = Number(prompt("Enter the value of Principal"));
let Rate = Number(prompt("Enter the value of Rate of interest"));
let Time = Number(prompt("Enter the value of Time Duration"));
let SI = (Principal*Rate*Time)/100;
let Total_Amount = Principal + SI;
console.log("The Simple Interest for the given time duration is :" + SI);
console.log("Total Amount is :" + Total_Amount)
