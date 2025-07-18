import { render, screen } from '@testing-library/react';
import { Card } from './Card.component';

describe('Rendering Tests', () => {
  it('should displays item name and description correctly', () => {
    render(<Card name="text" description="desc" />);

    const name = screen.getByRole('heading');
    const description = screen.getByRole('paragraph');

    expect(name).toHaveTextContent('text');
    expect(description).toHaveTextContent('desc');
  });

  it('should displays item name and description correctly', () => {
    render(<Card name="text" description="" />);

    const description = screen.getByRole('paragraph');

    expect(description).toHaveTextContent('');
  });
});
