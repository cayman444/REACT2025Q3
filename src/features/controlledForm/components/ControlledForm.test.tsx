import { screen } from '@testing-library/react';
import { renderWithContext } from '../../../tests/utils';
import { ControlledForm } from './ControlledForm';
import userEvent from '@testing-library/user-event';

describe('ControlledForm', () => {
  it('should rendering with all required fields', () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('age')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('confirmPassword')).toBeInTheDocument();
    expect(screen.getByTestId('gender')).toBeInTheDocument();
    expect(screen.getByTestId('country')).toBeInTheDocument();
    expect(screen.getByTestId('file')).toBeInTheDocument();
    expect(screen.getByTestId('insurance')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('should username field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('username');
    const error = screen.getByTestId('error-username');

    await userEvent.type(input, 'test');
    expect(error).toHaveTextContent('the first letter must be capitalized');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test');
    expect(error).toBeEmptyDOMElement();
  });

  it('should age field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('age');
    const error = screen.getByTestId('error-age');

    await userEvent.type(input, '-1');
    expect(error).toHaveTextContent('age must not be a negative number');

    await userEvent.clear(input);
    await userEvent.type(input, '20');
    expect(error).toBeEmptyDOMElement();
  });

  it('should email field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('email');
    const error = screen.getByTestId('error-email');

    await userEvent.type(input, 'test@test');
    expect(error).toHaveTextContent('Invalid email address');

    await userEvent.clear(input);
    await userEvent.type(input, 'test@test.com');
    expect(error).toBeEmptyDOMElement();
  });

  it('should password field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('password');
    const error = screen.getByTestId('error-password');

    await userEvent.type(input, 'TEST');
    expect(error).toHaveTextContent('Password must contain lowercase letter');

    await userEvent.clear(input);
    await userEvent.type(input, 'test');
    expect(error).toHaveTextContent('Password must contain uppercase letter');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test');
    expect(error).toHaveTextContent('Password must contain number');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test1');
    expect(error).toHaveTextContent('Password must contain special character');
  });

  it('should confirm password field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('confirmPassword');
    const error = screen.getByTestId('error-confirmPassword');

    await userEvent.type(input, 'test');
    expect(error).toBeEmptyDOMElement();
  });

  it('should insurance field validation', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input: HTMLInputElement = screen.getByTestId('insurance');
    const error = screen.getByTestId('error-insurance');

    await userEvent.click(input);
    expect(input.checked).toBe(true);
    expect(error).toBeEmptyDOMElement();
  });

  it('should display password strength', async () => {
    renderWithContext(<ControlledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('password');

    await userEvent.type(input, 'test');

    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Weak');

    await userEvent.clear(input);
    await userEvent.type(input, 'testT1!');
    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Medium');

    await userEvent.clear(input);
    await userEvent.type(input, 'testT1!test');
    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Strong');
  });
});
