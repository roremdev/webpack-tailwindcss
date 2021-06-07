// imports
import defaultTheme from 'tailwindcss/defaultTheme';

export const purge = ['./**/*.html'];
export const darkMode = false;
export const theme = {
    extend: {},
    colors: {
        primary: {
            DEFAULT: '#35495E',
            soft: '#E6EEFF',
        },
    },
    fontFamily: {
        base: ['Ubuntu', 'sans-serif'],
    },
    fontSize: {
        base: '1rem',
        title: '4rem'
    },
    spacing: {
        '1/5': '1.5rem',
        1: '1rem',
        2: '2rem'
    },
    borderRadius: {
        DEFAULT: '10px'
    }
};
export const variants = {
    extend: {},
};
export const plugins = [];
