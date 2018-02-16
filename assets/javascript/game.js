console.log("Justin's link Test");

 $(document).ready(function(){
    
    var randomBig = Math.floor((Math.random() * 101) + 1)+19;
    var redScore = Math.floor((Math.random() * 12) + 1);
    var blueScore = Math.floor((Math.random() * 12) + 1);
    var greenScore = Math.floor((Math.random() * 12) + 1);
    var yellowScore = Math.floor((Math.random() * 12) + 1);    
    var $crystalRandomCPU = $("#crystalRandomCPU");
    var scoreCount = 0;
    var $redImg = $("#redImg");
    var $blueImg = $("#blueImg");
    var $greenImg = $("#greenImg");
    var $yellowImg = $("#yellowImg");
    var $myScore = $("#myScore");
    var $redGem = $("#redGem");    
    var $blueGem = $("#blueGem");
    var $greenGem = $("#greenGem");
    var $yellowGem = $("#yellowGem");    
    var $timesWon = $("#timesWon");
    var $timesLost = $("#timesLost");
    var wins = 0;
    var losses = 0;
    var newScore;
    console.log("Data: " + $redGem.data('score', redScore));
    function resetCrystals() {
    randomBig = 0;
    randomBig = Math.floor((Math.random() * 101) + 1)+19;
    redScore = 0;
    blueScore = 0;
    greenScore = 0;
    yellowScore = 0;
    redScore = Math.floor((Math.random() * 12) + 1);
    blueScore = Math.floor((Math.random() * 12) + 1);
    greenScore = Math.floor((Math.random() * 12) + 1);
    yellowScore = Math.floor((Math.random() * 12) + 1);
    console.log("New randomBig: "+randomBig);
    console.log("new redScore: "+ redScore);
    console.log("New blueScore: "+ blueScore);
    console.log("New greenScore: "+ greenScore);
    console.log("New yellowScore: "+ yellowScore);
    scoreCount = 0;
    $crystalRandomCPU.text(randomBig); 
    $myScore.fadeOut().text(scoreCount).fadeIn(); 
    }
    $crystalRandomCPU.text(randomBig);
function mousingOn(arg1, arg2){
    arg1.mouseover(function(){
        arg2.css('width', '90%');        
    })    
}
function mousingLeaving(arg1, arg2){
    arg1.mouseleave(function(){
        arg2.css('width', '60%');        
    })    
}

mousingOn($redGem, $redImg);
mousingOn($blueGem, $blueImg);
mousingOn($greenGem, $greenImg);
mousingOn($yellowGem, $yellowImg);
mousingLeaving($redGem, $redImg);
mousingLeaving($blueGem, $blueImg);
mousingLeaving($greenGem, $greenImg);
mousingLeaving($yellowGem, $yellowImg);

    if (randomBig > 18){
        $redGem.on("click", function(){             
                    scoreCount += redScore;
                    console.log('my Score: ' + scoreCount);
                    $myScore.fadeOut().text(scoreCount).fadeIn();
                    youLose();
                    youWin();
        });
        $blueGem.on("click", function(){             
            scoreCount += blueScore;
            console.log('my Score: ' + scoreCount);
            $myScore.fadeOut().text(scoreCount).fadeIn();
            youLose();
            youWin();
        });
        $greenGem.on("click", function(){             
            scoreCount += greenScore;
            console.log('my Score: ' + scoreCount);
            $myScore.fadeOut().text(scoreCount).fadeIn();
            youLose();
            youWin();
        });
        $yellowGem.on("click", function(){             
            scoreCount += yellowScore;
            console.log('my Score: ' + scoreCount);
            $myScore.fadeOut().text(scoreCount).fadeIn();
            youLose();
            youWin();
        });
            function youLose(){
                if (scoreCount > randomBig){
                    losses +=1;
                    $timesLost.fadeOut().text(losses).fadeIn();
                    console.log("you lost");
                    resetCrystals();

                }
            };
            function youWin(){
                if (scoreCount == randomBig){
                    wins +=1;
                    $timesWon.fadeOut().text(wins).fadeIn();
                    console.log("you won");
                    resetCrystals();
                }
                }
        }
        console.log("randomBig: "+randomBig);
        console.log("redScore: "+ redScore);
        console.log("blueScore: "+ blueScore);
        console.log("greenScore: "+ greenScore);
        console.log("yellowScore: "+ yellowScore);
 });
