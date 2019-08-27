let aboutBtn = document.querySelector('#about-btn');
let skillsBtn = document.querySelector('#skills-btn');
let worksBtn = document.querySelector('#works-btn');
let contactBtn = document.querySelector('#contact-btn');

let aboutContent =document.querySelector('#about');
let skillsContent =document.querySelector('#skills');
let worksContent =document.querySelector('#works');
let contactContent =document.querySelector('#contact');

let exit = document.querySelector('.exit');
let exitOne = document.querySelector('.exit1');
let exitTwo = document.querySelector('.exit2');
let exitThree = document.querySelector('.exit3');

function displayContent () {
    aboutBtn.addEventListener('click', event => {
        aboutContent.classList.toggle('hd');
    });

    skillsBtn.addEventListener('click', event => {
        skillsContent.classList.toggle('hd');
    });

    worksBtn.addEventListener('click', event => {
        worksContent.classList.toggle('hd');
    });

    contactBtn.addEventListener('click', event => {
        contactContent.classList.toggle('hd');
    });

    exit.addEventListener('click', evnt => {
        aboutContent.classList.toggle('hd');
    });

    exitOne.addEventListener('click', t => {
        skillsContent.classList.toggle('hd');
    });

    exitTwo.addEventListener('click', evt => {
        worksContent.classList.toggle('hd');
    });

    exitThree.addEventListener('click', et => {
        contactContent.classList.toggle('hd');
    });
    
}


displayContent();