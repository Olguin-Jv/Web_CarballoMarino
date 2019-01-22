var menu = document.getElementById('menu-desplegable');

function toggleMenu() {

    var _className = menu.className;

    if (_className !== 'menu-in') {
        menu.className = 'menu-in';
    } else {
        menu.className = 'menu-out';
    }

}

function hideOnResize() {
    var _className = menu.className;

    if (_className == 'menu-in' && window.innerWidth >= 780) {
        menu.className = 'menu-out';
    }

}

var scrollIdx = 0;
function isScrolledIntoView(el) {

    if (scrollIdx == el.length) return;

    var actualElement =  document.getElementById(el[scrollIdx]),
    rect = actualElement.getBoundingClientRect(),
    elemTop = rect.top,
    elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    if (isVisible) {
        // document.getElementById(el[scrollIdx]).className = 'line-in';
        console.log(actualElement);
        scrollIdx++;
    }
}

function onResizeAction() {
    hideOnResize();
}

function onScrollAction() {
    isScrolledIntoView(['first-line', 'second-line', 'third-line'])
}