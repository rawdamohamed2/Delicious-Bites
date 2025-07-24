const homebar = document.getElementById("homebar");
const navLinks = document.querySelectorAll(".nav-link");
const iconimg = document.getElementById("iconimg");
const homebaricon = document.getElementById("homebaricon");
const home = document.getElementById("home");


window.addEventListener("scroll",()=>{
    const heroBottom = home.offsetHeight-homebar.offsetHeight;
    if(window.scrollY >= heroBottom){
        homebar.classList.add("navbarColorScroll");
        homebar.classList.remove("navbarColor");
        homebaricon.classList.add("homebar_iconScroll");
        homebaricon.classList.remove("homebar_icon");
        iconimg.src = "images/logo-dark.png";
        navLinks.forEach(link => {
            link.classList.add("NavlinkColorScroll");
            link.classList.remove("NavlinkColor");
        });
    }
    else{
        homebar.classList.remove("navbarColorScroll");
        homebar.classList.add("navbarColor");
        homebaricon.classList.remove("homebar_iconScroll");
        homebaricon.classList.add("homebar_icon");
        iconimg.src = "images/logo-light.png";
        navLinks.forEach(link => {
            link.classList.remove("NavlinkColorScroll");
            link.classList.add("NavlinkColor");
        });
    }
});

