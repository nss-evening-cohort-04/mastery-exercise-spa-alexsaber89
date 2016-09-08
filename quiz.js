function getJSON() {
	var data = JSON.parse(this.responseText);
	console.log(data);
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load",getJSON);
myRequest.open("GET","inventory.json");
myRequest.send();