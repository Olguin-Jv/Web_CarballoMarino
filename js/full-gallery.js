var fullIdx;

var fullGallery = document.getElementById('gallery'),
    fullLimit = fullGallery.childElementCount;

function toFullGallery(idx) {
    document.getElementById('full-gallery').style.display = 'flex';
    
    for (var i = 0; i < fullGallery.childElementCount; i++) {

        switch (i) {
            case idx:
                fullGallery.children[i].className = 'full-center';
                break;
            default:
                fullGallery.children[i].className = 'full-out';
                break;
        }
    }
    fullIdx = idx;
    fullGalleryState = true;
    checkResponsiveImg();
}

var fullCanMove = true;
var fullGalleryState = false
function changeFullImage(index, dir) {

    fullGalleryState = true;

    if (!fullCanMove) return;
    fullCanMove = false;
    setTimeout(function(){fullCanMove = true}, 1500);

    prevImg = index;
    nextImg = index;

    if (dir == 'next') {
        nextImg++
        if (nextImg >= fullLimit) {
            nextImg = 0;
        }
        fullGallery.children[prevImg].className = 'full-to-left';
        fullGallery.children[nextImg].className = 'full-from-right';
    }
    
    if (dir == 'prev') {
        nextImg--
        if (nextImg < 0) {
            nextImg = fullLimit - 1;
        }
        fullGallery.children[prevImg].className = 'full-to-right';
        fullGallery.children[nextImg].className = 'full-from-left';

    }
    fullIdx = nextImg;
    checkResponsiveImg()
}

function closeFullGallery() {
    document.getElementById('full-gallery').style.display = 'none';
    fullGalleryState = false;
}

function fullToPrev(){
    changeFullImage(fullIdx, 'prev')
}

function fullToNext(){
    changeFullImage(fullIdx, 'next')
}


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
        var aspect = window.innerHeight * 80 / 100;
        elem.style.width = aspect + 'px'; //CHECK
        elem.children[0].style = 'transform: rotate(-90deg)';
        // elem.children[0].style.width = `${elemHeight}px`;
        // elem.children[0].style.height = `initial`;
        console.log('90deg');
    }
    if (!isPortrait) {
        elem.style = '100%';
        elem.children[0].style = 'transform: rotate(0deg)';
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

//----------------------------------------------------------------------//

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            console.log('left')
            fullToPrev();
            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            console.log('right');
            fullToNext();
            break;
        case "Esc": // IE/Edge specific value
        case "Escape":
            console.log('escape');
            closeFullGallery();
            // Do something for "esc" key press.
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    event.preventDefault();
}, true);

//para responsivear las imágenes.
//colocar clases a las etiquetas img. cosa de ubicarlas con el mismo index de la imágen
//usar custom data para chequear si la img necesita responsivear o no