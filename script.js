var popupoverlay = document.querySelector(".popupoverlay");
var popupbox = document.querySelector(".popupbox");
var addbutton = document.getElementById("add-popup-button");
var cancelbutton = document.getElementById("cancelpopup");
addbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
cancelbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var booktitle = document.getElementById("Book-title-input");
var bookauthor = document.getElementById("Book-author-input");
var bookdescription = document.getElementById("Book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick='delet(event);'>Delete</button>`;

  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
function delet(event) {
  event.target.parentElement.remove();
}
