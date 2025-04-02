// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Handling Enroll Now button click
    const enrollButtons = document.querySelectorAll('.btn');
    enrollButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const courseName = event.target.closest('.course-box').querySelector('h3').textContent;
            alert(`You have enrolled in the ${courseName}!`);
        });
    });

    // Simple contact form validation
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name && email && message) {
                alert('Your message has been sent!');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Dynamic course content toggle
    const courseDetailsBtns = document.querySelectorAll('.btn');
    courseDetailsBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const courseName = event.target.closest('.course-box').querySelector('h3').textContent;
            alert(`You have selected the ${courseName} for further details.`);
        });
    });
});

