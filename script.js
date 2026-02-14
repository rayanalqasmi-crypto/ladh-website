document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // Theme toggle (Dark/Light)
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme')) {
        body.classList.add(localStorage.getItem('theme'));
        toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.replace('dark-mode', 'light-mode');
                toggleBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light-mode');
            } else {
                body.classList.replace('light-mode', 'dark-mode');
                toggleBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }
});
