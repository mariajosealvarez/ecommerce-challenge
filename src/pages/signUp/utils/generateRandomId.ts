const LENGTH = 6

export const generateRandomId = () =>
  Math.random()
    .toString(36)
    .substring(2, LENGTH + 2)
