var gallery = document.getElementById('gallery'), // gallery container name
    dotsContainer = document.getElementById('counter'),
    idx = 0,
    canMove = true,
    canMoveInterval = 1500,
    limit = gallery.childElementCount;

function changeImg(direction) {

    if (direction == 'next' && canMove) {
        var current = idx,
            next = idx + 1;

        if (next == limit) {
            next = 0;
            gallery.children[current].className = 'toLeft';
            gallery.children[next].className = 'fromRight';
            dotsContainer.children[current].className = 'dot-off';
            dotsContainer.children[next].className = 'dot-on';
            idx = 0;
        }
        else {
            gallery.children[current].className = 'toLeft';
            gallery.children[next].className = 'fromRight';
            dotsContainer.children[current].className = 'dot-off';
            dotsContainer.children[next].className = 'dot-on';
            idx++
        }

        canMove = false;
        setTimeout(function () { canMove = true }, canMoveInterval);
        restartAutoScroll();
    }

    if (direction == 'prev' && canMove) {
        var current = idx,
            next = idx - 1;

        if (current == 0) {
            next = limit - 1;
            gallery.children[current].className = 'toRight';
            gallery.children[next].className = 'fromLeft';
            dotsContainer.children[current].className = 'dot-on';
            dotsContainer.children[next].className = 'dot-off';
            idx = limit - 1;
        }
        else {
            gallery.children[current].className = 'toRight';
            gallery.children[next].className = 'fromLeft';
            dotsContainer.children[current].className = 'dot-on';
            dotsContainer.children[next].className = 'dot-off';
            idx--
        }

        canMove = false;
        setTimeout(function () { canMove = true }, canMoveInterval);
        restartAutoScroll();
    }

}

for (var i = 0; i < limit; i++) {
    var dot = document.createElement('div');
    dot.className = 'dot-off';
    dotsContainer.appendChild(dot);
}

dotsContainer.children[idx].className = 'dot-on';

function restartAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(function () {
        changeImg('next');
    }, 5000);
}

var autoScroll = setInterval(function () {
    changeImg('next');
}, 5000);