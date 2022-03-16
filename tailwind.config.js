const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            green: {
                400: '#88c64b',
                500: '#007334',
                600: '#064439'
            },
            gray: {
                400: '#c1c1c1',
                500: '#939393',
                600: '#5b5b5b'
            },
            yellow: '#ffcc1a',
            white: '#ffffff',
            black: '#000000'
        },
        fontFamily: {
            inter: ['Inter var', ...defaultTheme.fontFamily.sans],
            archivo: ['Archivo', 'sans-serif']
        },
        extend: {
            fontSize: {
                '2xs': '0.625rem'
            },
            lineHeight: {
                0: 0
            }
        }
    },
    plugins: []
};
