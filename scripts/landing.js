var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
    point.style.opactiy = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scale(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
    forEach(points, revealPoint);
 };

window.onload = function() {
    if window.innerHeight > 950) {
       animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addeventListener("scroll", function(event) {
        console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
        if(document.documentElementscrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}