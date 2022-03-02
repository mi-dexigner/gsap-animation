gsap.from('.b2 h2',{
    duration:1,
    autoAlpha:0,
    y:100,
    scale:0.5,
    scrollTrigger:{
        trigger:".b2 h2",
        //markers:true,
        //Trigger Scroller
        //start:"top bottom-=500"
        //start:"top center+=10%",
        start:"top 60%",
        //end:"bottom+=20% top%",
        end:"bottom 10%",
        // OnEnter OnLeave OnEnterBack onLeaveBack
        toggleActions:"play pasue reverse reset",
        OnEnter:()=> Console.log("ENTER"),
        OnLeave:()=> Console.log("Leave"),
        OnEnterBack:()=> Console.log("EnterBack"),
        onLeaveBack:()=> Console.log("LeaveBack"),
        scrub:0.5,
    }
})

ScrollTrigger.create({
    trigger:".b2",
    pin:true,
    markers:true,
})