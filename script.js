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
        console.log(elem.getBoundingClientRect())
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - elem.childNodes[3].getBoundingClientRect().width/2,
            y: dets.y - elem.getBoundingClientRect().y - elem.getBoundingClientRect().height + 12
        })
    })
})
}

function page3VideoAnimation() {
    var page3Icon = document.querySelector(".icon")
var video = document.querySelector("#page3 video")

page3Icon.addEventListener("click", function() {
    video.play()
    gsap.to(video, {
        opacity: 1,
        transform: "scaleX(1) scaleY(1)",
        borderRadius: 0,
        duration: 1.2
    })
})

video.addEventListener("click", function () {
    video.pause()
    gsap.to(video, {
        opacity: 0,
        transform: "scaleX(0) scaleY(0)",
    })
})
}

function page7Animation() {
    var sections = document.querySelectorAll(".sec-right")
var para = document.querySelectorAll(".sec-right p")

sections.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(dets){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()

    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})
}

navAnimaion()  

page2Animation()

page3VideoAnimation()

page7Animation()