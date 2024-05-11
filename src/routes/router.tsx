import { createBrowserRouter } from 'react-router-dom'
import { Error, Details, Home, Cart } from '../pages'
import Layout from '../components/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
