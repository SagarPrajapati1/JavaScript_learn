const boxes = document.querySelectorAll('.box');
const body = document.querySelector("body");

boxes.forEach(function (box){
    box.addEventListener('click', function(eve){
        console.log(eve);
        console.log(eve.target);
        if(eve.target.id === 'grey') {
            body.style.background = eve.target.id;
        }
        if(eve.target.id === 'red') {
            body.style.background = eve.target.id;
        }
        if(eve.target.id === 'blue') {
            body.style.background = eve.target.id;
        }
        if(eve.target.id === 'purple') {
            body.style.background = eve.target.id;
        }
        if(eve.target.id === 'yellow') {
            body.style.background = eve.target.id;
        }
    })
})