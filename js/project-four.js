//Define timeline
let timeline = gsap.timeline({
    ease: 'sine.in'
});

//Use timeline to define the different elements (in - order of their appearance) on the page
timeline.set('#tree', {x: '-100%'})          //First comes the tree
        .set('#ground', {opacity: 0})       //Then comes the ground
        .set('#jeep', {x: '100%'});

//Now set id of all leaves as leaf so that we can target them as a group
for (let i=2; i<188; i++) {
    document.querySelector(`#leafs_${i}`).setAttribute('class', 'tleaf');
}

let leafsArray = document.querySelectorAll('.tleaf');
leafsArray.forEach(leaf => {
    leaf.style.opacity = 0;
})



