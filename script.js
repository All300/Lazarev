function navAnimaion() {
    var navElem = document.querySelectorAll(".nav-elem")
var nav = document.querySelector("nav")

navElem.forEach(element => {
    element.addEventListener("mouseenter", function() {
        var tl = gsap.timeline()
    
        tl.to("#nav-bottom", {
            height: "27vh",
            duration: 0.1,
        })
        tl.to(".nav-links h5", {
            display: "block",
            duration: 0.1
        })
        tl.to(".nav-links h5 span", {
            y:0,
            stagger: {
                amount: 0.5
            }
        })
    })
});
nav.addEventListener("mouseleave", function() {
        var tl = gsap.timeline()

        gsap.to(".nav-links h5 span", {
            y:25,
            stagger: {
                amount: 0.1
            }
        })
        gsap.to(".nav-links h5", {
            display: "none",
            duration: 0.1
        })
        gsap.to("#nav-bottom", {
            height: "0vh",
            duration: 0.3
        })
});
}

navAnimaion();