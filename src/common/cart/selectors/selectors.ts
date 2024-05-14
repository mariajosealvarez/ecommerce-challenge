import { createSelector } from '@reduxjs/toolkit'
import { signedInUserSelector } from '../../users/selectors'

const cartSelector = (state: any) => state.cart.orders

export const userCartSelector = createSelector(cartSelector, signedInUserSelector, (cart, signedInUser) => {
  return cart[signedInUser] || []
})
