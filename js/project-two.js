let colors = ['#000', '#FFF', '#8AD', '#DF9'];
let random = null;
document.addEventListener('click', () => {
    random = Math.floor(Math.random() * colors.length);
    gsap.to('body', {
        background: colors[random],
        duration: 1,
        ease: 'sine.in'
    })
});
