import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { STATES } from 'constants/index';
import OrderStatus from 'components/OrderStatus/OrderStatus';
import NotificationStatus from 'components/Notifications/NotificationStatus';
import { machineRender } from './helpers/machineHelper';
import mockStore from './mocks/mock_context';

test('test on cancel payment in delivery mode - should be blocked', () => {
  machineRender(
    <>
      <NotificationStatus />
      <OrderStatus />
    </>,
    { spec: mockStore({ state: STATES.DELIVERY }) },
  );
  const button = screen.getByRole('button', { name: 'Cancel Payment' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/Cancel can be made only on ordering status/i);
  expect(linkElement).toBeInTheDocument();
});

test('test on cancel payment in ordering mode - should be successful', () => {
  machineRender(
    <>
      <NotificationStatus />
      <OrderStatus />
    </>,
    { spec: mockStore({ state: STATES.ORDERING, paid: 10 }) },
  );
  const paidElement = screen.getByText(/You have paid 10 ₪/i);
  expect(paidElement).toBeInTheDocument();
  const button = screen.getByRole('button', { name: 'Cancel Payment' });
  fireEvent.click(button);
  const paidElementAfterCancel = screen.getByText(/You have paid 0 ₪/i);
  expect(paidElementAfterCancel).toBeInTheDocument();
});

test('Order status snapshot', () => {
  const { asFragment } = machineRender(
    <OrderStatus />,
  );
  expect(asFragment()).toMatchSnapshot();
});
