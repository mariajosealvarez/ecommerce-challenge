import { RootState } from '../../../store/store'

export const isUserSignedIn = (state: RootState) => !!state.users.signedInUser

export const signedInUserSelector = (state: RootState) => state.users.signedInUser
