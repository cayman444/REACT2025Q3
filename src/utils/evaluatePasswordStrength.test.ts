import { evaluatePasswordStrength } from './evaluatePasswordStrength';

describe('evaluatePasswordStrength', () => {
  it('should return password strength', () => {
    expect(evaluatePasswordStrength()).toBe(undefined);

    expect(evaluatePasswordStrength('test')).toEqual({
      message: 'Weak',
      class: 'text-orange-500',
    });

    expect(evaluatePasswordStrength('Aa2@')).toEqual({
      message: 'Medium',
      class: 'text-yellow-500',
    });

    expect(evaluatePasswordStrength('Aa2@Aa2@Aa2@')).toEqual({
      message: 'Strong',
      class: 'text-green-500',
    });
  });
});
