gsap.to('.text-span', {
    y: '0%',
    duration: 1,
    delay: 1,
    onComplete: () => {
        gsap.to('.img-inner', {
            y: '0%',
            duration: 1
        })
    }
})