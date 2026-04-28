import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the developer name in the hero', () => {
  render(<App />);
  expect(screen.getByText(/Krishna/i)).toBeInTheDocument();
});
