


document.addEventListener('DOMContentLoaded', function(){





/********** NAVBAR SENZA BOOTSTRAP **********/
document.addEventListener('click', clickFunc, false);

let navState = false;

function clickFunc(e){

    let nav = document.querySelector('nav');

    if (e.target.href === undefined) {
        e.target.classList.toggle('active');
        if (e.target.id === 'toggleNav') {

            if ( navState === false) {
              
                nav.style.display = 'block';
            } else {
              
                nav.style.display = 'none';
            }
            navState = !navState;
        }
    } else {  

    var goToId = e.target.hash.slice(1);

        if ( goToId !== "" ) {

            smoothScroll(document.getElementById(goToId))
            navState = false;
            nav.style.display = 'none';
            let toggleNav = document.querySelector('#toggleNav');
            toggleNav.classList.toggle('active');
        }
    }
}


window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
/********** END NAVBAR SENZA BOOTSTRAP **********/









})