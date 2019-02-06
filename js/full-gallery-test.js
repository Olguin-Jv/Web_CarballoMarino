/**
 * el error se debe a que para mover los elementos también se usa TRANSFORM
 * por lo tanto no mantiene su estado al cambiar entre imagenes.
 * para ello hay que crear un div que contenga la imágen y éste sea el que se mueva
 * y aplicar la rotación a la imágen que este contiene
 * para no entrar en conflicto con el TRANSFORM
 * 
 * luego solucionar el problema con el archivo full-gallery.less
 * que al parecer no compila bien
 */

var isPortrait = true;
function checkResponsiveImg() {
    
    if (!fullGalleryState) return;
    // console.log("gallery-on");
    checkOrientation();

    var elem = fullGallery.children[fullIdx];
    var customParam = elem.dataset.responsive;
    // console.log(customParam);
    if (customParam == 'false') return;
    
    // console.log('check portrait')
    // console.log(`orientation: ${isPortrait}`);

    var elemHeight = elem.getBoundingClientRect().height;
    var elemWidth = elem.getBoundingClientRect().width;
    

    if (isPortrait) {
        elem.children[0].style = 'transform: rotate(-90deg)';
        // elem.children[0].style.width = elemHeight+'px';
        // elem.children[0].style.height = elemWidth+'px';
        console.log('90deg');
    }
    if(!isPortrait){
        elem.children[0].style = 'transform: rotate(0deg)';
        elem.children[0].style.width = 'auto';
        elem.children[0].style.height = 'auto';
        console.log('0deg');
    }

    console.log(elem.children[0].getBoundingClientRect().height);

}



function checkOrientation() {
    var width = window.innerWidth,
        height = window.innerHeight;

    if (height > width) {
        isPortrait = true;
        console.log('is port');
    } else if (height < width) {
        isPortrait = false;
        console.log('is land');
    } else if (height < width) {
        isPortrait = false;
    }

    

}

checkOrientation();