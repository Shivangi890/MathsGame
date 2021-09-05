var playing=false;
var score;
var action;
var timeremaining;
var correctAns;
var correctPosition;
//if we click on the start button
document.getElementById("startreset").onclick=function(){
       // if we are playing
       if(playing==true)
       {
           location.reload()   //for reloading the page
       }
       else{//if we are not playing
        playing=true;
           score=0;    //set score to 0
           document.getElementById("scorevalue").innerHTML=score;
           //show countdown box
           show("timeremaining");
           timeremaining=60;
           document.getElementById("timeremainingvalue").innerHTML=timeremaining; 

           hide("gameover");
           document.getElementById("startreset").innerHTML="Reset Game";

      //reduce time by 1 sec in loops
           startcountdown();
        //  generate q/a
        generateQA();


       }


}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function()
{
    if(playing==true)
    {
        if(this.innerHTML==correctAns)
        {
            score++;
            document.getElementById("score").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");

            },1000);
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}
function startcountdown(){
    action=setInterval(function()
    {//reduce time by 1 sec in loops
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining; 
        if(timeremaining==0)
        {
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>Your score is: " +score+ ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";


        }
    },1000);
}
function stopcountdown()
{
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";

}
function show(id)
{
    document.getElementById(id).style.display="block";
}
 function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());document.get
    correctAns=x*y;
    document.getElementById("question").innerHTML= x + "x" + y;
    correctPosition=1+(Math.round(3*Math.random()));
     document.getElementById("box"+correctPosition).innerHTML=correctAns;


     var answers=[correctAns];
     for(i=1;i<5;i++)
     {
         if(i!= correctPosition)
         {
             var wrongAnswer;
             do{
             wrongAnswer=1+Math.round(9*Math.random()) * 1+Math.round(9*Math.random());
             }
             while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML=wrongAnswer;  
            answers.push(wrongAnswer);                  
         }
     }
 }   
    
     
      
      
         // timeleft?
           //yes--> game continue
           //no--> game over
       // change button to reset
       //generate a new question

//if we click on answer box
    // if we are playing
       //correct?
           //yes
              //increase score
              //show correct box for 1sec
              //generate new quesion
           //no
               //show try again box for 1 sec



