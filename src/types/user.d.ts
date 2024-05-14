declare global {
  type User = {
    id: string | null
    firstName: string
    lastName: string
    email: string
    password: string
  }
}

export {}
