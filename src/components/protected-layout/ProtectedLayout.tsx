import { Navigate, Outlet } from 'react-router-dom'
import TopNav from '../topNav'
import { useSelector } from 'react-redux'
import { isUserSignedIn } from '../../common/users/selectors/selectors'
import { Container, CssBaseline } from '@mui/material'

export const ProtectedLayout = () => {
  // const hasLoggedUser = useSelector(isUserSignedIn)
  const hasLoggedUser = true

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
