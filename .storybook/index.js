//- imports
import { resolve } from 'path';
import webpackDevConfig from '../webpack.config.dev.babel';
import { theme } from '../tailwind.config';
//- get rules value config from webpack dev configuration
const {
    module: { rules },
} = webpackDevConfig();

export default {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storypug',
    ],
    core: {
        builder: 'webpack5',
    },
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: {
                alias: {
                    ...config.resolve.alias,
                    '@styles': resolve(__dirname, '../src/scss'),
                    '@styles-base': resolve(__dirname, '../src/scss/base'),
                    '@styles-components': resolve(
                        __dirname,
                        '../src/scss/components'
                    ),
                    '@styles-utils': resolve(__dirname, '../src/scss/utils'),
                    '@layouts': resolve(__dirname, '../src/layouts'),
                    '@assets-images': resolve(
                        __dirname,
                        '../src/assets/images'
                    ),
                    '@assets-svg': resolve(__dirname, '../src/assets/svg'),
                },
            },
            module: {
                ...config.module,
                rules: [...config.module.rules, rules[2]],
            },
        };
    },
};
