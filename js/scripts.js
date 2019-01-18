var menu = document.getElementById('menu-desplegable');

function toggleMenu(){

    var _className = menu.className;

    if (_className !== 'menu-in'){
        menu.className = 'menu-in';
    }else {
        menu.className = 'menu-out';
    }

}

function hideOnResize(){
    
}