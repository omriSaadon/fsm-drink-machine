import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import Budget from 'components/Budget/Budget';
import { machineRender } from './helpers/machineHelper';

jest.setTimeout(11000);

test('Verify budget number', () => {
  machineRender(<Budget />);
  const linkElement = screen.getByText(/Current Budget: 10 ₪/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verify next deposit', async () => {
  machineRender(<Budget />);
  const timer = 9;
  for (let i = timer; i >= 0; i--) {
    await waitFor(() => {
      const linkElement = screen.queryByText(`Next Deposit: ${i}`);
      expect(linkElement).toBeInTheDocument();
    });
  }
});
