console.log(gsap);
/* GSAP gsap.to Method */
//gsap.to('.img1',{x:100,y:100,rotation:45,backgroundColor:'red',duration:2});

//const img1 = document.querySelector('.img1');
//gsap.to(img1,{x:100,y:100,rotation:"45deg",backgroundColor:'red',duration:2});

//const index =1;
//gsap.to(`.img${index}`,{x:100,y:100,rotation:"45deg",backgroundColor:'red',duration:2});

/* GSAP gsap.from Method */

//const img1 = document.querySelector('.img1');
//gsap.from(img1,{y:-300})
//gsap.from(img1,{opacity:0,duration:2})
//gsap.from(img1,{autoAlpha:0,duration:2})
//gsap.from(img1,{autoAlpha:0,rotation:45,scale:0.5,x:100,y:-100,duration:2})

//document.querySelector('.btn').addEventListener('click',()=>{
//gsap.from(img1,{autoAlpha:0,duration:3});

//})

/* GSAP gsap.fromTo Method */
//const img1 = document.querySelector('.img1');
//document.querySelector('.btn').addEventListener('click',()=>{
//gsap.fromTo(img1,{autoAlpha:0},{autoAlpha:1,duration:3});
//})

/* 004 The Easing with GSAP */

//const img1 = document.querySelector('.img1');
//gsap.from(img1,{autoAlpha:0,y:-100,rotation:90,ease:"power4.out",duration:2});
//gsap.from(img1,{autoAlpha:0,y:-100,rotation:90,ease:"power4.in",duration:2});
//gsap.from(img1,{autoAlpha:0,y:-100,rotation:90,ease:"power4.inOut",duration:2});
//gsap.from(img1,{autoAlpha:0,y:-100,rotation:90,ease:"back.out(1.7)",duration:2});
//gsap.from(img1,{autoAlpha:0,y:-100,rotation:90,ease:"bounce",duration:2.5});


/* Utility props  */
//const img1 = document.querySelector('.img1');
//gsap.from(img1,{
//    autoAlpha:0,
//    y:-100,
//    rotation:90,
//    ease:"bounce",
//    duration:2.5,
    
//    pause:true,
//    delay:0.5,
//    repeat:-1,
//    repatDelay:0.2,
//    yoyo:true,
//});

/* Stagger Property */

/*
gsap.from('img',{
    autoAlpha:0,
    y:-100,
    ease:"power4",
    duration:2.5,
    
    //stagger:0.2
    stagger:{
        each:0.5,
        //from:"end",
        from:"center",
        //amount:1
    }
   
});*/

/*Animate random values */
/*const img1 = document.querySelector('.img1');
gsap.to('.btn',
{
    duration:0.4,
    stagger:0.2,
    //x:"random(-100,100)"
    //x:"random(-100,100,10)"
    x:"random([20,50,80,-90,-50])"
});*/

/* Keyframes */
//const img1 = document.querySelector('.img1');
//gsap.to(img1,{x:100})
//gsap.to(img1,{y:100})
//gsap.to(img1,{x:200})
/*gsap.to(img1,{ keyframes:[
        {duration:0.3,x:100},
        {duration:0.3,y:100},
        {duration:0.3,x:200},
    ]})*/

/*  Trigger some event callbacks */

/*
const img1 = document.querySelector('.img1');
gsap.to(img1,{
    x:100,
    duration:1,
    repeat:1,
    onComplete:()=> console.log("Complete"),
    onStart:()=> console.log("Start"),
    onUpdate:()=> console.log("Update"),
    onRepeat:()=> console.log("Repeat"),
})*/


/* How to save a tween  */
/*const img1 = document.querySelector('.img1');
gsap.registerEffect({
    name:"imgAnimation",
    effect:(targets,config)=>{
        return gsap.to(targets,{
            duration:config.duration,
            y:200,
            scale:1.4,
            rotation:360
        })
    },
    default:{duration:2}
})

gsap.effects.imgAnimation(img1,{duration:2})
gsap.effects.imgAnimation('.img2',{duration:4})
gsap.effects.imgAnimation(".img3",{duration:6})*/

/* Set some values  */
/*const img1 = document.querySelector('.img1');

gsap.set(img1, {opacity:0})*/

/* The utility methods of the tweens */
/*const img1 = document.querySelector('.img1');
//const tween = gsap.to('.img2',{y:200,paused:true});
//const tween = gsap.to('.img2',{y:200});
const tween = gsap.to('.img2',{y:200,duration:5,pause:true});

//tween.kill()
//tween.delay(1)
//tween.duration(5)
setTimeout(()=>{
//    tween.resume();
tween.seek(2.5);
tween.play();
})*/

