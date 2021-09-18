import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import DrinkChooser from 'components/DrinkChooser/DrinkChooser';
import NotificationStatus from 'components/Notifications/NotificationStatus';
import { STATES } from 'constants/index';
import { machineRender } from './helpers/machineHelper';
import mockStore from './mocks/mock_context';

jest.mock('axios', () => ({
  post: jest.fn(() => new Promise((resolve) => {
    resolve(true);
  })),
}));

test('Check Insufficient funds', () => {
  machineRender(
    <>
      <NotificationStatus />
      <DrinkChooser />
    </>,
  );
  const button = screen.getByRole('button', { name: 'Coke - 8 ₪' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/Insufficient funds/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check when chose drink while delivering is in progress', () => {
  machineRender(
    <>
      <NotificationStatus />
      <DrinkChooser />
    </>,
    { spec: mockStore({ state: STATES.DELIVERY }) },
  );
  const button = screen.getByRole('button', { name: 'Coke - 8 ₪' });
  fireEvent.click(button);
  const linkElement = screen.queryByText(/Please wait until delivery is finished/i);
  expect(linkElement).toBeInTheDocument();

  const notification = screen.getByRole('button', { name: 'close' });
  fireEvent.click(notification);

  const errorElement = screen.queryByText(/Please wait until delivery is finished/i);
  expect(errorElement).not.toBeInTheDocument();
});

test('Check successful delivery and staying in payment', async () => {
  axios.post.mockResolvedValue({ data: 'Enjoy !' });
  machineRender(
    <>
      <NotificationStatus />
      <DrinkChooser />
    </>,
    { spec: mockStore({ state: STATES.ORDERING, paid: 20 }) },
  );

  const button = screen.getByRole('button', { name: 'Coke - 8 ₪' });
  fireEvent.click(button);
  await waitFor(() => {
    const linkElement = screen.queryByText(/Enjoy !/i);
    expect(linkElement).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});

test('Check successful delivery and moving to done', async () => {
  axios.post.mockResolvedValue({ data: 'Enjoy !' });
  machineRender(
    <>
      <NotificationStatus />
      <DrinkChooser />
    </>,
    { spec: mockStore({ state: STATES.ORDERING, paid: 8 }) },
  );

  const button = screen.getByRole('button', { name: 'Coke - 8 ₪' });
  fireEvent.click(button);
  await waitFor(() => {
    const linkElement = screen.queryByText(/Enjoy !/i);
    expect(linkElement).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});

test('Check server failure', async () => {
  axios.post.mockRejectedValueOnce();
  machineRender(
    <>
      <NotificationStatus />
      <DrinkChooser />
    </>,
    { spec: mockStore({ state: STATES.ORDERING, paid: 8 }) },
  );

  const button = screen.getByRole('button', { name: 'Coke - 8 ₪' });
  fireEvent.click(button);
  await waitFor(() => {
    const linkElement = screen.queryByText(/Machine is out of service, your money is gone/i);
    expect(linkElement).toBeInTheDocument();
  });
});

test('Verify snapshot', () => {
  const { asFragment } = machineRender(<DrinkChooser />);
  expect(asFragment()).toMatchSnapshot();
});
