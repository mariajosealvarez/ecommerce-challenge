export const getUserByEmail = (users: User[], email: string): User | null => {
  return users.filter((user) => user.email === email)[0]
}
