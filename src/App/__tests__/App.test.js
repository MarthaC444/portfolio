import { render  } from '@testing-library/react';
import App from '../index.js';

describe('Application Tests', () => {

  it('renders App component', () => {
    render(<App />);
  });

});