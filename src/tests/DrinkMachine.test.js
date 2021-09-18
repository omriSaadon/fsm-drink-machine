import React from 'react';
import DrinkMachine from 'components/DrinkMachine/DrinkMachine';
import { machineRender } from './helpers/machineHelper';

jest.mock('react-flow-renderer', () => ({
  default: () => <div>Mock test flow</div>,
  __esModule: true,
}));

test('Check Insufficient funds', () => {
  const { asFragment } = machineRender(
    <DrinkMachine />,
  );
  expect(asFragment()).toMatchSnapshot();
});
