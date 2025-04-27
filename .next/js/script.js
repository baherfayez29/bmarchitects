// Main JavaScript file for BM Architects website
document.addEventListener("DOMContentLoaded", function() {
    // Contact form hover effect
    const contactButton = document.getElementById('contact-submit-button');
    if (contactButton) {
        contactButton.addEventListener('mouseover', function() {
            this.classList.add('bg-desert-700');
            this.classList.remove('bg-desert-600');
        });
        contactButton.addEventListener('mouseout', function() {
            this.classList.add('bg-desert-600');
            this.classList.remove('bg-desert-700');
        });
    }

    // "How can I help you" hover effect for contact buttons
    const contactLinks = document.querySelectorAll('a[href="/contact"]');
    contactLinks.forEach(link => {
        const originalText = link.textContent;
        link.addEventListener('mouseover', function() {
            this.textContent = "How can I help you?";
        });
        link.addEventListener('mouseout', function() {
            this.textContent = originalText;
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
