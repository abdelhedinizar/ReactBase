// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello React Base text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React Base/i);
  expect(linkElement).toBeInTheDocument();
});