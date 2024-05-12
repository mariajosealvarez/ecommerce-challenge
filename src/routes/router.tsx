import { createBrowserRouter } from 'react-router-dom'
import { Error, Details, Home, Cart, SignIn, SignUp } from '../pages'
import ProtectedLayout from '../components/protected-layout'

export const router = createBrowserRouter([
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/books/:bookId',
        element: <Details />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])
