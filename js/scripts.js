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

function onResizeAction() {
    hideOnResize();
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