var CarLot = (function(CarLot) {
  CarLot.userInput = document.querySelector(".form-control");
  CarLot.container = document.getElementById("container");
  CarLot.clickedCard = "";
  CarLot.cards = "";

  CarLot.activateEvents = function() {
    CarLot.cards = document.querySelectorAll(".card");
    for (var j = 0; j < CarLot.cards.length; j++) {
      CarLot.cards[j].addEventListener("click", CarLot.resetClickStyles);
    }
    CarLot.userInput.addEventListener("keyup",CarLot.setBio);
  },
  CarLot.getClickedCard = function() {
    return CarLot.clickedCard;
  }
  return CarLot;
})(CarLot || {});