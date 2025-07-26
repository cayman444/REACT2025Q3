import { renderWithRouter } from '../../tests/utils';
import { Home } from './Home';

describe('Home', () => {
  it('should render page', () => {
    const { container } = renderWithRouter(<Home />);

    expect(container).toBeInTheDocument();
  });
});
