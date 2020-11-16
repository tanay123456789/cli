var rs=require("readline-sync");



console.log("Hello welcome to my game");


var player=rs.question("Please enter your name");



var welcomeMessage=`Welcome ${player}`


console.log(welcomeMessage);


var score=0;
var answer=rs.question(`What is my profession?`);

var check;

if(answer==="Student"||answer==="student"||answer==="STUDENT"){
    check="right answer";
    score+=1;
}
else{
    check="wrong answer";
    score-=1;
}

console.log(`Hey! It was a ${check}`);
console.log(`your score is ${score}`);

function gameplay(question,answer,score){
    var isAnswerCorrect;

    var answer=rs.question(question);

    if(answer===correctAnswer){
        isAnswerCorrect=true;
    }


    return isAnswerCorrect,updatedScore
}





