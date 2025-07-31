import { render } from '@testing-library/react';
import { renderTestApp } from '../../tests/utils';
import { Home } from './Home';

describe('Home', () => {
  it('should render page', () => {
    const { container } = render(renderTestApp(<Home />));

    expect(container).toBeInTheDocument();
  });
});
