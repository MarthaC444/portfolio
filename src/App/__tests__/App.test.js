import { render, screen } from '@testing-library/react';
import App from '../index.js';

describe('Application Tests', () => {

  test('renders App component', () => {
    render(<App />);

    const jobTitle = screen.getByText(/Jr. Front End Developer \| React.js/u);
    expect(jobTitle).toBeInTheDocument();

    // const portfolio = screen.getByText(/Portfolio/u);
    // expect(portfolio).toBeInTheDocument();
  });

});