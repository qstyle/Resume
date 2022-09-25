import React, { ReactNode } from 'react'
import { Box }  from '@chakra-ui/react'
 
interface Props {
  children : ReactNode
}

export const ContentWrapper: React.FC<Props> = ({children}) => (
  <Box
    borderWidth='2px'
    borderRadius='sm'
    p='2'
  >
    {children}
  </Box>
) 