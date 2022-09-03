var scrolldelay;

function pageScroll() {
    window.scrollBy(0,1); // horizontal and vertical scroll increments
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {       
        setTimeout('PageUp()',2000);
    }
}

function PageUp() {
    clearInterval(scrolldelay)
    window.scrollTo(0, 0);
    scrolldelay = setInterval('pageScroll()',1);
}

scrolldelay = setInterval('pageScroll()',1); // scrolls every 100 milliseconds