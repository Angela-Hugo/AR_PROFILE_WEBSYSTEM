//HEADER RESPONSIVE NAVBAR//
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

//B-CARD//
let bcard = document.getElementById("bcard");

function openbcard(){
    bcard.classList.add("open-bcard");
}
function closebcard(){
    bcard.classList.remove("open-bcard");
}

//SKILLS//
const faqs = document.querySelectorAll(".faq1");

faqs.forEach(faq1 => {
    faq1.addEventListener("click", () =>{
        faq1.classList.toggle("active");
    })
})