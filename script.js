const portalContainer = document.querySelector('.portal-container');
const portal = document.querySelector('.portal');

// Show the portal when the page loads
portalContainer.style.display = 'flex';

// Add event listener to the portal
portal.addEventListener('click', () => {
    // Add animation here
    portal.classList.add('show');

    // After 0.5 seconds, hide the portal
    setTimeout(() => {
        portal.classList.remove('show');
        setTimeout(() => {
            portalContainer.style.display = 'none';
        }, 500);
    }, 500);
});