var r = document.querySelector(".box");


r.addEventListener("mousemove", function(details){
var rectangleLocation = r.getBoundingClientRect();
var insiderectval = details.clientX - rectangleLocation.left;

if(insiderectval<rectangleLocation.width/2){
var redcolor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insiderectval);
gsap.to(r, {
    backgroundColor:`rgb(${redcolor}, 0, 0)`,
    ease: Power4,
})
}
else{
    var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insiderectval);
    gsap.to(r, {
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease: Power4,
    })
}
});


