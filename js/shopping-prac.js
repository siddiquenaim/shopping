let serial = 0;
const totalProductField = document.getElementById("total-product");
const totalProductString = totalProductField.innerText;
let totalProduct = Number(totalProductString);

// td total
const tdTotalField = document.getElementById("td-total-price");
const tdTotalString = tdTotalField.innerText;
let tdTotal = Number(tdTotalString);
// first card
document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;
  totalProduct += 1;
  totalProductField.innerText = totalProduct;
  const firstName = innerTextGenerator("first-name");
  const firstPrice = innerTextGenerator("first-price");
  const firstQuantity = innerTextGenerator("first-quantity");
  const firstTotal = firstPrice * firstQuantity;

  displayData(firstName, firstPrice, firstQuantity, firstTotal);

  tdTotal = tdTotal + firstTotal;
  tdTotalField.innerText = tdTotal;
  document.getElementById("first-card").disabled = "true";
  document.getElementById("first-card").innerText = "Added to Cart";
});
// second card
document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;
  totalProduct += 1;
  totalProductField.innerText = totalProduct;
  const secondName = innerTextGenerator("second-name");
  const secondPrice = innerTextGenerator("second-price");
  const secondQuantity = innerTextGenerator("second-quantity");
  const secondTotal = secondPrice * secondQuantity;

  displayData(secondName, secondPrice, secondQuantity, secondTotal);

  tdTotal = tdTotal + secondTotal;
  tdTotalField.innerText = tdTotal;
  document.getElementById("second-card").disabled = "true";
  document.getElementById("second-card").innerText = "Added to Cart";
});
// third card
document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
  totalProduct += 1;
  totalProductField.innerText = totalProduct;
  const thirdName = innerTextGenerator("third-name");
  const thirdPrice = innerTextGenerator("third-price");
  const thirdQuantity = innerTextGenerator("third-quantity");
  const thirdTotal = thirdPrice * thirdQuantity;

  displayData(thirdName, thirdPrice, thirdQuantity, thirdTotal);

  tdTotal = tdTotal + thirdTotal;
  tdTotalField.innerText = tdTotal;
  document.getElementById("third-card").disabled = "true";
  document.getElementById("third-card").innerText = "Added to Cart";
});
// fourth card
document.getElementById("fourth-card").addEventListener("click", function () {
  serial += 1;
  totalProduct += 1;
  totalProductField.innerText = totalProduct;
  const fourthName = innerTextGenerator("fourth-name");
  const fourthPrice = innerTextGenerator("fourth-price");
  const fourthQuantity = innerTextGenerator("fourth-quantity");
  const fourthTotal = fourthPrice * fourthQuantity;

  displayData(fourthName, fourthPrice, fourthQuantity, fourthTotal);

  tdTotal = tdTotal + fourthTotal;
  tdTotalField.innerText = tdTotal;
  document.getElementById("fourth-card").disabled = "true";
  document.getElementById("fourth-card").innerText = "Added to Cart";
});
// fifth card
document.getElementById("fifth-card").addEventListener("click", function () {
  const fifthName = innerTextGenerator("fifth-name");
  const fifthPrice = valueGenerator("fifth-price");
  const fifthQuantity = valueGenerator("fifth-quantity");
  const fifthTotal = fifthPrice * fifthQuantity;

  if (isNaN(fifthPrice) || isNaN(fifthQuantity)) {
    alert("Please enter a valid number");
  } else {
    if (fifthPrice <= 0 || fifthQuantity <= 0) {
      alert("Please enter a valid number");
    } else {
      serial += 1;
      totalProduct += 1;
      totalProductField.innerText = totalProduct;
      displayData(fifthName, fifthPrice, fifthQuantity, fifthTotal);

      tdTotal = tdTotal + fifthTotal;
      tdTotalField.innerText = tdTotal;
      document.getElementById("fifth-card").disabled = "true";
      document.getElementById("fifth-card").innerText = "Added to Cart";
    }
  }
});
