let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-el")
let guestScoreEl = document.getElementById("guest-el")

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
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log(guestScoreEl.textContent)
}

function addTwoAway() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log(guestScoreEl.textContent)
}

function addThreeAway() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log(guestScoreEl.textContent)
}

function newGame() {
    
    guestScore = 0;
    guestScoreEl.textContent = 0;
    homeScore = 0;
    homeScoreEl.textContent = 0;
}