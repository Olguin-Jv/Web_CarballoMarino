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


//para responsivear las imágenes.
//colocar clases a las etiquetas img. cosa de ubicarlas con el mismo index de la imágen
//usar custom data para chequear si la img necesita responsivear o no