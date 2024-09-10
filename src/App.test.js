// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner'); // Assuming Header has a role of 'banner'
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Menu component', () => {
    render(<App />);
    const menuElement = screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === 'Our Menu';
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(menuElement).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo'); // Assuming Footer has a role of 'contentinfo'
    expect(footerElement).toBeInTheDocument();
  });
});