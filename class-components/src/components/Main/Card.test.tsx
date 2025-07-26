import { screen } from '@testing-library/react';
import { Card } from './Card.component';
import { renderWithRouter } from '../../tests/utils';

describe('Rendering Tests', () => {
  it('should displays item name and description correctly', () => {
    renderWithRouter(<Card name="text" description="desc" id="1" />);

    const name = screen.getByRole('heading');
    const description = screen.getByRole('paragraph');

    expect(name).toHaveTextContent('text');
    expect(description).toHaveTextContent('desc');
  });

  it('should displays item name and description correctly', () => {
    renderWithRouter(<Card name="text" description="" id="1" />);

    const description = screen.getByRole('paragraph');

    expect(description).toHaveTextContent('');
  });
});
