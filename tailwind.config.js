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
        title: '4rem',
    },
    spacing: {
        '1/5': '1.5rem',
        1: '1rem',
        2: '2rem',
    },
    borderRadius: {
        DEFAULT: '10px',
    },
    screens: {
        mobile: { max: '428px' },
        tablet: { min: '429px', max: '768px' },
        laptop: { min: '769px', max: '1024px' },
        desktop: { min: '1025px', max: '1280px' },
        'lg-desktop': { min: '1281px', max: '1920px' },
    },
};
export const variants = {
    extend: {},
};
export const plugins = [];
