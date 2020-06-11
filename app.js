//variable declarations
const display = document.querySelector("#display");

// display clicked values
function displayValue(value) {
  if (display.innerHTML == 0) {
    if (
      value == "+" ||
      value == "-" ||
      value == "/" ||
      value == "*" ||
      value == "."
    ) {
      display.innerHTML = display.innerHTML + value;
    } else {
      if (display.innerHTML[display.innerHTML.length - 1] == ".") {
        display.innerHTML = display.innerHTML + value;
      } else {
        display.innerHTML = value;
      }
    }
  } else {
    //check to stop entering of two consecutive decimal points
    if (
      (display.innerHTML[display.innerHTML.length - 1] == "." &&
        value == ".") ||
      display.innerHTML.length >= 9
    ) {
      display.innerHTML = display.innerHTML;
    } else {
      display.innerHTML = display.innerHTML + value;
    }
  }
}
function calculate() {
  let result = eval(display.innerHTML);
  clearDisplay();
  result = result.toString().length > 8 ? result.toFixed(3) : result;
  display.innerHTML = result;
}

//reset display
function clearDisplay() {
  display.innerHTML = 0;
}

//adding keyboard feature
document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "/":
    case "*":
    case "+":
    case "-":
      displayValue(e.key);
      break;
    case "Enter":
      calculate();
      break;
    case "c":
      clearDisplay();
    default:
  }
});
