import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, CssBaseline } from '@mui/material'

import TopNav from '../topNav'
import { isUserSignedIn } from '../../state/users/selectors'

export const ProtectedLayout: FC = () => {
  const hasLoggedUser = useSelector(isUserSignedIn)

  if (!hasLoggedUser) {
    return <Navigate to='/signin'></Navigate>
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <TopNav />
        <Container sx={{ mt: '100px' }}>
          <Outlet />
        </Container>
      </Container>
    </>
  )
}
