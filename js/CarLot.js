var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback,callback2) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        inventory = data.cars;
        callback(callback2);
      });
      inventoryLoader.open("GET","inventory.json");
      inventoryLoader.send();
    },
    getInventory: function () {
      return inventory;
    },
    generateCards: function (callback2) {
      var carDataArray = CarLot.getInventory();
      var container = document.getElementById("container");
      var counter = 0;
      var carInfo = "";
      carInfo += "<div class='container'>";
      carInfo += "<div class='row'>";
      for (var i = 0; i < carDataArray.length; i++) {
          counter++;
          carInfo += "<div class='col-md-4'>";
            carInfo += "<div class='card smallBorder'>";
              carInfo += "<article>" + carDataArray[i].make + "</article>";
              carInfo += "<section>" + carDataArray[i].model + "</section>";
              carInfo += "<section>" + carDataArray[i].year + "</section>";
              carInfo += "<section>" + "$" + carDataArray[i].price + "</section>";
              carInfo += "<section class='description'>" + carDataArray[i].description + "</section>";
            carInfo += "</div>";//close card
          carInfo += "</div>";//close col
        if (counter % 3 === 0) {
          carInfo += "</div>";//close row
          carInfo += "<div class='row'>";//create new row
        }
      }
      carInfo += "</div>";//close container
      container.innerHTML = carInfo;
      callback2();
    }
  };
})();