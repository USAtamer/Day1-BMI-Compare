let massMark = 75;
let massJohn = 65;
let heightMark = 1.8;
let heightJohn =  1.55;
console.log(massMark);
let BMIJohn;
BMIJohn= Math.round(massJohn / (heightJohn*heightJohn));
console.log(BMIJohn);
// calculation BMI
let BMIMark;
BMIMark = (massMark / (heightMark*heightMark)).toFixed(2);
console.log(BMIMark);

let higherBMI = BMIMark>BMIJohn;
console.log(higherBMI);

console.log(`Is Mark's BMI is higher than John's? Answer is “false". Because Mark's BMI is BMIMARK and John's BMI is BMIJOHN ${BMIMark} and John's BMI is ${BMIJohn} `);


