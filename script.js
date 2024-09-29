const portalContainer = document.querySelector('.portal-container');
const portal = document.querySelector('.portal');

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
       }, 500);
   }, 500);
});