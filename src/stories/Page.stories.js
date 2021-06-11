import '../scss/tailwind.scss';
import startCase from 'lodash/startCase';
import { renderer } from 'storypug';
import Page from './page.pug';

// const { html } = renderer({ startCase });
const { render } = renderer({ startCase });

export default {
    title: 'Example/Page',
};

export const Basic = () => {
  // return html(Page);
  const wrapper = render(Page);
  return wrapper.$root;
};
