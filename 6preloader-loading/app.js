const loader = gsap.timeline();
loader.to(".animate",{
	delay:3,
	duration:.5,
	autoAlpha:0,
	ease:"power4.inOut"
});
loader.to(".animation",{
	delay:1,
	duration:.5,
	y:"100%",
	ease:"power4.out"
});
loader.to(".animation",{
	zIndex:-1,
});

loader.from(".container h1",{
	delay:.5,
	duration:.8,
	y:100,
	x:-199,
	opacity:0
});