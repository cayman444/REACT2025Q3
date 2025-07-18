import { render } from '@testing-library/react';
import { Main } from './Main.component';

describe('Rendering tests', () => {
  it('should render main component', async () => {
    render(<Main />);
  });
});
