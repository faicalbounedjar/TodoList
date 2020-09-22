const tl= gsap.timeline({defaults:{ease:'power1.out'}});
tl.to('.text',{x:"0%", duration: 1,stagger:0.25})
tl.to('.slider',{x:"100%" , duration: 1 , delay:1})
tl.to('.intro',{x:"200%" }, "-=0.75")