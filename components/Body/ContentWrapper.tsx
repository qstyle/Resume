import React, { ReactNode } from 'react'
import { Box }  from '@chakra-ui/react'
 
interface Props {
  children : ReactNode
}

export const ContentWrapper: React.FC<Props> = ({ children }) => (
  <Box
    p='2'
    borderWidth='2px'
    borderRadius='sm'
  >
    {children}
  </Box>
) 