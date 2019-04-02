/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Login';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Login component!',
  },
  yourname: {
    id: `${scope}.yourname`,
    defaultMessage: 'Your name',
  },
  youremail: {
    id: `${scope}.youremail`,
    defaultMessage: 'Your email',
  },
  yourpassword: {
    id: `${scope}.yourpassword`,
    defaultMessage: 'Your password',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Sign up',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log in',
  },
});
