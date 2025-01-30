// Example: Form Validation for Contact Page
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        if (!name || !email || !message) {
          e.preventDefault();
          alert('Please fill out all fields.');
        }
      });
    }
  });