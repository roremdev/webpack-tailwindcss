//- imports
import { theme } from '../../tailwind.config';

const { mobile, tablet } = theme.screens;

export default {
    mobile: {
        name: 'Mobile',
        styles: {
            width: mobile.max,
            height: '768px',
        },
    },
    tablet: {
        name: 'Tablet',
        styles: {
            width: tablet.max,
            height: '768px',
        }
    }
};
