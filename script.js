let slider = document.querySelector(".slider");
let counter = 1;
let width = slider.offsetWidth / 3;
setInterval(() => {
  if (counter > 2) {
    counter = 0;
  }
  slider.style.transform = `translateX(${-width * counter}px)`;
  counter++;
}, 4000);
