var rs=require("readline-sync");



console.log("Hello welcome to my game");


var player=rs.question("Please enter your name");



var welcomeMessage="Welcome ${player}"


console.log(welcomeMessage);



var answer=rs.question("What is my profession?");

var check;

if(answer==="Student"||answer==="student"||answer==="STUDENT"){
    check="right answer";
}
else{
    check="wrong answer";
}

console.log('Hey! It was a ${check}');