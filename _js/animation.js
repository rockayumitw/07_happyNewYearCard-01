//貝茲曲線
//https://greensock.com/docs/v3/Eases
var  flower= $('.flower-big');

flower.each(function(index,elem){
    TweenLite.set(elem,{
        transformOrigin:"4px 50px",
        opacity:0,
        scale:0,
        rotation:90 + (index * 70), 
        onComplete:flowerOpen
    })
})

function flowerOpen(){
    gsap.to(".flower-bottom-01 .flower-big", 1.5, {
        duration:1,
        opacity:1,
        scale:1,
        stagger:0.5,
        ease: "power1.in",
        onComplete:flowerClose
    });
    gsap.to('.flower-bottom-02 .flower-big', 1.5, {
        duration:1,
        delay:1,
        opacity:1,
        scale:1,
        stagger:0.5,
        ease: "power1.in",
        onComplete:flowerClose
    });
    gsap.to('.flower-bottom-03 .flower-big', 1.5, {
        duration:1,
        delay:1.5,
        opacity:1,
        scale:1,
        stagger:0.5,
        ease: "power1.in",
        onComplete:flowerClose
    });
    gsap.to('.flower-bottom-04 .flower-big', 1.5, {
        duration:1,
        delay:0,
        opacity:0.5,
        scale:1,
        stagger:0.5,
        ease: "power1.in",
        onComplete:flowerClose
    });
}

function flowerClose(){
    gsap.to(".flower-big", 1.5, {
        duration:1,
        opacity:0,
        scale:0,
        stagger:0.5,
        ease: "power1.in",
        onComplete:flowerOpen
    });
}


gsap.to(".lamp.lamp-left", 2, {
    duration: 0,
    rotate:0,
    ease: "back.out(1.5)",
});

gsap.to(".lamp.lamp-right", 2, {
    duration: 0,
    rotate:0,
    ease: "back.out(1.5)",
});

gsap.to(".lamp.lamp-center", 2, {
    duration: 0,
    rotate:0,
    ease: "back.out(1.5)",
    onComplete:rotateLampBack
});

function rotateLampBack(){
    gsap.to(".lamp.lamp-center", 5, {
        duration: 0,
        rotateY:180,
        // opacity: 1,
        // delay: 4,
        // className:"+=lamp lamp-center active",
        ease: "back.out(1.5)",
        onComplete:rotateLampFront
    });
    setTimeout(function(){
        $('.lamp.lamp-center').addClass('active')
    },700)
}

function rotateLampFront(){
    gsap.to(".lamp.lamp-center", 5, {
        duration: 0,
        rotateY:0,
        // className:"+=lamp lamp-center",
        // opacity: 0,
        // delay: 4,
        ease: "back.out(1.5)",
        onComplete:rotateLampBack
    });
    setTimeout(function(){
        $('.lamp.lamp-center').removeClass('active')
    },700)
}
