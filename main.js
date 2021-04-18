let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");

let button1 = document.querySelector(".button");
let button2 = document.querySelector(".button2");

container2.classList.add("hidden");

let clickevent1 = function () {
  //   container2.style.display;
  container1.classList.add("hidden");
  container2.classList.remove("hidden");
};
let clickevent2 = function () {
  container1.classList.remove("hidden");
  container2.classList.add("hidden");
};
button1.addEventListener("click", clickevent1);
button2.addEventListener("click", clickevent2);
