/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },

        extend: {},
        colors: {
            //General
            'color-white': '#FFFFFF',
            'color-orange': '#E56B1A',
            'color-black': '#171412',
            // white

            //orange

            //green
            'color-green': {
                10: '#90ee90'
            },

            //gray
            'color-gray': {
                10: '#877363',
                20: '#F5F2F0',
                30: '#E5E8EB',
                40: '#BEC8D0'
            }
            //black

        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark', 'cupcake'],
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};
