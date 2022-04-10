var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    showRestaurant(this);
  }
};
xhttp.open("GET", "restaurant.xml", true);
xhttp.send();

function showRestaurant(xml) {
  let xmlDoc = xml.responseXML;
  let list_item = document.getElementById("list_item");
  let elements = xmlDoc.getElementsByTagName("restaurant");
  for (let i = 0; i < elements.length; i++) {
    let name = elements[i].attributes.getNamedItem("name").value;
    let address = elements[i].attributes.getNamedItem("address").value;
    let type = elements[i].attributes.getNamedItem("type").value;
    let makeLI = document.createElement("li");
    makeLI.appendChild(document.createTextNode(name + " " + address));
    if (type === "sitdown") {
      makeLI.classList.add("sitdown");
    } else {
      makeLI.classList.add("bar");
    }
    list_item.appendChild(makeLI);
  }
}
