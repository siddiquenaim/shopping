function innerTextGenerator(id) {
  const text = document.getElementById(id).innerText;
  return text;
}
function valueGenerator(id) {
  const text = document.getElementById(id).value;
  return text;
}

function displayData(name, price, quantity, total) {
  const container = document.getElementById("t-body");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${total}</td>
    `;

  container.appendChild(tr);
}
