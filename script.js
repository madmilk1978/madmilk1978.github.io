document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('profile-photo');

    // Add the custom cursor when hovering over the container
    container.addEventListener('mouseover', () => {
        document.profile-container.classList.add('custom-cursor');
    });

    // Remove the custom cursor when leaving the container
    container.addEventListener('mouseleave', () => {
        document.profile-container.classList.remove('custom-cursor');
    });
});