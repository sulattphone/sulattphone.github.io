/* Managing the scroll-back-to-top button */

topScrollIcon = document.getElementById("top-icon");
window.onscroll = function(){topIconVisible()};

// Making the topIcon appear only after scrolling down 66px
function topIconVisible() {
    if(window.body.scrollTop > 66 || window.documentElement.scrollTop > 66)
    {
        topScrollIcon.style.display = block;
    }
    else{
        topScrollIcon.style.display = none;
    }
}

// Scrollling back to top
function scrollToTop() {
    window.scrollTo(0,0);
}

/********************************/