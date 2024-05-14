import { FC } from 'react'
import { Typography } from '@mui/material'

type Props = {
  authors: string[] | undefined
}

export const Authors: FC<Props> = ({ authors }) => (
  <Typography
    color='text.secondary'
    sx={{
      mb: 1.5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
    }}
  >
    {authors ? authors.join(', ') : '---'}
  </Typography>
)
