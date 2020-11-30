
//dependency
var rs=require("readline-sync");

//starting messages
console.log("Hello welcome to my game");

var player=rs.question("Please enter your name");

var welcomeMessage=`Welcome ${player}`;

console.log(welcomeMessage);

console.log("You will get 1 score for correct answer and -1 for wrong answer")


//variable to record score
var score=0;


//Function to ask question and answer
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


//List of questions
const questionList=[{
    question:"What is my profession?",
    answer:"student"
},{
    question:"Who's my favourite anime character?",
    answer:"L"
},{
    question:"Where do I live?",
    answer:"Lucknow"


},{
    question:"What's my favourite superhero character?",
    answer:"IronMan"
}];



//Loop to call gameplay funtion
for(var i=0;i<questionList.length;i++){
    var currentQuestion=questionList[i];
    var check=gameplay(currentQuestion.question,currentQuestion.answer);
    if(check===true){

        console.log(`Hey! It was a right answer`);
        console.log(`your score is ${score}`);
    }
    
    else{
        console.log(`Wrong answer`);
        console.log(`your score is ${score}`);
    
    }
    
}