/* Timeline */
/*  Setting up a Timeline */
/*const TL = gsap.timeline();
TL
.from('.img1', {duration: 1, autoAlpha:0,y:-50})
.from('.img2', {duration: 1, autoAlpha:0,y:-50})
.from('.img3', {duration: 1, autoAlpha:0,y:-50})
.from('h1', {duration: 1, autoAlpha:0,y:-50})
.from('p', {duration: 1, autoAlpha:0,y:-50})*/

/* The position parameters  */
//const TL = gsap.timeline();
//TL
//.from('.img1', {duration: 1, autoAlpha:0,y:-50})
//.from('.img2', {duration: 1, autoAlpha:0,y:-50},'-=0.75')
//.from('.img3', {duration: 1, autoAlpha:0,y:-50},'-=0.75')
//.from('h1', {duration: 1, autoAlpha:0,y:-50},'-=0.75')
//.from('p', {duration: 1, autoAlpha:0,y:-50},'-=0.75')

//TL
//.from('.img1', {duration: 1, autoAlpha:0,y:+50})
//.from('.img2', {duration: 1, autoAlpha:0,y:+50},'-=0.75')
//.from('.img3', {duration: 1, autoAlpha:0,y:+50},'-=0.75')
//.from('h1', {duration: 1, autoAlpha:0,y:+50},'-=0.75')
//.from('p', {duration: 1, autoAlpha:0,y:+50},'-=0.75')

//TL
//.from('.img1', {duration: 1, autoAlpha:0,y:-50})
//.from('.img2', {duration: 1, autoAlpha:0,y:-50},3)
//.from('.img3', {duration: 1, autoAlpha:0,y:-50})
//.from('h1', {duration: 1, autoAlpha:0,y:-50})
//.from('p', {duration: 1, autoAlpha:0,y:-50})


/* Properties and methods of the timeline */
/*const TL = gsap.timeline({
    default:{
        duration:1,
        ease:"power4.out"
    },
    repeat:-1,
    yoyo:true,
    paused:true
});
TL
.from('.img1', {duration: 1, autoAlpha:0,y:-50})
.from('.img2', {duration: 1, autoAlpha:0,y:-50},3)
.from('.img3', {duration: 1, autoAlpha:0,y:-50})
.from('h1', {duration: 1, autoAlpha:0,y:-50})
.from('p', {duration: 1, autoAlpha:0,y:-50,ease:"power4.in"})

setTimeout(()=>{
    TL.play();
})*/

/* The add() and addLabel() handy methods */
const TL = gsap.timeline({
    default:{
        duration:1,
        ease:"power4.out"
    },
    //repeat:-1,
    //yoyo:true,
    //paused:true // addLabel
});
/*TL
.from('.img1', {duration: 1, autoAlpha:0,y:-50})
.from('.img2', {duration: 1, autoAlpha:0,y:-50},3)
.from('.img3', {duration: 1, autoAlpha:0,y:-50})
.from('h1', {duration: 1, autoAlpha:0,y:-50})
.addLabel('endAnim')
.from('p', {duration: 1, autoAlpha:0,y:-50,ease:"power4.in"})*/
/*TL
.from('.img1', {duration: 1, autoAlpha:0,y:-50})
.from('.img2', {duration: 1, autoAlpha:0,y:-50},3)
.from('.img3', {duration: 1, autoAlpha:0,y:-50})
.from('h1', {duration: 1, autoAlpha:0,y:-50})
.addLabel('endAnim',"-=2")
.from('p', {duration: 1, autoAlpha:0,y:-50,ease:"power4.in"})*/
TL
.from('.img1', {duration: 1, autoAlpha:0,y:-50})
.from('.img2', {duration: 1, autoAlpha:0,y:-50},3)
.from('.img3', {duration: 1, autoAlpha:0,y:-50})
.from('h1', {duration: 1, autoAlpha:0,y:-50})
.add(()=>{
    console.log("END OF THE TIMELINE");
})
.from('p', {duration: 1, autoAlpha:0,y:-50,ease:"power4.in"})


/*setTimeout(()=>{
    TL.seek('endAnim');
    TL.play();
},1000)*/


//https://greensock.com/docs/v3/GSAP/Timeline
//https://greensock.com/docs/v3/GSAP/Tween

//https://codepen.io/GreenSock/pen/QWMOxBr
//https://codepen.io/GreenSock/pen/mdPzJKp
//https://codepen.io/GreenSock/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NjMyNDM3Mw==
//https://codepen.io/GreenSock/pen/vYJmKjE
//https://codepen.io/GreenSock/pen/rNzyRZq
//https://codepen.io/GreenSock/pen/rNzyGLW