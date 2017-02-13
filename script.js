window.addEventListener("scroll", function(event) {
    var top = this.pageYOffset;
    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

    }
});


 function getOffsetSum(elem) {
    var top=0, left=0

    while(elem) {
        top = top + parseInt(elem.offsetTop)
        left = left + parseInt(elem.offsetLeft)
        elem = elem.offsetParent       
    }
    return {top: top, left: left}

    }

window.addEventListener("scroll", function(event)
    { 
        var scrollY = this.pageYOffset;
        var lines = document.getElementsByClassName("line");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var offset = getOffsetSum(line);
            var startPositionY = offset.top - window.innerHeight;
            var endPositionY = startPositionY + 580;
            var progressY = (scrollY - startPositionY) / (endPositionY - startPositionY);
            if (progressY < 0) { progressY = 0;}
            if (progressY > 1) { progressY = 1;}
            line.style.width = (100*progressY) + '%';


        }
    });






function mapRange(value, inStart, inEnd, outMin, outMax)
{
    return outMin + (outMax - outMin) / (inEnd - inStart) * (value - inStart);
};

function handleMouseMove(x, y, element) {
    var moveX = 0;
    var moveY = 0;
    var maxX = parseFloat(element.getAttribute('data-x')) || 50;
    var maxY = parseFloat(element.getAttribute('data-y')) || 50;
    var winW = window.innerWidth;
    var winH = window.innerHeight;

    moveX = mapRange(x, 0, winW, -maxX, maxX);
    moveY = mapRange(y, 0, winH, -maxY, maxY);

    element.style.transform = 'translate3d('  + moveX + 'px, ' + moveY + 'px, 0)';
    element.style.WebkitTransform = 'translate3d('  + moveX + 'px, ' + moveY + 'px, 0)';
}

var elements = document.querySelectorAll('.mousemotion');

for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];

    window.addEventListener('mousemove', function(element, event){
        handleMouseMove(event.clientX, event.clientY, element);
    }.bind(this, element), false);
}