export const evaluatePasswordStrength = (password?: string) => {
  if (!password) return;

  let score = 0;

  if (password.length > 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  switch (score) {
    case 0:
    case 1:
    case 2:
    case 3:
      return { message: 'Weak', class: 'text-orange-500' };
    case 4:
      return { message: 'Medium', class: 'text-yellow-500' };
    case 5:
      return { message: 'Strong', class: 'text-green-500' };
    default:
      return;
  }
};
