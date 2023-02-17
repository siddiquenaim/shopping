function pinGenerator() {
  const pinRandom = Math.round(Math.random() * 10000);
  const pin = pinRandom + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return pinGenerator();
  }
}

document.getElementById("btn-pin").addEventListener("click", function () {
  const pinShow = pinGenerator();
  const pinField = document.getElementById("pin-field");
  pinField.value = pinShow;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const digit = event.target.innerText;
    let calcInput = document.getElementById("calc-input");
    const prevValue = calcInput.value;
    if (isNaN(digit)) {
      if (digit === "C") {
        calcInput.value = "";
      } else if (digit === "<") {
        const digits = prevValue.split("");
        digits.pop();
        const digitsFinal = digits.join("");
        calcInput.value = digitsFinal;
      }
    } else {
      const currentValue = prevValue + digit;
      calcInput.value = currentValue;
    }
  });

// submit button
document.getElementById("verify-pin").addEventListener("click", function () {
  const pinField = document.getElementById("pin-field");
  const pinShow = pinField.value;
  let calcInput = document.getElementById("calc-input");
  const prevValue = calcInput.value;

  if (pinShow === prevValue) {
    window.location.href = "shop.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
});
