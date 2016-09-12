var CarLot = (function(events) {
  var userInput = document.querySelector(".form-control");
  var container = document.getElementById("container");
  var clickedBio = "";
  var containerEl = "";

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
    var target = event.currentTarget;
    userInput.onkeyup = function(){
      events.setBio(target);
    }
  },
  events.setBio = function(e) {
    clickedBio = e.querySelector(".description");
    clickedBio.innerHTML = userInput.value;
  }
  return events;
})(CarLot);