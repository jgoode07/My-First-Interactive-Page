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