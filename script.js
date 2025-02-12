
gsap.from("#logo", {
    x: -600,
    opacity: 0,
    delay: 1,
    duration: 1
})
gsap.from("#nav-items h4", {
    y: 100,
    opacity: 0,
    delay: 1.2,
    duration: 1,
    stagger: 0.5

})
gsap.from("#contact-container", {
    x: 200,
    opacity: 0,
    delay: 1,
    duration: 1
})
gsap.from("#item1", {
    x: -600,
    opacity: 0,
    delay: 2,
    duration: 1,
    stagger: 0.5

})
gsap.from("#item2", {
    x: 600,
    opacity: 0,
    delay: 2.1,
    duration: 1
})
gsap.from("#about-me h1", {
    x: 200,
    opacity: 0,
    delay: `1`,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 80%"
    }
})
gsap.from("#ab-2", {
    x: 200,
    opacity: 0,
    delay: 1.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 80%"
    }
})
gsap.from("#ab-3", {
    x: 200,
    opacity: 0,
    delay: 1.5,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",

        start: "top 80%"
    }
})
gsap.from("#ab-4", {
    x: 200,
    opacity: 0,
    delay: 1.7,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 80%"
    }
})
gsap.from("#contact-container2", {
    x: 200,
    opacity: 0,
    delay: 1.9,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 80%"
    }
})
gsap.from("#skills-h1", {
    x: 200,
    opacity: 0,
    delay: 1.7,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 20%"
    }
})
gsap.from("#projects-section #projects-animatiom", {
    y: 100,
    opacity: 0,
    delay: 2.7,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-me h1",
        scroller: "body",
        start: "top 1%"
    }
})
gsap.utils.toArray('.review-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
    });

    box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
    });
});
gsap.utils.toArray('.expertise-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
    });

    box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
    });
});
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})







