gsap.registerPlugin(ScrollTrigger);
gsap.to('.image-single', {
    scale: 1,
    duration: 1,
    ease: 'Expo.easeInout',
   scrollTrigger: {
        trigger: '#section-2',
        start: 'top 100%',
        end: 'bottom 100%',
        markers: true,
        scrub: true
   }
});