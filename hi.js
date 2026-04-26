document.addEventListener('DOMContentLoaded', function () {
    let faviconIndex = 0;
    const favicon = document.getElementById('favicon');
    const icons = ['favicon.png', 'favicon2.png']; // Array of icons

    setInterval(function() {
        favicon.href = icons[faviconIndex];
        faviconIndex = (faviconIndex + 1) % icons.length; // Cycle through array
    }, 1000); // 1000ms = 1 second
});
