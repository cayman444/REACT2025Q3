import { screen } from '@testing-library/react';
import { renderWithContext } from '../../../tests/utils';
import { UncontrolledForm } from './UncontrolledForm';
import userEvent from '@testing-library/user-event';

describe('UncontrolledForm', () => {
  it('should rendering with all required fields', () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

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
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('username');
    const error = screen.getByTestId('error-username');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Required to fill');

    await userEvent.type(input, 'test');
    await userEvent.click(buttonSubmit);

    expect(error).toHaveTextContent('the first letter must be capitalized');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test');
    await userEvent.click(buttonSubmit);

    expect(error).toBeEmptyDOMElement();
  });

  it('should age field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('age');
    const error = screen.getByTestId('error-age');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Required to fill');

    await userEvent.type(input, '-1');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('age must not be a negative number');

    await userEvent.clear(input);
    await userEvent.type(input, '20');
    await userEvent.click(buttonSubmit);
    expect(error).toBeEmptyDOMElement();
  });

  it('should email field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('email');
    const error = screen.getByTestId('error-email');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.type(input, 'test@test');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Invalid email address');

    await userEvent.clear(input);
    await userEvent.type(input, 'test@test.com');
    await userEvent.click(buttonSubmit);
    expect(error).toBeEmptyDOMElement();
  });

  it('should password field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('password');
    const error = screen.getByTestId('error-password');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Required to fill');

    await userEvent.type(input, 'TEST');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Password must contain lowercase letter');

    await userEvent.clear(input);
    await userEvent.type(input, 'test');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Password must contain uppercase letter');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Password must contain number');

    await userEvent.clear(input);
    await userEvent.type(input, 'Test1');
    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Password must contain special character');
  });

  it('should confirm password field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('confirmPassword');
    const error = screen.getByTestId('error-confirmPassword');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Required to fill');

    await userEvent.clear(input);
    await userEvent.type(input, 'test');
    await userEvent.click(buttonSubmit);
    expect(error).toBeEmptyDOMElement();
  });

  it('should file field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const error = screen.getByTestId('error-file');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('file extension must be png or jpeg');
  });

  it('should insurance field validation', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input: HTMLInputElement = screen.getByTestId('insurance');
    const error = screen.getByTestId('error-insurance');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.click(buttonSubmit);
    expect(error).toHaveTextContent('Required to fill');

    await userEvent.click(input);
    expect(input.checked).toBe(true);
    await userEvent.click(buttonSubmit);
    expect(error).toBeEmptyDOMElement();
  });

  it('should display password strength', async () => {
    renderWithContext(<UncontrolledForm onCloseModal={vi.fn()} />);

    const input = screen.getByTestId('password');
    const buttonSubmit = screen.getByTestId('submit-button');

    await userEvent.type(input, 'test');
    await userEvent.click(buttonSubmit);

    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Weak');

    await userEvent.clear(input);
    await userEvent.type(input, 'testT1!');
    await userEvent.click(buttonSubmit);
    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Medium');

    await userEvent.clear(input);
    await userEvent.type(input, 'testT1!test');
    await userEvent.click(buttonSubmit);
    expect(screen.getByTestId('strengthPassword')).toHaveTextContent('Strong');
  });
});
