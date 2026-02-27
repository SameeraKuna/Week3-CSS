//  Temperature Converter 
// Input: temperature + type 
// Formulas: °C OR °F
// C → F: (C × 9/5) + 32 
// F → C: (F − 32) × 5/9 

let type = prompt("Enter type of conversion(Enter C for converting into Celsius and F for Fahrenheit)");
if(type = "c" || "C"){
    let F = Number(prompt("Enter the Fahrenheit value of temperature"));
    let Celsius = ((F-32) * 5/9 );
    let result1 = Celsius.toFixed(2);
    console.log("Temperature in Celsius is :" + result1 +" °C")
}
else if(type = "f" || "F"){
    let C = Number(prompt("Enter the Celsius value of temperature"));
    let Fahrenheit = ((C * 9/5) + 32);
    let result2 = Fahrenheit.toFixed(2);
    console.log("Temperature in Fahrenheit is :" + result2 +" °F");
}