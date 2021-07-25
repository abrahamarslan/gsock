//First make a timeline because it will have a sequenced animation
let timeline = gsap.timeline({ease: 'sine.in'});

barba.init({
    transitions: [
        {
            name: 'myPageTransition',
            async leave(data) {
                await timeline.to('.image', {y: '110%'})
                    .to('.part', {y: '0%', duration: 0.5, stagger: 0.25});
            },
            async enter(data) {
                gsap.set('.image', {y: '110%'});
                await timeline.to('.part', {y: '100%', duration: 0.2, stagger: 0.25, delay: 1})
                    .to('.image', {y: '0%'})
            }
        }
    ]
})