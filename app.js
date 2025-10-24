//------------------chp-9-11-------------------//

//Q no 1 
//A no 1

// let a = "karachi"
// let city = prompt("enter your city name ")
// if(a == city){
//     alert("welcoem to the city of light")
// }

// Q NO 2
// A no 2 

// let b = "male"
// let c = "female"
// let gender = prompt("enter your gender")

// if(b == gender){
//     alert("good morning sir")
// }else(c == gender) 
//    alert("good morning mam")


// Q no 3 
// A no 3 
// let d ="green"
// let e ="yellow"
// let f ="red"
// let signal = prompt("enter road traffic signal")

// if(d == signal){
//     alert("Move On")

// }else if (e == signal) {
//     alert("Ready to move")
// }
// else(f == signal)
//    alert("must stop")



// Q no 4 
// A no 4 

// let fuel = 0.25
// let remainingfuel = prompt("enter remaining fuel of car")
// if(remainingfuel < fuel){
//     alert("plz refill fuel in your car")
// }

// Q no 5 
// A no 5 

// let a = 10
// if(++a === 11){
//     alert("if condition a is true")
// }
// let b = 82 
// if(b++ === 83){
//     alert("if condition b is true")
// }
// let c = 12 
// if(c++ === 13){
//     alert("condition 1 is true")

// }

// if(c === 13){
//      alert("condition 2 is true")
// }

// if(++c < 14 ){
//  alert("condition 3 is true")
   
// }
// if(c === 14 ){
//  alert("condition 4 is true")
   
// }


// let materialcost = 20000
// let labourcost = 2000
// let totalcost = materialcost + labourcost
// console.log(materialcost + labourcost)
// if(totalcost === materialcost + labourcost){
//     alert("both cost are equal")

// }
// if(true){
//     alert("true")
// }

// if(false){
//     alert(false)
// }

// if("car" < "cat"){
//     alert("the car is smaller than cat")
// }

// Q no 6 
// A no  6

// let totalmarks = 100;
// let sub1 = +prompt("Enter Your Subject First Subject Number")
// let sub2 = +prompt("Enter Your Subject Second Number ")
// let sub3 = +prompt("Enter Your Subject Third Number")
// let totalobtain = sub1 + sub2 + sub3
// totalmarks =100*3
// let persentage = (totalobtain/totalmarks)*100

// console.log(persentage,`%`)

// document.writeln("<h2><br><br><br>Marks Sheet</h2>")
// document.writeln("<br>Total Marks ",totalmarks)
// document.writeln("<br>Total Marks Obtained ",totalobtain)
// document.writeln("<br>Persentage ",persentage,`%` )


// if(persentage >= 80){
//     let grade =` A1`
//     let remarks =` Amazing`
//     document.writeln("<br>Grade ",grade)
// document.writeln("<br>Remarks ",remarks)
   
// }
// else if (persentage >= 70){
//     let grade = `A`
//     let remarks =` good`
//     document.writeln("<br>Grade ",grade)
// document.writeln("<br>Remarks ",remarks)
// }
// else if (persentage >= 60){
//     let grade = `B`
//     let remarks = `Need improment`
//     document.writeln("<br>Grade ",grade)
// document.writeln("<br>Remarks ",remarks)
// }
// else if (persentage >= 40){
//     let grade = `F`
//     let remarks = "Poor"
//     document.writeln("<br>Grade ",grade)
// document.writeln("<br>Remarks ",remarks)
// }








// Q no 7 
// A no 7 

// let number = 7 
// let secret = prompt("Gusse The secret Number ")
// if(number == secret){
//     alert("Bingo! Correct Answer")
// }
// else if (number == ++secret){
//     alert("Closed Enough to the Correct Answer")
// }else{
//     alert("Wrong")
// }


// Q no 8
// A no 8

// let a = prompt("Enter Your Number")
// b = a % 3 
// if(b === 0){
//     alert("Number is correst")
// }else{
//     alert("Number is Wrong")
// }
   

// Q no 9 
// A no 9

// let odd = prompt("Enter Your Number")
// if(odd % 3){
//     alert("odd Number")
// }else{
//     alert("is even number")
// }


// Q no 10
// A no 10


// let temp = prompt("Enter Temprature ")
// if(temp >= 40){
//     alert("Its to Hot today")
// }
// else if (temp >= 30 ){
//     alert("Its Normal Today")
// }
// else if (temp >= 20 ){
//     alert("Today's weather its really good")
// }
// else if (temp >= 10 ){
//     alert("OMG! Today Weather is so cool")
// }


// Q no 11
          
// let number1 = 18
// let number2 = 20 
// let operator = prompt("Enter Your Operator")

// if(operator == "+"){
//     console.log(number1 + number2)
//     alert(number1 + number2)
// }


// else if (operator == "-"){
//      console.log(number1 - number2)
//     alert(number1 - number2)

// }
// else if (operator == "/"){
//      console.log(number1 / number2)
//     alert(number1 / number2)

// }
// else if (operator == "*"){
//      console.log(number1 * number2)
//     alert(number1 * number2)

// }
// else if (operator == "%"){
//      console.log(number1 % number2)
//     alert(number1 % number2)

// }else{
//     alert("invalide value")
//     console.log("invalide value")
// }

// ////////////////----------------------chp-9-11 END ----------------------------////////////////////////////

// /////////////////------------------chp-12-13 Start ----------------------------////////////////////////////


// Q no 1 
// A no 1 

// let letter = prompt("Enter a alphabet")
// if (letter.charCodeAt()>= 65 && letter.charCodeAt()<= 90){
//     console.log("It is a upper case alphabets ")
//     alert("Its is a upper case alphabet")
// }
// else if (letter.codePointAt() >= 97 && letter.charCodeAt() <= 122){
//     console.log("Its is a lower case alphabet")
//     alert("Its is a lower case alphabet")
// }


// Q no 2 
// A no 2 

// let number1 = prompt("Enter a number ")
// let number2 = prompt("Enter a number ")

// if(number1>number2){
//     alert("number 1 is larger")
// }
// else if(number1<number2){
//      alert("number 2 is larger")
// }

// else if (number1 == number2){
//     alert("Both are equall")
// }




// Q n0 3 
// A no 3 

// let a = prompt("Enter a number")
// if(a > 0 ){
//     alert("number is positive ")
// }
// else if (a < 0 ){
//     alert("number is negative ")
// }
// else if (0 == 0){
//     alert("number is zero")
// }



// //Q no 4 
// //A no 4 

// let vowels = prompt("Enter a vowels ")
// if(vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o"   ||  vowels == "u"  ){
//     alert("True")

// }else{
//     alert("False")
// }



//Q no 5 
//A no 5 

// let correctpassword = "bilal123"
// let pass = prompt("Enter your password")
// if(pass == correctpassword ){
//     alert("correct password")
// }else{alert("Worng password please enter yout correst password")}



// Q no 6 
// A no 6 

// let greeting;
// let hour = 13
// if (hour < 18){
//     greeting="Good Day";
//     alert(greeting)
// }
// else {
//     greeting="Good Evening";
//     alert(greeting)
// }


//Q no 7 
//A no 7 


// let time = prompt("Enter a current time")
// if (time >=0 && time < 1200){
//   console.log("Good Morning!")
//   alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700){
//   console.log("Good afternoon!")
//    alert("Good afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//   console.log("Good Evening!")
//    alert("Good Evening!")
// }
// else if  (time >= 2100 && time <= 2400){
//   console.log("Good night!")
//   alert("Good night!")
// }



//////////////////////////////////////////////END//////////////////////////////////////////////////////////////////////////







