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

function page8Animation() {
    var page8Videos = document.querySelectorAll(".page8-down video")
    var page8Contents = document.querySelectorAll(".page8-content")

    page8Videos.forEach(function(elem, i) {
        elem.addEventListener("mouseenter", function() {
            var tl1 = gsap.timeline()
                tl1.to(elem, {
                    opacity: 1,
                    duration: 0
                })
                tl1.to(elem, {
                    height: "100%",
                    duration: 0.4
                })
                gsap.to(page8Contents[i], {
                    borderTop: "2px solid #111",
                    duration: 0.1
                })
            elem.play()
        })
        elem.addEventListener("mouseleave", function() {
            var tl2 = gsap.timeline()
                tl2.to(elem, {
                    height: "65%",
                    duration: 0.4
                })
                tl2.to(elem, {
                    opacity: 0,
                    duration: 0
                })
                gsap.to(page8Contents[i], {
                    borderTop: "1px solid #dcdcdc",
                    duration: 0.1
                })
            elem.pause()
            elem.currentTime = 0
        })
    })
}

function page10Details(){
    var headingIcons = document.querySelectorAll(".heading i")
var details = document.querySelectorAll("details")

details.forEach(function(elem,i) {
    elem.addEventListener("toggle", function(event){
        if(elem.open){
            headingIcons[i].classList.remove("ri-arrow-down-s-line")
            headingIcons[i].classList.add("ri-arrow-up-s-line")
        }
        else {
            headingIcons[i].classList.remove("ri-arrow-up-s-line")
            headingIcons[i].classList.add("ri-arrow-down-s-line")
        }
    })
});
}

function page10Animation() {
    var page10Elem = document.querySelectorAll(".page10-elem")
    var over = document.querySelectorAll(".over")

    page10Elem.forEach(function(elem, i) {
        elem.addEventListener("mouseenter", function() {
            gsap.to(over[i], {
                y:"0%",
                opacity: 1,
                duration: 0.1
            })
        })
    })
    page10Elem.forEach(function(elem, i) {
        elem.addEventListener("mouseleave", function() {
            var tl = gsap.timeline()
            tl.to(over[i], {
                y: "100%",
                duration: 0.1
            })
            tl.to(over[i],{
                opacity: 0,
                duration: 0.3
            })
            tl.to(over[i], {
                y: "-100%",
                duration:0
            })
        })
    })
}

navAnimaion()    

page2Animation()

page3VideoAnimation()

page7Animation()

page8Animation()

page10Animation()

page10Details()