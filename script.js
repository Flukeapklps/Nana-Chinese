// Modal for Course Enrollment Confirmation
const enrollButton = document.getElementById('enrollButton');
const confirmationModal = document.createElement('div');
confirmationModal.className = 'modal';
confirmationModal.innerHTML = `
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>Enrollment Successful</h2>
        <p>Thank you for enrolling in the course! You will receive an email with further instructions.</p>
        <button onclick="closeModal()">Close</button>
    </div>
`;
document.body.appendChild(confirmationModal);

// Enroll Button Functionality
enrollButton.addEventListener('click', () => {
    confirmationModal.style.display = 'block';
});

function closeModal() {
    confirmationModal.style.display = 'none';
}

// Close modal if user clicks outside
window.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});
