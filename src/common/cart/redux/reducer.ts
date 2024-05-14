import {
  ActionType,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  REMOVE_BOOK_REQUEST,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_FAILURE,
  UPDATE_BOOK_QUANTITY_REQUEST,
  UPDATE_BOOK_QUANTITY_SUCCESS,
  UPDATE_BOOK_QUANTITY_FAILURE,
} from './actions'

type BookOrder = {
  bookId: string
  quantity: number
}

type CartOrders = Record<string, BookOrder[]>

export type CartStateType = {
  isLoading: boolean
  orders: CartOrders
  error: string
}

const initialState: CartStateType = {
  isLoading: false,
  orders: {},
  error: '',
}

const getOrderIndexByBook = (orders: BookOrder[], bookId: string): number =>
  orders.findIndex((order) => order.bookId === bookId)

const updateBookQuantity = (userOrders: BookOrder[], bookId: string, newQuantity: number): BookOrder[] => {
  const orderIndex = getOrderIndexByBook(userOrders, bookId)
  if (orderIndex >= 0) {
    // the user already have this book in their cart
    let bookOrder = userOrders[orderIndex]
    bookOrder = {
      ...bookOrder,
      quantity: bookOrder.quantity + newQuantity,
    }
    userOrders[orderIndex] = bookOrder
    return userOrders
  } else {
    return [
      ...userOrders,
      {
        bookId,
        quantity: newQuantity,
      },
    ]
  }
}

export const cartReducer = (state: CartStateType = initialState, action: ActionType | any) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_BOOK_SUCCESS: {
      const userOrders = state.orders[action.userId] || []
      const updatedOrders = updateBookQuantity([...userOrders], action.bookId, 1)
      return {
        ...state,
        isLoading: false,
        orders: {
          ...state.orders,
          [action.userId]: updatedOrders,
        },
      }
    }
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case REMOVE_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: {
          ...state.orders,
          [action.userId]: state.orders[action.userId].filter((order) => order.bookId !== action.bookId),
        },
      }
    case REMOVE_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case UPDATE_BOOK_QUANTITY_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case UPDATE_BOOK_QUANTITY_SUCCESS: {
      const userOrders = state.orders[action.userId]
      const updatedOrders = updateBookQuantity([...userOrders], action.bookId, action.newQuantity)
      return {
        ...state,
        isLoading: false,
        orders: {
          ...state.orders,
          [action.userId]: updatedOrders,
        },
      }
    }
    case UPDATE_BOOK_QUANTITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
