import { renderWithRouter } from '../../tests/utils';
import { About } from './About';

describe('About', () => {
  it('should render page', () => {
    const { container } = renderWithRouter(<About />);

    expect(container).toBeInTheDocument();
  });
});
