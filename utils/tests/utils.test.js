import { validateEmail } from '../utils';

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    const email = 'abc@bca.com';
    expect(validateEmail(email)).toBeTruthy();
  });

  it('should return false for invalid email', () => {
    const email = 'abc@bca';
    expect(validateEmail(email)).toBeFalsy();
  });

  it('should return false if empty', () => {
    const email = '';
    expect(validateEmail(email)).toBeFalsy();
  });
});
