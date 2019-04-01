/**
*
* Asynchronously loads the component for common
*
*/

import loadable from 'loadable-components';

export default loadable(() => import('./index'));