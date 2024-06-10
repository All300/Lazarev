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

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(dets) {
        console.log(dets.x)
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave", function() {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove", function(dets) {
        console.log(dets.y)
        console.log(elem.getBoundingClientRect())
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - elem.childNodes[3].getBoundingClientRect().width/2,
            y: dets.y - elem.getBoundingClientRect().y - elem.getBoundingClientRect().height + 12
        })
    })
})
}

navAnimaion();   

page2Animation()