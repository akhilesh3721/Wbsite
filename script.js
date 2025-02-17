

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust the scroll position
                behavior: 'smooth',
            });
        });
    });
});