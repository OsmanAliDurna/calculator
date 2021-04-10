const text = (document.getElementById("processes").style.visibility = "hidden");
const screen = document.getElementById("screen");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button10 = document.querySelector(".button10");
const button11 = document.querySelector(".button11");
const button12 = document.querySelector(".button12");
const button13 = document.querySelector(".button13");
const button14 = document.querySelector(".button14");
const button15 = document.querySelector(".button15");
const button16 = document.querySelector(".button16");
const button17 = document.querySelector(".button17");
const button18 = document.querySelector(".button18");
const button19 = document.querySelector(".button19");

button1.addEventListener("click", resetText);
button2.addEventListener("click", changeSign);
button3.addEventListener("click", percentage);
button4.addEventListener("click", divide);
button8.addEventListener("click", multiply);
button12.addEventListener("click", subtract);
button16.addEventListener("click", add);
button19.addEventListener("click", isEqual);
button5.addEventListener("click", write7);
button6.addEventListener("click", write8);
button7.addEventListener("click", write9);
button9.addEventListener("click", write4);
button10.addEventListener("click", write5);
button11.addEventListener("click", write6);
button13.addEventListener("click", write1);
button14.addEventListener("click", write2);
button15.addEventListener("click", write3);
button17.addEventListener("click", write0);
button18.addEventListener("click", writeComma);

let selectedProcess = 0;
let containFirstNumber = 0;
let containSecondNumber = Infinity;

function resetText() {
  text.value = "";
  screen.value = "";
  selectedProcess = 0;
  containFirstNumber = 0;
  containSecondNumber = Infinity;
}

function changeSign() {
  screen.value = screen.value == "" ? 0 : parseInt(screen.value) * -1;
}

function percentage() {
  screen.value = screen.value == "" ? 0 : parseInt(screen.value) / 100;
}

function divide() {
  screen.value = screen.value.replace(",", ".");
  if (screen.value == "") {
    if (text.value == "") {
      text.value = 0;
    } else {
      text.value = text.value.substr(0, text.value.length - 1) + "/";
    }
  } else {
    text.value = screen.value + "/";
  }

  if (containFirstNumber == 0) {
    containFirstNumber = screen.value;
  } else containSecondNumber = screen.value;

  screen.value = "";
  selectedProcess = 1;
}

function multiply() {
  screen.value = screen.value.replace(",", ".");
  if (screen.value == "") {
    if (text.value == "") {
      text.value = 0;
    } else {
      text.value = text.value.substr(0, text.value.length - 1) + "x";
    }
  } else {
    text.value = screen.value + "x";
  }

  if (containFirstNumber == 0) {
    containFirstNumber = screen.value;
  } else containSecondNumber = screen.value;

  screen.value = "";
  selectedProcess = 2;
}

function subtract() {
  screen.value = screen.value.replace(",", ".");
  if (screen.value == "") {
    if (text.value == "") {
      text.value = 0;
    } else {
      text.value = text.value.substr(0, text.value.length - 1) + "-";
    }
  } else {
    text.value = screen.value + "-";
  }

  if (containFirstNumber == 0) {
    containFirstNumber = screen.value;
  } else containSecondNumber = screen.value;

  screen.value = "";
  selectedProcess = 3;
}

function add() {
  screen.value = screen.value.replace(",", ".");
  if (screen.value == "") {
    if (text.value == "") {
      text.value = 0;
    } else {
      text.value = text.value.substr(0, text.value.length - 1) + "+";
    }
  } else {
    text.value = screen.value + "+";
  }

  if (containFirstNumber == 0) {
    containFirstNumber = screen.value;
  } else containSecondNumber = screen.value;

  screen.value = "";
  selectedProcess = 4;
}

function isEqual() {
  screen.value = screen.value.replace(",", ".");
  if (screen.value == "") {
    if (text.value == "") {
      text.value = 0;
    } else {
      text.value = text.value.substr(0, text.value.length - 1) + "=";
    }
  } else {
    text.value += "=";
  }

  if (containFirstNumber == 0) {
    containFirstNumber = screen.value;
  } else containSecondNumber = screen.value;

  whichProcess();
}

function whichProcess() {
  if (selectedProcess == 1) {
    containFirstNumber =
      parseFloat(containFirstNumber) /
      parseFloat(containSecondNumber == Infinity ? 1 : containSecondNumber);
  } else if (selectedProcess == 2) {
    containFirstNumber =
      parseFloat(containFirstNumber) *
      parseFloat(containSecondNumber == Infinity ? 1 : containSecondNumber);
  } else if (selectedProcess == 3) {
    containFirstNumber =
      parseFloat(containFirstNumber) -
      parseFloat(containSecondNumber == Infinity ? 0 : containSecondNumber);
  } else if (selectedProcess == 4) {
    containFirstNumber =
      parseFloat(containFirstNumber) +
      parseFloat(containSecondNumber == Infinity ? 0 : containSecondNumber);
  }
  screen.value = containFirstNumber;
}

function writeComma() {
  text.value += ",";
  screen.value != "" ? (screen.value += ",") : (screen.value = ",");
}

function write0() {
  nmb = 0;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}

function write1() {
  nmb = 1;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write2() {
  nmb = 2;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write3() {
  nmb = 3;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write4() {
  nmb = 4;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write5() {
  nmb = 5;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write6() {
  nmb = 6;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write7() {
  nmb = 7;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write8() {
  nmb = 8;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
function write9() {
  nmb = 9;
  text.value += nmb;
  screen.value != "" ? (screen.value += nmb) : (screen.value = nmb);
}
