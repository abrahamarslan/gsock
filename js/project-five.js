barba.init({
    transitions: [
        {
            name: 'opacity-transition',
            sync: false,
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 1,
                    delay: 1
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 1,
                    delay: 1
                });
            }
        }
    ]
});