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

export type CartStateType = {
  isLoading: boolean
  orders: Cart
  error: string
}

const initialState: CartStateType = {
  isLoading: false,
  orders: {},
  error: '',
}

const getOrderIndexByBook = (orders: BookOrder[], bookId: string): number =>
  orders.findIndex((order) => order.book.id === bookId)

const addBook = (userOrders: BookOrder[], book: Book): BookOrder[] => {
  const orderIndex = getOrderIndexByBook(userOrders, book.id)
  if (orderIndex >= 0) {
    // the user already have this book in their cart
    let bookOrder = userOrders[orderIndex]
    bookOrder = {
      ...bookOrder,
      quantity: bookOrder.quantity + 1,
    }
    userOrders[orderIndex] = bookOrder
    return userOrders
  } else {
    const { id, title, imageLinks, listPrice } = book
    // I'm saving the diplicated book data just to have them for the Cart page,
    // in a real case, we receive the cart from an API and incase the book price change, the
    // cart is going to reflect that change
    return [
      ...userOrders,
      {
        book: {
          id,
          title,
          imageLinks,
          listPrice,
        },
        quantity: 1,
      },
    ]
  }
}

const updateBookQuantity = (userOrders: BookOrder[], bookId: string, newQuantity: number): BookOrder[] => {
  const orderIndex = getOrderIndexByBook(userOrders, bookId)
  let bookOrder = userOrders[orderIndex]
  bookOrder = {
    ...bookOrder,
    quantity: bookOrder.quantity + newQuantity,
  }
  userOrders[orderIndex] = bookOrder
  return userOrders
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
      const updatedOrders = addBook([...userOrders], action.book)
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
          [action.userId]: state.orders[action.userId].filter((order) => order.book.id !== action.bookId),
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
