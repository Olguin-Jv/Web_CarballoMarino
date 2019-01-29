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

var menuLinks = document.getElementsByClassName('burger-link')
function activateMenuButtons(){

    for (var i = 0; i < menuLinks.length; i++){
        menuLinks[i].addEventListener('click', function(e){
            toggleMenu();
        })
    }
}

var scrollIdx = 0;
function isScrolledIntoView(el) {

    if (scrollIdx == el.length) return;

    var actualElement = document.getElementById(el[scrollIdx]),
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

var menuButtons = ['btn-estudio', 'btn-servicios', 'btn-proyectos', 'btn-contacto'],
    btnSelected = '#e7205b',
    btnUnselected = '#4a4a4a';

function checkVisibleSection(elem) {

    var actualElement = document.getElementById(`mark-${elem}`),
        rect = actualElement.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    if (isVisible) {
        paintButton(`btn-${elem}`)
    }

}

function paintButton(elem) {
    for (var i = 0; i < menuButtons.length; i++) {
        if (menuButtons[i] == elem) {
            document.getElementById(menuButtons[i]).style.color = btnSelected;///TO-DO
        } else {
            document.getElementById(menuButtons[i]).style.color = btnUnselected;///TO-DO
        }
    }
}

function onResizeAction() {
    hideOnResize();
}





function onScrollAction() {
    isScrolledIntoView(['first-line', 'second-line', 'third-line']);
    checkVisibleSection('estudio');
    checkVisibleSection('servicios');
    checkVisibleSection('proyectos');
    checkVisibleSection('contacto');
}

window.onload = function(){
    activateMenuButtons();
}


var projectsIdx = 3,
    projectsContainer = document.getElementById('p-container');

function loadMore(){
    console.log('load')
    for (var i = 0; i < 4; i++){
        projectsIdx++;
        if(projectsContainer.children[projectsIdx] !== 'undefined'){
            projectsContainer.children[projectsIdx].className = 'thumbnail'
            console.log();
        } else {
            console.log('load failed')
            return
        };

    }

}