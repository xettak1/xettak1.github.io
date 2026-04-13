document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const bgImagePath = body.getAttribute('data-bg');

    if (bgImagePath) {
        const tempImage = new Image();
        tempImage.src = bgImagePath;
        
        // Only show the page once the background image is ready
        tempImage.onload = () => {
            body.style.backgroundImage = `url('${bgImagePath}')`;
            body.classList.add('loaded');
        };
        
        // Fallback in case image fails
        tempImage.onerror = () => {
            body.classList.add('loaded');
        };
    }
});