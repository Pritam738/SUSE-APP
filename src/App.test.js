import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if headder text is viaible', () => {
  render(<App />);
  const linkElement = screen.getByText(/SUSE Repository Mirroring Tool/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if button text is visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Check Out Our Offerings/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if footer text is loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/© 2022 SUSE, All Rights Reserved/i);
  expect(linkElement).toBeInTheDocument();
});
