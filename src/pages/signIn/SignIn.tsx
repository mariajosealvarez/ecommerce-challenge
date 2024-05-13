import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Alert from '@mui/material/Alert'
import SaveIcon from '@mui/icons-material/Save'

import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { UsersStateType } from '../../common/users/redux'

type Props = {
  users: UsersStateType
  signInUser: (email: string, password: string) => void
}

export const SignIn: FC<Props> = ({ users, signInUser }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const { isLoading, signedInUser, signInError } = users
  const isSubmitDisabled = !email || !password

  useEffect(() => {
    if (signedInUser) {
      navigate('/')
    }
  }, [navigate, signedInUser])

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    signInUser(email, password)
  }

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <MenuBookIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handlePasswordChange}
            value={password}
          />
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
            Sign In
          </LoadingButton>
          {signInError && <Alert severity='error'>{signInError}</Alert>}
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link component={RouterLink} to='/signup' variant='body2'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
