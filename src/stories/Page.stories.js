//- imports
import '../scss/tailwind.scss';
import startCase from 'lodash/startCase';
import { renderer } from 'storypug';
import Home from './home.pug';

export default {
    title: 'Pages',
    parameters: {
        previewTabs: {
            'storybook/docs/panel': {
                hidden: true,
            },
        },
    },
};

export const Basic = () => {
    const { html } = renderer({ startCase });
    return html(Home);
};
