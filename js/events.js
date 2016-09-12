var CarLot = (function(events) {
  var userInput = document.querySelector(".form-control");
  var container = document.getElementById("container");
  var clickedBio = "";
  var containerEl = "";
  userInput.addEventListener("keyup",CarLot.setBio);

  events.activateEvents = function() {
    containerEl = document.querySelectorAll(".card");
    for (var j = 0; j < containerEl.length; j++) {
      containerEl[j].addEventListener("click", CarLot.borderFunction);
    }
  },
  events.borderFunction = function() {
    for (var k= 0; k < containerEl.length; k++) {
      containerEl[k].classList.remove("bigBorder");
    }
    event.currentTarget.classList.add("bigBorder");
    userInput.focus();
    userInput.value = "";
    events.setBio();
  },
  events.setBio = function() {
    clickedBio = event.currentTarget.querySelector(".description");
    console.log(userInput.value);
    // var bioText = clickedBio.innerHTML;
    // console.log(bioText);
    // bioText = userInput.value;
    // clickedBio.innerHTML = userInput.value;
  }
  return events;
})(CarLot);