import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from '../common/catalog/redux'
import { usersReducer } from '../common/users/redux'
import { cartReducer } from '../common/cart/redux'

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
