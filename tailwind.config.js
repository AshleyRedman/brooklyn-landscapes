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
                300: '#fcfcfc',
                400: '#c1c1c1',
                500: '#939393',
                600: '#5b5b5b'
            },
            yellow: '#ffcc1a',
            white: '#ffffff',
            black: '#000000'
        },
        fontFamily: {
            archivo: ['Archivo', 'sans-serif']
        },
        extend: {
            fontSize: {
                '2xs': '0.625rem'
            },
            lineHeight: {
                0: 0
            },
            borderWidth: {
                12: '12px'
            },
            gridTemplateColumns: {
                13: 'repeat(13, minmax(0, 1fr))',
                14: 'repeat(14, minmax(0, 1fr))',
                15: 'repeat(15, minmax(0, 1fr))',
                16: 'repeat(16, minmax(0, 1fr))'
            }
        }
    },
    plugins: []
};
