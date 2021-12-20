function autoAnswer() {
  // the options
  var buttons = document.getElementsByClassName("card-button")
  if (Math.random() > 0.98) {
    var t = document.getElementsByClassName("card-title")[0].textContent.split("x")
    // multiply it out
    var num = t[0] * t[1]
    // we can let it convert the type automatically
    var resultId = num == buttons[0].textContent ? 0 : num == buttons[1].textContent ? 1 : num == buttons[2].textContent ? 2 : 3
    buttons[resultId].click()
  } else {
    document.getElementsByClassName("card-button")[Math.floor(4 * Math.random())].click()
  }
  // do it again in some random-ish time
  setTimeout(autoAnswer, Math.floor(1000 * Math.random()) + 2500)
}

autoAnswer()
