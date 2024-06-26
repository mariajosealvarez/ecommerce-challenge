import { FC, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Avatar from '@mui/material/Avatar'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SaveIcon from '@mui/icons-material/Save'
import Alert from '@mui/material/Alert'

import { UsersStateType } from '../../state/users/redux'
import { generateRandomId } from './utils/generateRandomId'

type Props = {
  users: UsersStateType
  signUpUser: (user: User) => void
}

export const SignUp: FC<Props> = ({ users, signUpUser }) => {
  const { isLoading, signUpError } = users
  const [newUser, setNewUser] = useState<User>({
    id: generateRandomId(),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setNewUser({ ...newUser, [name]: value.trim() })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // TODO add form validations
    signUpUser(newUser)
  }

  const isSubmitDisabled = !newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password || isLoading

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <MenuBookIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                onChange={handleFieldChange}
                value={newUser.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
                onChange={handleFieldChange}
                value={newUser.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                onChange={handleFieldChange}
                value={newUser.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                onChange={handleFieldChange}
                value={newUser.password}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
            loadingPosition='start'
            startIcon={<SaveIcon />}
            disabled={isSubmitDisabled}
          >
            Sign Up
          </LoadingButton>
          {signUpError && <Alert severity='error'>{signUpError}</Alert>}
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link component={RouterLink} to='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
