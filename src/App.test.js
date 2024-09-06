import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Hello React Base text', () => {
    render(<App />);
    const headingElement = screen.getByText(/Hello React Base/i);
    expect(headingElement).toBeInTheDocument();
    const divElement = screen.getByText(/We start building our web site !/i);
    expect(divElement).toBeInTheDocument();
  });
});