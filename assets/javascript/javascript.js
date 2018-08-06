$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').html(random);

    var goalNumber = 0;
    var wins = 0;
    var losses = 0;
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    $('#numberWins').text(wins);
    $('numberLosses').text(losses);

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $('#randomNumber').text(random);
        var num1 = Math.floor(Math.random() * 11 + 1);
        var num2 = Math.floor(Math.random() * 11 + 1);
        var num3 = Math.floor(Math.random() * 11 + 1);
        var num4 = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $('#totalScore').text(score);

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

    $('#one').click( function () {
        score = score + num1;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#two').on( function () {
        score = score + num1;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#three').on( function () {
        score = score + num1;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });

    $('#four').click( function () {
        score = score + num1;
        console.log("New score= " + score);
        $('#totalScore').text(score);
        if (score === random) {
            winner();
        }
        else if (score > random) {
            loser();
        }
    });
});