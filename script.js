let tl = gsap.timeline();

tl.from("#nav h1,#nav #nav-part2,#nav h4", {
    y:-80,
    opacity:0,
    delay:0.5,
    stagger:0.5
})


tl.from("#container #left h1, #right img", {
    x:-500,
    duration:1,
    opacity:0,
    stagger:1
})

tl.from("#page2 .box", {
    x:-500,
    opacity:0,
    duration:2,
    stagger:true,
    srollTrigger: {
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 30%",
        srub:2
    } 
})