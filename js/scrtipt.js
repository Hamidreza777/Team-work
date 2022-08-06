const hamburgermenu=document.querySelector(".hamburgermenu");


hamburgermenu.addEventListener("click",()=>{
    document.querySelector(".drop").style.bottom = "290px";

})

const close=document.querySelector(".close")

close.addEventListener("click",()=>{

    document.querySelector(".drop").style.bottom = "620px";

})