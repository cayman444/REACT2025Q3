import { screen } from '@testing-library/react';
import { renderWithContext } from '../../tests/utils';
import { DataForm } from './DataForm';

describe('DataForm', () => {
  it('should render form data', () => {
    renderWithContext(
      <DataForm
        username="user"
        age="100"
        country="Germany"
        email="test@test.com"
        file="FILE"
        insurance="on"
        gender="male"
        password="123"
        confirmPassword="1234"
      />
    );

    expect(screen.getByText('user')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
    expect(screen.getByText('on')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByTestId('file-img')).toHaveAttribute('src', 'FILE');
  });
});
