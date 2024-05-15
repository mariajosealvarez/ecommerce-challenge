import { useState } from 'react'

export const useToastMessage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('Something went wrong...')

  const handleCloseSnackBar = () => {
    setIsOpen(false)
  }

  const displaySnackBar = (message: string) => {
    setMessage(message)
    setIsOpen(true)
  }

  return { isOpen, message, handleCloseSnackBar, displaySnackBar }
}
