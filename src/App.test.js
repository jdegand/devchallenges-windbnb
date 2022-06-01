import { render, screen } from '@testing-library/react';
import App from './App';

test('renders windbnb', () => {
  render(<App />);
  const linkElement = screen.getByText(/windbnb/i);
  expect(linkElement).toBeInTheDocument();
});
