"use strict";

/*--------------- Utility Functions ---------------*/
function getElement(element) {
  return document.getElementById(element);
}

function select(element) {
  return document.querySelector(element);
}

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

/*--------------- DOM Elements ---------------*/
const box1 = getElement("box1");
const box2 = getElement("box2");
const box3 = getElement("box3");

const btnColour = select(".btn-colour");
const btnCircle = select(".btn-circle");
const btnHide   = select(".btn-hide");

/*--------------- Event Listeners ---------------*/
/* Change Colour */
onEvent("click", btnColour, function () {
  box1.classList.add("change-colour");
});

/* Change Shape to Circle */
onEvent("click", btnCircle, function () {
  box2.classList.add("change-shape");
});

/* Toggle Full Opacity (Hidden) */
onEvent("click", btnHide, function () {
  box3.classList.add("hide-box");
});