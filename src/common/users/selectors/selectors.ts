export const isUserSignedIn = (state: any) => !!state.users.signedInUser

export const signedInUserSelector = (state: any) => state.users.signedInUser
