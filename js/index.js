//lesson 1


// console.log('Hello World');
// window.alert('This is a My Js')
// document.getElementById("myH").textContent = 'Hello My Friend'
// var input1 = prompt('What Your Name')
// var input = prompt('What Your Surname')
// var confirm = confirm('Are you programmer?')
// var num1 = prompt(`Write down your birthday`)
// var sum = 2024 - num1
// alert(sum)
// console.log(input1 , input , confirm ,sum);


//lesson 2


// var name = `Eldost`
// var pizzaName = `3 sisters,`
// var pizzaPrice = `total cost is 5$`
// var pizzaCount = `has bought 3 pizzas,`

// console.log(name, pizzaCount, pizzaName, pizzaPrice);
// var confirm = confirm(`Do you like sushi`)
// var prompt = prompt(` What kind  of sushi do you like `)
// alert(prompt, confirm)

// console.log(confirm, prompt);


// lesson3



// var num1 = prompt('First Numbe');
// var number1 = parseInt(num1);

// var num2 = prompt('Second Number');
// var number2 = parseInt(num2);

// var num3 = prompt('3 Number');
// var number3 = parseInt(num3);

// var sum1 = number1 * number2 * number3;
// var sum2 = number1 - number2;
// var sum3 = number1 + number3;

// alert(sum1);
// alert(sum2);
// alert(sum3);


// lesson 3

// let age = 22;
// let price = 10.99;
// let score = 3.5;

// console.log(typeof age);
// console.log(`You are  ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your ccore ${score}`);

//----------
// let name = "Eldost";
// let food = "Pizza";
// let email = "mirzeev0308@gmail.com";


// console.log(typeof name);
// console.log(`Your name is ${name}`);
// console.log(`Your favorite food is ${food}`);
// console.log(`Your Email is ${email}`);


//-------
// let online = true;
// let sell = true;

// console.log(typeof online);
// console.log(` Bro is online: ${ online}`);
// console.log(`Is this car for sale: ${sell}`);

//-------

// let name = `Eldost`;
// let age = `22`;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${name}`;
// document.getElementById("p2").textContent = `Your are ${age} yers old`;
// document.getElementById("p3").textContent = `You are a student: ${student}`;


// lesson 4

// let student = 30;

// student = student + 1;
// student = student - 1;
// student = student / 1;
// student = student * 1;

// student += 3;
// student -= 3;
// student *= 3;


// console.log(student);

//------

// let result = 2 + 5 + 3 - 1 * 5 * 3 ;

// console.log(result);

// lesson 5 

// let userName;

// document.getElementById("but").onclick = function(){
//     userName = document.getElementById("text").value;
//     document.getElementById("myh").textContent = `Hello My Dear ${userName}`
//     console.log(userName);
// 

//lesson 6 

// var num = prompt("Write your score:")

// if (num >= 100) {
//     alert('You very smart')
//     document.getElementById("myH").textContent = `Congratulations your score ${num}`;
// }else if (num >= 90) {
//     alert("A")
//     document.getElementById("myH").textContent = `Congratulations your score ${num}`;
// }else if (num >= 80 && num <= 89) {
//     alert('B')
//     document.getElementById("myH").textContent = `Congratulations your score ${num}`;
// }else if (num >= 70 && num <= 79) {
//     alert('C')
//     document.getElementById("myH").textContent = `Congratulations your score ${num}`;
// }else if (num >= 60 && num <= 69) {
//     alert('D')
//     document.getElementById("myH").textContent = `Congratulations your score ${num}`;
// }else {
//     alert('You very stupid')
//     document.getElementById("myH").textContent = `Your score ${num} is very low unfortunately you dont pass`;

// }

// console.log( `Your score ${num}`);

var num1 = +prompt("Write first number")

var sum = prompt("Write operator")

var num2 = +prompt("Write second number")

if (sum == `+` ) {
    alert(num1 + num2)
}else if(sum == `-` ){
    alert(num1 - num2 )
}else if(sum == `/` ){
    alert(num1 / num2 )
}else if(sum == `*` ){
    alert(num1 * num2 )
}
console.log(num1, sum , num2);