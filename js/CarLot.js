var CarLot = (function () {
  var container = document.getElementById("container");
  var inventory = [];

  function generateCards(data) {
    var counter = 0;
    var carInfo = "";
    carInfo += "<div class='container'>";
    carInfo += "<div class='row'>";
    for (var i = 0; i < data.length; i++) {
        counter++;
        carInfo += "<div class='col-md-4'>";
          carInfo += "<div class='card'>";
            carInfo += "<article>" + data[i].make + "</article>";
            carInfo += "<section>" + data[i].model + "</section>";
            carInfo += "<section>" + data[i].year + "</section>";
            carInfo += "<section>" + "$" + data[i].price + "</section>";
            carInfo += "<section class='description'>" + data[i].description + "</section>";
          carInfo += "</div>";//close card
        carInfo += "</div>";//close col
        if (counter % 3 === 0) {
          carInfo += "</div>";//close row
          carInfo += "<div class='row'>";//create new row
        }
    }
    carInfo += "</div>";//close container
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
    },
    getInventory: function () {
      return inventory;
    }
  };
})();