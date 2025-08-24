import App from './App';
import { renderWithContext } from './tests/utils';

describe('App', () => {
  it('should render App', () => {
    const { container } = renderWithContext(<App />);

    expect(container).toBeInTheDocument();
  });
});
