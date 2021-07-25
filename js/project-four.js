//Define timeline
let timeline = gsap.timeline({
    ease: 'sine.in'
});

//Use timeline to define the different elements (in - order of their appearance) on the page
timeline.set('#tree', {x: '-100%'})          //First hide the tree
        .set('#ground', {opacity: 0})       //Then hide the ground
        .set('#jeep', {x: '100%'});         // Then put jeep out of screen

//Now set id of all leaves as leaf so that we can target them as a group
for (let i=2; i<188; i++) {
    document.querySelector(`#leafs_${i}`).setAttribute('class', 'tleaf');
}

let leafsArray = document.querySelectorAll('.tleaf');
leafsArray.forEach(leaf => {
    leaf.style.opacity = 0;
});

//Now start animating the elements

timeline.to('#ground', {opacity: 1, duration: 0.5, ease: "Expo.easeIn"})      //First comes the ground
    .to("#tree", {x: '0%', duration: 1}) //Then bring the tree
    .to('.tleaf', {opacity: 1, stagger: 0.02}) //Then bring leaves one by one using stagger property
    .to('#jeep', {x: '-300%', duration: 6, ease: 'Expo.easeIn'}); //Then run the jeep

//Adding the functionality to the buttons of play, pause and restart

const btnPause = document.querySelector('#pause');
const btnPlay = document.querySelector('#play');
const btnRestart = document.querySelector('#restart');

btnPause.addEventListener('click', () => {
    timeline.pause();
});

btnPlay.addEventListener('click', () => {
    timeline.play();
});

btnRestart.addEventListener('click', () => {
    timeline.restart();
});





