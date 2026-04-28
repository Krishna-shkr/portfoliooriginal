import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio name', () => {
  render(<App />);
  const heading = screen.getByText(/Krishna/i);
  expect(heading).toBeInTheDocument();
});
