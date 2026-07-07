/* ===========================
   AOS
=========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ===========================
   TYPING ANIMATION
=========================== */

const words = [
    "Frontend Developer",
    "Web Developer",
    "Machine Learning",
    "Data Science",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkMode");

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark");

    darkBtn.innerHTML="☀";

}

darkBtn.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀";

        localStorage.setItem("theme","dark");

    }else{

        darkBtn.innerHTML="🌙";

        localStorage.setItem("theme","light");

    }

}

/* ===========================
   COUNTER
=========================== */

function animateCounter(id,target){

    let count=0;

    const speed=25;

    const element=document.getElementById(id);

    const interval=setInterval(()=>{

        count++;

        element.innerHTML=count+"+";

        if(count>=target){

            clearInterval(interval);

        }

    },speed);

}

animateCounter("projectCount",25);

animateCounter("certificateCount",18);

animateCounter("experienceCount",4);

/* ===========================
   CONTACT FORM
=========================== */

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    document.getElementById("success").innerHTML=

    "✅ Terima kasih, pesan berhasil dikirim.";

    form.reset();

});

/* ===========================
   BACK TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ===========================
   NAVBAR SCROLL
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

/* ===========================
   ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===========================
   IMAGE CLICK EFFECT
=========================== */

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src);

    });

});

/* ===========================
   BUTTON HOVER EFFECT
=========================== */

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

/* ===========================
   LOADER (OPTIONAL)
=========================== */

window.addEventListener("load",()=>{

    console.log("Website berhasil dimuat.");

});