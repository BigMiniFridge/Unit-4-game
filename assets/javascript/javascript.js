var goal = "";
var wins = 0;
var losses = 0;
var score = 0;
var images = ['assets/images/sapphire.png', 'assets/images/emerald.png', 'assets/images/ruby.png', ' assets/images/diamond.png'];

function randomGoal() {
    goal = Math.floor(Math.random() * 102) + 19;
}


function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".crystals").append(crystal);
    }

}


function resetHtml() {
    $('.goalNumber').html("<p>Goal:" + " " + goal + "</p>");
    $('.winsLosses').html("<p>Wins:" + wins + "</p>" + "<p>Losses:" + losses + "</p>");
    $('.score').html("<p>Score:" + " " + score + "</p>");
    $('.crystals').empty();
}

function resetGame() {
    randomGoal();
    score = 0;
    resetHtml();
    resetCrystals();
}

randomGoal();
resetHtml();
resetCrystals();

function crystalButton() {
    score += parseInt($(this).attr("value"));
    $(".score").html(score);
    if (score == goal) {
        winner();
        resetGame();
    }
    else if (score > goal) {
        loser();
        resetGame();
    }
}

function winner() {
    alert("You Win");
    wins++;
}

function loser() {
    alert("You Lose");
    losses++;
}

$(document).on('click', ".crystal", crystalButton);
