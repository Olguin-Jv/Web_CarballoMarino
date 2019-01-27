var gallery = document.getElementById('gallery-images');

var minLeft = 0,
    minCenter = 1,
    minRight = 2;

function changeIdx(arr, direction) {

    var length = arr.childElementCount;

    if (length == 3) return;

    outLeft = minLeft;
    outRight = minRight;
    left = setCenter(minLeft, length, direction, 'left');
    center = setCenter(minCenter, length, direction, 'center');
    right = setCenter(minRight, length, direction, 'right');

    console.log(`Left: [${left}], Center: [${center}] Right: [${right}].`);

    if (direction == 'next') {

        for (var i = 0; i < length; i++) {

            switch (i) {
                case outLeft:
                    arr.children[i].className = 'img min-to-out-left';
                    break;
                case left:
                    arr.children[i].className = 'img min-to-left';
                    break;
                case center:
                    arr.children[i].className = 'img min-from-right';
                    break;
                case right:
                    arr.children[i].className = 'img min-from-out-right';
                    break;

                default:
                    arr.children[i].className = 'img min-out';
                    break;
            }

        }

    }

    if (direction == 'prev') {
        console.log(outRight)
        for (var i = 0; i < length; i++) {

            switch (i) {
                case left:
                    arr.children[i].className = 'img min-from-out-left';
                    break;
                case center:
                    arr.children[i].className = 'img min-from-left';
                    break;
                case right:
                    arr.children[i].className = 'img min-to-right';
                    break;
                case outRight:
                    arr.children[i].className = 'img min-to-out-right';
                    break;
                default:
                    arr.children[i].className = 'img min-out';
                    break;
            }

        }

    }
}

function minToLeft() {
    changeIdx(gallery, 'prev');
}
function minToRight() {
    changeIdx(gallery, 'next');
}


function setCenter(idx, limit, dir, pos) {

    var num = idx;

    if (dir == 'next') {
        num++
        if (num >= limit) num = 0;
    }

    if (dir == 'prev') {
        num--;
        if (num < 0) {
            num = limit - 1;
        }

    }

    switch (pos) {
        case 'out-left':
            toOutLeft = num;
            break;
        case 'left':
            minLeft = num;
            break;
        case 'center':
            minCenter = num;
            break;
        case 'right':
            minRight = num;
            break;
        default:
            break;
    }

    return num;

}