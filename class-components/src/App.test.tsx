import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Rendering tests', () => {
  it('should render app component', () => {
    render(<App />);

    expect(screen.queryByRole('banner')).toBeInTheDocument();
    expect(screen.queryByRole('main')).toBeInTheDocument();
  });
});
