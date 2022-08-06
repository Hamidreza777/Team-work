const hamburgermenu = document.querySelector(".hamburgermenu");
const body = document.querySelector("body");

hamburgermenu.addEventListener("click", () => {
  document.querySelector(".drop").style.bottom = "290px";
  document.querySelector(".op").style.filter = " blur(10px)";
  body.style.overflow="hidden";
  
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  document.querySelector(".drop").style.bottom = "620px";
  document.querySelector(".op").style.filter = " blur(0px)";
  body.style.overflow="scroll";

});
