// Auth page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetFormId = tab.getAttribute('data-tab') + '-form';
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show selected form
      forms.forEach(form => {
        form.classList.remove('active');
        if (form.id === targetFormId) {
          form.classList.add('active');
        }
      });
    });
  });
  
  // Password visibility toggle
  const passwordToggles = document.querySelectorAll('.password-toggle');
  
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const passwordInput = toggle.parentElement.querySelector('input');
      const type = passwordInput.getAttribute('type');
      
      if (type === 'password') {
        passwordInput.setAttribute('type', 'text');
        toggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;
      } else {
        passwordInput.setAttribute('type', 'password');
        toggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
      }
    });
  });
  
  // Password strength indicator
  const signupPassword = document.getElementById('signup-password');
  const strengthLevel = document.querySelector('.strength-level');
  const strengthText = document.querySelector('.strength-text');
  
  if (signupPassword) {
    signupPassword.addEventListener('input', () => {
      const password = signupPassword.value;
      let strength = 0;
      
      // Calculate password strength
      if (password.length >= 8) strength += 1;
      if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
      if (password.match(/\d/)) strength += 1;
      if (password.match(/[^a-zA-Z\d]/)) strength += 1;
      
      // Update strength indicator
      strengthLevel.setAttribute('data-level', strength);
      
      // Update strength text
      if (password.length === 0) {
        strengthText.textContent = 'Password strength';
      } else if (strength < 2) {
        strengthText.textContent = 'Weak';
      } else if (strength < 4) {
        strengthText.textContent = 'Medium';
      } else {
        strengthText.textContent = 'Strong';
      }
    });
  }
  
  // Form submissions
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Here you would normally send the data to your backend
      alert('Sign in successful! (Demo only)');
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Here you would normally send the data to your backend
      alert('Account created successfully! (Demo only)');
    });
  }
});