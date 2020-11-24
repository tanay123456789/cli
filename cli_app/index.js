var rs=require("readline-sync");
console.log("Hello welcome to my game");
var player=rs.question("Please enter your name");
var welcomeMessage=`Welcome ${player}`;

console.log(welcomeMessage);

var score=0;




function gameplay(question,CorrectAnswer){
    var isAnswerCorrect;

    var answer=rs.question(question);

    
    if(answer===CorrectAnswer){
        isAnswerCorrect=true;
        score+=1;
    }
    else{
        isAnswerCorrect=false;
        score-=1;
    }
    return isAnswerCorrect;
}
const check=gameplay('What is my profession?','student');
if(check===true){

    console.log(`Hey! It was a right answer`);
    console.log(`your score is ${score}`);
}

else{
    console.log(`Hey! It was a right answer`);
    console.log(`your score is ${score}`);

}