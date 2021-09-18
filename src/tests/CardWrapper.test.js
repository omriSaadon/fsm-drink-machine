import React from 'react';
import { render, screen } from '@testing-library/react';
import CardWrapper from 'components/CardWrapper/CardWrapper';

test('Verify text is in card wrapper', () => {
  render(<CardWrapper>Test text in card</CardWrapper>);
  const linkElement = screen.getByText(/Test text in card/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verify text is NOT in card wrapper', () => {
  render(<CardWrapper>Test text in card</CardWrapper>);
  const linkElement = screen.queryByText(/some other text/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('Verify snapshot', () => {
  const { asFragment } = render(<CardWrapper>Test text in card</CardWrapper>);
  expect(asFragment()).toMatchSnapshot();
});
