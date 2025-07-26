import { screen } from '@testing-library/react';
import { App } from './App';
import { renderWithRouter } from './tests/utils';

describe('Rendering tests', () => {
  it('should render app component', () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
