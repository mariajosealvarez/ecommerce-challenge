import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from '../state/catalog/redux'
import { usersReducer } from '../state/users/redux'
import { cartReducer } from '../state/cart/redux'

export const store = configureStore({
  reducer: {
    catalog: booksReducer,
    users: usersReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
