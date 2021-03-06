import Typography from "typography";

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif']
});

typography.injectStyles();

export default typography;