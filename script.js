var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
});

tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function () {
            if (grow <= 100) {
                h5timer.innerHTML = grow++;
            }
            else {
                grow = 100;
            }
        }, 33);
    }
});

tl.to(".line h2",{
    animationName:'anime',
    opacity:'1',
})

tl.to("#loader", {
    opacity: 0,
    duration: .2,
    delay: 3,
});

tl.from("#page1",{
    y:1600,
    delay:.2,
    duration:.5,
    opacity:0,
    ease:Power4,
})

tl.to("#loader", {
    display:'none',
})