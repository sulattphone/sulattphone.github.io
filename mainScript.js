/* Managing the scroll-back-to-top button */

topIcon = document.getElementById("top-icon");
window.onscroll = function(){topIconVisible()};

// Making the topIcon appear only after scrolling down 66px
function topIconVisible(){
    if(document.body.scrollTop > 66 || document.documentElement.scrollTop > 66)
    {
        topIcon.style.display = block;
    }
    else{
        topIcon.style.display = none;
    }
}

// Scrollling back to top
function scrollToTop() {
    window.scrollTo(0,0);
}

/********************************/