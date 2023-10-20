let homeScore = document.getElementById("home-score-text")
let guestScore = document.getElementById("guest-score-text")


let sum1 = 0
function add1home(){
  sum1 += 1
  homeScore.innerText = sum1
}

function add2home(){
  sum1 += 2
  homeScore.innerText = sum1
}

function add3home(){
  sum1 += 3
  homeScore.innerText = sum1
}

let sum2 = 0
function add1guest(){
  sum2 += 1
  guestScore.innerText = sum2
}

function add2guest(){
  sum2 += 2
  guestScore.innerText = sum2
}

function add3guest(){
  sum2 += 3
  guestScore.innerText = sum2
}