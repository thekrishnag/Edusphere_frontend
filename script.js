// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Add styles for mobile menu when active
    if (navLinks.classList.contains('active')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.padding = '1rem';
      navLinks.style.backgroundColor = 'white';
      navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      navLinks.style.zIndex = '50';
      
      // Add spacing between links in mobile menu
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.style.margin = '0.5rem 0';
      });
    } else {
      navLinks.style.display = '';
    }
  });
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // If mobile menu is open, close it after clicking a link
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.display = '';
      }
    }
  });
});

// Add animation to features and testimonial cards when they come into view
function animateOnScroll() {
  const cards = document.querySelectorAll('.feature-card, .testimonial-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// Run animations once the page has loaded
window.addEventListener('load', animateOnScroll);