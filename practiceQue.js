//Que- program to display type of variables.
 
// let a=10;
// let b=23.535;
// let c="123";
// let d;
// let e= 67;
// let f= null;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));

//  OUTPUT:
//  number
//  number 
//  string
//  undefined 
//  number
//  object
 
//Que- program that accepts two numbers from the user and calculates the sum of the two numbers.

// const prompt=require('prompt-sync')();
// let num1=parseInt(prompt("Enter first number:"));
// let num2=parseInt(prompt("Enter second number:"));
// // numbers=num1+num2;
//  console.log(num1+num2);


//Que:-Program to check the number are even or odd.
//  const prompt=require('prompt-sync')();

// let num1=parseInt(prompt("Enter the number:"));
// if(num1%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// // ..............type 2...

//  num1=2;
//  if(num1%2==0)
//  {
// console.log("even");
//  }
//  else{
//     console.log("odd");
//  }





 // Write a program that determines whether a given number is positive or negative.
//  const prompt=require('prompt-sync')();

// let number=parseInt(prompt("Enter the number:"));
// if(number<0){
//     console.log("Negative: " +number);
// }
// else{
//     console.log("Positive: " +number);
// }


 
//Write a program to determine the greater of two numbers.
// const prompt=require('prompt-sync')();

// let num1=parseInt(prompt("Enter the number:"));
// let num2=parseInt(prompt("Enter the number:"));


// if(num1>num2){
//     console.log("greater:  " +num1);
// }
// else{
//     console.log("greater:  " +num2);

// }










// //Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
// const prompt=require('prompt-sync')();
// let num=(parseInt(prompt("Enter number")));
// if(num<=3 && num>0)
//  {

//     console.log(" C");
//  }
//  else if(num>3 && num<=9){
//     console.log("B");
//  }
//  else if( num==10 )
//  {
//     console.log("A");

//  }
//  else{
//     console.log("not found");
//  }



//Que- Write a C program to check whether a character is alphabet or not.
 
// const prompt=require('prompt-sync')();

//  let char=prompt("Enter the alphabet:");
//  if((char>="a" && char<="z" )||(char>="A" && char<="Z"))
//  {
//     console.log("this is alphabet:");
//  }
//  else
//  {
//     console.log("this is not alphabet:");
//  }


 //Que-Write a C program to input any alphabet and check whether it is vowel or consonant.
//  const prompt=require('prompt-sync')();

//  let char=prompt("Enter the alphabet:");
//  if((char=="a"||char=="e"||char=="i"||char=="o"||char=="u") ||
//  ((char=="A"||char=="E"||char=="I"||char=="O"||char=="U")))
//  {
//     console.log("Vovel");
//  }
//  else{
//     console.log("Consonent");
//  }


 
//Que-Write a C program to check whether a character is uppercase or lowercase alphabet.


// const prompt=require('prompt-sync')();
// let char=prompt("Enter the alphabet:");
// if(char>="A" && char<="Z")
// {
//  console.log("Upper case: ");
// }
// else if(char>="a" && char<="z"){
//     console.log("Lower case: ");
// }



//Que-Write a C program to input week number and print week day.
// const prompt=require('prompt-sync')();
// let num=(parseInt(prompt("Enter the number: ")));
// if(num==1){
//     console.log("Sunday");
// }
// else if(num==2)
// {
//     console.log("Monday");
// }
// else if(num==3)
// {
//     console.log("Tuesday");
// }
// else if(num==4)
// {
//     console.log("Wednesday");
// }
// else if(num==5)
// {
//     console.log("Thursday");
// }
// else if(num==6)
// {
//     console.log("Friday");
// }
// else if(num==7)
// {
//     console.log("Saturday");
// }
// else{
//     console.log("Not defined");
// }


//Que-Write a C program to input month number and print number of days in that month.
const prompt=require('prompt-sync')();
let month=(parseInt(prompt("Enter the number: ")));
if(month==1)
{
    console.log("31 days")
}
else if(month==2)
{
    console.log("28 or 29 days")
}
else if(month==3)
{
    console.log("30 days")
}
else if(month==4)
{
    console.log("31 days")
}
else if(month==5)
{
    console.log("30 days")
}
else if(month==6)
{
    console.log("31 days")
}
else if(month==7)
{
    console.log("30 days")
}
else if(month==8)
{
    console.log("31 days")
}
else if(month==9)
{
    console.log("30 days")
}
else if(month==10)
{
    console.log("31 days")
}
else if(month==11)
{
    console.log("30 days")
}
else if(month==12)
{
    console.log("31 days")
}

