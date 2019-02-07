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
        elem.style.width = aspect +'px'; //CHECK
        elem.children[0].style = 'transform: rotate(-90deg)';
        // elem.children[0].style.width = `${elemHeight}px`;
        // elem.children[0].style.height = `initial`;
        console.log('90deg');
    }
    if(!isPortrait){        
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