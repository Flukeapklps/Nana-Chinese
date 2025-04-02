// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Course Details
const courseBtn = document.querySelector('.btn');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Course Details</h2>
        <p>Here you can view course information, pricing, schedules, and much more...</p>
        <button class="btn">Enroll Now</button>
    </div>
`;

document.body.appendChild(modal);

courseBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

const closeModal = document.querySelector('.close-btn');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Event listener for close modal if clicked outside modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Simple Form Validation Example (Uncomment to use if forms are added in the future)
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.querySelector('input[name="name"]').value;
//     if (!name) {
//         alert('Name is required!');
//     } else {
//         alert('Form submitted!');
//     }
// });
