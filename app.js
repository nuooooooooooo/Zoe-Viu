const hitBox = document.querySelector(".hitbox");
const stack = document.querySelector(".stack");
const images = stack.querySelectorAll(".stack-img");

let counter = 0;

console.log(images.length);

hitBox.addEventListener("mouseenter", function () {
  images.forEach((img) => {
    //   first img in stack -100px then -75, -50, -25 -0
    console.log(counter);
    img.style.transform = `translate(0px, ${counter}px)`;
    counter -= 30;
  });
});

hitBox.addEventListener("mouseout", function () {
  images.forEach((img) => {
    img.style.transform = "translate(0, 0)";
    counter = 0;
  });
});
