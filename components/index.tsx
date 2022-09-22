import React from 'react'
import { Box } from '@chakra-ui/react'  
 
import { Header } from './Header'
import { Body } from './Body'

export const MainLayout: React.FC = ( ) => {
  
  return (
    <Box p='5px' maxW='1600px'>
      <Header />
      <Body />
    </Box>
  )
}