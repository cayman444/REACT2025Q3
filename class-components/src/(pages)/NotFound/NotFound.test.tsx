import { renderWithRouter } from '../../tests/utils';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('should render page', () => {
    const { container } = renderWithRouter(<NotFound />);

    expect(container).toBeInTheDocument();
  });
});
