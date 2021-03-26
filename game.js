gamePattern = []
userPattern = []


buttonColor = ["green" , "red" , "blue", "yellow"];

level = 0 
var start = true;
$(document).keypress(function (e) { 
    
    if (start) {
        $("#level-title").text("Level " + level);
        nextsequence();
        start = false;
      }
});


function nextsequence() {
    userPattern = []
    randomNumber = Math.floor(Math.random()*4);
    randomColor = buttonColor[randomNumber];
    gamePattern.push(randomColor);
    $("."+randomColor).fadeOut(100).fadeIn(100);
    playsound(randomColor);
    level = level +1;
    $("#level-title").text("Level " + level);
    
}



$(".btn").click(function (e) { 
   
    userChoosenColor = $(this).attr("id");
    userPattern.push(userChoosenColor);
    console.log(userPattern);
    playsound(userChoosenColor);
    animatebtn(userChoosenColor)
    
   
    checkAns(userPattern.length -1)

   });
   
function checkAns(currentLevel){
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
        console.log("success");
        if (userPattern.length === gamePattern.length){
            setTimeout(function() {
                nextsequence()
            }, 1500);
        }
    }
    else{
       $("body").addClass("game-over");
       $("#level-title").text("GAME OVER !!" ).fadeOut(500).fadeIn(500) ;
       setTimeout(function() {
       $("body").removeClass("game-over");
       }, 500);
       var wrong = "wrong"
       playsound(wrong)
       $("#level-title").text("GAME OVER !! Press Any Key to Start " );
       $("#level-title").css({"font-size":"5vh" , "line-height": "1.5"});
       restart()
    }

}  

function restart(){
    level = 0
    gamePattern = []
    start = true
}
function animatebtn(userChoosenColor){
    $("." + userChoosenColor).addClass("pressed");
    setTimeout(function() {
    $("." + userChoosenColor).removeClass("pressed");
    }, 100);
}

function playsound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
    }
console.log(gamePattern);