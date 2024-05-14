import { createSelector } from '@reduxjs/toolkit'
import { signedInUserSelector } from '../../users/selectors'
import { RootState } from '../../../store/store'

const cartSelector = (state: RootState) => state.cart.orders

export const userCartSelector = createSelector(cartSelector, signedInUserSelector, (cart, signedInUser) => {
  return signedInUser ? cart[signedInUser] : []
})
