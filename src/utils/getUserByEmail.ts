export const getUserByEmail = (users: User[], email: string): User | undefined => {
  return users.find((user) => user.email === email)
}
