import React from 'react';
import PropTypes from 'prop-types';
import { useFsm } from 'custom-hooks/FSM/useFsm';

const Store = React.createContext();
export const { Provider } = Store;
Store.displayName = 'Drink Machine FSM store';

export const useStore = () => React.useContext(Store);

const propTypes = {
  children: PropTypes.node,
  machineSpec: PropTypes.object,
};

const FsmStoreProvider = ({ children, machineSpec }) => {
  const [state, dispatch] = useFsm(machineSpec);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

FsmStoreProvider.propTypes = propTypes;
export default FsmStoreProvider;
