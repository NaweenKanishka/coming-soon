// script.js

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.main.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // Create a color range
    const color1 = interpolateColor("#00c6ff", "#ff6ec4", scrollPercent);
    const color2 = interpolateColor("#0072ff", "#7873f5", scrollPercent);

    document.main.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
});

// Helper function to interpolate between two hex colors
function interpolateColor(color1, color2, factor) {
    let c1 = hexToRgb(color1);
    let c2 = hexToRgb(color2);

    let result = c1.map((val, i) => {
        return Math.round(val + (c2[i] - val) * factor);
    });

    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

// Convert hex to RGB array
function hexToRgb(hex) {
    let bigint = parseInt(hex.replace('#', ''), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}
