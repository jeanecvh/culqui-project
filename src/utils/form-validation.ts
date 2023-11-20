export const validateEmail = (email: string): string | boolean => {
  const regexValidName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i
  if (!regexValidName.test(email)) {
    return 'Invalid email format'
  }
  return true
}

type ApiResponse = {
    status: number;
    message: string;
};

export const simulateAPICall = async (email: string, password: string) => {
  return new Promise<ApiResponse>((resolve) => {
    setTimeout(() => {
      console.log(email, password)
      if (email === 'test@valid.com' && password === '12345') {
        resolve({ status: 200, message: 'OK' })
      } else if (email === 'test@valid.com' && password !== '12345') {
        resolve({ status: 401, message: 'Unauthorized' })
      } else {
        resolve({ status: 404, message: 'Not Found' })
      }
    }, 1000)
  })
}

