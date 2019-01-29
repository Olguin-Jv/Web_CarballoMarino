var fullIdx;

var fullGallery = document.getElementById('gallery'),
    fullLimit = fullGallery.childElementCount;
function toFullGallery(idx) {
    document.getElementById('full-gallery').style.display = 'flex';

    for (var i = 0; i < fullGallery.childElementCount; i++) {

        switch (idx) {
            case i:
                fullGallery.children[i].className = 'full-center';
                break;
            default:
                fullGallery.children[i].className = 'full-out';
                break;
        }

    }

    fullIdx = idx;

}

var fullCanMove = true;

function changeFullImage(index, dir) {

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

}

function closeFullGallery() {
    document.getElementById('full-gallery').style.display = 'none';
}

function fullToPrev(){
    changeFullImage(fullIdx, 'prev')
}

function fullToNext(){
    changeFullImage(fullIdx, 'next')
}