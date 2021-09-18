import React from 'react';
import DrinkFlowChart from 'components/DrinkFlowChart/DrinkFlowChart';
import { machineRender } from './helpers/machineHelper';

jest.mock('react-flow-renderer', () => ({
  default: () => <div>Mock test flow</div>,
  __esModule: true,
}));

test('Verify snapshot', () => {
  const { asFragment } = machineRender(<DrinkFlowChart />);
  expect(asFragment()).toMatchSnapshot();
});
