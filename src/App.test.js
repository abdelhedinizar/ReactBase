// src/App.test.js
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Header component', async () => {
  render(<App />);
  const headerElement = await screen.findByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders Menu component', async () => {
  render(<App />);
  const menuElement = await screen.findByText('Loading...');
  expect(menuElement).toBeInTheDocument();
});