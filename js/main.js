const homebar = document.getElementById("homebar");


window.addEventListener("scroll",()=>{
    const heroBottom = homebar.offsetHeight;
    if(window.scrollY >= heroBottom){
        homebar.classList.add("navbarColorScroll");
        homebar.classList.remove("navbarColor");
    }
    else{
        homebar.classList.remove("navbarColorScroll");
        homebar.classList.add("navbarColor");
    }
});

