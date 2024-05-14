import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Box, Button, Container, CssBaseline } from '@mui/material'

export const Error: FC = () => (
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
      <Alert severity='error'>PAGE NOT FOUND</Alert>
      <Button component={Link} to='/' variant='contained' sx={{ marginTop: 4 }}>
        Back to Home
      </Button>
    </Box>
  </Container>
)
