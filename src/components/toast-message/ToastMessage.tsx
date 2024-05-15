import { Alert, Snackbar } from '@mui/material'
import { FC } from 'react'

type Props = {
  message: string
  isOpen: boolean
  onClose: () => void
}

export const ToastMessage: FC<Props> = ({ message, isOpen, onClose }) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      message={message}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity='success' variant='filled' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
