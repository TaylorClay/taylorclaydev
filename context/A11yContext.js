import { createContext } from 'react';

const noop = () => {};

const a11yContext = createContext({
  a11yEnabled: false,
  toggleA11y: noop,
});

export default a11yContext;
