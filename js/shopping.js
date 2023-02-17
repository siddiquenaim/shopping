// for first card

let serial = 0;
document.getElementById("first-card").addEventListener("click", function () {
  // get the data from html using id
  serial += 1;
  const firstElement = document.getElementById("first-name");
  const firstName = firstElement.innerText;
  const firstElementPrice = document.getElementById("first-price");
  const firstPrice = firstElementPrice.innerText;
  const firstElementQuantity = document.getElementById("first-quantity");
  const firstQuantity = firstElementQuantity.innerText;

  const priceTotal = parseInt(firstPrice) * parseInt(firstQuantity);
  displayData(firstName, firstPrice, firstQuantity, priceTotal);

  document.getElementById("first-card").disabled = true;
  const btn = document.getElementById("first-card");
  btn.innerText = "ITEM ADDED TO CART";
});

// using event object from browser
document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  const secondName = e.target.parentNode.parentNode.children[0].innerText;
  const secondPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const secondQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  const priceTotal = parseInt(secondPrice) + parseInt(secondQuantity);
  displayData(secondName, secondPrice, secondQuantity, priceTotal);

  document.getElementById("second-card").disabled = true;
  const btn = document.getElementById("second-card");
  btn.innerText = "ITEM ADDED TO CART";
});

document
  .getElementById("third-card")
  .addEventListener("click", function (e) {});

// common function to display data
function displayData(firstName, firstPrice, firstQuantity, priceTotal) {
  //   set the data
  const container = document.getElementById("t-body");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${firstName}</td>
  <td>${firstPrice}</td>
  <td>${firstQuantity}</td>
  <td>${priceTotal}</td>
  `;

  container.appendChild(tr);
}
