import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from 'components/Layout/MainLayout';

test('Verify text is in layout', () => {
  render(<MainLayout>Test text in layout</MainLayout>);
  const linkElement = screen.getByText(/Test text in layout/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verify text is NOT in layout', () => {
  render(<MainLayout>Test text in layout</MainLayout>);
  const linkElement = screen.queryByText(/some other text/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('Verify snapshot', () => {
  const { asFragment } = render(<MainLayout>Test text in layout</MainLayout>);
  expect(asFragment()).toMatchSnapshot();
});
