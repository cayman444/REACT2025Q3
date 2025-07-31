import { render, screen } from '@testing-library/react';
import { Card } from './Card.component';
import { renderTestApp } from '../../tests/utils';

describe('Rendering Tests', () => {
  it('should displays item name and description correctly', () => {
    render(
      renderTestApp(
        <Card name="text" description="desc" id="1" isCardChecked={false} />
      )
    );

    const name = screen.getByRole('heading');
    const description = screen.getByRole('paragraph');

    expect(name).toHaveTextContent('text');
    expect(description).toHaveTextContent('desc');
  });

  it('should displays item with incomplete data', () => {
    render(
      renderTestApp(
        <Card name="text" description="" id="1" isCardChecked={false} />
      )
    );

    const description = screen.getByRole('paragraph');

    expect(description).toHaveTextContent('');
  });
});
