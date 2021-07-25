gsap.registerPlugin(ScrollTrigger);
//Section two - image animation
gsap.to('.image-single', {
    scale: 1,
    duration: 1,
    ease: 'Expo.easeInout',
   scrollTrigger: {
        trigger: '#section-2',
        start: 'top 100%',
        end: 'bottom 60%', // Because we want to end animation while the content is at viewer's screen not after he has reached the end.
        // markers: true,
        scrub: true
   }
});
//Now trigger the staggered animation for the text items
gsap.to('.text-item', {
    duration: 1,
    opacity: 1,
    stagger: 0.5,
    ease: 'sine.in',
    scrollTrigger: {
        trigger: '#section-3',
        start: 'top-80%',
        end: 'center 40%',
        scrub: true
    }
});

//Now animate the sprite image
gsap.to('.sprite', {
    scrollTrigger: {
        trigger: '#section-4',
        scrub: true,
        start: 'top 80%',
        onEnter: animateSprite,
        markers: true
    }
});

//Define the function which handles the animation triggered by scroll
function animateSprite() {
    console.log('in');
    document.querySelector('.sprite').style.animation = 'dance 1.5s steps(6) alternate'
}