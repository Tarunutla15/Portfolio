let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Use EmailJS to send the form
        emailjs.sendForm('service_cwijoob', 'template_s8w5k4v', this)
            .then(function() {
                // Hide the form
                document.getElementById('contact-form').style.display = 'none';

                // Show the success message
                document.getElementById('success-message').style.display = 'block';
            }, function(error) {
                alert('Failed to send your message. Please try again.');
                console.log('FAILED...', error);
            });
    });
};

// Function to apply wave effect to elements with the class 'heading'
function applyWaveEffectToClass(className) {
    const elements = document.querySelectorAll(`.${className}`);
    
    elements.forEach((textContainer) => {
        const text = textContainer.innerText; // Get the text inside the element
        textContainer.innerHTML = ''; // Clear the original text
        
        // Loop through each letter and wrap it in a span with a custom --i index
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.style.setProperty('--i', i); // Set the --i variable for animation delay
            span.innerText = text[i]; // Assign the current character to the span
            textContainer.appendChild(span); // Append the span to the text container
        }
    });
}

// Apply the wave effect to elements with the class 'heading'
applyWaveEffectToClass('heading');
