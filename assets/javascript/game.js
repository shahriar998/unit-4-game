//console.log("Connection made");

//variables are declared here
var computerNumber = 18 + Math.floor(Math.random()*102)
var comScoreHtml = $("#com-score");
var winHtml =$("#win-count");
var lossHtml = $("#loss-count")
var winCount =0;
var lossCount =0;
var numberGG = 1 + Math.floor(Math.random()*12);
var numberYG = 1 + Math.floor(Math.random()*12);
var numberRG = 1 + Math.floor(Math.random()*12);
var numberBG = 1 + Math.floor(Math.random()*12);
var GGHtml = $(".green-gem");
var YGHtml = $(".yellow-gem");
var RGHtml = $(".red-gem");
var BGHtml = $(".blue-gem");
var myScore = 0;

var myScoreHtml = $("#my-Score");


//functions are declared here
function atStart(){
 console.log(computerNumber);
 comScoreHtml.text(computerNumber);
 winHtml.text(winCount);
 lossHtml.text(lossCount);
 GGHtml.attr("data-crystalvalue",numberGG)
 YGHtml.attr("data-crystalvalue",numberYG)
 RGHtml.attr("data-crystalvalue",numberRG)
 BGHtml.attr("data-crystalvalue",numberBG)
 myScoreHtml.text(myScore);

 
}
function secondChance(){
    computerNumber = 18 + Math.floor(Math.random()*102)
    comScoreHtml.text(computerNumber);
    numberGG = 1 + Math.floor(Math.random()*12);
    numberYG = 1 + Math.floor(Math.random()*12);
    numberRG = 1 + Math.floor(Math.random()*12);
    numberBG = 1 + Math.floor(Math.random()*12);
    GGHtml.attr("data-crystalvalue",numberGG)
    YGHtml.attr("data-crystalvalue",numberYG)
    RGHtml.attr("data-crystalvalue",numberRG)
    BGHtml.attr("data-crystalvalue",numberBG)
    myScore = 0;
    myScoreHtml.text(myScore);
}


$(document).ready(function() {
    //console.log(computerNumber);
    atStart();
   //console.log(myScore + " this is before click");
   

    

$(".gem-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    myScore=myScore+crystalValue;
    //console.log("This is my score now after click"+myScore);
    myScoreHtml.text(myScore);

    if(myScore==computerNumber){
        winCount++;
        winHtml.text(winCount);
        alert("You won!!! Press Ok to continue and Refresh the page to restart")
        secondChance()
    }
    if(myScore>computerNumber){
        lossCount++;
        lossHtml.text(lossCount);
        alert("You lost!!! Press Ok to continue and Refresh the page to restart")
        secondChance()
    }
});

});