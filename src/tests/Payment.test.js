import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Payment from 'components/Payment/Payment';
import OrderStatus from 'components/OrderStatus/OrderStatus';
import NotificationStatus from 'components/Notifications/NotificationStatus';
import { STATES } from 'constants/index';
import { machineRender } from './helpers/machineHelper';
import mockStore from './mocks/mock_context';

test('Block payment if in status delivery', () => {
  machineRender(
    <>
      <NotificationStatus />
      <Payment />
    </>,
    { spec: mockStore({ state: STATES.DELIVERY }) },
  );
  const button = screen.getByRole('button', { name: '5 ₪' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/Please wait until the machine finish delivery/i);
  expect(linkElement).toBeInTheDocument();
});

test('Block payment if not enough money in wallet', () => {
  machineRender(
    <>
      <NotificationStatus />
      <Payment />
    </>,
    { spec: mockStore({ currentBudget: 2 }) },
  );
  const button = screen.getByRole('button', { name: '5 ₪' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/Margin is Disallowed/i);
  expect(linkElement).toBeInTheDocument();
});

test('Payment successful', () => {
  machineRender(
    <>
      <NotificationStatus />
      <OrderStatus />
      <Payment />
    </>,
  );
  const button = screen.getByRole('button', { name: '5 ₪' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/You have paid 5 ₪/i);
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot', () => {
  const { asFragment } = machineRender(
    <>
      <NotificationStatus />
      <Payment />
    </>,
  );
  expect(asFragment()).toMatchSnapshot();
});
