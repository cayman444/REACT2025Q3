import { screen } from '@testing-library/react';
import { Header } from './Header.component';
import { renderTestApp } from '../../tests/utils';

describe('Rendering tests', () => {
  it('should render header component', () => {
    renderTestApp(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
