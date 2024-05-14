import { FC } from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
  currency: string
  amount: number
}

export const Price: FC<Props> = ({ currency, amount }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <Typography variant='caption'>{currency}</Typography>
    <Typography variant='body1' sx={{ marginLeft: 1 }}>
      {amount}
    </Typography>
  </Box>
)
