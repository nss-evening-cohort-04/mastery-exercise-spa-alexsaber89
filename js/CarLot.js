var CarLot = (function () {
  var container = document.getElementById("container");
  var inventory = [];

  function generateCards(data) {
  var carInfo = "";
  for (var i = 0; i < data.length; i++) {
    carInfo += data[i].description + "<br />";
  }
  container.innerHTML = carInfo;
}

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        inventory = data.cars;
        generateCards(inventory);
      });
      inventoryLoader.open("GET","inventory.json");
      inventoryLoader.send();
    }
  };
})();