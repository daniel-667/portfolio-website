document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add toggle functionality to experience items
    const expItems = document.querySelectorAll('.exp-item');
    expItems.forEach(item => {
        const details = item.querySelectorAll('p');
        if (details.length > 1) {
            // Hide extra details initially
            for (let i = 1; i < details.length; i++) {
                details[i].classList.add('hidden');
            }
            // Add toggle button
            const toggleBtn = document.createElement('div');
            toggleBtn.classList.add('toggle-btn');
            toggleBtn.textContent = 'Show More';
            item.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', () => {
                for (let i = 1; i < details.length; i++) {
                    details[i].classList.toggle('hidden');
                }
                toggleBtn.textContent = toggleBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
            });
        }
    });
});
