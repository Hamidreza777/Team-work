const hamburgermenu = document.querySelector(".hamburgermenu");
const body = document.querySelector("body");

hamburgermenu.addEventListener("click", () => {
  document.querySelector(".drop").style.top = "0%";
  document.querySelector(".op").style.filter = " blur(10px)";
  body.style.overflow="hidden";
  
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  document.querySelector(".drop").style.top = "-300%";
  document.querySelector(".op").style.filter = " blur(0px)";
  body.style.overflow="scroll";

});
