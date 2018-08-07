var goal = 0;
var wins = 0;
var losses = 0;
var score = 0;
var images = ['assets/images/diamond.png', 'assets/images/emerald.png', 'assets/images/ruby.png', 'assets/images/sapphire.png']

function randomGoal () {
goal = Math.floor(Math.random() * 102) + 19;
}


    // var sapphire = Math.floor(Math.random() * 11) + 1;
    // var emerald = Math.floor(Math.random() * 11) + 1;
    // var ruby = Math.floor(Math.random() * 11) + 1;
    // var diamond = Math.floor(Math.random() * 11) + 1;
    // $('#numberWins').html(wins);
    // $('numberLosses').html(losses);

    function resetCrystals() {
        for (var i =0; i < images.length; i++){
            var crystal = $("<img>");
            crystal.addClass("crystal");
			crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            $(".crystals").append(crystal);
        }


        // random = Math.floor(Math.random() * 101) + 19;
        // console.log(random);
        // $('#goalNumber').text(goal);
        // var sapphire = Math.floor(Math.random() * 11) + 1;
        // var emerald = Math.floor(Math.random() * 11) + 1;
        // var ruby = Math.floor(Math.random() * 11) + 1;
        // var ndiamond = Math.floor(Math.random() * 11) + 1;
      
        // $('#totalScore').text(score);

    };

    function resetHtml () {

    };

    function resetGame (){

    };

    function winner() {
        alert("You Win");
        wins++;
        $('#numberWins').text(wins);
        reset();
    };

    function loser() {
        alert("You Lose");
        losses++;
        $('numberLosses').text(losses);
        reset();
    };

    $('#one').on('click', function () {
        score = score + sapphire;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#two').on('click', function () {
        score = score + emerald;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#three').on('click', function () {
        score = score + ruby;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#four').on('click', function () {
        score = score + diamond;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });
