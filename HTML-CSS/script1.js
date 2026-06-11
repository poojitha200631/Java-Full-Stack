/*let name="poojitha";
var age=20;
const height="1.72";
console.log(name);
console.log(age);
console.log(height);
console.log(age+5);
console.log(name+" is "+age+" years old and her height is "+height);
console.log(name+age-5 + " is the age before 5 years");
console.log(name+age*2 + " is the age after 10 years");
age+=3;
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
age/=2;
console.log(age);
let age1=71;
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age==age1);
console.log(age!=age1);*/
/*let food="biryani";
let breakfast="idli";
let food1="dosa";
let food2="vada";
let food3="poori";
let food4="upma";
let food5="pongal";
if(food1==breakfast){
    console.log("its nice to have biryani as in the morning");
}
else if(food2==food1){
    console.log("food and dosa are same");
}else if(food3==food1){
    console.log("food and poori are same");
}else{
    console.log("food and idli are different");
}*/
/*let amount=10200;
let num1=500;
let num2=200;
let num3=100;
if(amount%500==0){
    console.log(amount/500+"notes of 500");
}else if(amount%200==0){
    console.log(amount/200+"notes of 200");
}else if(amount%100==0){
    console.log(amount/100+"notes of 100");
}else{
    console.log("amount is not valid");}

let amount = 2500;
if (amount >= 500) {
    let notes = Math.floor(amount / 500); 
    console.log("500 notes x " + notes);
    amount = amount % 500;                
}
if (amount >= 200) {
    let notes = Math.floor(amount / 200);
    console.log("200 notes x " + notes);
    amount = amount % 200;
}
if (amount >= 100) {
    let notes = Math.floor(amount / 100);
    console.log("100 notes x " + notes);
    amount = amount % 100;
}
if (amount > 0) {
    console.log("Remaining change: " + amount);
}
let i=1;
while(i<=30){
    console.log("day"+i+"completed");
    i++;
}
let user_name="poojitha";
let password="poojitha123";
let name="shivv";
let pin=1234;
let name_1="subhikshan";
let pin_1=4321;
if(user_name=="poojitha"){
    console.log(user_name);
    if(password=="poojitha123"){
        console.log("welcome  pooji");
}
}
for(let i=1;i<=10;i++)
{
    for(let j=1;j<=10;j++){
    console.log("2 x "+j+"="+2*j);
}
}
function cook()
{
    console.log("pour the flour in Tawa");
    console.log("rub it round order with gareta");
    console.log("pour some oil");
    console.log("twist it with dosa gareta");
    console.log("atlast gently serve it to plate");
}
cook();
for(let i=1;i<=5;i++){
    cook();
}
function dishwash(vessels){
    console.log("we have to wash"+vessels+"vessels");
}
dishwash(2);
function num(n)
{
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);*/
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}
let number = Math.floor(Math.random() * 100) + 1;
guess(number);
