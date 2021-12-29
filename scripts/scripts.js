const menuBar = document.getElementsByClassName("mobile")[0];
const menuButton = document.getElementById('navigation_button');



const closeMenu = () => {
    menuBar.style.display = "none";
    menuButton.style.display = 'block';
}

const openMenu = () => {
    menuBar.style.display = 'flex';
    menuButton.style.display = 'none';
}

//  This event listener makes nav bar open button and mobile bar visible if top nav bar is not visible due to page scroll down

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    let lastScroll = scrolled;  
    if (lastScroll < 109) {
        menuBar.style.display = 'none';
        menuButton.style.display = 'none';
    } else if (lastScroll >= 109 && menuBar.style.display === "none") {
        menuButton.style.display = 'block';
        menuBar.style.display = 'none';
    }
}) 

// This event listener makes menu button visible after reloading the page

window.addEventListener('load', ()=> {
    let currPos = window.pageYOffset;
    if(currPos >= 233) {
        menuButton.style.display = "block";
    }
})


// Code for sending email
const sendMessage = () => {

console.log('It works')
    let email = $('.email').val();
    let subject = $('.subject').val();
    let message = $('._message').val();
    statusElement = $('.status');
    statusElement.empty();

// To validate the email input
    
    if(email.length > 5 && email.includes('@') && email.includes('.') ) {
        statusElement.append('<p>Email is valid</p>');
    } else {
        event.preventDefault();
        statusElement.append('<p>Email is not valid</p>');
    }

// to validate the subject input field

    if(subject.length >=2) {
        statusElement.append('<p>Subject is valid</p>');
    } else {
        event.preventDefault();
        statusElement.append('<p>Subject is not valid</p>');
    }

// to validate message body input

    if(message.length >=20) {
        statusElement.append('<p>Message is valid</p>');
    } else {
        event.preventDefault();
        statusElement.append('<p>Message is not valid</p>');
    }

    email = '';
    subject = '';
    message = '';

}

// event listener to release the info about the project

// const test = document.getElementById('Works');

// test.addEventListener('click', function(event) {
//     event.$('project_description').style.display = "flex"
    
// })
