var container = document.getElementById("container");

function getJSON() {
  var data = JSON.parse(this.responseText);
  var cars = data.cars;
  generateCards(cars);
}

function generateCards(data) {
  var carInfo = "";
  for (var i = 0; i < data.length; i++) {
    carInfo += data[i].description + "<br />";
  }
  container.innerHTML = carInfo;
}



var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load",getJSON);
myRequest.open("GET","inventory.json");
myRequest.send();