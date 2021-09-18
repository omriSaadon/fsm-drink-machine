import React from 'react';
import { render } from '@testing-library/react';
import FsmStoreProvider from 'store/FsmStore';
import machineSpec from 'constants/machine-specification';

export const machineRender = (ui, { spec = machineSpec, ...renderOptions } = {}) => render(
  <FsmStoreProvider machineSpec={spec}>{ui}</FsmStoreProvider>,
  renderOptions,
);
