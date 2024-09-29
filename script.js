const portalContainer = document.querySelector('.portal-container');
const portal = document.querySelector('.portal');
const body = document.querySelector('body');

// Show the portal when the page loads
portalContainer.style.display = 'flex';

// Add event listener to the portal
portal.addEventListener('click', () => {
    // Add animation here
    portal.style.transform = 'scale(1.2)';
    portal.style.transition = 'transform 0.5s ease-in-out';

    // After 0.5 seconds, scale back to normal and hide the portal
    setTimeout(() => {
        portal.style.transform = 'scale(1)';
        portal.style.transition = 'transform 0.5s ease-in-out';
        setTimeout(() => {
            portalContainer.style.display = 'none';
            // Show the main content
            body.style.overflow = 'auto';
        }, 500);
    }, 500);
});

// Add event listener to the portal container
portalContainer.addEventListener('click', (e) => {
    // If the click is not on the portal, hide the portal
    if (e.target !== portal) {
        portalContainer.style.display = 'none';
        // Show the main content
        body.style.overflow = 'auto';
    }
});