document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('button[aria-expanded]');

    faqButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
            button.setAttribute('aria-expanded', !expanded);

            const content = document.getElementById(button.getAttribute('aria-controls'));
            if (content) {
                content.style.display = expanded ? 'none' : 'block';
            }
        });

        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
