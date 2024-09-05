// Add hover effect or more interactivity here if needed
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.image-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('You clicked on ' + card.querySelector('h3').innerText);
        });
    });
});
