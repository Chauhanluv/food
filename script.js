
const services= document.querySelector(".services");
const contact1= document.querySelector(".contact1");
const about= document.querySelector(".about");



contact1.addEventListener("click",()=>{
    window.scrollTo({
        top:800,
        behavior:'smooth'
    });
});

services.addEventListener("click",()=>{
    window.scrollTo({
        top:300,
        behavior:'smooth'
    });
})


