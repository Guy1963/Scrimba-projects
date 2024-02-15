let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementById("home-el")
let awayScoreEl = document.getElementById("guest-el")

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
}

function addOneAway() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
    console.log(awayScoreEl.textContent)
}

function addTwoAway() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
    console.log(awayScoreEl.textContent)
}

function addThreeAway() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
    console.log(awayScoreEl.textContent)
}

function newGame() {
    
    awayScore = 0;
    awayScoreEl.textContent = 0;
    homeScore = 0;
    homeScoreEl.textContent = 0;
}