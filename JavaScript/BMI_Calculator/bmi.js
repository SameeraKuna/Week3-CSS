//BMI Calculator 
// Input: height (meters), weight (kg) 
// Formula: 
// BMI = weight / (height * height) 
// Output: BMI value + category: 
// <18.5 → Underweight 
// 18.5–24.9 → Normal 
// 25–29.9 → Overweight 
// ≥30 → Obese  -->
let height = prompt("Enter your height(in m)");
let weight = prompt("Enter the weight(in kg)");
let value = weight / (height * height);
if(value<18.5)
    {
     console.log("Your BMI is "+ value + "You are Underweight");
    }
else if(value>=18.5 && value<=24.9)
    {
      console.log("Your BMI is "+ value + "You are Normal");  
    }
else if(value>=25 && value<=29.9)
    {
      console.log("Your BMI is "+ value + "You are Overweight");  
    }
else if(value>=25 && value<=29.9)
    {
      console.log("Your BMI is "+ value + "You are Obese");  
    }
else{
     console.log("Your BMI is out of range"); 
}


// document.write("BMI for the given height and weight is " + output)