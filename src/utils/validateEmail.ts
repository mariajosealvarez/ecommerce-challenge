export const isValidEmail = (email: string): boolean => {
  const emailRegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/)
  return emailRegExp.test(email)
}
