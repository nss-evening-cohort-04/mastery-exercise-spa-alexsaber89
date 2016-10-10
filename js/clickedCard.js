var CarLot = (function(CarLot) {
  CarLot.resetClickStyles = function() {
    for (var k = 0; k < CarLot.cards.length; k++) {
      CarLot.cards[k].classList.remove("bigBorder");
      CarLot.cards[k].classList.remove("lightgrey");
    }
    CarLot.applyClickStylesThenFocusTextInput(event.currentTarget,"lightgrey");
  },
  CarLot.applyClickStylesThenFocusTextInput = function(clickedElement, colorClass) {
    clickedElement.classList.add("bigBorder");
    clickedElement.classList.add(colorClass);
    CarLot.userInput.focus();
    CarLot.userInput.value = "";
    CarLot.clickedCard = event.currentTarget;
  },
  CarLot.setBio = function() {
    if (CarLot.clickedCard === "") {
      alert("Please select a car first");
      CarLot.userInput.value = "";
    }
    var clickedBio = CarLot.clickedCard.querySelector(".description");
    clickedBio.innerHTML = CarLot.userInput.value;
  }
  return CarLot;
})(CarLot || {});