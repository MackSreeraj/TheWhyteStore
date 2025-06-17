// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(mobileMenuToggle);

const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    header.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
// document.addEventListener('click', (e) => {
//     if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
//         navLinks.classList.remove('active');
//         mobileMenuToggle.classList.remove('active');
//         header.classList.remove('menu-open');
//     }
// });

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to your server
        console.log('Subscribed with email:', email);
        
        // Show success message
        const message = document.createElement('p');
        message.textContent = 'Thank you for subscribing!';
        message.style.color = 'white';
        message.style.marginTop = '1rem';
        
        // Remove any existing messages
        const existingMessage = this.nextElementSibling;
        if (existingMessage && existingMessage.matches('.subscription-message')) {
            existingMessage.remove();
        }
        
        this.after(message);
        this.reset();
    });
}

// Add to cart functionality
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

// This would be replaced with actual cart functionality
function addToCart() {
    cartItems++;
    cartCount.textContent = cartItems;
    cartCount.classList.add('pulse');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        cartCount.classList.remove('pulse');
    }, 300);
}

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send this to your server
        console.log('Form submitted:', formObject);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.padding = '1rem';
        successMessage.style.backgroundColor = '#d4edda';
        successMessage.style.color = '#155724';
        successMessage.style.borderRadius = '4px';
        successMessage.style.marginTop = '1rem';
        
        // Remove any existing messages
        const existingMessage = this.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        this.appendChild(successMessage);
        this.reset();
    });
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.collection-item, .about-content, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.collection-item, .about-content, .contact-info, .contact-form');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
