// Grade Calculator 
// Input: 5 subject marks 
// Formula: 
// Total = sum of marks 
// Average = Total / 5 
// Grade rules: 
// 90–100 → A+ 
// 80–89 → A 
// 70–79 → B 
// 60–69 → C 
// 50–59 → D 
// <50 → F 
// Pass rule: All marks ≥ 35 
let science = Number(prompt("Enter your marks in Science"));
let maths = Number(prompt("Enter your marks in Mathematics"));
let social = Number(prompt("Enter your marks in Social"));
let english = Number(prompt("Enter your marks in English"));
let hindi = Number(prompt("Enter your marks in Hindi"));

let Total = science+maths+social+english+hindi;
let Average = Total / 5;
if(Average>=90 && Average<=100)
    {
     console.log("A+");
    }
else if(Average>=80 && Average<=89)
    {
      console.log("A");  
    }
else if(Average>=70 && Average<=79)
    {
      console.log("B");  
    }
else if(Average>=60 && Average<=69)
    {
      console.log("C");  
    }
else if(Average>=50 && Average<=59)
    {
      console.log("D");  
    }
else if(Average<=50)
    {
      console.log("F");  
    }
