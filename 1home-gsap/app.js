const navLinks = document.querySelectorAll('nav a');
const navImage = document.querySelectorAll('nav img');
const title = document.querySelector('h1');
const verticalLine = document.querySelector('.middle-line');
const grapesLogo = document.querySelector('.home-content img');
const homeBtn = document.querySelector('.home-content button');

window.addEventListener('load',revealAnimation);

function revealAnimation(){
    const TLFADE = gsap.timeline();

    TLFADE
    .from(title,{autoAlpha:0,y:-50,delay:0.2})
    .to(verticalLine,{height:200},"-=0.2")
    .from(grapesLogo,{autoAlpha:0,y:-50},"-=0.2")
    .from(homeBtn,{autoAlpha:0,y:-50},"-=0.2")
    .from(navLinks,{autoAlpha:0,y:-50,duration:0.4,stagger:0.4},"-=0.2")
    .from(navImage,{autoAlpha:0,y:-50,duration:0.4})
}