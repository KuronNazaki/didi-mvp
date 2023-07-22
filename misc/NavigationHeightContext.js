const { createContext, useContext } = require('react');

const NavigationHeightContext = createContext();

export const useAuthContext = () => useContext(NavigationHeightContext);

export default NavigationHeightContext;