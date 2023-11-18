export const validateEmail = (email: string): string | boolean => {
    const regexValidName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
    if (!regexValidName.test(email)) {
      return 'Invalid email format';
    }
    return true;
  };